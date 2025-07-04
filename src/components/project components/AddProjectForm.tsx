'use client';

import { useState } from "react";
import { createProject } from "@/lib/api/projectApi";
import { ProjectData } from "@/types/project";

type Props = {
  onProjectAdded: () => Promise<void>;
};

export default function AddProjectForm({ onProjectAdded }: Props) {
  const [form, setForm] = useState<ProjectData>({
    title: "",
    description: "",
    tech_stack: "",
    github_backend_url: "",
    github_frontend_url: "",
    live_url: "",
    start_date: "",
    end_date: "",
    status: "In Progress",
  });

  const [errors, setErrors] = useState<{ [key: string]: string | string[] }>({});
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      tech_stack: "",
      github_backend_url: "",
      github_frontend_url: "",
      live_url: "",
      start_date: "",
      end_date: "",
      status: "In Progress",
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "status") {
      setForm((prev) => ({
        ...prev,
        status: value,
        end_date: value === "Completed" ? prev.end_date : ""
      }));
      if (value !== "Completed") {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.end_date;
          return newErrors;
        });
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.description.trim()) newErrors.description = "Description is required.";
    if (!form.tech_stack.trim()) newErrors.tech_stack = "Tech Stack is required.";
    if (form.status === "Completed") {
      if (!form.end_date) {
        newErrors.end_date = "End date is required for completed projects.";
      } else if (form.start_date && form.end_date < form.start_date) {
        newErrors.end_date = "End date cannot be before start date.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    try {
      await createProject({
        ...form,
        end_date: form.status === "Completed"
          ? (form.end_date || null)
          : null
      });
      await onProjectAdded();
      resetForm();
      alert("Project added successfully.");
    } catch (err: unknown) {
      console.error("Add project failed:", err);
      if (typeof err === "object" && err !== null &&
        ("start_date" in err || "end_date" in err || "title" in err || "non_field_errors" in err)) {
        setErrors(err as { [key: string]: string[] });
      } else {
        alert("Failed to add project.");
      }
    } finally {
      setSaving(false);
    }
  };

  const renderError = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) return value.join(" ");
    if (typeof value === "string") return value;
    return "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">🚀 Add New Project</h2>

      {errors.non_field_errors && (
        <p className="text-red-400 text-sm text-center">
          {renderError(errors.non_field_errors)}
        </p>
      )}

      <div>
        <label>Title</label>
        <input type="text" name="title" value={form.title || ""} onChange={handleChange} />
        {errors.title && <p className="text-red-400 text-sm mt-1">{renderError(errors.title)}</p>}
      </div>

      <div>
        <label>Tech Stack</label>
        <input type="text" name="tech_stack" value={form.tech_stack || ""} onChange={handleChange} />
        {errors.tech_stack && <p className="text-red-400 text-sm mt-1">{renderError(errors.tech_stack)}</p>}
      </div>

      <div>
        <label>GitHub Backend URL</label>
        <input type="url" name="github_backend_url" value={form.github_backend_url || ""} onChange={handleChange} />
      </div>

      <div>
        <label>GitHub Frontend URL</label>
        <input type="url" name="github_frontend_url" value={form.github_frontend_url || ""} onChange={handleChange} />
      </div>

      <div>
        <label>Live URL</label>
        <input type="url" name="live_url" value={form.live_url || ""} onChange={handleChange} />
      </div>

      <div className="flex space-x-2">
        <div className="flex-1">
          <label>Start Date</label>
          <input type="date" name="start_date" value={form.start_date || ""} onChange={handleChange} />
          {errors.start_date && <p className="text-red-400 text-sm mt-1">{renderError(errors.start_date)}</p>}
        </div>

        {form.status === "Completed" && (
          <div className="flex-1">
            <label>End Date</label>
            <input type="date" name="end_date" value={form.end_date || ""} onChange={handleChange} />
            {errors.end_date && <p className="text-red-400 text-sm mt-1">{renderError(errors.end_date)}</p>}
          </div>
        )}
      </div>

      <div>
        <label>Status</label>
        <select name="status" value={form.status || ""} onChange={handleChange}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Paused">Paused</option>
        </select>
      </div>

      <div>
        <label>Description</label>
        <textarea name="description" rows={4} value={form.description || ""} onChange={handleChange}></textarea>
        {errors.description && <p className="text-red-400 text-sm mt-1">{renderError(errors.description)}</p>}
      </div>

      <div className="flex justify-between mt-8">
        <button type="button" onClick={resetForm} disabled={saving}>Cancel</button>
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}
