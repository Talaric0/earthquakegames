import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Would You Rather - Game | Earthquake Games",
};

export default function WouldYouRather() {
  return (
    <Container>
      <h1 className="mb-1 text-[2rem] font-bold tracking-[0.5px]">
        Would You Rather - Game
      </h1>
      <p className="mb-12 text-muted-foreground">The ultimate choice game</p>

      <p className="text-[color:var(--muted-foreground)]">
        Vote on hypothetical dilemmas and see what the world thinks. Play solo
        or host multiplayer party games with friends.
      </p>

      <p className="mt-6">
        <a href="https://apps.apple.com/app/would-you-rather-game/id6762091119">
          Download on the App Store
        </a>
      </p>

      <p className="mt-9 text-[0.9rem]">
        <Link href="/would-you-rather/privacy/">Privacy Policy</Link>
        {" · "}
        <Link href="/would-you-rather/terms/">Terms of Service</Link>
      </p>

      <footer className="mt-16 border-t border-border pt-6 text-[0.85rem] text-muted-foreground">
        <p>
          <Link href="/">← Earthquake Games</Link>
        </p>
      </footer>
    </Container>
  );
}
