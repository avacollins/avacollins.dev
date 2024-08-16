import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Layout",
  description: "Portfolio and contact information for developer Ava Collins.",
};

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>{children}</section>
  );
}