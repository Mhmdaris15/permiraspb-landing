import { useReveal } from "../hooks/useReveal";
import { Atmosphere } from "../components/atmosphere/Atmosphere";
import { Chrome } from "../components/layout/Chrome";
import { Hero } from "../components/sections/Hero";
import { Manifesto } from "../components/sections/Manifesto";
import { Chapters } from "../components/sections/Chapters";
import { Bridge } from "../components/sections/Bridge";
import { Dispatches } from "../components/sections/Dispatches";
import { Documentation } from "../components/sections/Documentation";
import { Archive } from "../components/sections/Archive";
import { Stats } from "../components/sections/Stats";
import { Voices } from "../components/sections/Voices";
import { Structure } from "../components/sections/Structure";
import { Join } from "../components/sections/Join";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  useReveal();

  return (
    <>
      <Atmosphere />
      <Chrome />
      <Hero />
      <Manifesto />
      <Chapters />
      <Bridge />
      <Dispatches />
      <Documentation />
      <Archive />
      <Stats />
      <Voices />
      <Structure />
      <Join />
      <Footer />
    </>
  );
};
