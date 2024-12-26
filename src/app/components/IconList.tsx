"use client"

import React from "react";
import { IconType } from "react-icons/lib";
import { AvailableIcons } from "@/types/IAvailableIcons";
import * as Bi from "react-icons/bi";
import * as Fa6 from "react-icons/fa6";
import * as Ai from "react-icons/ai";
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

interface IconListProps {
  lib: AvailableIcons;
}

const ICON_MODULES: Record<AvailableIcons, { [key: string]: IconType }> = {
  [AvailableIcons.FontAwesome]: Fa6,
  [AvailableIcons.Bootstrap]: Bi,
  [AvailableIcons.AntDesign]: Ai,
  [AvailableIcons.Feather]: Fi,
  [AvailableIcons.GameIcons]: Gi,
  [AvailableIcons.Heroicons]: Hi,
  [AvailableIcons.Heroicons2]: Hi2,
  [AvailableIcons.IcoMoon]: Im,
  [AvailableIcons.Ionicons4]: Io,
  [AvailableIcons.Ionicons5]: Io5,
  [AvailableIcons.MaterialDesign]: Md,
  [AvailableIcons.RemixIcon]: Ri,
  [AvailableIcons.SimpleIcons]: Si,
  [AvailableIcons.SimpleLineIcons]: Sl,
  [AvailableIcons.TablerIcons]: Tb,
  [AvailableIcons.ThemifyIcons]: Ti,
  [AvailableIcons.VSCodeIcons]: Vsc,
  [AvailableIcons.WeatherIcons]: Wi,
  [AvailableIcons.BootstrapIcons]: Bs,
  [AvailableIcons.CssGG]: Cg,
  [AvailableIcons.Devicons]: Di,
  [AvailableIcons.FlatColorIcons]: Fc,
  [AvailableIcons.GrommetIcons]: Gr,
  [AvailableIcons.LucideIcons]: Lu,
  [AvailableIcons.RadixIcons]: Rx,
};

const IconList = ({ lib }: IconListProps) => {
  const [icons, setIcons] = React.useState<{ [key: string]: IconType }>({});
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!lib) {
      setError('Invalid library name');
      return;
    }

    // Use static imports instead of dynamic
    const iconModule = ICON_MODULES[lib];
    if (iconModule) {
      setIcons(iconModule);
      setError(null);
    } else {
      setError(`Icon library ${lib} not found`);
      setIcons({});
    }
  }, [lib]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(icons).map(([iconName, Icon]) => 
        typeof Icon === 'function' ? (
          <div key={iconName} className="p-4 border rounded-lg flex flex-col items-center justify-center gap-2">
            <Icon size={24} />
            <span className="text-xs text-gray-600">{iconName}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default IconList; 