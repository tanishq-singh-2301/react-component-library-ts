import React from 'react';
import { Name } from '../../src';

export const Home = () => {
    return (
        <div className="h-full w-full">
            <main className="h-full w-full flex flex-col justify-evenly items-center bg-neutral-900">
                <span className="text-base font-semibold text-slate-50 underline underline-offset-4">Hello Ji</span>
                <Name name="Kaju" color="text-slate-50" />
            </main>
        </div>
    );
};
