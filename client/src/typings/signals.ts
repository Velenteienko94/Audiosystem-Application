export type TSignal<T extends string> = {
  type: T;
  payload?: unknown;
};

export type TBaseSignals = "power";
export type TVolumeSignals = "volume_up" | "volume_down";
export type TTvSignalTypes = "channel" | TBaseSignals | TVolumeSignals;
export type TRadioSignalTypes = "frequency" | TBaseSignals | TVolumeSignals;
export type TSamsungSignalTypes = "web" | TTvSignalTypes;
export type TAudioSystemSignalTypes =
  | "play"
  | "pause"
  | "next_track"
  | "prev_track"
  | TVolumeSignals
  | TBaseSignals;

export type TBaseDeviceSignal = TSignal<TBaseSignals>;
export type TTvSignal = TSignal<TTvSignalTypes>;
export type TSamsungTvSignal = TSignal<TSamsungSignalTypes>;
export type TRadioSignal = TSignal<TRadioSignalTypes>;
export type TAudioSystemSignal = TSignal<TAudioSystemSignalTypes>;

export interface ISignalReceiver<ST> {
  receiveSignal(signal: ST): void;
}

export interface ISignalDispatcher<ST> {
  dispatchSignal(receiver: ISignalReceiver<ST>, signal: ST): void;
}
