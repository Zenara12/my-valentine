
import React, { useState, useCallback, useMemo } from 'react';
import { MESSAGES, TEDDY_IMAGE_URL } from './constants';

const App: React.FC = () => {
    const [view, setView] = useState<'invite' | 'celebration'>('invite');
    const [messageIndex, setMessageIndex] = useState(-1);
    const [yesScale, setYesScale] = useState(1);
    const [noScale, setNoScale] = useState(1);

    const handleNoClick = useCallback(() => {
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
        setYesScale((prev) => prev + 0.4);
        setNoScale((prev) => Math.max(0.6, 1 - ((messageIndex + 1) * 0.05)));
    }, [messageIndex]);

    const handleYesClick = useCallback(() => {
        setView('celebration');
    }, []);

    const handleReset = useCallback(() => {
        setView('invite');
        setMessageIndex(-1);
        setYesScale(1);
        setNoScale(1);
    }, []);

    const currentQuestion = useMemo(() => {
        if (messageIndex === -1) return "My Lady Will you be my Valentine? ❤️";
        return `${MESSAGES[messageIndex]} ❤️`;
    }, [messageIndex]);

    if (view === 'celebration') {
        return (
            <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center text-center p-8 overflow-hidden animate-in fade-in duration-500">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                    <div className="absolute top-10 left-1/4 animate-bounce text-white text-4xl">❤️</div>
                    <div className="absolute top-1/3 right-1/4 animate-ping text-white text-4xl">💖</div>
                    <div className="absolute bottom-1/4 left-1/2 animate-pulse text-white text-4xl">💕</div>
                    <div className="absolute top-1/2 left-10 animate-bounce text-white text-3xl">💗</div>
                    <div className="absolute bottom-10 right-10 animate-pulse text-white text-5xl">💘</div>
                </div>
                
                <div 
                    className="bg-center bg-no-repeat bg-cover aspect-square rounded-full w-64 mb-8 border-8 border-white/30 shadow-2xl" 
                    style={{ backgroundImage: `url("${TEDDY_IMAGE_URL}")` }}
                />
                
                <span className="material-symbols-outlined text-[80px] text-white mb-2">celebration</span>
                <h2 className="text-white text-5xl font-bold mb-4 px-4 leading-tight">YAY! Happy Valentine's Day! ❤️</h2>
                <p className="text-white/90 text-xl font-medium max-w-xs px-4">You've made me the happiest person ever!</p>
                
                <button 
                    onClick={handleReset}
                    className="mt-12 bg-white text-primary px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                >
                    See you soon!
                </button>
            </div>
        );
    }

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            {/* Header */}
            <header className="flex items-center p-4 pb-2 justify-between">
                <div className="text-primary flex size-12 shrink-0 items-center justify-start">
                    <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h2 className="text-primary/80 text-sm font-bold uppercase tracking-widest flex-1 text-center pr-12">
                    Special Invite
                </h2>
            </header>

            {/* Main Content */}
            <main className="flex flex-col flex-1 items-center justify-center p-6 text-center space-y-8">
                {/* Hero Circle */}
                <div className="w-full max-w-xs aspect-square bg-primary/10 rounded-full flex items-center justify-center relative floating border-4 border-white dark:border-primary/20 shadow-xl shadow-primary/10">
                    <div 
                        className="bg-center bg-no-repeat bg-cover aspect-square rounded-full w-[80%]" 
                        style={{ backgroundImage: `url("${TEDDY_IMAGE_URL}")` }}
                    />
                    <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-4 max-w-md">
                    <h1 className="text-primary tracking-tight text-[42px] font-bold leading-tight min-h-[100px] transition-all duration-300">
                        {currentQuestion}
                    </h1>
                    <p className="text-primary/60 text-lg font-medium leading-normal px-4">
                        I've been thinking of a million ways to ask, but simple is best. You mean the world to me!
                    </p>
                </div>

                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm pt-4 items-center justify-center">
                    <button 
                        onClick={handleYesClick}
                        className="scale-dynamic w-full sm:flex-1 bg-primary text-white text-xl font-bold py-5 rounded-full shadow-xl shadow-primary/40 hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2 z-10"
                        style={{ '--yes-scale': yesScale } as React.CSSProperties}
                    >
                        <span className="material-symbols-outlined">favorite</span>
                        Yes!
                    </button>
                    
                    <button 
                        onClick={handleNoClick}
                        className="no-scale-dynamic w-full sm:flex-1 border-2 border-primary/20 bg-white/50 dark:bg-white/10 text-primary/70 text-lg font-bold py-5 rounded-full hover:bg-primary/5 transition-all z-0"
                        style={{ '--no-scale': noScale } as React.CSSProperties}
                    >
                        No
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;
