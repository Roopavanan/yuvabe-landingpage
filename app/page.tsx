"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="min-h-screen bg-white p-4 md:p-8 flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1374px] bg-[#f8f8f8] rounded-3xl pt-6 pb-10 px-4 sm:pt-8 sm:pb-14 sm:px-10 md:pt-6 md:pb-12 md:px-12 flex flex-col md:flex-row justify-between"> */}

        {/* Left Content Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-24 justify-between flex flex-col">
          {/* Logo */}
          <Image src="/images/logo.avif" alt="Yuvabe logo" width={230} height={230} />

          {/* Heading & Paragraph */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-2 ">
              Two Paths, One Purpose
            </h1>

            <p className="text-lg text-black leading-[30px]">
              Welcome to Yuvabe! Dive into a world where passion meets purpose, offering two unique paths:
              <strong> Yuvabe Education </strong> for hands-on learning and
              <strong> Yuvabe Studios </strong> for future-focused creativity. Let’s build, learn, and create together.
            </p>
          </div>
        </div>


        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex flex-col items-end">
          <div className="mt-2 mr-10">
            {/* Buttons */}
            <div className="flex items-center gap-8">
              <div className="bg-white rounded-full flex items-center px-2 py-2 shadow-md">
                <Link
                  href="/"
                  onClick={() => setActiveTab('home')}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeTab === 'home' ? 'bg-black text-amber-300' : 'text-black'
                    }`}
                >
                  <span className="inline-block align-middle w-2 h-2 mr-1 rounded-full bg-yellow-400"></span>
                  Home
                </Link>
                <Link
                  href="#about-yuvabe"
                  onClick={() => setActiveTab('explore')}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeTab === 'explore' ? 'bg-black text-white' : 'text-black'
                    }`}
                >
                  Explore
                </Link>
              </div>

              <Link
                href="https://www.yuvabeeducation.com/get-involved/support-us#donation-form"
                className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-6 py-3 rounded-full font-semibold shadow-sm inline-flex items-center gap-4"
              >
                🖤 Donate
              </Link>
            </div>
          </div>



          <Image
            src="/images/hero.avif"
            alt="Person sitting with laptop"
            width={500}
            height={420}
            className="object-cover mt-16 mr-10"
          />
        </div>
      </section>


      {/* Comparison Section */}
      <section className="w-full flex justify-center px-4 mt-24">
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-2 w-full max-w-7xl mx-auto">


          {/* Left Card: Yuvabe Education */}
          <div className="relative w-full md:w-1/2 border-[2px] border-yellow-400 hover:bg-yellow-300 rounded-3xl p-8 md:pr-48 bg-white z-10">

            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/stlogo.avif" width={50} height={50} alt="Edu Icon" />
              <h2 className="text-2xl font-semibold text-gray-800">Yuvabe Education</h2>
            </div>
            <p className="text-gray-700 text-md mb-6">
              At Yuvabe Education, learning is a journey of discovery.<br /> Through hands-on experiences in our STEAM Lab and Bridge Program, we turn curiosity into confidence and knowledge into action. Join us to shape the next generation for a world of innovation!
            </p>
            <button
              onClick={() => window.open('https://www.yuvabeeducation.com/', '_blank')}

              className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium px-6 py-3 text-sm shadow transition"
            >
              EXPLORE OUR WEBSITE →
            </button>

          </div>

          {/* Center Logo with Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Image src="/images/yb.avif" alt="Center Logo" width={400} height={400} />
          </div>



          {/* Right Card: Yuvabe Studios */}
          <div className="group relative w-full md:w-1/2 border-[2px] border-purple-600 rounded-3xl p-8 md:pl-48 bg-white z-10 hover:bg-purple-700 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/yblogo.avif" width={50} height={50} alt="Studios Icon" />
              <h2 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Yuvabe Studios</h2>
            </div>
            <p className="text-gray-700 mb-6 text-md transition-colors duration-300 group-hover:text-white">
              Yuvabe Studios blends creativity with purpose.<br /> Based in Auroville, our team of pros across AI, design, and digital marketing deliver fresh, impactful solutions that push boundaries. Let’s break barriers and create meaningful change together!
            </p>
            <button
              onClick={() => window.open('https://www.yuvabestudios.com/', '_blank')}

              className="rounded-full bg-purple-700 hover:bg-purple-600 text-white font-medium px-6 py-3 text-sm shadow transition">
              EXPLORE OUR WEBSITE →
            </button>
          </div>
        </div>
      </section>

      <section id="about-yuvabe" className="w-full px-4 py-20 flex items-center justify-center bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">About Yuvabe</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Yuvabe is all about empowering young minds and unleashing potential. Rooted in our ethos of
              <span className="font-medium"> “Work. Serve. Evolve.”</span>, we blend skills, service, and growth
              to help you leave your mark. <br />
              We’re a community that champions bold ideas, personal growth, and real impact, shaping a future we’re proud of.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/bulb.avif"
              alt="Bulb with plant inside"
              width={400}
              height={400}
              className="object-contain"
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
                Work comprises <span className="font-semibold">higher order skilling</span> and project work in predetermined areas
                such as AI Full stack, Digital Marketing, ERP, Sustainability.
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
                Serve is the commitment to give back to the <span className="font-semibold">community </span>
                through various social programs and projects supporting Auroville units.
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
                Evolve incorporates self-growth through <span className="font-semibold">transformative</span> activities
                that lead to better decision-making, self-compassion, overcoming fear, dealing with challenges and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer section*/}
      <footer className="bg-[#f5f5f5] rounded-3xl w-[85%] max-w-[1200px] mx-auto mt-16 px-8 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-24">

            {/* Left Side: Logo and Address */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/yblogo.avif"
                alt="Yuvabe Logo"
                width={50}
                height={50}
                className="mt-1"
              />
              <div className="text-gray-800 text-md md:text-xl">
                <p>Yuvabe, Saracon Campus,</p>
                <p>Auroville, TamilNadu - 605101</p>
              </div>
            </div>

            {/* Right Side: Email */}
            <div className="flex items-start justify-start md:justify-end text-md md:text-xl text-gray-700">
              <p>
                contact us on:{" "}
                <Link href="mailto:info@yuvabe.com">
                  <span className="font-semibold text-gray-900">
                    info@<span className="font-bold">yuvabe.com</span>
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Part: Copyright & Socials */}
          <div className="mt-40 flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-center text-gray-700 text-xl">
              Copyright @ 2024 yuvabe | All rights reserved
            </p>
            <div className="flex items-center gap-8">
              <span className="text-xl text-gray-700">Follow us on:</span>
              <div className="flex gap-3 text-black text-lg">
                <Link href="https://www.instagram.com/yuvabe.auroville/" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/insta.avif" alt="Instagram" width={40} height={40} />
                </Link>
                <Link href="https://www.facebook.com/yuvabe.auroville" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/fb.avif" alt="Facebook" width={40} height={40} />
                </Link>
                <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fyuvabeauroville" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/x.avif" alt="Twitter" width={40} height={40} />
                </Link>
                <Link href="https://www.linkedin.com/company/yuvabe/" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/in.avif" alt="LinkedIn" width={40} height={40} />
                </Link>
                <Link href="https://www.youtube.com/@yuvabe.auroville" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/utube.avif" alt="YouTube" width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
} 
