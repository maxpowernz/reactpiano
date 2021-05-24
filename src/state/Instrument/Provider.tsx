import { FunctionComponent, useState } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./context";

export const InstrumentContextProvider: FunctionComponent = ({ children }) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
