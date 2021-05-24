import { FunctionComponent } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";
import { usePressObserver } from "../PressObserver/usePressObserver";

type PressCallBack = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: PressCallBack;
  onDown: PressCallBack;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onUp, onDown, ...rest } = props;

  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      onMouseDown={onDown}
      onMouseUp={onUp}
      className={clsx(styles.key, styles[type], pressed && "is-pressed")}
      type="button"
      {...rest}>
      {label}
    </button>
  );
};
