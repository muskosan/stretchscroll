import "./globals.css";

export const metadata = {
  title: "SCROLL SQUISH",
  description: "Nextjs Gsap Scroll Math",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
