import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Playground } from "../Playground/Playground";

export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
