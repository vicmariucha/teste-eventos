import React, { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-tabler/brand-github";
import xIcon from "@iconify/icons-tabler/brand-x";
import mailIcon from "@iconify/icons-tabler/mail";
import ThemeToggle from "./ThemeToggle"; 

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <header className="bg-purple-500 dark:bg-purple-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            Eventos Dev
          </Link>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow w-full">{children}</main>

      <footer className="bg-purple-500 dark:bg-purple-900 text-white p-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-center items-center w-full">
          <p>
            &copy; 2025 Eventos Dev. Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/victoria-mariucha/"
              className="underline font-medium hover:text-pink-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vic Mariucha
            </a>
          </p>
          <div className="flex gap-4 mx-4">
            <a href="https://github.com/vicmariucha" target="_blank" aria-label="GitHub">
              <Icon icon={githubIcon} className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://x.com/notifications" target="_blank" aria-label="X/Twitter">
              <Icon icon={xIcon} className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
            <a href="mailto:vicmariucha@gmail.com" aria-label="Email">
              <Icon icon={mailIcon} className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
