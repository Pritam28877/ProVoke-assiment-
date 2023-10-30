import React from "react";
import PlansLayout from "@/components/PlansLayout";
const Plans = () => {
  const products = [
    {
      id: 'prod_basic',
      name: 'Basic',
      prices: [
        {
          id: 'price_1',
          unit_amount: 500,
          recurring: {
            interval: 'month'
          }
        }
      ],
      metadata: {
        videoQuality: 'Standard',
        resolution: '480p',
        portability: 'true'
      }
    },
    {
      id: 'prod_standard',
      name: 'Standard',
      prices: [
        {
          id: 'price_2',
          unit_amount: 1000,
          recurring: {
            interval: 'month'
          }
        }
      ],
      metadata: {
        videoQuality: 'High',
        resolution: '1080p',
        portability: 'true'
      }
    },
    {
      id: 'prod_premium',
      name: 'Premium',
      prices: [
        {
          id: 'price_3',
          unit_amount: 1500,
          recurring: {
            interval: 'month'
          }
        }
      ],
      metadata: {
        videoQuality: 'Ultra High',
        resolution: '4K+HDR',
        portability: 'true'
      }
    }
  ];

  return (
    <div>
      <PlansLayout products={products} />
    </div>
  );
};

export default Plans;
