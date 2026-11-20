import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <main id="top" className="relative overflow-x-clip max-md:overflow-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 size-[900px] translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgb(179_32_28/0.2),transparent_65%)]"
      />
      <div className="relative mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-8">
        <TopBar />
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <About />
        <Contact />
      </div>
    </main>
  );
}
