"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from '../../public/img1.webp'
import img2 from '../../public/img2.webp'
import img3 from '../../public/img3.webp'
import pablo from '../../public/pablo.webp'
// --- HeroBanner Component ---
 function HeroBanner() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 to-pink-400 text-white px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        🎉 Happy Birthday Mom!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-2xl max-w-2xl"
      >
        I hope you enjoyed your day, here is a digital card
        from your son.
      </motion.p>
    </section>
  );
}

// --- MessageSection Component ---
function MessageSection() {

const text = ` Thank you for being a great mom and helping me in my life! I appreciate
the food you make me and all the effort you put into me
to let me do what I do. It'll pay off soon enough
and hopefully you can benefit from the work that I have been doing.
Thanks for being so supporting of me! I'll try to keep
things cleaner.`

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-radial from-blue-100 via-white to-pink-100 text-gray-800
    text-gray-800 text-center"
    style={{
      background: "radial-gradient(circle at center, #DBEAFE, #FFFFFF, #FBCFE8)",
      color: "#1F2937"
    }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-8"
      >
       A great supporter
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-lg leading-relaxed"
      >
      {text}
      </motion.p>
    </section>
  );
}

// --- PhotoSection Component ---
function PhotoSection() {
  const photos = [img1,img2,img3,pablo];

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-center mb-12 text-blue-700"
      >
        Favorite Pictures
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {photos.map((src,index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition"
          >
            <Image
              src={src}
              alt={`Photo ${src}`}
              width={500}
              height={300}
              className="object-contain w-full h-64 bg-blue-200"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- BirthdayCardPage ---
export default function BirthdayCardPage() {
  return (
    <main className="flex flex-col w-full">
      <HeroBanner />
      <MessageSection />
      <PhotoSection />
    </main>
  );
}
