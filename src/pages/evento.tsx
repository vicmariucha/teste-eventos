import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export default function Evento() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-08-15T17:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("O evento já começou!");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setCountdown(`Faltam ${days} dias, ${hours} horas e ${minutes} minutos para o evento.`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Detalhes do Evento | Dev Music Festival</title>
        <meta name="description" content="Veja as atrações, data e local do Dev Music Festival 2025" />
      </Head>

      <div className="bg-gradient-gray-200 text-purple-600 py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl dark:text-purple-700 font-extrabold mb-8">DEV MUSIC FESTIVAL 2025</h1>

          <div className="space-y-4 text-lg text-purple-900 dark:text-white mb-6 text-left md:text-center">
            <div className="flex items-center gap-3 justify-center">
              <Calendar className="text-pink-400 dark:text-pink-700" />
              <span><strong>15 agosto 2025</strong></span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Clock className="text-pink-400 dark:text-pink-700" />
              <span>17:00</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="text-pink-400 dark:text-pink-700" />
              <span>Arena TechMusic – São Paulo - SP</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <DollarSign className="text-pink-400 dark:text-pink-700" />
              <span>R$ 80 - 440</span>
            </div>
          </div>

          <p className="mb-10 font-medium text-purple-900 dark:text-white">{countdown}</p>

          <Link
            href="/compra"
            className="inline-block bg-pink-500 hover:bg-pink-600 dark:bg-purple-900 transition text-lg text-white font-bold px-10 py-4 rounded-xl shadow-lg"
          >
            COMPRAR INGRESSO
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/images/show1.png", alt: "Show DJ Code" },
            { src: "/images/djcode.png", alt: "DJ Code se apresentando" },
            { src: "/images/show2.png", alt: "Banda StackOverflow ao vivo" },
            { src: "/images/stackoverflow.png", alt: "StackOverflow no palco" },
            { src: "/images/show3.png", alt: "The Bug Fixers em ação" },
            { src: "/images/bugfixers.png", alt: "Bug Fixers em apresentação" },
          ].map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="rounded-xl shadow-lg object-cover  h-60 w-full dark:contrast-50 transition-transform duration-300 hover:scale-105"
              />
          ))}
        </div>
      </div>
    </Layout>
  );
}
