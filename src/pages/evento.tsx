import Layout from "@/components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Evento() {
  return (
    <Layout>
      <Head>
        <title>Detalhes do Evento | Dev Music Festival</title>
        <meta name="description" content="Veja as atrações, data e local do Dev Music Festival 2025" />
      </Head>

      <div>
        <h1 className="text-3x1 font-bold mb-4">Dev Music Festival 2025</h1>
        <p className="mb-6 text-gray-700">
          Dia 15 de agosto de 2025<br></br>
          Arena techMusic, São Paulo - SP<br></br>
          Atrações: DJ Code, Banda StackOverflow, The Bug Fixers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Image src="/images/show1.png" alt="Show DJ Code" width={400} height={50} className="rounded shadow-md object-cover h-48 w-full transition-transform duration-300 hover:scale-105"></Image>
          <Image src="/images/show2.png" alt="Banda StackOverflow ao vivo" width={400} height={50} className="rounded shadow-md object-cover h-48 w-full transition-transform duration-300 hover:scale-105"></Image>
          <Image src="/images/show3.png" alt="The Bug Fixers em ação" width={400} height={50} className="rounded shadow-md object-cover h-48 w-full transition-transform duration-300 hover:scale-105"></Image>
        </div>

        <Link href="/compra" className="inline-block bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-700 transition"> 
          Comprar ingressos
        </Link>
      </div>
    </Layout>
  );
}
