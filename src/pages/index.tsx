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
          width={200}
          height={100}
          className="w-full rounded shadow-md mb-5"
        />

        <p className="mb-6 text-gray-700">
          Um evento que une música e tecnologia como nunca antes!
        </p>
        <Link href="/evento" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"> 
          Ver detalhes
        </Link>
      </div>
    </Layout>
  );
}
