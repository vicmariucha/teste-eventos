import React, { ReactNode } from "react";
import Link from "next/link";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div>
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            IngressoAPP
          </Link>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">{children}</main>
    </div>
  );
}
