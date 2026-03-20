export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_USERNAME = "irtassedat";

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch GitHub profile");
  return res.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch GitHub repos");
  const repos: GitHubRepo[] = await res.json();

  // Filter out fork/config repos, prioritize meaningful projects
  const excluded = ["irtassedat", "FSWEB-", "fsweb-", "FSWeb-", "Java-s"];
  return repos.filter(
    (repo) => !excluded.some((prefix) => repo.name.startsWith(prefix))
  );
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Java: "#b07219",
    Python: "#3572A5",
    PHP: "#4F5D95",
    Vue: "#41b883",
    HTML: "#e34c26",
    CSS: "#563d7c",
  };
  return colors[language || ""] || "#6b7280";
}
