import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

const UploadVideo: NextPage = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [router, status]);

  return (
    <div className="container mx-auto p-4 pt-8">
      <Head>
        <title>Upload Video</title>
        <meta name="description" content="Dashboard User" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextLink href="/dashboard" passHref>
        <Link>&lt; Kembali</Link>
      </NextLink>

      <Heading textAlign="center">Unggah Videomu Sekarang</Heading>

      <div className="flex justify-center items-center w-full max-w-xl mx-auto mt-8">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Klik untuk pilih video</span> atau
              seret file ke sini
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MP4, MKV, WEBM, MOV
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="video/*"
          />
        </label>
      </div>

      <div className="w-full max-w-xl mx-auto mt-8">
        <Formik
          initialValues={{ judul: "", tema: "", deskripsi: "" }}
          onSubmit={() => {}}
        >
          {({ values }) => (
            <Form>
              <Field name="judul">
                {({ field }: any) => (
                  <FormControl mt={4}>
                    <FormLabel>Judul</FormLabel>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Masukkan Judul"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="tema">
                {({ field }: any) => (
                  <FormControl mt={4}>
                    <FormLabel>Tema</FormLabel>
                    <Input {...field} placeholder="Masukkan tema" type="text" />
                  </FormControl>
                )}
              </Field>
              <Field name="deskripsi">
                {({ field }: any) => (
                  <FormControl mt={4}>
                    <FormLabel>Deskripsi</FormLabel>
                    <Textarea
                      {...field}
                      placeholder="Masukkan deskripsi singkat"
                      type="text"
                      rows={5}
                    />
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme="teal" isLoading={false} type="submit">
                Unggah video
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UploadVideo;
