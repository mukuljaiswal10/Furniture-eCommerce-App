"use client";
import React, { useState } from "react";
import Breadcrumb from "../Components/Common/Breadcrumb";

export default function Auth() {
  const [showForgot, setShowForgot] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const OTP_LEN = 6;
  const [otpBoxes, setOtpBoxes] = useState(Array(OTP_LEN).fill(""));
  const [finalOtp, setFinalOtp] = useState("");

  // ✅ NO REFRESH + reset (Login)
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // yahan aap API call karoge
    // const formData = new FormData(e.currentTarget);

    e.currentTarget.reset(); // ✅ UI clear
  };

  // ✅ NO REFRESH + reset (Forgot)
  const handleForgotSubmit = (e) => {
    e.preventDefault();

    // yahan aap API call karoge
    // const formData = new FormData(e.currentTarget);

    e.currentTarget.reset(); // ✅ UI clear
  };

  // ✅ Register submit (OTP open) - yahan reset intentionally nahi
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setShowOtp(true);
    setTimeout(() => document.getElementById("otp-0")?.focus(), 0);
  };

  // ✅ OTP verify submit (NO refresh + reset OTP)
  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // yahan aap API call karoge
    // const formData = new FormData(e.currentTarget);

    // ✅ clear otp after submit (UI)
    setOtpBoxes(Array(OTP_LEN).fill(""));
    setFinalOtp("");
    setTimeout(() => document.getElementById("otp-0")?.focus(), 0);
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/[^0-9]/g, "").slice(0, 1);

    const next = [...otpBoxes];
    next[index] = digit;
    setOtpBoxes(next);
    setFinalOtp(next.join(""));

    if (digit && index < OTP_LEN - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpBoxes[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // ✅ Resend OTP: clear + focus first
  const handleResendOtp = () => {
    setOtpBoxes(Array(OTP_LEN).fill(""));
    setFinalOtp("");
    setTimeout(() => document.getElementById("otp-0")?.focus(), 0);
    // backend later: resend API
  };

  return (
    <>
      <Breadcrumb title={"My Account"} />

      <section className="w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="h-px w-full bg-black/10" />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* LEFT: LOGIN */}
            <div className="bg-white/10 border border-black/10 p-5 sm:p-7">
              <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-black/80">
                Login
              </h2>

              <div className="mt-4 space-y-5">
                {/* ✅ Login Form */}
                <form className="space-y-5" onSubmit={handleLoginSubmit}>
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      Email <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="loginEmail"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      Password <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="loginPassword"
                      type="password"
                      required
                      placeholder="Password"
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full bg-[#8a6f55] px-7 py-2 text-[12px] font-semibold uppercase tracking-wide text-white hover:bg-[#7a5f47] transition"
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForgot((p) => !p)}
                      className="cursor-pointer text-[13px] text-black/55 hover:text-black/80 transition font-serif"
                    >
                      Lost your password?
                    </button>
                  </div>
                </form>

                {/* FORGOT PASSWORD */}
                {showForgot && (
                  <div className="mt-6 border border-black/10 bg-white/15 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[16px] font-semibold text-black/75 font-serif">
                          Reset your password
                        </h3>
                        <p className="mt-1 text-[13px] text-black/60 font-serif leading-6">
                          Enter your email and we’ll send you a reset link.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowForgot(false)}
                        className="cursor-pointer text-[12px] text-black/50 hover:text-black/80 transition"
                      >
                        ✕
                      </button>
                    </div>

                    <form
                      className="mt-4 space-y-4"
                      onSubmit={handleForgotSubmit}
                    >
                      <input
                        name="forgotEmail"
                        type="email"
                        required
                        placeholder="Email Address *"
                        className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                      />

                      <button
                        type="submit"
                        className="cursor-pointer rounded-full bg-[#8a6f55] px-7 py-2 text-[12px] font-semibold uppercase tracking-wide text-white hover:bg-[#7a5f47] transition"
                      >
                        Send reset link
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: REGISTER / OTP */}
            <div className="bg-white/10 border border-black/10 p-5 sm:p-7">
              <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-black/80">
                Register
              </h2>

              {!showOtp ? (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={handleRegisterSubmit}
                >
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      First Name <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      Email address <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="registerEmail"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      Password <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="registerPassword"
                      type="password"
                      required
                      placeholder="Password"
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  {/* ✅ Phone: only numbers + 10 digits */}
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold text-black/70 font-serif">
                      Phone <span className="text-black/60">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone (10 digit)"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      pattern="\d{10}"
                      title="Please enter 10 digit mobile number"
                      onChange={(e) => {
                        e.target.value = e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 10);
                      }}
                      className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] text-black/70 outline-none focus:border-black/20"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full bg-[#8a6f55] px-7 py-2 text-[12px] font-semibold uppercase tracking-wide text-white hover:bg-[#7a5f47] transition"
                    >
                      Register
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 border border-black/10 bg-white/15 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[18px] font-semibold text-black/75 font-serif">
                        OTP Verification
                      </h3>
                      <p className="mt-1 text-[13px] text-black/60 font-serif leading-6">
                        We’ve sent an OTP to your email/phone. Enter it below to
                        verify your account.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShowOtp(false);
                        setOtpBoxes(Array(OTP_LEN).fill(""));
                        setFinalOtp("");
                      }}
                      className="cursor-pointer text-[12px] text-black/50 hover:text-black/80 transition"
                      title="Back to Register"
                    >
                      ✕
                    </button>
                  </div>

                  <form className="mt-5 space-y-5" onSubmit={handleOtpSubmit}>
                    <input type="hidden" name="otp" value={finalOtp} />

                    <div className="flex flex-wrap gap-3">
                      {otpBoxes.map((val, idx) => (
                        <input
                          key={idx}
                          id={`otp-${idx}`}
                          name={`otp_${idx + 1}`}
                          type="text"
                          required
                          inputMode="numeric"
                          maxLength={1}
                          value={val}
                          placeholder="•"
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                          className="h-12 w-12 sm:h-14 sm:w-14 text-center text-[18px] font-semibold border border-black/15 bg-transparent outline-none focus:border-black/30"
                        />
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-full bg-[#8a6f55] px-7 py-2 text-[12px] font-semibold uppercase tracking-wide text-white hover:bg-[#7a5f47] transition"
                      >
                        Verify OTP
                      </button>

                      <button
                        type="button"
                        onClick={handleResendOtp}
                        className="cursor-pointer text-[13px] text-black/55 hover:text-black/80 transition font-serif"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-black/10" />
        </div>
      </section>
    </>
  );
}
