import Navigation from "./components/Navigation";
import "./global.css";

export const metadata = {
  title: {
    default: "Cheryl Dou — Applied AI Engineer",
    template: "%s · Cheryl Dou",
  },
  description:
    "Cheryl Dou builds applied AI tools for online shopping and the teams behind it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main className="site-container" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
