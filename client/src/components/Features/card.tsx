"use client";

import classNames from "classnames";
import { useFeatureStore } from "./store";
import Image from "../../../node_modules/next/image";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
  image?: string,
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity overflow-hidden",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {children}
      <button
        onClick={() => setFullscreenFeature(id)}
        className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button>
    </div>
  );
};

export const Nuuk = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Image fill alt="" src="/image/nuuk.jpg" className="object-cover object-center"/>
    </FeatureCard>
  );
};

export const Sisimiut = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <Image fill alt="" src="/image/sisimiut.jpg" className="object-cover object-center"/>
    </FeatureCard>
  );
};

export const Ilulissat = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <Image fill alt="" src="/image/ilulissat.jpg" className="object-cover object-center"/>
    </FeatureCard>
  );
};

export const Qaqortoq = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <Image fill alt="" src="/image/qaqortoq.jpg" className="object-cover object-center"/>
    </FeatureCard>
  );
};

export const Aasiaat = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
     <Image fill alt="" src="/image/Aasiaat.jpg" className="object-cover object-center"/>
    </FeatureCard>
  );
};

export const Maniitsoq = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <Image fill alt="" src="/image/maniistoq.jpeg" className="object-cover object-center"/>
    </FeatureCard>
  );
};
