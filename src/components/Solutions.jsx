
const Solutions = () => {
  const services = [
    {
      title: "Custom Software Development 💻",
      desc: "We craft tailored software solutions to meet your unique business needs using modern technologies.",
    },
    {
      title: "eCommerce Solutions 🛒",
      desc: "We build scalable, secure and beautifully designed online stores optimized for conversions and user experience.",
    },
    {
      title: "Online Store Setups 🚀",
      desc: "From basic setups to elite-level infrastructures — we handle everything from product listings to payment integration.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-14 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          Our Solutions
        </h2>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98]"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
