"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="min-h-screen bg-white p-4 md:p-8 flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1374px] bg-[#f8f8f8] rounded-3xl pt-6 pb-10 px-4 sm:pt-8 sm:pb-14 sm:px-10 md:pt-6 md:pb-12 md:px-12 flex flex-col gap-10">
        {/* Top Row: Logo (left) & Buttons (right) */}
        <div className="flex items-center justify-between w-full">
          <Image
            src="/images/logo.avif"
            alt="Yuvabe logo"
            width={230}
            height={230}
            className="w-30 sm:w-32 md:w-[230px] h-auto"
          />

          <div className="flex items-center gap-8">
            {/* Hide Home + Explore on small screens */}
            <div className="hidden md:flex bg-white rounded-full items-center px-2 py-2 shadow-md">
              <Link
                href="/"
                onClick={() => setActiveTab("home")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeTab === "home"
                    ? "bg-black text-amber-300"
                    : "text-black"
                }`}
              >
                <span className="inline-block align-middle w-2 h-2 mr-1 rounded-full bg-yellow-400"></span>
                Home
              </Link>
              <Link
                href="#about-yuvabe"
                onClick={() => setActiveTab("explore")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeTab === "explore" ? "bg-black text-white" : "text-black"
                }`}
              >
                Explore
              </Link>
            </div>

            <Link
              href="https://www.yuvabeeducation.com/get-involved/support-us#donation-form"
              className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-4 py-3 rounded-full font-semibold shadow-sm inline-flex items-center gap-4"
            >
              🖤 Donate
            </Link>
          </div>
        </div>

        {/* Bottom Row: Content (left) & Image (right) */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-2 font-primary">
              Two Paths, One Purpose
            </h1>
            <p className="text-lg text-black leading-[30px] font-secondary font-regular">
              Welcome to Yuvabe! Dive into a world where passion meets purpose,
              offering two unique paths:
              <strong> Yuvabe Education </strong> for hands-on learning and
              <strong> Yuvabe Studios </strong> for future-focused creativity.
              Let’s build, learn, and create together.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-end">
            <Image
              src="/images/hero.avif"
              alt="Person sitting with laptop"
              width={500}
              height={420}
              className="object-cover mt-10 md:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full flex justify-center px-4 mt-24">
        <div className="relative flex flex-col md:flex-row items-stretch justify-between  w-full max-w-7xl mx-auto ">
          {/* Left Card: Yuvabe Education */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#FFCA2D] hover:bg-[#FFCA2D] rounded-l-[70px]  p-8 md:pr-48 bg-white z-10">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ye-logo.png"
                width={50}
                height={50}
                alt="Edu Icon"
              />
              <h2 className="text-[28px] font-medium text-gray-800 font-primary">
                Yuvabe Education
              </h2>
            </div>
            <p className="text-gray-700 text-md mb-6 font-secondary">
              At Yuvabe Education, learning is a journey of discovery. Through
              hands-on experiences in our STEAM Lab and Bridge Program, we turn
              curiosity into confidence and knowledge into action. Join us to
              shape the next generation for a world of innovation!
            </p>
            <Link
              href="https://www.yuvabeeducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFE495] border-1 border-[#FFCA2D] text-gray-900 font-medium px-6 py-3 text-sm shadow transition font-primary"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>

          {/* Center Logo with Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Image
              src="/images/yb.avif"
              alt="Center Logo"
              width={435}
              height={435}
            />
          </div>

          {/* Right Card: Yuvabe Studios */}
          <div className="group relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#5829C7] rounded-r-[70px] p-8 md:pl-48 bg-white z-10 hover:bg-[#5829C7] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/yblogo.avif"
                width={50}
                height={50}
                alt="Studios Icon"
              />
              <h2 className="text-[28px] font-medium font-primary text-gray-800 transition-colors duration-300 group-hover:text-white">
                Yuvabe Studios
              </h2>
            </div>
            <p className="text-gray-700 mb-6 text-md transition-colors duration-300 group-hover:text-white font-secondary">
              Yuvabe Studios blends creativity with purpose.
              <br /> Based in Auroville, our team of pros across AI, design, and
              digital marketing deliver fresh, impactful solutions that push
              boundaries. Let’s break barriers and create meaningful change
              together!
            </p>
            <button
              onClick={() =>
                window.open("https://www.yuvabestudios.com/", "_blank")
              }
              className="rounded-full bg-purple-700 hover:bg-purple-600 text-white font-medium px-6 py-3 text-sm shadow transition"
            >
              EXPLORE OUR WEBSITE →
            </button>
          </div>
        </div>
      </section>

      <section
        id="about-yuvabe"
        className="w-full px-4 py-20 flex items-center justify-center bg-white"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6 font-primary">
              About Yuvabe
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-secondary">
              Yuvabe is all about empowering young minds and unleashing
              potential. Rooted in our ethos of
              <span className="font-medium"> “Work. Serve. Evolve.”</span>, we
              blend skills, service, and growth to help you leave your mark.{" "}
              <br />
              We’re a community that champions bold ideas, personal growth, and
              real impact, shaping a future we’re proud of.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/bulb.avif"
              alt="Bulb with plant inside"
              width={400}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Work Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/work.avif"
                alt="Work Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Work</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                Work comprises{" "}
                <span className="font-semibold">higher order skilling</span> and
                project work in predetermined areas such as AI Full stack,
                Digital Marketing, ERP, Sustainability.
              </p>
            </div>

            {/* Serve Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/serve.avif"
                alt="Serve Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Serve</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                Serve is the commitment to give back to the{" "}
                <span className="font-semibold">community </span>
                through various social programs and projects supporting
                Auroville units.
              </p>
            </div>

            {/* Evolve Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/evolve.avif"
                alt="Evolve Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Evolve</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                Evolve incorporates self-growth through{" "}
                <span className="font-semibold">transformative</span> activities
                that lead to better decision-making, self-compassion, overcoming
                fear, dealing with challenges and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer section*/}
      <footer className="bg-[#f5f5f5] rounded-[40px] w-[90%] max-w-[1200px] mx-auto mt-16 px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-30">
          {/* Top Grid: Address & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Address Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Image
                src="/images/yblogo.avif"
                alt="Yuvabe Logo"
                width={50}
                height={50}
              />
              <div className="text-gray-800 text-base md:text-xl leading-relaxed font-secondary">
                <p>Yuvabe, Saracon Campus,</p>
                <p>Auroville, TamilNadu - 605101</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex justify-center md:justify-end text-center text-base md:text-xl text-gray-700">
              <p>
                Contact us on:{" "}
                <Link href="mailto:info@yuvabe.com">
                  <span className="font-semibold text-gray-900">
                    info@<span className="font-bold">yuvabe.com</span>
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom: Copyright & Social */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-center">
            <p className="text-gray-700 text-base md:text-xl font-secondary">
              Copyright © {new Date().getFullYear()} <strong>yuvabe</strong> | All rights reserved
            </p>

            <div className="flex flex-col items-center md:flex-row gap-3">
              <span className="text-base md:text-xl text-gray-700">
                Follow us on:
              </span>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    href: "https://www.instagram.com/yuvabe.auroville/",
                    src: "/images/insta.avif",
                    alt: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/yuvabe.auroville",
                    src: "/images/fb.avif",
                    alt: "Facebook",
                  },
                  {
                    href: "https://x.com/i/flow/login?redirect_after_login=%2Fyuvabeauroville",
                    src: "/images/x.avif",
                    alt: "X / Twitter",
                  },
                  {
                    href: "https://www.linkedin.com/company/yuvabe/",
                    src: "/images/in.avif",
                    alt: "LinkedIn",
                  },
                  {
                    href: "https://www.youtube.com/@yuvabe.auroville",
                    src: "/images/utube.avif",
                    alt: "YouTube",
                  },
                ].map(({ href, src, alt }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={src} alt={alt} width={32} height={32} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 
