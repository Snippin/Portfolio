import "./globals.css"

export const metadata =
{
  title: "Portfolio",
  description: "Contains a list of projects that I have done and other things.",
};

export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
