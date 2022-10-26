import type { NextPage } from "next";
import Head from "next/head";
import { Button, Heading } from "@chakra-ui/react";
import {
  ArrowRight,
  CertificateIcon,
  FastIcon,
  PriceIcon,
} from "../components/landing-page/icons";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gesturin</title>
        <meta
          name="description"
          content="Temukan interpreter bahasa isyarat untuk membuat konten videomu lebih aksesibel bagi kalangan yang lebih luas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="mx-auto container p-4">
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:p-6">
              <Heading as="h1" size="3xl">
                Gesturin
              </Heading>
              <p className="text-lg mt-4">
                Temukan interpreter bahasa isyarat untuk membuat konten videomu
                lebih aksesibel bagi kalangan yang lebih luas
              </p>
              <div className="w-24 mt-4">
                <a href="#section2">
                  <Button size="lg" colorScheme="teal">
                    Lebih Lanjut
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 aspect-video rounded-xl">
              <Image
                src="/landing/hero.png"
                alt="hero image"
                layout="fill"
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="py-36" id="section2">
            <Heading as="h2" size="xl" textAlign="center" marginTop="8">
              Mengapa Gesturin?
            </Heading>
            <div className="flex flex-col md:flex-row justify-around gap-8 mt-8 text-center max-w-screen-md mx-auto">
              <div className="flex flex-col items-center">
                <CertificateIcon />
                <div className="w-36">
                  Semua interpreter telah bersertifikasi
                </div>
              </div>
              <div className="flex flex-col items-center">
                <PriceIcon />
                <div className="w-36">Harga Terjangkau</div>
              </div>
              <div className="flex flex-col items-center">
                <FastIcon />
                <div className="w-36">Proses yang mudah dan cepat</div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <Heading as="h2" size="xl" textAlign="center" marginTop="8">
              Langkah-langkah
            </Heading>
            <div className="text-lg text-center mt-6">
              Langkah ini semudah kamu membalikkan telapak tangan
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 max-w-screen-xl mx-auto gap-6">
              <LangkahCard>Unggah video yang Ingin dterjemahkan</LangkahCard>
              <LangkahCard>
                Tunggu video diterjemahkan oleh Juru Bahasa Isyarat
              </LangkahCard>
              <LangkahCard>
                Video hasil terjemahan sudah dapat diakses
              </LangkahCard>
              <LangkahCard bg="#4F5261" hasArrow={false}>
                Tonton atau unduh video hasil terjemahannya
              </LangkahCard>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#319795] py-24 text-white text-center p-4">
        <Heading as="h2" size="xl">
          Bergabung menjadi interpreter
        </Heading>
        <div className="text-lg mt-6 text-gray-100">
          Kamu adalah juru bahasa isyarat dan ingin bergabung dengan platform
          ini?
        </div>
        <Button marginTop="8" size="lg" className="text-gray-700">
          Bergabung
        </Button>
      </div>

      <div className="mx-auto container max-w-screen-xl flex flex-col lg:flex-row p-4 gap-8 my-24">
        <div className="w-full lg:w-1/2 rounded-xl">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div>
          <p className="text-lg">
            Video tutorial memasak kare ayam yang sudah disertai dengan bahasa
            isyarat
          </p>
          <Heading as="h2" size="xl" marginTop="8">
            Ingin mendapatkan video serupa?
          </Heading>
          <Link href="/login">
            <a>
              <Button colorScheme="teal" marginTop="8" size="lg">
                Masuk
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

interface LangkahCardProps {
  bg?: string;
  hasArrow?: boolean;
  children: React.ReactNode;
}

const LangkahCard: React.FC<LangkahCardProps> = ({
  children,
  hasArrow = true,
  bg = "#232532",
}) => {
  return (
    <div
      className="w-full h-36 flex text-white p-6 rounded-xl mx-auto gap-4 items-center"
      style={{ background: bg }}
    >
      <div className="items-center">{children}</div>
      <div>{hasArrow && <ArrowRight />}</div>
    </div>
  );
};

export default Home;
