// import React, { useState, useEffect } from "react";
// import { Search, Menu, X, ChevronUp } from "lucide-react";
// import logo from "../assets/logo.png";



// const nav =     <nav className="bg-gradient-to-r from-red-600 to-red-500 ">
// <div className="container mx-auto px-4 py-3">
//   {/* Desktop Navigation */}
//   <div className="hidden md:flex items-center justify-between">
//     <div className="flex items-center space-x-8">
//       {/* Pokémon Logo */}
//       <img src={logo} alt="Pokémon Logo" className="h-10 w-auto" />

//       {/* Navigation Links */}
//       <div className="flex space-x-6">
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium transition-colors"
//         >
//           Pokédex
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium transition-colors"
//         >
//           Games
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium transition-colors"
//         >
//           Community
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium transition-colors"
//         >
//           News
//         </a>
//       </div>
//     </div>

//     {/* Search Bar */}
//     <form onSubmit={handleSearch} className="w-1/3">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search Pokémon..."
//           className="w-full py-2 px-4 pl-10 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div className="absolute left-3 top-2.5 text-white/70">
//           <Search size={20} />
//         </div>
//       </div>
//     </form>
//   </div>

//   {/* Mobile Navigation */}
//   <div className="md:hidden flex items-center justify-between">
//     {/* Logo */}
//     <img src={logoUrl} alt="Pokémon Logo" className="h-8 w-auto" />

//     {/* Mobile Search and Menu Toggle */}
//     <div className="flex items-center space-x-2">
//       <button
//         onClick={toggleMenu}
//         className="p-2 text-white focus:outline-none"
//         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//       >
//         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//     </div>
//   </div>

//   {/* Mobile Menu */}
//   {isMenuOpen && (
//     <div className="md:hidden mt-3 pb-3 border-t border-white/20">
//       <form onSubmit={handleSearch} className="mt-3 mb-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search Pokémon..."
//             className="w-full py-2 px-4 pl-10 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="absolute left-3 top-2.5 text-white/70">
//             <Search size={20} />
//           </div>
//         </div>
//       </form>

//       <div className="flex flex-col space-y-3 px-2">
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium py-2"
//         >
//           Pokédex
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium py-2"
//         >
//           Games
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium py-2"
//         >
//           Community
//         </a>
//         <a
//           href="#"
//           className="text-white hover:text-yellow-300 font-medium py-2"
//         >
//           News
//         </a>
//       </div>
//     </div>
//   )}
// </div>
// </nav>




// const ModernPokemonNavbar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm);
//     // Here you would typically implement the actual search functionality
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//      const handleScroll = () => {
//        if (window.scrollY > 300) {
//          setShowScrollTop(true);
//        } else {
//          setShowScrollTop(false);
//        }
//      };
     
//      window.addEventListener('scroll', handleScroll);
//      return () => window.removeEventListener('scroll', handleScroll);
//    }, []);


//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };


//   return (
//      <>
     
//      </>
      
//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//            <button 
//            onClick={scrollToTop}
//            className="fixed bottom-6 right-6 p-3 rounded-full bg-red-600 shadow-lg text-white hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 z-50"
//            aria-label="Scroll to top"
//            >
//            <ChevronUp size={24} />
//            </button>
//           )}
          
          
//      );
//      {nav}
// };

// export default ModernPokemonNavbar;
