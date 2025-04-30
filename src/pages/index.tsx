import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dev Music Festival 2025</title>
        <meta name="description" content="Página oficial do Dev Music Festival 2025" />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dev Music Festival 2025</h1>
        <Image
          src="/images/banner.png"
          alt="Público animado no festival"
          width={500}
          height={50}
          className="rounded shadow-md object-cover w-full transition-transform duration-300 hover:scale-90"
        />

        <p className="mb-6 text-gray-700">
          Um evento que une música e tecnologia como nunca antes!
        </p>
        <Link href="/evento" className="inline-block bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-700 transition"> 
          Ver detalhes
        </Link>
      </div>
    </Layout>
  );
}
