import { PencilIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../sections/Layout";

export default function Home() {
  const { data: session, data: loading } = useSession();
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <div className=" space-y-4 max-w-4xl mx-auto text-center">
          <h1 className=" text-4xl sm:text-7xl font-bold capitalize">
            <span className=" block">The Bloggin Platform</span>
            <span className=" block">For developers</span>
          </h1>
          <h2 className=" text-xl sm:text-2xl">
            Start your developer blog, share ideas, and connect with the dev
            community!
          </h2>
        </div>
        {!session ? (
          <button
            type="button"
            onClick={signIn}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
          >
            Start your blog free
          </button>
        ) : (
          <Link href="/">
            <a
              href=""
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap flex justify-center items-center space-x-2"
            >
              <PencilIcon className="w-6 h-6 flex-shrink-0" />
              <span>Write a post</span>
            </a>
          </Link>
        )}
      </section>
    </Layout>
  );
}
