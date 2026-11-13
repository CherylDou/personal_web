"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Work", href: "/works" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/profile" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link className="site-brand" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          <span className="site-mark" aria-hidden="true">✳</span>
          Cheryl Dou
        </Link>
        <nav aria-label="Main navigation">
          <ul className="site-navigation">
            {pages.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={pathname === href ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
