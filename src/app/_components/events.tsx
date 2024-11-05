"use client";

import { eventsCampaigns } from "@/config/test.config.mjs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventSection() {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          Events & Campaigns
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventsCampaigns.slice(0, 4).map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="rounded-lg p-6">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="mb-4 h-40 w-full rounded-md object-cover"
                  />
                  <h3 className="mb-2 text-2xl font-semibold">{event.title}</h3>
                  <p className="text-zinc-200">{event.description}</p>
                  <Link href={`event/${event.id}`}>
                    <Button className="mt-4 rounded-md border border-gray-700 bg-gray-900 px-5 py-2 text-sm font-semibold text-red-400 shadow-md shadow-red-500/30 transition-transform duration-300 hover:scale-105 hover:border-red-500 hover:bg-gray-800 hover:text-red-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
