import {
  NEXT_TRACK_SIGNAL,
  PAUSE_SIGNAL,
  PLAY_SIGNAL,
  PREV_TRACK_SIGNAL,
} from "./../../constants/signals";
import { createStatusBar } from "./status-bar/status-bar";
import { AudioSystem } from "./../../devices/audio-system/audio-system";
import { createElement } from "../../utils";
import { createControlPanel } from "./controls/controls";
import { Controller } from "../../controllers";
import { TAudioSystemSignal } from "../../typings/signals";
import "./index.scss";

export const createAudioSystemPlayer = (
  audioSystem: AudioSystem
): HTMLDivElement => {
  const audioController = new Controller<TAudioSystemSignal>();

  const playHandler = (): void => {
    audioSystem.playing
      ? audioController.dispatchSignal(audioSystem, PAUSE_SIGNAL)
      : audioController.dispatchSignal(audioSystem, PLAY_SIGNAL);
  };

  const prevTrackHandler = (): void => {
    audioController.dispatchSignal(audioSystem, PREV_TRACK_SIGNAL);
    render();
  };

  const nextTrackHandler = (): void => {
    audioController.dispatchSignal(audioSystem, NEXT_TRACK_SIGNAL);
    render();
  };

  const audioSystemContainer: HTMLDivElement = createElement("div", {
    id: "audioSystemContainer",
  });

  const render = (): void => {
    const currentTrack = audioSystem.currentTrack;

    if (currentTrack) {
      const statusBarExists = document.getElementById("statusBar");
      const controlsExists = document.getElementById("controlPanelContainer");

      if (statusBarExists) audioSystemContainer.removeChild(statusBarExists);
      if (controlsExists) audioSystemContainer.removeChild(controlsExists);

      const statusBar = createStatusBar(currentTrack);

      const controlPanel = createControlPanel({
        onNext: nextTrackHandler,
        onPlay: playHandler,
        onPrev: prevTrackHandler,
      });

      audioSystemContainer.appendChild(statusBar);
      audioSystemContainer.appendChild(controlPanel);
    }
  };

  render();

  return audioSystemContainer;
};
