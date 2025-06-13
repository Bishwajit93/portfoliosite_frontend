const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!apiUrl) {
  throw new Error("Missing backend URL. Set NEXT_PUBLIC_BACKEND_URL in .env.local or Vercel env.");
}

type ProjectData = {
  title: string;
  description: string;
  techStack: string;
};

export async function fetchProjects() {
  const res = await fetch(`${apiUrl}/projects/`);
  if (!res.ok) throw new Error("Failed to fetch Projects Data");
  return res.json();
}

export async function createProject(data: ProjectData) {
  const res = await fetch(`${apiUrl}/projects/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      tech_stack: data.techStack,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Create project failed:", text);
    throw new Error("Failed to create project");
  }

  return res.json();
}


export async function updateProject(
  id: number,
  data: { title: string; description: string; techStack: string }
) {
  const res = await fetch(`${apiUrl}/projects/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      tech_stack: data.techStack,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Update project failed:", text);
    throw new Error("Failed to update project");
  }

  return res.json();
}



export async function deleteProject(id: number) {
  const res = await fetch(`${apiUrl}/projects/${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Delete project failed:", text);
    throw new Error("Failed to delete project");
  }

  return true;
}
