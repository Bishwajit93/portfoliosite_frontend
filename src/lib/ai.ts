const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchProjects() {
  if (!apiUrl) throw new Error("Missing backend URL");

  const res = await fetch(`${apiUrl}/projects/`);
  if (!res.ok) throw new Error("Failed to fetch Projects Data");

  return res.json();
}
