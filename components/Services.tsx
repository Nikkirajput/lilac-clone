export default function Services() {
  const services = ["Branding", "Design", "Consulting"];

  return (
    <section className="grid md:grid-cols-3 gap-10 px-10 py-20">
      {services.map((item) => (
        <div
          key={item}
          className="border p-8 text-center hover:shadow-lg transition"
        >
          <h4 className="text-xl font-serif">{item}</h4>
          <p className="mt-4 text-gray-600">
            Clean and minimal service presentation.
          </p>
        </div>
      ))}
    </section>
  );
}
