import { useEffect,useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

const featuresSample = [{
   title:"Interactive Projects",
   subtitle:"Ship real apps from day one",
   icon:"🚀",
   style:"linear-gradient(120deg, rgba(255,255,255,0.04), rgba(255,255,0.02),",
   img:"/boxPics/js.jpg"
},
{
title:"Hands-on Exercises",
subtitle:"practice with bite-sized tasks",
icon:"🧰",
  style: "linear-gradient(120deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02))",
    img: "/boxPics/python22.jpg",
},
{
    title: "Lifetime Access",
    subtitle: "Rewatch whenever you want",
    icon: "♾️",
    style: "linear-gradient(120deg, rgba(255,255,255,0.03), rgba(0,0,0,0.02))",
    img: "/boxPics/pexels-tara-winstead-8386369.jpg",
  },]


  export default function CourseShowCase(){
   const rootRef= useRef(null)
   const heroRef= useRef(null);
const cardRef = useRef(null);
const ctaRef = useRef(null);
const featureRef=useRef([])
   const[isDark,setIsDark]=useState(typeof document!=="undefined"&& document.documentElement.classList.contains("dark"))

   //  observe changes to <html class="> so dark mode toggles reactively udate UI";

   useEffect(()=>{
      if(typeof window === "undefined")return 
      const obs = new MutationObserver(()=>{
         setIsDark(document.documentElement.classList.contains("dark"));
      })
  
  obs.observe(document.documentElement, {attribute: true, attributeFilter:["class"]})
  return ()=>obs.disconnect()
   },[]);


   // Gsap : entrance + card hover tilt 

   useEffect(()=>{
const q = gsap.utils.selector(rootRef);
// hero entrance

gsap.from(heroRef.current,{
   y:-24,
   opacity:1,
   duration:0.9,
   ease:"power3.out",
   stagger:0.05,

})
 
// features reveal 

featureRef.current.forEach((el,idx)=>{
   if(!el)return;
   gsap.fromTo(el,{
      opacity:0,y:24,scale:0.98
   },
{
   opacity:1,
   y:0,
   scale:1,
   duration:0.8,
   ease:"power3.out",
   delay: 0.15+ idx *0.08,
   scrollTrigger:{
      trigger:el,
      start:"top 85%",
      toggleActions:"play none none reverse"
   },
})
}
)
//  CTA pop

gsap.from(ctaRef.current, {
   y:20,
   opacity:0,
   duration:0.9,
   ease:"back.out(1.2)",
   scrollTrigger:{
      trigger:ctaRef.current,
      start: "top 90%"
   }
})


},[] )

// helper to build layered background correctly (keeps css valid even if img missing)

const buildBg=(feature)=>{
   const layers = []
   //  dark overlay (top-most) only in dark mode;

   if(isDark) layers.push("linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.0))")
if(feature.style) layers.push(`url(${feature.img})`)
return layers.join(", ")
   }

return(
   <section ref={rootRef} className="w-full max-w-6xl mx-auto py-16 px-4"> 
<div ref={heroRef} className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h1 className=" text-4xl md:text-5xl font-bold leading-tight text-forground">Master Modern Web Apps</h1>
<p className="mt-4 text-muted-foreground max-w-prose">
   Learn the industry workflow - build production-grade React apps with TypeScript, testing, and deploy workflows.
   Practical, project-first, no fluff.
</p>

<div className="mt-8 flex items-center gap-4">
<button 
ref={ctaRef}
className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-[1.03] transform transistion"
aria-label="Enroll now"
>Enroll Now</button>
</div>
</div>

{/* CARD */}

<div className="flex-1 flex justify-center md:justify-end border border-black/10 dark:border-white/10 rounded"
>
   <article
   ref={cardRef}
aria-labelledby="course-title"
className="w-full max-w-[520px] rounded-2xl shadow-2xl overflow-hidden bg-card relative"
>

   <div className="p-6 md:p-8 bg-black/20 backdrop-blur-sm">
   <h2 id="course-title" className="text-2xl font-bold text-foreground">
      React Fundamentals - Build Real Apps
   </h2>
   <p className="mt-2 text-muted-foreground">
A forcused, project-driven course that gets you deploying real React + TypeScript apps
   </p>

   <div className="mt-4 flex gap-3 flex-wrap">
       <span className="inline-flex items-center gap-2 bg-[var(--muted)] px-3 py-1 rounded-full text-sm">Beginner → Pro</span>
                <span className="inline-flex items-center gap-2 bg-[var(--muted)] px-3 py-1 rounded-full text-sm">8 hrs • 140 lessons</span>
                <span className="inline-flex items-center gap-2 bg-[var(--muted)] px-3 py-1 rounded-full text-sm">Lifetime access</span> 
   </div>
   <div className="mt-6 flex gap-3">
      <button className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 rounded-md font-semibold shadow hover:brightness-105 transition">
         Start Free Preview
      </button>
      <button className="px-4 py-2 rounded-md border border-white/10 text-foreground hover:bg-white/3 transition">
      Curriculum
      </button>
   </div>
   </div>
   {/* subtle decorative footer */}

<div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center text-xs text-muted-foreground">
   <div>Instructor:M.Instructor</div>
   <div>⭐ 4.8 • 12k students</div>
   </div> 
</article>
   </div>
</div>
{/* FEATURES GRID */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featuresSample.map((f, idx) => (
          <div
            key={idx}
            ref={(el) => (featureRef.current[idx] = el)}
            className="rounded-xl overflow-hidden shadow-md bg-card-foreground/5"
          >
            <div
              className="w-full h-44 bg-cover bg-center"
              style={{
                backgroundImage: buildBg(f),
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 h-full flex flex-col justify-end">
                <div className="text-xl font-semibold text-foreground">{f.icon} {f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* long description (premium copy) */}
      <div className="mt-12 prose prose-invert max-w-none text-foreground">
        <h3>Why this course works</h3>
        <p>
          We teach by building. Every module is a short, laser-focused project — so you ship working features fast and keep momentum.
          Notes, exercises, and quick reference sheets are included so you can apply what you learn immediately.
        </p>

        <h4>Who this is for</h4>
        <p>Developers who want practical, production-ready skill — no filler. Perfect if you want to get job-ready building modern front-end apps.</p>

        <h4>What's included</h4>
        <ul>
          <li>8 hours of HD video</li>
          <li>140 bite-sized lessons</li>
          <li>Downloadable project source & assets</li>
          <li>Certificate & lifetime access</li>
        </ul>
      </div>
   </section>
)
}