import { TAudioSystemSignal, TVolumeSignals } from "./../typings/signals";
import {
  TBaseSignals,
  TRadioSignal,
  TSignal,
  TTvSignal,
} from "../typings/signals";

export const POWER_SIGNAL: TSignal<TBaseSignals> = {
  type: "power",
};

export const CHANNEL_SIGNAL = (channel: number): TTvSignal => ({
  type: "channel",
  payload: channel,
});

export const FREQUENCY_SIGNAL = (frequency: string): TRadioSignal => ({
  type: "frequency",
  payload: frequency,
});

export const PLAY_SIGNAL: TAudioSystemSignal = { type: "play" };

export const PAUSE_SIGNAL: TAudioSystemSignal = { type: "pause" };

export const NEXT_TRACK_SIGNAL: TAudioSystemSignal = { type: "next_track" };

export const PREV_TRACK_SIGNAL: TAudioSystemSignal = { type: "prev_track" };

export const VOLUME_UP_SIGNAL: TSignal<TVolumeSignals> = { type: "volume_up" };

export const VOLUME_DOWN_SIGNAL: TSignal<TVolumeSignals> = {
  type: "volume_down",
};
