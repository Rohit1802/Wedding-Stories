import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-[120vh] md:h-[130vh]">
      {/* Grayscale background image */}
      <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/home/poster.png')" }}>
        {/* Ensure background image is contained */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
      </div>

      {/* Welcome text */}
      <div className="absolute top-[12%] sm:top-[15%] md:top-[7%] left-1/2 transform -translate-x-1/2 text-center text-white">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-normal tracking-widest leading-tight mb-6">
          WELCOME
        </h2>
      </div>

      {/* Design Image (First Hr.png) */}
      <div className="absolute top-[15%] sm:top-[20%] md:top-[4%] left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/home/1.png" // Replace with your image path
          alt="Design Image"
          width={700}
          height={400}
          className="rounded-lg object-contain max-w-full h-auto"
        />
      </div>

      {/* Paragraph content */}
      <div className="absolute top-[50%] sm:top-[60%] md:top-[55%] left-1/2 transform -translate-x-1/2 text-center text-white px-4 md:px-10">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-full md:max-w-3xl mx-auto italic">
          Imagine waking up to a job that lifts you up and transports you to a different world.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-full md:max-w-3xl mx-auto italic">
          A world populated with a billion heartfelt feelings and stories etched ceremoniously in magic, love and joie de vivre.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-full md:max-w-3xl mx-auto italic">
          Perfect with its Disney-like happy endings, sworn vows and the promises of forever.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-full md:max-w-3xl mx-auto italic">
          This is our world. The Wedding Story world!
        </p>
      </div>

      {/* Duplicate Design Image (Second Hr.png) */}
      {/* Uncomment this block if you want to add a second image */}
      {/* <div className="absolute top-[50%] md:top-[45%] left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/home/Hr.png" // Replace with your image path
          alt="Design Image"
          width={300}
          height={100}
          className="rounded-lg object-contain max-w-full h-auto"
        />
      </div> */}
    </div>
  )
}
