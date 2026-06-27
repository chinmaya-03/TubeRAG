const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500 cursor-pointer">
          🎥 TubeRAG
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a
            href="#features"
            className="hover:text-red-500 transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="hover:text-red-500 transition"
          >
            About
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;