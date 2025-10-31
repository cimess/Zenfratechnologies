// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroVideo from "/video/5377775-uhd_2160_3840_25fps.mp4";
import { InputGroupDropdown } from "@/components/searchComponent";
import { useNavigate } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef([]);
  const navigate=useNavigate()

  useEffect(() => {
    // Hero Parallax
    gsap.fromTo(heroRef.current,{
      y:-50,opacity:0
    },
  {
    y:0,
    opacity:1,
    duration:1.5,
    ease:"power3.out"
  })
    gsap.to(heroRef.current, {
  y:60,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal animations for features
    featuresRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );
    });


  }, []);


  const handleCourseShowCase=()=>{
    console.log("clicked")
    navigate("/showCourse")
  }

  return (
   <div className="w-full min-h-screen bg-background text-foreground font-sans flex flex-col overflow-x-hidden scrollbar-hide relative">

 
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)] bg-cover bg-center bg-no-repeat p-4 relative w-full z-[1]"
      > <div className="max-w-4xl mx-auto mb-[40px]">
        <h1 className="text-foreground text-4xl md:text-6xl text-center leading-tight max-w-4xl mb-[50px]">
         Zenfratechnologies
        </h1>
       
        </div>
        <h2 className="text-muted-foreground text-lg md:text-xl mt-4 text-center max-w-2xl mt-5 ">
         Empowering the Next Generation of Software Innovators 
        </h2>
               <div className="absolute bottom-8 flex flex-col items-center gap-2 text-primary animate-bounce z-5">
          <span className="material-symbols-outlined">arrow_downward</span>
          <p className="text-sm text-foreground">Scroll Down</p>
        </div>
      </section>
       <div className="w-full mb-8">
  <InputGroupDropdown />
</div>

      {/* FEATURES */}
      <section className=" py-20 px-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">

       
        

        {[
          {
            title: "Ultimate Python Program",
            description:"best development enterprice ever men ",
              price:"NGN 200k",
          
            img: "/boxPics/python22.jpg",
          },
          {
            title: "React-18 Beginer-dvance",
            logo:"/boxPics/React.svg",
            description:"best development enterprice ever men ",
            price:"NGN 200k", 
            style:"linear-gradient(0deg, rgba(104, 177, 241, 0.96), rgba(193, 86, 222, 0.7))",
            img: ""
          },
          {
            title: "Ultimate Javascript Program",
            description:"best development enterprice ever men ",
             price:"NGN 200k",
            img: "/boxPics/js.jpg",
          },
          {
            title: "Machine Learning and AI",
            description:"best development enterprice ever men ",
            price:"NGN 200k",
            img: "/boxPics/pexels-tara-winstead-8386369.jpg",
          },
          {
            title: "Ultimate Python Program",
            description:"best development enterprice ever men ",
              price:"NGN 200k",
         img: "/boxPics/python22.jpg",
          
          },
          {
            title: "React-18 Beginer-advance",
            logo:"/boxPics/React.svg",
            description:"best development enterprice ever men ",
            price:"NGN 200k", 
            style:"linear-gradient(0deg, rgba(104, 177, 241, 0.96), rgba(193, 86, 222, 0.7))",
           
          },
          {
            title: "Ultimate Javascript Program",
            description:"best development enterprice ever men ",
             price:"NGN 200k",
          img: "/boxPics/js.jpg",
          },
          {
            title: "Machine Learning and AI",
            description:"best development enterprice ever men ",
            price:"NGN 200k",
            img: "/boxPics/pexels-tara-winstead-8386369.jpg",
          },
        ].map((feature, i) => (
          <div
           key={i}
            ref={(el) => (featuresRef.current[i] = el)}
            className="md:w-[350px] aspect-square border border-black/15 dark:border-white/15 flex flex-col gap-3 rounded  bg-white/10 dark:bg-black shadow"
            onClick={handleCourseShowCase}>
          <div
           
            className={`${feature.style?feature.style:"bg-cover "} bg-center w-full h-[70%] rounded relative border-b border-gray-300`}
          style={{
  backgroundImage: (() => {
    const layers = [];

    // Dark mode overlay first
    if (document.documentElement.classList.contains("dark")) {
      layers.push("linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0))");
    }

    // Always include feature.style if it exists
    if (feature.style) {
      layers.push(feature.style);
    }

    // Add image only if provided
    if (feature.img) {
      layers.push(`url(${feature.img})`);
    }

    return layers.join(", ");
  })(),
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}

          >
         {feature?.logo &&  <img className="absolute h-15 w-15 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" src={feature.logo} />}
          </div>
          {/* the text base part of the card */}
          <div className="w-[80%] m-auto ">
             <p className="text-foreground text-xl font-bold">{feature?.title}</p>
            <p className="text-gray-500">{feature?.description}</p>
            <p>{feature?.price}</p>
          </div>
          </div>
        ))}
        </section>
    </div>
  );
}
