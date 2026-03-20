import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import GitHubProjects from "@/components/GitHubProjects";
import TechStack from "@/components/TechStack";
import CompetitorBench from "@/components/CompetitorBench";
import LiveDemo from "@/components/LiveDemo";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AiChat from "@/components/AiChat";
import { fetchGitHubProfile, fetchGitHubRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  let profile: Awaited<ReturnType<typeof fetchGitHubProfile>>;
  let repos: Awaited<ReturnType<typeof fetchGitHubRepos>>;

  try {
    [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
    ]);
  } catch {
    profile = {
      login: "irtassedat",
      avatar_url: "https://github.com/irtassedat.png",
      html_url: "https://github.com/irtassedat",
      name: "Sedat Irtas",
      bio: "Passionate fullstack developer",
      public_repos: 46,
      followers: 10,
      following: 16,
    };
    repos = [];
  }

  return (
    <>
      <TechStack />
      <main className="relative z-10 min-h-screen bg-background">
        <Navbar />
        <Hero />
        <PainPoints />
        <LiveDemo />
        <CompetitorBench />
        <GitHubProjects repos={repos} profile={profile} />
        <About />
        <Contact />
        <Footer />
        <AiChat />
      </main>
    </>
  );
}
