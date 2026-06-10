import { RiMusicLine, RiHeartFill } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-groove-black border-t border-groove-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-groove-white rounded-full flex items-center justify-center">
              <RiMusicLine className="text-groove-black text-xs" />
            </div>
            <span className="font-display text-xl tracking-wider text-groove-white">
              THE GROOVE STUDIO
            </span>
          </div>

          {/* Center */}
          <p className="text-groove-gray-500 text-xs text-center">
            C-906, Raj Nagar Extension, Ghaziabad, Uttar Pradesh
          </p>

          {/* Right */}
          <p className="text-groove-gray-600 text-xs flex items-center gap-1">
            © {year} The Groove Studio. Made with
            <RiHeartFill className="text-groove-gray-500 text-xs" />
            Hemant.
          </p>
        </div>
      </div>
    </footer>
  );
}
