import toast from 'react-hot-toast';

const Pricing = () => {
  const plans = [
    {
      name: "Basic 🧩",
      price: "₹499/month",
      features: ["1 Project", "Basic Support", "Email Integration"],
    },
    {
      name: "Standard 🚀",
      price: "₹999/month",
      features: ["3 Projects", "Priority Support", "Payment Gateway"],
      highlight: true,
    },
    {
      name: "Elite 👑",
      price: "₹1999/month",
      features: ["Unlimited Projects", "24/7 Support", "Custom Features"],
    },
  ];

  const handleChoosePlan = (planName) => {
    toast.success(`You've selected the ${planName} Plan.`);
  };

  return (
<section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-14 px-4 flex items-center justify-center" id ="pricing">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Our Pricing Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-xl shadow-md p-6 transition-transform transform hover:scale-105 ${
                plan.highlight
                  ? "bg-blue-50 border-blue-500"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                {plan.price}
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(plan.name)}
                className={`w-full py-2 rounded-md text-white font-semibold ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-600 hover:bg-gray-700"
                } transition`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
