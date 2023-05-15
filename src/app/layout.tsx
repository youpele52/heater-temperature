import "./globals.css";
import "./page.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heater Temperature",
  description:
    "This web app displays the current target temperature of a heater, as well as the minimum and maximum temperatures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
