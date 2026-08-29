import "./globals.css";

export const metadata = {
  title: "Financial Planner",
  description: "Plan your finances with clarity and confidence."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
