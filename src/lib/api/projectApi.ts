// lib/projectApi.ts
import { API_BASE_URL } from "@/lib/apiBase";
import { Project, ProjectData } from "@/types/project";

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE_URL}/projects/`);
  if (!res.ok) throw new Error("Failed to fetch Projects Data");
  return res.json();
}

export async function createProject(data: ProjectData): Promise<Project> {
  const res = await fetch(`${API_BASE_URL}/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Create project failed:", text);
    throw new Error("Failed to create project");
  }

  return res.json();
}

export async function updateProject(id: number, data: ProjectData): Promise<Project> {
  const res = await fetch(`${API_BASE_URL}/projects/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Update project failed:", text);
    throw new Error("Failed to update project");
  }

  return res.json();
}

export async function deleteProject(id: number): Promise<boolean> {
  const res = await fetch(`${API_BASE_URL}/projects/${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Delete project failed:", text);
    throw new Error("Failed to delete project");
  }

  return true;
}
