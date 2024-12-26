"use client"

import React from "react";
import { IconType } from "react-icons/lib";
import { AvailableIcons } from "@/types/IAvailableIcons";

interface IconListProps {
  lib: AvailableIcons;
}

const IconList = ({ lib }: IconListProps) => {
  const [icons, setIcons] = React.useState<{ [key: string]: IconType }>({});
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadIcons = async () => {
      try {
        if (!lib) {
          throw new Error('Invalid library name');
        }

        // Special handling for FontAwesome
        const iconPath = lib === AvailableIcons.FontAwesome ? 'fa6' : lib;
        const iconModule = await import(`react-icons/${iconPath}`);
        setIcons(iconModule);
        setError(null);
      } catch (error) {
        console.error(`Failed to load icons for library: ${lib}`, error);
        setError(`Failed to load icons for ${lib}`);
        setIcons({});
      }
    };
    loadIcons();
  }, [lib]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      {Object.entries(icons).map(([iconName, Icon]) => 
        typeof Icon === 'function' ? (
          <div key={iconName} className="p-4 border rounded-lg flex flex-col items-center justify-center gap-2">
            <Icon size={24} />
            <span className="text-xs text-gray-600">{iconName}</span>
          </div>
        ) : null
      )}
    </>
  );
};

export default IconList; 