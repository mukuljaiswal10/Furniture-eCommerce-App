"use client";

import { Truck, RefreshCcw, Headphones } from "lucide-react";

export default function Facility() {
  return (
    <section className="py-14 bg-[#f7f4ef] my-[40px]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Free Shipping */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center">
              <Truck className="w-6 h-6 text-gray-700" />
            </div>
            <h4 className="text-lg font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Free shipping on all order</p>
          </div>

          {/* Money Return */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center">
              <RefreshCcw className="w-6 h-6 text-gray-700" />
            </div>
            <h4 className="text-lg font-semibold">Money Return</h4>
            <p className="text-sm text-gray-600">Back guarantee under 7 days</p>
          </div>

          {/* Online Support */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-gray-700" />
            </div>
            <h4 className="text-lg font-semibold">Online Support</h4>
            <p className="text-sm text-gray-600">
              Support online 24 hours a day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
