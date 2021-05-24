/// <reference types="react-scripts" />
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webKitAudioContext: AudioContextType;
}

type SoundFontType = typeof SoundFont;
