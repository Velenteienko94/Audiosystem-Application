import { TTrack } from "../../../typings/track";
import { createElement, secondsToTimeString } from "../../../utils";
import "./index.scss";

export const createStatusBar = ({
  name,
  artist,
  duration,
}: TTrack): HTMLDivElement => {
  const statusBar = createElement("div", { id: "statusBar" });
  const currentTitle = createElement("div", { innerHTML: name, id: "title" });
  const currentArtist = createElement("span", {
    innerHTML: artist,
    id: "artist",
  });
  const currentDuration = createElement("span", {
    innerHTML: secondsToTimeString(duration),
    id: "duration",
  });

  statusBar.appendChild(currentTitle);
  statusBar.appendChild(currentArtist);
  statusBar.appendChild(currentDuration);

  return statusBar;
};
