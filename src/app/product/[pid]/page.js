"use client";

import Breadcrumb from "@/app/Components/Common/Breadcrumb";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {

    let { pid } = useParams();

    let [productData, setProductData] = useState(null)

    let getProductDetails=()=>{
        axios.get(`https://dummyjson.com/products/${pid}`)
        .then((res)=>res.data)
        .then((finalRes)=>{
            setProductData(finalRes)
        })
    }

    useEffect(()=>{
        getProductDetails()
    },[pid])

    const [qty, setQty] = useState(1);

    const dec = () => setQty((q) => Math.max(1, q - 1));
    const inc = () => setQty((q) => Math.min(99, q + 1));

    return (
        <>
            {
                productData &&
                <div>
                    <Breadcrumb title={productData.title}/>
                    <div className="min-h-screen bg-neutral-100">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    {/* LEFT */}
                                    <div className="bg-neutral-200">
                                        <div className="h-[260px] sm:h-[380px] lg:h-[520px] w-full">
                                            <img
                                                src={productData.images}
                                                alt="Product"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="px-5 py-6 sm:px-8 sm:py-8">
                                        <h1 className="text-xl font-extrabold leading-tight text-neutral-900 sm:text-2xl">
                                            {productData.title}
                                        </h1>

                                        <p className="mt-2 text-sm text-neutral-600">
                                            By 
                                            <span className="font-semibold text-neutral-800">AB{productData.category}
                                            </span>
                                        </p>

                                        {/* Price row */}
                                        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    className="cursor-pointer grid h-10 w-10 place-items-center rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 transition hover:bg-indigo-100 active:scale-[0.98]"
                                                    aria-label="Preview"
                                                >
                                                    ▶
                                                </button>

                                                <div className="text-2xl font-extrabold text-indigo-700">Rs. {productData.price}</div>
                                            </div>

                                            <div className="flex flex-col leading-tight">
                                                <span className="text-sm font-semibold text-emerald-600">Save 12%</span>
                                                <span className="text-xs text-neutral-500">Inclusive of all Taxes.</span>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-neutral-600">
                                            {productData.description}
                                        </p>

                                        {/* Chips row (as screenshot) */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {["Free Delivery", "1 Year Warranty", "Easy Return"].map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-black/5"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* QTY + Add to Cart */}
                                        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <div className="text-xs font-semibold tracking-wide text-neutral-500">
                                                    QTY
                                                </div>

                                                <div className="mt-2 inline-flex items-center overflow-hidden rounded-xl ring-1 ring-black/10">
                                                    <button
                                                        type="button"
                                                        onClick={dec}
                                                        className="cursor-pointer px-4 py-2 text-lg font-bold text-neutral-700 transition hover:bg-neutral-100 active:scale-[0.98]"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        −
                                                    </button>

                                                    <div className="min-w-14 px-4 py-2 text-center text-sm font-semibold text-neutral-900">
                                                        {qty}
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={inc}
                                                        className="cursor-pointer px-4 py-2 text-lg font-bold text-neutral-700 transition hover:bg-neutral-100 active:scale-[0.98]"
                                                        aria-label="Increase quantity"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className="cursor-pointer rounded-xl bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}