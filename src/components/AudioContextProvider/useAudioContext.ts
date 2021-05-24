import { Optional } from "../../domain/types";
import { accessContext } from "../../domain/audio";
import { useRef } from "react";

export function useAudioContext(): Optional<AudioContextType> {
  const AudioCtx = useRef(accessContext());
  return AudioCtx.current;
}
