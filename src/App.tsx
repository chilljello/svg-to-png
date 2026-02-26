import { useEffect } from "react";
import { useAtomValue } from "jotai";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Input from "@/sections/Input";
import Options from "@/sections/Options";
import Output from "@/sections/Output";
import { theme } from "@/state";
import "@/components/tooltip";
import "./App.css";

const App = () => {
  const currentTheme = useAtomValue(theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
  <>
    <Header />
    <main>
      <Input />
      <Options />
      <Output />
    </main>
    <Footer />
  </>
  );
};

export default App;
