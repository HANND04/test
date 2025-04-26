"use client"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import "../app/globals.css";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: scrollY * -0.2 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden font-sans">
      <Head>
        <title>Xin chao</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-60 backdrop-blur-md p-4 flex justify-between items-center px-8">
        <h1 className="text-xl font-bold">Smartchain</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#tech" className="hover:underline">Technology</a></li>
          <li><a href="#gear" className="hover:underline">About us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen relative flex items-center justify-center">
        <motion.div
          animate={controls}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <Image
            src="/assets/eiger-hero.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-center"
        >
          Smartchain
        </motion.h1>
      </section>

      {/* Scroll Animation Section */}
      <section id="tech" className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-4xl mb-4">Technology</h2>
          <p className="text-lg">
            Designed with cutting-edge technology to thrive in the worlds most
            demanding environments.
          </p>
        </motion.div>
      </section>

      {/* Parallax / Image + Text Section */}
      <section id="gear" className="relative h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-10">
        <div className="md:w-1/2">
          <motion.img
            src="/assets/eiger-jacket.jpg"
            alt="Extreme Jacket"
            className="rounded-2xl shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4">About us</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia ab libero illum odio aperiam corporis nisi officiis consequatur placeat nemo adipisci voluptatem ea iusto, quibusdam eaque, temporibus, deserunt ad.
          </p>
        </motion.div>
      </section>

      {/* Full Screen Scroll Section */}
      <section className="h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-4">Slide Into the Elements</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium qui veniam tempora nisi, magnam sequi sed incidunt excepturi dolores nihil fuga similique cupiditate optio iste, perspiciatis ad, maxime ducimus ex.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6"
        >
          Ready for Adventure?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
        >
          Explore Collection
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="text-center p-10 text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veniam, laborum dolore facere alias quisquam officia quae iusto fugiat excepturi, quam labore, molestias explicabo placeat sint harum maxime. Sequi, veniam?
      </footer>
    </div>
  );
}
