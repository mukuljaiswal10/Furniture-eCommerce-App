import React from 'react'
export default function MapShowing() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.8537905798908!2d83.58321177493858!3d26.65316337119736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915f00738422fb%3A0x11c0d5189ae7978f!2sMukul%20Jaiswal%20Wordpress%20Developer!5e0!3m2!1sen!2sin!4v1766681666166!5m2!1sen!2sin";

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    
        <div className="h-px w-full bg-black/15" />

        
        <div className="mt-8 overflow-hidden bg-white/35 ring-1 ring-black/10 shadow-sm">
          {/* Responsive height */}
          <div className="relative h-[240px] sm:h-[340px] lg:h-[430px]">
            <iframe
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Mukul Jaiswal Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}