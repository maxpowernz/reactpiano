import { SoundfontProvider } from "../../adapters/soundfont/SoundfontProvider";
import { useInstrument } from "../../state/Instrument/context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;

  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}></SoundfontProvider>
  );
};
