"use client"

import React from "react";
import type { IconType } from "react-icons";

interface IconListProps {
  lib: string;
}

const IconList = ({ lib }: IconListProps) => {
  const [icons, setIcons] = React.useState<{ [key: string]: IconType }>({});

  React.useEffect(() => {
    const loadIcons = async () => {
      try {
        const iconModule = await import(`react-icons/${lib}`);
        setIcons(iconModule);
      } catch (error) {
        console.error(`Failed to load icons for library: ${lib}`, error);
        setIcons({});
      }
    };
    loadIcons();
  }, [lib]);

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