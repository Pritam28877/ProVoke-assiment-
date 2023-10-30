"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import Table from "./Table";
import Loader from "./Loader";

function PlansLayout({ products }) {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [isBillingLoading, setBillingLoading] = useState(false);

  const router = useRouter();

  console.log(products);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0].id);
    setBillingLoading(true);

    // Navigate to the /Payment path with the selected plan id as a query parameter
    router.push({
      pathname: "/Payment",
      query: { plan: selectedPlan.id },
    });
  };

  return (
    <div>
      <header className="border-b border-white/10 bg-[#141414]">
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          <Link href="/">Sign Out</Link>
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <Link
            href="/Payment"
            className="mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] text-center"
          >
            Buy
          </Link>
        </div>
      </main>
    </div>
  );
}

export default PlansLayout;
