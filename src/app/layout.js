import Providers from "./providers";
import Menu from "@/components/layout/Menu";
import "./globals.css";

export const metadata = {
  title: "Next Auth Template",
  description: "Next Auth with Google provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}