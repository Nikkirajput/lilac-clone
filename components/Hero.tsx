export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
      <div>
        <h2 className="text-5xl font-serif leading-tight">
          Design that feels calm and intentional
        </h2>
        <p className="mt-6 text-gray-600">
          A modern brand template for creatives and studios.
        </p>
        <button className="mt-8 px-8 py-3 border border-black uppercase text-sm tracking-widest">
          Learn More
        </button>
      </div>

      <div className="bg-gray-200 h-[450px]" />
    </section>
  );
}
