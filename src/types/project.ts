export type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_backend_url: string | null;
  github_frontend_url: string | null;
  live_url: string | null;
  start_date: string | null;
  end_date: string | null;
  status: string;
};

export type ProjectData = Omit<Project, "id">;
