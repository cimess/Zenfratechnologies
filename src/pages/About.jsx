import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const coursePaths = [
  {
    name: "Front-end Development",
    img: "boxPics/vectorWebDesign.jpg",
    desc: "Master the art of creating sleek, interactive, and responsive web experiences. This path takes you from basic HTML and CSS to modern JavaScript frameworks like React and Next.js. By the end, you'll know how to turn any design idea into a stunning, user-friendly interface that just *feels* right."
  },
  {
    name: "Back-end Development",
    img: "boxPics/backend.jpg",
    desc: "Learn how to build the engines that power the web. From Node.js and Express to databases like MongoDB and PostgreSQL, this course path will teach you to architect scalable APIs, handle authentication, and make your apps lightning-fast and secure. If you love logic and problem-solving, this is your playground."
  },
  {
    name: "Mobile Development",
    img: "/boxPics/mobile.jpg",
    desc: "Build beautiful, high-performance apps that fit in your pocket. Dive into Android (Kotlin), iOS (Swift), and cross-platform tools like Flutter or React Native. You'll go from zero to publishing your own app, learning how to create seamless mobile experiences people can’t stop using."
  },
  {
    name: "Machine Learning & AI",
    img: "boxPics/ai.jpg",
    desc: "Step into the future of tech with hands-on AI and machine learning. From understanding neural networks and data preprocessing to building predictive models and AI-driven apps, this course gives you the skills to make data *think*. Perfect for curious minds ready to push the limits of innovation."
  }
];


export default function About() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
const missionRef = useRef(null);

useEffect(() => {
  if(containerRef.current){
    gsap.from(containerRef.current, { opacity:0, y:40, duration:1, ease:"power3.out" });
  }

  if(missionRef.current){
    gsap.from(missionRef.current, { opacity:1, y:30, duration:1, delay:0.3, ease:"power3.out" });
  }

  setTimeout(() => {
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity:0, y:80, rotateY:-10 },
        {
          opacity:1,
          y:0,
          rotateY:0,
          duration:1.2,
          ease:"power3.out",
          delay: i * 0.15,
          scrollTrigger: { trigger: card, start:"top 85%", toggleActions:"play none none reverse" }
        }
      );
    });
  }, 50);
}, []);


useEffect(() => {
  console.log("About mounted!", containerRef.current, missionRef.current);
}, []);

useEffect(() => {
  if(containerRef.current){
    gsap.to(containerRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
  }
}, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen  text-foreground dark:text-foreground font-display px-4 py-10 md:px-10 transition-colors duration-500"
    >      {/* HEADER */}
      <header className="flex flex-col items-center justify-between pb-6 dark:border-gray-700 gap-y-5">
        <h1 className="text-3xl md:text-4xl font-bold   text-center w-full">
        Learn. Build. Thrive.
        </h1>
        <h2 className="text-xl md:text-2xl">The smarter way to master coding and start your tech career.</h2>
      </header>

    

      {/* STAFF GRID */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        role="list"
        aria-label="Zenfratech learning paths"
      >
        {coursePaths.map((course, index) => (
          <article
            key={course.name}
            ref={(el) => (cardsRef.current[index] = el)}
            role="listitem"
            className="flex flex-col bg-white/10 dark:bg-white/5 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className="relative w-full aspect-square bg-center bg-cover"
              style={{
                backgroundImage: `url(${course.img})`
              }}
            >{
             document.documentElement.classList.contains("dark")? (<div className="absolute bg-black/40 inset-0"></div>):""}
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold text-foreground dark:text-foreground">
                  {course.name}
                </h3>
                <p className="mt-3 text-sm text-gray-900 dark:text-gray-400 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
