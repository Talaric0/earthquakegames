import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <h1 className="mb-2 text-[2rem] font-bold tracking-[0.5px]">{title}</h1>
      <p className="mb-9 text-[0.85rem] text-muted-foreground">
        Last updated: {lastUpdated}
      </p>
      <div className="legal-content space-y-4 text-[color:var(--muted-foreground)]">
        {children}
      </div>
      <Link
        href="/would-you-rather/"
        className="mt-9 inline-block text-[0.9rem]"
      >
        ← Back to Would You Rather
      </Link>
    </Container>
  );
}
