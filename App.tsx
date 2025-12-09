import React, { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { TreeMorphState } from './types';

// Main Application Component
const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeMorphState>(TreeMorphState.SCATTERED);
  const [interacted, setInteracted] = useState(false);

  const toggleState = useCallback(() => {
    setTreeState((prev) => 
      prev === TreeMorphState.SCATTERED 
        ? TreeMorphState.TREE_SHAPE 
        : TreeMorphState.SCATTERED
    );
    if (!interacted) setInteracted(true);
  }, [interacted]);

  return (
    <div className="relative w-full h-screen bg-[#010a05] text-white overflow-hidden">
      
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: false, toneMappingExposure: 1.5 }}>
          <Experience treeState={treeState} />
        </Canvas>
      </div>

      {/* UI Overlay Layer - Text Area */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center">
        
        {/* Main Greeting - Centered in Upper Part */}
        <div className={`mt-[12vh] text-center transition-all duration-1000 transform ${treeState === TreeMorphState.TREE_SHAPE ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2 blur-[1px]'}`}>
          <h1 className="font-['Montserrat'] font-semibold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FBF5D4] to-[#C5A059] drop-shadow-2xl mb-3 leading-tight tracking-[0.15em] whitespace-nowrap uppercase">
            Merry Christmas
          </h1>
          <p className="font-['Playfair_Display'] text-lg md:text-2xl text-[#e0f2e9] tracking-[0.2em] font-light italic opacity-80">
            Li Tiansheng
          </p>
        </div>

      </div>

      {/* Control Button - Bottom Right, Snowflake Icon */}
      <div className="absolute bottom-12 right-12 z-20 fade-in" style={{ animationDelay: '1.0s' }}>
        <button
          onClick={toggleState}
          className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-110 active:scale-95 active:rotate-90 shadow-lg shadow-gold/10"
          aria-label="Toggle Christmas Tree"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
          
          {/* Snowflake Icon */}
          <span className="text-2xl text-[#e0f2e9] filter drop-shadow-lg group-hover:rotate-180 transition-transform duration-700 ease-in-out">
            ❄️
          </span>
        </button>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-4 md:p-8">
          <div className="w-full h-full border border-[#C5A059] border-opacity-5 rounded-3xl"></div>
      </div>

    </div>
  );
};

export default App;