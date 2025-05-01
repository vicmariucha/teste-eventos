import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, DollarSign, Music2 } from "lucide-react";
import { useEffect, useState } from "react";
import ModalImagem from "@/components/ModalImagem";

export default function Evento() {
  const [countdown, setCountdown] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/show1.png", alt: "Show DJ Code na virada de ano" },
    { src: "/images/djcode.png", alt: "DJ Code no palco do Dev Music Festival 2024" },
    { src: "/images/show2.png", alt: "DJ Code no Rock in Bug 2022" },
    { src: "/images/stackoverflow.png", alt: "StackOverflow no palco" },
    { src: "/images/show3.png", alt: "Vocalista do The Bug Fixers em ação" },
    { src: "/images/bugfixers.png", alt: "Bug Fixers em apresentação" },
  ];

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

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Layout>
      <Head>
        <title>Detalhes do Evento | Dev Music Festival</title>
        <meta name="description" content="Veja as atrações, data e local do Dev Music Festival 2025" />
      </Head>

      <div className="bg-gradient-gray-200 text-purple-600 py-16 px-4 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">DEV MUSIC FESTIVAL 2025</h1>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="space-y-4 text-lg text-purple-900 dark:text-white">
            <div className="flex items-center gap-3">
              <Calendar className="text-pink-400 dark:text-pink-700" />
              <span><strong>15 agosto 2025</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-pink-400 dark:text-pink-700" />
              <span>17:00</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-pink-400 dark:text-pink-700" />
              <span>Arena TechMusic – São Paulo - SP</span>
            </div>
            <div className="flex items-center gap-3">
              <Music2 className="text-pink-400 dark:text-pink-700" />
              <span>Atrações: DJ Code, Banda StackOverflow e The Bug Fixers</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-pink-400 dark:text-pink-700" />
              <span>R$ 80 - 440</span>
            </div>

            <p className="mb-10 font-medium text-purple-900 dark:text-white">{countdown}</p>

            <Link
              href="/compra"
              className="inline-block bg-pink-500 hover:bg-pink-600 transition text-lg text-white font-bold px-10 py-4 rounded-xl shadow-lg"
            >
              COMPRAR INGRESSO
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/images/banner2.png"
              alt="Banner do Evento"
              width={500}
              height={500}
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <div key={i} className="cursor-pointer">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover h-60 w-full dark:contrast-50 transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(i)}
              />
            </div>
          ))}
        </div>
      </div>

      <ModalImagem
        isOpen={isModalOpen}
        image={images[currentIndex]}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </Layout>
  );
}
