import { createElement } from "../../../utils";
import "./index.scss";

type TControlPanelHandlers = {
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export const createControlPanel = ({
  onNext,
  onPlay,
  onPrev,
}: TControlPanelHandlers): HTMLDivElement => {
  const controlPanelContainer: HTMLDivElement = createElement("div", {
    id: "controlPanelContainer",
  });

  const prevTrackBtn = createElement("button", {
    innerText: "Prev Track",
    id: "prevBtn",
    onclick: onPrev,
  });
  const playPauseBtn = createElement("button", {
    innerText: "Play || Pause",
    id: "playPauseBtn",
    onclick: onPlay,
  });
  const nextTrackBtn = createElement("button", {
    innerText: "Next Track",
    id: "nextBtn",
    onclick: onNext,
  });

  controlPanelContainer.appendChild(prevTrackBtn);
  controlPanelContainer.appendChild(playPauseBtn);
  controlPanelContainer.appendChild(nextTrackBtn);

  return controlPanelContainer;
};
