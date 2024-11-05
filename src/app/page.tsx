import { HydrateClient } from "@/trpc/server";
import JoinWhatsappButton from "./_components/whatsapp-join-button";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import IssueSection from "./_components/events";
import UpdatesSection from "./_components/updates";

export default async function Home() {
  return (
    <HydrateClient>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#361919] text-white">
        <div className="absolute inset-0 -z-20 min-h-screen bg-gradient-to-r from-[#f56666] to-[#c10949]"></div>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen w-full">
          <div className="absolute inset-0 -z-10 flex items-start">
            <Image
              src="/static/images/akd-bg.png"
              alt="Sample Background Image"
              fill
              className="pointer-events-none mt-16 object-cover"
            />
          </div>
          <div className="relative z-10 flex h-screen flex-col items-center justify-end space-y-4 pb-[8%] text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Anura Kumara Dissanayake
            </h1>
            <p className="mx-auto max-w-[700px] italic text-zinc-200 md:text-xl">
              Fighting for a better future. Join our campaign to bring real
              change to our community.
            </p>
            <JoinWhatsappButton
              url="https://chat.whatsapp.com/your-group-invite-code"
              name="Join Our Group"
            />
            {/* <div>
              <div className="text-3xl">
                Leading with Integrity, Building Our Nation Together.
              </div>
              <div className="text-xl">
                With Unity and Dedication, We&apos;re Realizing Our Full
                Potential..!
              </div>
            </div> */}
          </div>
        </section>

        {/* Key Issues Section */}
        <IssueSection />

        {/* Latest News Section */}
        <UpdatesSection />

        {/* Donation Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Support Our Campaign
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl">
                Your contribution can make a real difference. Help us build a
                better future for all.
              </p>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Donate Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </HydrateClient>
  );
}
