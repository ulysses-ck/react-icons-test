"use client"

import React from "react";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Fi from "react-icons/fi";
import * as Gi from "react-icons/gi";
import * as Hi from "react-icons/hi";
import * as Hi2 from "react-icons/hi2";
import * as Im from "react-icons/im";
import * as Io from "react-icons/io";
import * as Io5 from "react-icons/io5";
import * as Md from "react-icons/md";
import * as Ri from "react-icons/ri";
import * as Si from "react-icons/si";
import * as Sl from "react-icons/sl";
import * as Tb from "react-icons/tb";
import * as Ti from "react-icons/ti";
import * as Vsc from "react-icons/vsc";
import * as Wi from "react-icons/wi";
import * as Bs from "react-icons/bs";
import * as Cg from "react-icons/cg";
import * as Di from "react-icons/di";
import * as Fc from "react-icons/fc";
import * as Gr from "react-icons/gr";
import * as Lu from "react-icons/lu";
import * as Rx from "react-icons/rx";
import type { IconType } from "react-icons";

interface IconListProps {
  lib: string;
}

type IconModule = {
  [key: string]: IconType;
};

const IconList = ({ lib }: IconListProps) => {
  const getIconSet = (lib: string): IconModule => {
    switch (lib) {
      case "fa": return Fa;
      case "ai": return Ai;
      case "bi": return Bi;
      case "fi": return Fi;
      case "gi": return Gi;
      case "hi": return Hi;
      case "hi2": return Hi2;
      case "im": return Im;
      case "io": return Io;
      case "io5": return Io5;
      case "md": return Md;
      case "ri": return Ri;
      case "si": return Si;
      case "sl": return Sl;
      case "tb": return Tb;
      case "ti": return Ti;
      case "vsc": return Vsc;
      case "wi": return Wi;
      case "bs": return Bs;
      case "cg": return Cg;
      case "di": return Di;
      case "fc": return Fc;
      case "gr": return Gr;
      case "lu": return Lu;
      case "rx": return Rx;
      default: return {};
    }
  };

  const icons = getIconSet(lib);

  return (
    <>
      {Object.entries(icons).map(([iconName, Icon]) => 
        typeof Icon === 'function' ? (
          <div key={iconName} className="p-4 border rounded-lg flex flex-col items-center justify-center gap-2">
            <Icon />
            <span className="text-xs text-gray-600">{iconName}</span>
          </div>
        ) : null
      )}
    </>
  );
};

export default IconList; 