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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 border border-cyan-400 rounded-xl text-slate-100 
        font-semibold shadow-lg shadow-cyan-400/20 backdrop-blur-lg
        bg-cyan-400/5 hover:bg-cyan-400/10 transition-all"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-200">
        🚀 Add New Project
      </h2>

      {errors.non_field_errors && (
        <p className="text-red-400 text-sm text-center">
          {renderError(errors.non_field_errors)}
        </p>
      )}

      {[
        { name: "title", label: "Title", type: "text" },
        { name: "tech_stack", label: "Tech Stack", type: "text" },
        { name: "github_backend_url", label: "GitHub Backend URL", type: "url" },
        { name: "github_frontend_url", label: "GitHub Frontend URL", type: "url" },
        { name: "live_url", label: "Live URL", type: "url" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={(form as Record<string, string>)[field.name] || ""}
            onChange={handleChange}
            className={`mt-1 w-full border rounded-xl p-3 bg-transparent text-slate-100 
              ${errors[field.name] ? "border-red-500" : "border-cyan-400"}
              shadow-inner shadow-cyan-400/10
              hover:bg-cyan-200/10 hover:shadow-cyan-400/20
              focus:bg-cyan-300/10 focus:shadow-cyan-400/30
              outline-none transition-all`}
          />
          {errors[field.name] && (
            <p className="text-red-400 text-sm mt-1">
              {renderError(errors[field.name])}
            </p>
          )}
        </div>
      ))}

      <div className="flex space-x-2">
        <div className="flex-1">
          <label className="block text-sm font-semibold">Start Date</label>
          <input
            type="date"
            name="start_date"
            value={form.start_date || ""}
            onChange={handleChange}
            className={`mt-1 w-full border rounded-xl p-3 bg-transparent text-slate-100
              ${errors.start_date ? "border-red-500" : "border-cyan-400"}
              shadow-inner shadow-cyan-400/10
              hover:bg-cyan-200/10 hover:shadow-cyan-400/20
              focus:bg-cyan-300/10 focus:shadow-cyan-400/30
              outline-none transition-all`}
          />
          {errors.start_date && (
            <p className="text-red-400 text-sm mt-1">
              {renderError(errors.start_date)}
            </p>
          )}
        </div>

        {form.status === "Completed" && (
          <div className="flex-1">
            <label className="block text-sm font-semibold">End Date</label>
            <input
              type="date"
              name="end_date"
              value={form.end_date || ""}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-xl p-3 bg-transparent text-slate-100
                ${errors.end_date ? "border-red-500" : "border-cyan-400"}
                shadow-inner shadow-cyan-400/10
                hover:bg-cyan-200/10 hover:shadow-cyan-400/20
                focus:bg-cyan-300/10 focus:shadow-cyan-400/30
                outline-none transition-all`}
            />
            {errors.end_date && (
              <p className="text-red-400 text-sm mt-1">
                {renderError(errors.end_date)}
              </p>
            )}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold">Status</label>
        <select
          name="status"
          value={form.status || "In Progress"}
          onChange={handleChange}
          className="mt-1 w-full border border-cyan-400 rounded-xl p-3 bg-transparent 
            text-slate-100 shadow-inner shadow-cyan-400/10
            hover:bg-cyan-200/10 hover:shadow-cyan-400/20
            focus:bg-cyan-300/10 focus:shadow-cyan-400/30
            outline-none transition-all"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Paused">Paused</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold">Description</label>
        <textarea
          name="description"
          rows={4}
          value={form.description || ""}
          onChange={handleChange}
          className={`mt-1 w-full border rounded-xl p-3 bg-transparent text-slate-100 
            ${errors.description ? "border-red-500" : "border-cyan-400"}
            shadow-inner shadow-cyan-400/10
            hover:bg-cyan-200/10 hover:shadow-cyan-400/20
            focus:bg-cyan-300/10 focus:shadow-cyan-400/30
            outline-none transition-all`}
        />
        {errors.description && (
          <p className="text-red-400 text-sm mt-1">
            {renderError(errors.description)}
          </p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={resetForm}
          disabled={saving}
          className="border border-yellow-400 text-yellow-300 px-6 py-2 rounded-xl
            shadow-md shadow-yellow-400/20 bg-transparent
            hover:bg-yellow-200/10 hover:shadow-yellow-400/30
            transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="border border-cyan-400 text-cyan-300 px-6 py-2 rounded-xl
            shadow-md shadow-cyan-400/20 bg-transparent
            hover:bg-cyan-200/10 hover:shadow-cyan-400/30
            transition-all"
        >
          {saving ? "Saving..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}
