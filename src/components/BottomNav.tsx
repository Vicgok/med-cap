import { Home, Store, ShoppingCart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Catalogue", icon: Store, path: "/catalogue" },
    { name: "Cart", icon: ShoppingCart, path: "/cart" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav
      className={`fixed left-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "bottom-4 translate-y-0" : "bottom-0 translate-y-24"
      }`}
    >
      <div className="max-w-sm mx-auto bg-white rounded-full shadow-lg border border-[#E5E7EB] p-2 relative select-none">
        <div className="flex items-center justify-around relative">
          {navItems.map(({ name, icon: Icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <div key={name} className="relative flex-1">
                {isActive && (
                  <div className="absolute inset-0 bg-[#2E7D32] rounded-full transition-all duration-300 ease-out" />
                )}
                <button
                  onClick={() => handleNavigation(path)}
                  className="relative z-10 flex flex-col items-center justify-center w-full py-1.5 px-2 rounded-full transition-all duration-300 focus:outline-none select-none"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                  onTouchStart={(e) => e.preventDefault()}
                >
                  <Icon
                    size={20}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#6B7280]"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={`text-xs mt-0.5 transition-colors duration-300 ${
                      isActive
                        ? "text-white font-medium"
                        : "text-[#6B7280] font-normal"
                    }`}
                  >
                    {name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
