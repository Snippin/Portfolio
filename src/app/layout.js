import "./globals.css"

const basePath = process.env.BASE_PATH;

export const metadata =
{
  title: "Portfolio",
  description: "Contains a list of projects that I have done and other things.",
};

export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @font-face
            {
              font-family: "Montserrat";
              src: url("${basePath}/fonts/montserrat.ttf") format("truetype");
              font-style: normal;
              font-weight: 100-900;
            }

            @font-face
            {
              font-family: "Montserrat";
              src: url("${basePath}/fonts/montserrat_italic.ttf") format("truetype");
              font-style: italic;
              font-weight: 100-900;
            }
        `}
        </style>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
