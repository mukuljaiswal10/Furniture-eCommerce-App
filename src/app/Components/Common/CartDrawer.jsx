"use client";
import { IoClose } from "react-icons/io5";

export default function CartDrawer({ open, setOpen }) {
  const closeCart = () => {
    setOpen(false);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-40
        transition-opacity duration-500
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* DRAWER */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px]
        bg-[#f6f1ea] z-50
        transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">Cart</h3>

          {/* Close Button */}
          <button
            onClick={closeCart}
            className="cursor-pointer text-2xl hover:text-red-500 transition"
          >
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] px-6 text-center">
          <img src="/image/cartempty.jpg" alt="empty" className="w-40 mb-4" />
          <p className="text-sm text-gray-600">Your shopping cart is empty!</p>
        </div>
      </div>
    </>
  );
}
