import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | Would You Rather - Game",
};

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="17 April 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        &quot;Would You Rather - Game&quot; mobile application (the
        &quot;App&quot;) published by Earthquake Games (&quot;we&quot;,
        &quot;our&quot;, or &quot;us&quot;). By downloading or using the App,
        you agree to these Terms.
      </p>

      <h3>1. Description of Service</h3>
      <p>
        The App is a social question game where users choose between two
        hypothetical scenarios and see how the community voted. The App offers
        a free tier with advertisements and optional paid tiers that unlock
        additional content and features.
      </p>

      <h3>2. Eligibility</h3>
      <p>
        The App is available to users of all ages for its standard content.
        The adult content tier is restricted to users aged 18 and over and
        requires age verification within the App. By purchasing the adult
        content tier, you confirm that you are at least 18 years old.
      </p>

      <h3>3. User Accounts</h3>
      <p>
        The App uses anonymous authentication. No registration, email, or
        password is required. A unique anonymous identifier is created
        automatically when you first use the App. You are responsible for
        maintaining access to your device, as we cannot recover anonymous
        accounts.
      </p>

      <h3>4. In-App Purchases</h3>
      <p>
        The App offers non-consumable in-app purchases processed by Apple
        through the App Store. All purchases are one-time payments — there are
        no subscriptions or recurring charges. Prices are displayed in your
        local currency before purchase.
      </p>
      <p>
        Refunds are handled by Apple in accordance with their refund policy. We
        do not process payments directly and cannot issue refunds. To request a
        refund, visit{" "}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
      </p>
      <p>
        You can restore previously purchased content at any time using the
        &quot;Restore Purchases&quot; option in the App&apos;s Settings.
      </p>

      <h3>5. Acceptable Use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Attempt to manipulate vote counts or game results</li>
        <li>Reverse-engineer, decompile, or disassemble the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Interfere with or disrupt the App&apos;s servers or networks</li>
        <li>Create multiple accounts to circumvent free-tier limits</li>
      </ul>

      <h3>6. Intellectual Property</h3>
      <p>
        The App, including its design, code, questions, and branding, is the
        property of Earthquake Games. You may not reproduce, distribute, or
        create derivative works from the App&apos;s content without our
        written permission.
      </p>

      <h3>7. Content Disclaimer</h3>
      <p>
        The questions in the App are hypothetical and intended for
        entertainment purposes only. They do not constitute advice of any
        kind. The adult content tier contains mature themes that some users
        may find offensive. Access to this content is entirely optional and
        gated behind age verification.
      </p>

      <h3>8. Multiplayer</h3>
      <p>
        The App includes a multiplayer party mode where users can play with
        others in real time. You are responsible for your conduct during
        multiplayer sessions. We reserve the right to remove or restrict
        access for users who abuse the multiplayer system.
      </p>

      <h3>9. Availability and Modifications</h3>
      <p>
        We may modify, suspend, or discontinue any part of the App at any time
        without prior notice. We do not guarantee uninterrupted access to the
        App. We may update these Terms from time to time, and continued use of
        the App constitutes acceptance of updated Terms.
      </p>

      <h3>10. Limitation of Liability</h3>
      <p>
        The App is provided &quot;as is&quot; without warranties of any kind,
        either express or implied. To the maximum extent permitted by law,
        Earthquake Games shall not be liable for any indirect, incidental,
        special, or consequential damages arising from your use of the App.
      </p>

      <h3>11. Governing Law</h3>
      <p>
        These Terms are governed by and construed in accordance with the laws
        of the Federative Republic of Brazil, including the Brazilian Consumer
        Protection Code (Lei n.º 8.078/1990) and the Brazilian Internet
        Framework (Marco Civil da Internet, Lei n.º 12.965/2014). Any disputes
        arising from these Terms shall be subject to the jurisdiction of the
        courts of the State of the user&apos;s domicile in Brazil, or, for
        users outside Brazil, the courts of Rio de Janeiro, RJ, Brazil.
      </p>

      <h3>12. Contact Us</h3>
      <p>If you have questions about these Terms, contact us at:</p>
      <p>
        <a href="mailto:suporte@earthquakedigital.com.br">
          suporte@earthquakedigital.com.br
        </a>
      </p>
    </LegalLayout>
  );
}
