import { ChangeEvent } from "react";
import { InstrumentName } from "soundfont-player";
import { useInstrument } from "../../state/Instrument/context";
import { options } from "./options";
import styles from "./InstrumentSelector.module.css";

export const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument();

  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);

  return (
    <select className={styles.instruments} onChange={updateValue} value={instrument}>
      {options.map(({ label, value }: SelectListOptions) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

type SelectListOptions = {
  label: string;
  value: string;
};
