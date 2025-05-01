import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>Dev Music Festival 2025</title>
        <meta name="description" content="Página oficial do Dev Music Festival 2025" />
      </Head>

      <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-purple-700 mt-7 mb-8">DEV MUSIC FESTIVAL 2025</h1>

        <p className="mb-7 text-lg text-gray-700 dark:text-white leading-relaxed">
          Prepare-se para o maior encontro entre código e batidas! O Dev Music Festival 2025 celebra a fusão entre a criatividade da música e a inovação da tecnologia. Uma experiência única com shows incríveis, palestras inspiradoras e muita conexão entre desenvolvedores, artistas e entusiastas do futuro.
        </p>


        <Link
          href="/evento"
          className="inline-block bg-purple-600 dark:bg-purple-900 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 dark:hover:bg-purple-800 transition"
        >
          Ver detalhes
        </Link>
      </div>

      <div className="w-screen relative overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Público animado no festival"
          width={1900}
          height={600}
          className="w-1900 h-[600px] object-cover object-center dark:contrast-50"
          priority
        />
      </div>
    </Layout>
  );
}
