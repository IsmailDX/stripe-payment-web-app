import React from "react";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

type priceProps = {
  price: {
    id: string;
    nickname: string;
    unit_amount: number;
  };
  key: string;
};

const PricingCard = ({ price, key }: priceProps) => {
  const router = useRouter();
  const dynamicSubTitle = (price: { nickname: string }) => {
    if (price.nickname === "20-yard dumpster") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    } else if (price.nickname === "15-yard dumpster") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    } else if (price.nickname === "25-yard dumpster") {
      return <p className="text-[#f1592a] mt-1">Weekend Special</p>;
    } else if (price.nickname === "24-Hour Special") {
      return <p className="text-[#f1592a] mt-1">3-day rental</p>;
    }
  };

  const dynamicDescription = (price: { nickname: string }) => {
    if (price.nickname === "20-yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">AED 25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Exo-friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "15-yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">AED 25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Exo-friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "25-yard dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">AED 25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Exo-friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "24-Hour Special") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">AED 25 per day after 3 days</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Exo-friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
        </div>
      );
    }
  };

  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //open stripe checkout page
    router.push(data);
  };

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-gray-100 h-28 items-center font-bold">
          <h4 className="text-3xl">{price.nickname}</h4>
          <p>{dynamicSubTitle(price)}</p>
          <h3>First 2,000lbs Included</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
            {/* divide by hundered to get right amount */}
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-AE", {
                style: "currency",
                currency: "AED",
              })}
            </h1>
            <h3>Additional weight just AED 0.5/lb</h3>
          </div>
          <ul className="flex justify-center">
            <li className="text-xl font-bold">{dynamicDescription(price)}</li>
          </ul>
          <button
            className="mt-8 flex w-full justify-center rounded-md border 
            border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium
             text-white shadow-sm"
            onClick={handleSubscription}
          >
            Rent this Dumpster
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
