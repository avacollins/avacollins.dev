import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC works",
  description: `Screen shots and descriptions of work done for large scale enterprises like Amazon and Expedia, 
                small startups like Linden Lab and Porch and Seattle local companies Real Networks and Nordstrom.`,
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
