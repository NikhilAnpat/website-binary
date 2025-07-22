import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import confetti from "canvas-confetti";
import Footer from "../Footer";
import NavbarDemo from "../NavbarDemo";

const plans = [
  {
    name: "Starter",
    price: 199,
    label: "₹199/mo",
    features: ["1 Project", "Basic Support", "Community Access"],
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Professional",
    price: 499,
    label: "₹499/mo",
    features: ["5 Projects", "Priority Support", "Community Access"],
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Business",
    price: 999,
    label: "₹999/mo",
    features: ["Unlimited Projects", "24/7 Support", "Analytics Suite"],
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Enterprise",
    price: 1999,
    label: "₹1,999/mo",
    features: ["Custom Solutions", "Dedicated Manager", "White-Labeling"],
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Ultimate",
    price: 2499,
    label: "₹2,499/mo",
    features: ["All Features", "Unlimited Everything", "AI Integration"],
    color: "from-green-500 to-green-700",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    let countdown;
    if (showConfirmation) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setShowConfirmation(false);
            setTimer(20);
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [showConfirmation]);




  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const handlePayNow = () => {
    const options = {
      key: "rzp_test_nqUmaw8ibqOkuE",
      amount: selectedPlan.price * 100,
      currency: "INR",
      name: "AI Innovations",
      description: `${selectedPlan.name} Plan Payment`,
      image: "https://avatars.githubusercontent.com/u/77132096",
      handler: function (response) {
        setShowModal(false);
        setShowConfirmation(true);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9000000000",
      },
      notes: {
        plan_selected: selectedPlan.name,
      },
      theme: {
        color: "#0f0f2f",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
    <NavbarDemo />

    <section className="bg-[#0f0f2f] text-white py-20 px-4 text-center relative">
      <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Choose Your Plan
      </h2>
      <p
        className="mb-12 text-gray-400 max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Find the perfect plan for your needs. Upgrade anytime.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className={`rounded-2xl bg-gradient-to-br ${plan.color} p-8 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
            onClick={() => handleSelectPlan(plan)}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold mb-4">{plan.label}</p>
            <ul className="space-y-2 mb-6 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-green-200" /> {feature}
                </li>
              ))}
            </ul>
            <button className="bg-white text-[#0f0f2f] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 p-[50px]z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 backdrop-blur-sm">
          <div className="bg-white text-[#0f0f2f] p-6 rounded-2xl shadow-xl max-w-md w-full text-center animate-fadeIn relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2">🎉 Special Deal!</h3>
            <p className="text-lg mb-6">
              You have selected the <strong>{selectedPlan.name}</strong> plan.
            </p>
            <button
              className="bg-[#0f0f2f] text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition mb-3"
              onClick={handlePayNow}
            >
              Pay ₹{selectedPlan.price} Now
            </button>
          </div>
        </div>
      )}

      

      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white text-[#0f0f2f] px-6 py-6 rounded-2xl shadow-lg text-center max-w-sm w-[90%] animate-fadeIn relative">
            <button
              className="absolute top-3 right-4 text-lg text-gray-500 hover:text-red-500"
              onClick={() => setShowConfirmation(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2">✅ Payment Successful!</h3>
            <p className="mb-2">
              Your <strong>{selectedPlan?.name}</strong> plan is now active.
            </p>
            <p className="text-sm text-gray-500">Closing in {timer} seconds...</p>
          </div>
        </div>
      )}
    </section>
    
    </>

  );
};

export default Pricing;
