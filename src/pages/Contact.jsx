import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactCard({ icon, title, children, href, refProp }) {
  return (
    <div
      ref={refProp}
      className="flex items-start gap-4 p-4 bg-white/10 dark:bg-white/5 rounded-lg shadow-sm opacity-0 w-fit"
    >
      <span className="material-symbols-outlined text-primary mt-1">{icon}</span>
      <div>
        <h3 className="font-bold">{title}</h3>
        {href ? (
          <a
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary "
            href={href}
          >
            {children}
          </a>
        ) : (
          <p className="text-text-light dark:text-text-dark">{children}</p>
        )}
      </div>
    </div>
  );
}

function FloatingInput({ id, label, refProp, type = "text" }) {
  return (
    <div ref={refProp} className="relative opacity-0">
      <input
        className="peer h-10 w-full border-b-2 border-gray-300 text-text-light dark:text-text-dark  placeholder-transparent focus:outline-none focus:border-primary"
        id={id}
        name={id}
        placeholder={label}
        type={type}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ id, label, rows = 4, refProp }) {
  return (
    <div ref={refProp} className="relative opacity-0">
      <textarea
        className="peer w-full border-b-2 border-gray-300 text-text-light dark:text-text-dark bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
        id={id}
        name={id}
        placeholder={label}
        rows={rows}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const formRefs = useRef([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // HERO fade-in
    gsap.fromTo(heroRef.current,{ opacity: 0, y: -50 }, {
      opacity: 1,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    // CONTACT CARDS staggered reveal
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.15,
        }
      );
    });

    // FORM inputs staggered reveal
    formRefs.current.forEach((input, i) => {
      gsap.fromTo(
        input,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: input,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });

  }, []);

  return (
    <div className="min-h-screen  text-text-light dark:text-text-dark font-sans flex flex-col">
      {/* HEADER */}
    

      {/* HERO */}
      <section
        ref={heroRef}
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 @[480px]:gap-8 @[480px]:rounded-xl dark:bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6))]
"
      
      >
        <div className="flex flex-col gap-2 text-center text-foreground">
          <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
            Connect with Zenfratech
          </h1>
          <h2 className="text-sm font-normal leading-normal @[480px]:text-base">
            We'd love to hear from you. Reach out with any questions or for more
            information.
          </h2>
        </div>
      </section>

      {/* MAIN */}
      <main className="flex flex-col gap-8 p-4">
        {/* CONTACT INFO */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4 px-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ContactCard
              icon="phone"
              title="Phone"
              href="tel:+2349065440424"
              refProp={(el) => (cardRefs.current[0] = el)}
            >
              +(234)9065440424
            </ContactCard>
            <ContactCard
              icon="email"
              title="General Inquiries"
              href="mailto:info@zenfratech.edu"
              refProp={(el) => (cardRefs.current[1] = el)}
            >
              info@zenfratech.edu
            </ContactCard>
            <ContactCard
              icon="school"
              title="Admissions"
              href="mailto:admissions@zenfratech.edu"
              refProp={(el) => (cardRefs.current[2] = el)}
            >
              admissions@zenfratech.edu
            </ContactCard>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4 px-4">
            Send Us a Message
          </h2>
          <form className="space-y-6 bg-white/10 dark:bg-white/5 p-6 rounded-lg shadow-sm">
            <FloatingInput id="name" label="Your Name" refProp={(el) => (formRefs.current[0] = el)} />
            <FloatingInput id="email" label="Your Email" type="email" refProp={(el) => (formRefs.current[1] = el)} />
            <FloatingInput id="subject" label="Subject" refProp={(el) => (formRefs.current[2] = el)}d/>
            <FloatingTextarea id="message" label="Your Message" rows={4} refProp={(el) => (formRefs.current[3] = el)} />
            <button
              type="submit"
              className="w-full flex items-center justify-center h-12 px-5 bg-primary text-primary-foreground  font-bold rounded-lg hover:bg-[#BB86FC] transition-colors hover:text-white opacity-0"
              ref={(el) => (formRefs.current[4] = el)}
            >
              Submit
            </button>
          </form>
        </section>

       
      </main>

     
    </div>
  );
}
