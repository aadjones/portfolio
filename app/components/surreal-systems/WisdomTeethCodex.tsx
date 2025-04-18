import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface Tooth {
  id: number;
  name: string;
  position: string;
  alignment: string;
  motto: string;
  wisdom: string;
  mythicTrait: string;
  crimes: string;
  deathCause: string;
  coords: { top: string; left: string };
}

export default function WisdomTeethCodex() {
  const [selectedTooth, setSelectedTooth] = useState<Tooth | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const teeth: Tooth[] = [
    {
      id: 1,
      name: "1. Krohl, the Half-Born",
      position: "Upper Right",
      alignment: "Neutral Erupted",
      motto: "I emerge only in dreams.",
      wisdom: "Discretion is the better part of valor.",
      mythicTrait: "Visible in vision, invisible in war",
      crimes: "Fomenting migraines",
      deathCause: "Betrayed by the second molar",
      coords: { top: "38%", left: "15%" }
    },
    {
      id: 16,
      name: "16. Varkon of the Bone Wall",
      position: "Upper Left",
      alignment: "Lawful Stasis",
      motto: "I was built for the war that never came.",
      wisdom: "Always die with your boots on.",
      mythicTrait: "Holds the line — cannot be moved by mortal floss",
      crimes: "Hoarding calcium",
      deathCause: "Internment by drillwork",
      coords: { top: "38%", left: "74%" }
    },
    {
      id: 17,
      name: "17. Molgur, the Entombed",
      position: "Lower Left",
      alignment: "Neutral Impacted",
      motto: "Even the buried can hunger.",
      wisdom: "Buy bitcoin; never sell.",
      mythicTrait: "Knows not what he presses against",
      crimes: "Pocketing bacteria",
      deathCause: "Crown amputation",
      coords: { top: "49%", left: "76%" }
    },
    {
      id: 32,
      name: "32. Sivrak, the Impatient",
      position: "Lower Right",
      alignment: "Chaotic Impacted",
      motto: "All kingdoms collapse inward.",
      wisdom: "Ignore it and it will go away",
      mythicTrait: "Leans eternally left",
      crimes: "Hygienist bribery",
      deathCause: "Root severance",
      coords: { top: "49%", left: "12%" }
    }
  ];

  const handleToothClick = (id: number) => {
    const tooth = teeth.find(tooth => tooth.id === id);
    if (tooth) {
      setSelectedTooth(tooth);
    }
  };

  const closeModal = () => {
    setSelectedTooth(null);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto pt-6 py-6">
      <h1 className="text-4xl font-bold text-amber-900 mb-2 tracking-wider font-serif">
        THE CODEX OF MOLAR WISDOM
      </h1>

      <div className="w-full rounded-t-3xl rounded-b-3xl px-4 sm:px-8 py-12 font-serif relative bg-gradient-to-b from-amber-50 via-amber-100/70 to-amber-50 shadow-[inset_0_0_30px_rgba(217,119,6,0.1)] border-l border-r border-amber-200/50">
        <div ref={imageRef} className="relative w-full max-w-md mx-auto mb-6 p-2 bg-transparent rounded-lg">
          <div className="relative w-full">
            <Image 
              src="/photos/wisdom/wisdom-teeth-codex.png" 
              alt="Dental panoramic X-ray with ancient symbols" 
              className="w-full h-auto rounded-lg shadow-lg"
              width={512}
              height={512}
              priority
            />
            {teeth.map((tooth) => (
              <div 
                key={tooth.id}
                onClick={() => handleToothClick(tooth.id)}
                className="absolute rounded-full cursor-pointer border border-amber-400/60 flex items-center justify-center"
                style={{
                  top: tooth.coords.top,
                  left: tooth.coords.left,
                  width: '8vw',
                  height: '8vw',
                  maxWidth: '40px',
                  maxHeight: '40px',
                  animation: 'pulseRing 3s infinite',
                  backgroundColor: 'transparent'
                }}
              >
                <span className="text-amber-200 text-xs font-bold">{tooth.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-amber mb-12 text-amber-900/90 text-center max-w-2xl mx-auto">
          <p className="italic text-lg">
            Herein lies the sacred knowledge of the Third Molars, gatekeepers of wisdom, 
            harbingers of pain. Their stories echo through the chambers of bone and memory.
          </p>
        </div>

        <p className="text-amber-800/80 mb-8 text-center font-medium">
          ~ Click on a tooth marker to reveal its ancient wisdom ~
        </p>

        {selectedTooth && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-amber-50 via-amber-100/80 to-amber-50 max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden border border-amber-300/50">
              <div className="bg-gradient-to-r from-amber-800 to-amber-700 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-amber-50">
                  {selectedTooth.name} <span className="font-normal text-amber-200">({selectedTooth.position})</span>
                </h2>
                <button onClick={closeModal} className="text-amber-200 hover:text-amber-50 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Alignment</h3>
                      <p className="text-amber-800/80">{selectedTooth.alignment}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Motto</h3>
                      <p className="text-amber-800/80 italic">&ldquo;{selectedTooth.motto}&rdquo;</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Wisdom Imparted</h3>
                      <p className="text-amber-800/80 italic">&ldquo;{selectedTooth.wisdom}&rdquo;</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Mythic Trait</h3>
                      <p className="text-amber-800/80">{selectedTooth.mythicTrait}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Known Crimes</h3>
                      <p className="text-amber-800/80">{selectedTooth.crimes}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-amber-900/90 font-semibold uppercase tracking-wider text-sm">Cause of Death</h3>
                      <p className="text-amber-800/80">{selectedTooth.deathCause}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes pulseRing {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.3);
            }
            70% {
              transform: scale(1.4);
              box-shadow: 0 0 0 10px rgba(251, 191, 36, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(251, 191, 36, 0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
