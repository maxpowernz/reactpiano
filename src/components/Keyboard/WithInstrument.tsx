import { instrument } from "soundfont-player";
import { SoundfontProvider } from "../../adapters/soundfont/SoundfontProvider";
import { useSoundFont } from "../../adapters/soundfont/useSoundFont";
import { useInstrument } from "../../state/Instrument/context";
import { useMount } from "../../utils/useMount";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;

  //const { loading, play, stop, load } = useSoundFont({ AudioContext });
  const { instrument } = useInstrument();

  //useMount(load);

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}></SoundfontProvider>
  );
};
