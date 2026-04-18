import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-dvh w-full flex-col overflow-hidden">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.12}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[140%] skew-y-[-6deg]"
        )}
      />
      <Container className="relative z-10 flex flex-1 flex-col">
        <header className="mb-12">
          <h1 className="mb-1 text-[2.25rem] font-bold tracking-[0.5px]">
            <AuroraText
              colors={["#4b8eff", "#adc6ff", "#7aa7ff", "#4b8eff"]}
              speed={0.8}
            >
              Earthquake Games
            </AuroraText>
          </h1>
          <p className="text-muted-foreground">Mobile games studio</p>
        </header>

        <section className="mb-12">
          <Link
            href="/would-you-rather/"
            className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 no-underline transition-all duration-300 hover:border-primary hover:shadow-[0_0_0_1px_var(--primary),0_8px_32px_-12px_rgba(75,142,255,0.4)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <h2 className="mb-2 text-[1.25rem] font-semibold text-foreground">
                Would You Rather — Game
              </h2>
              <p className="text-[0.9rem] text-muted-foreground">
                The ultimate choice game. Vote on dilemmas and see what the
                world thinks.
              </p>
            </div>
          </Link>
        </section>

        <footer className="mt-auto border-t border-border pt-6 text-[0.85rem] text-muted-foreground">
          <p>&copy; 2026 Earthquake Games. All rights reserved.</p>
          <p>
            <a href="mailto:suporte@earthquakedigital.com.br">Contact</a>
          </p>
        </footer>
      </Container>
    </main>
  );
}
