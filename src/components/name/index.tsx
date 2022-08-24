import React, { useEffect } from 'react';

export interface NameProps {
    name: string;
    color: string;
}

export const Name = ({ name, color }: NameProps) => {
    useEffect(() => {
        console.log('Hi 👋, from react-compo.');
    }, []);

    return <span className={`text-base font-semibold ${color}`}>{name}</span>;
};
