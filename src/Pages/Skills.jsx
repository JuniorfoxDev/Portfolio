import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen p-6  bg-grid-pattern bg-[#111827] text-[#F3F4F6] overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px"
    }}>
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
          My Expertise
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Exploring the frontiers of technology with passion and precision. I transform complex problems into elegant digital solutions.
        </p>
      </header>
      <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-6xl">
        {[
          {
            icon: "code",
            title: "Software Development",
            sub: "Node.js, Express.js, MongoDB, Postgres",
            desc: "Capable of developing secure, scalable backends. Integrated cloud services (AWS, Firebase) for hosting and data management.",
            color: "pink-500",
            bg: "rgba(236, 72, 153, 0.2)",
            shadow: "#EC4899"
          },
          {
            icon: "interests",
            title: "Frontend Dev",
            sub: "React, NextJS, Angular, HTML, CSS, TailwindCSS",
            desc: "Specialized in building clean, responsive UIs. Experience creating reusable components, dynamic forms, and interactive dashboards",
            color: "blue-500",
            bg: "rgba(59, 130, 246, 0.2)",
            shadow: "#3B82F6"
          },
          {
            icon: "cloud",
            title: "Salesforce & Cloud",
            sub: "LWC, Apex, Azure, AWS",
            desc: "Built scalable Lightning Web Components for Salesforce apps. Skilled in cloud integrations and managing deployment pipelines.",
            color: "orange-500",
            bg: "rgba(249, 115, 22, 0.2)",
            shadow: "#F97316"
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative card p-8 flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition transform duration-300 hover:translate-y-[-10px] hover:scale-105 hover:shadow-2xl"
          >
            <div
              className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 card-neon"
              style={{
                boxShadow: `0 0 15px ${item.shadow}, 0 0 30px ${item.shadow}, 0 0 45px ${item.shadow}`
              }}
            ></div>
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
                animation: "glow 5s linear infinite"
              }}
            ></div>
            <div
              className="icon-container w-20 h-20 rounded-full flex items-center justify-center mb-6 transition duration-300"
              style={{ backgroundColor: item.bg }}
            >
              <span className={`material-icons text-4xl text-${item.color}`}>
                {item.icon}
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-1">
              <span className={`text-${item.color}`}>{item.title.split(" ")[0]}</span>{" "}
              {item.title.split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-gray-400 text-sm mb-4">{item.sub}</p>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
        </div>
      </div>
      <style>
        {`
          @keyframes glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .card:hover .card-neon {
            opacity: 0.08;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
