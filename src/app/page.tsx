"use client"

// src/components/IconSearch.js
import React, { useState } from 'react';
import * as Icons from 'react-icons/fa'; // Importa todos los íconos de Font Awesome como ejemplo

export default function Page() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filtrar íconos según el término de búsqueda
    const filteredIcons = Object.keys(Icons).filter(iconName =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                className='w-full p-2 border border-gray-300 rounded-md'
                type="text"
                placeholder="Buscar íconos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='grid grid-cols-4 gap-4'>
                {filteredIcons.map(iconName => {
                    const IconComponent = Icons[iconName as keyof typeof Icons];
                    return (
                        <div key={iconName} className='flex flex-col items-center justify-center'>
                            <div className='w-10 h-10 bg-gray-200 rounded-md'>
                                <IconComponent className='w-full h-full' color='black' />
                            </div>
                            <span>{iconName}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
