import SoundFont, { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";
import { useRef, useState } from "react";

type Settings = {
  AudioContext: AudioContextType;
};

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;
  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export function useSoundFont({ AudioContext }: Settings): Adapted {
  let activeNodes: AudioNodesRegistry = {};

  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);
  const audio = useRef(new AudioContext());

  async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
    setLoading(true);
    const player = await SoundFont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  }

  async function play(note: MidiValue) {
    await resume();

    if (!player) return;

    const node = player.play(note.toString());
    activeNodes = { ...activeNodes, [note]: node };
  }

  async function stop(note: MidiValue) {
    await resume();
    if (!activeNodes[note]) return;

    activeNodes[note]!.stop();
    activeNodes = { ...activeNodes, [note]: null };
  }

  async function resume() {
    return audio.current.state === "suspended" ? await audio.current.resume() : Promise.resolve();
  }

  return { loading, current, load, play, stop };
}
