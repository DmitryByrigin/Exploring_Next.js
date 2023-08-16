import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT NEXT.JS',
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-5">
      {children}
      <ul className="mt-3">
        <li>
          <Link href="/about/contacts">
            <h3>
              <u>Contacts</u>
            </h3>
          </Link>
        </li>
        <li>
          <Link href="/about/team">
            <h3>
              <u>Team</u>
            </h3>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default AboutLayout;
