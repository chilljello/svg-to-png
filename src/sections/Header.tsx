import { useAtomValue, useSetAtom } from "jotai";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@/assets/logo.svg?react";
import { theme } from "@/state";

const Header = () => {
  const currentTheme = useAtomValue(theme);
  const setTheme = useSetAtom(theme);

  return (
    <header>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
        <h1>
          <Logo style={{ height: "1.5em", flexShrink: 0 }} />
          SVG to PNG
        </h1>
        <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.95 }}>
          This app allows you to make icon sets for your own native applications
        </p>
      </div>
      <button
        type="button"
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        title={currentTheme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        aria-label="Toggle theme"
        style={{
          background: "transparent",
          border: "none",
          padding: "8px",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        <FontAwesomeIcon icon={currentTheme === "light" ? faMoon : faSun} />
      </button>
    </header>
  );
};

export default Header;
