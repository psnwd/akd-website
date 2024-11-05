"use client";

import { latestNews } from "@/config/test.config.mjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UpdatesSection() {
  return (
    <section id="news" className="w-full bg-black/30 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Latest Updates
        </h2>
        <div className="space-y-8">
          {latestNews.map((news) => (
            <motion.article
              key={news.id}
              className="flex flex-col items-center border-b border-zinc-700 pb-8 md:flex-row md:items-start"
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={400}
                height={250}
                className="mb-4 h-48 w-full rounded-md object-cover md:mr-6 md:w-1/3"
              />
              <div className="md:w-2/3">
                <h3 className="mb-2 text-3xl font-bold text-white">
                  {news.title}
                </h3>
                <p className="mb-4 text-zinc-200">{news.excerpt}</p>
                <Link
                  href={`/news/${news.slug}`}
                  className="font-semibold text-red-300 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
