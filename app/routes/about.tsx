export default function About() {
  return (
    <div className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* App Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
          About <span className="text-green-500">GlobeScope Explorer 🌍</span>
        </h1>

        {/* Project Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1663427929917-333d88949f7a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="World Map"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GlobeScope Explorer is a modern web application that allows users
              to explore detailed country information including capitals,
              regions, subregions, population statistics, and national flags.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The application is built using React Router v7 for seamless
              navigation and Tailwind CSS for a responsive and clean UI. It
              integrates the REST Countries API to provide real-time global data.
            </p>
          </div>
        </div>

        {/* Developer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-10 rounded-2xl shadow-md">

          {/* LEFT SIDE — Developer Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hi, I'm Govind Kumar 👋
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              I am a passionate Frontend Developer focused on building modern,
              responsive, and user-friendly web applications. I enjoy working
              with real APIs and creating clean UI experiences.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              🔎 I am currently searching for a <span className="font-semibold text-green-500">
              Remote Frontend Internship
              </span> opportunity where I can grow, contribute, and gain real-world
              experience.
            </p>

            <p className="text-gray-700 mb-6">
              🌍 English Level: <span className="font-semibold text-green-500 ">Intermediate</span>
            </p>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "React Router", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "REST APIs", "Vite"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Developer Image */}
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/241536803?v=4"
              alt="Developer"
              className="rounded-2xl shadow-lg w-80"
            />
          </div>

        </div>

      </div>
    </div>
  );
}