import "./globals.css";

export const metadata = {
  title: "Financial Planner",
  description: "Financial Planner"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
