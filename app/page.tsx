"use client"
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Header from "@/components/Header";
import EditorsPick from "@/components/EditorPicks";
import BestSeller from "@/components/BestSeller";
import Crasual from "@/components/Crasual";
import BlogDesign from "@/components/BlogDesign";
import Footerpage from "@/components/Footerpage";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Featured Posts</title>
        <meta name="description" content="Featured blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar />
        <Header />
        <Hero2 />
        <EditorsPick />
        <BestSeller />
        <Crasual />
        <BlogDesign />
        <Footerpage />

      
    </>
  );
}
