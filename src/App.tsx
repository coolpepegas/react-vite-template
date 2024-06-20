import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import TailwindIndicator from "@/components/tailwind-indicator";

import { siteConfig } from "./config/site";

function App() {
  return (
    <main className="container my-4 max-w-screen-2xl">
      <section className="grid gap-6 py-6 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {siteConfig.name} <br className="hidden sm:inline" />
          build by Cool Pepegas.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={cn(buttonVariants({ variant: "outline" }), "max-w-48")}
        >
          GitHub
        </a>
      </section>

      <TailwindIndicator />
    </main>
  );
}

export default App;
