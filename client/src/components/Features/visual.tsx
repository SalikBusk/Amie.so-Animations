import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";
import Image from "../../../node_modules/next/image";

type Props = {
  id: string;
  image: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
  return (
    <div
      className={classNames(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const OtherVisual = ({ id, image }: Props) => {
  return (
    <Visual id={id}>
      {image ? (
        <Image alt="" fill src={image} className="object-cover object-center"/>
      ) : (
        <div className="bg-black"></div>
      )}
    </Visual>
  );
};
