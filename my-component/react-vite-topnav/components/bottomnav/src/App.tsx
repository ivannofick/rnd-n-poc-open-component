import { useEffect, useState } from "react";
import styles from "./styles.css";

const BottomNav = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setPath(window.location.pathname);

    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    if (typeof window === "undefined") return;

    // 🔥 Fire custom event to host app
    const event = new CustomEvent("oc:navigate", { detail: { path: newPath } });
    window.dispatchEvent(event);

    // Optimistically mark active
    setPath(newPath);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠", path: "/" },
    { id: "search", label: "Search", icon: "🔍", path: "/search" },
    { id: "add", label: "Add", icon: "➕", path: "/add" },
    { id: "alerts", label: "Alerts", icon: "🔔", path: "/alerts" },
    { id: "profile", label: "Profile", icon: "👤", path: "/profile" },
  ];

  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${
            path === item.path ? styles.active : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
