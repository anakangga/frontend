import { Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [router, status]);

  return (
    <div className="container mx-auto p-4 mt-6">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard User" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => {
            router.push("/upload");
          }}
        >
          Unggah Video
        </Button>
      </div>

      <div className="my-8">
        <Heading as="h2">Video Selesai</Heading>

        <Heading as="h2">Video Diproses</Heading>
      </div>
    </div>
  );
};

export default Profile;
