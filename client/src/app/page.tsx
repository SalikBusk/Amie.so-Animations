'use client'

import { Aasiaat, Ilulissat, Maniitsoq, Nuuk, Qaqortoq, Sisimiut } from "@/components/Features/card";
import { useFeatureStore } from "@/components/Features/store";
import { FeatureTitle } from "@/components/Features/title";
import { OtherVisual } from "@/components/Features/visual";
import Hero from "@/components/Hero";
import { useHidePageOverflow } from "@/Hooks/toggle-page-overflow";
import { useEscapePress } from "@/Hooks/use-escape-press";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";



const features = [
  {
    title: "Nuuk",
    id: "todo-list",
    card: Nuuk,
    visual: OtherVisual,
  },
  {
    title: "Sisimiut",
    id: "colors",
    card: Sisimiut,
    visual: OtherVisual,
  },
  {
    title: "Ilulissat",
    id: "availability",
    card: Ilulissat,
    visual: OtherVisual,
  },
  {
    title: "Qaqortoq",
    id: "music",
    card: Qaqortoq,
    visual: OtherVisual,
  },
  {
    title: "Aasiaat",
    id: "scheduling-links",
    card: Aasiaat,
    visual: OtherVisual,
  },
  {
    title: "Maniitsoq",
    id: "team",
    card: Maniitsoq,
    visual: OtherVisual,
  },
];

function App() {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex w-full items-start gap-20">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}

export default App;