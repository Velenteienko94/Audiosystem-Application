import { TAlbum, TTrack } from "../../typings/track";
import { ISignalReceiver, TAudioSystemSignal } from "../../typings/signals";
import { Device, IWithStatus } from "../index";
import { createElement } from "../../utils";

type TAudioSystem = IWithStatus & ISignalReceiver<TAudioSystemSignal>;

export class AudioSystem extends Device implements TAudioSystem {
  private isPlaying = false;
  private volume = 0;
  private maxVolume = 10;
  private currTrack: TTrack | null = null;
  private album: TAlbum | null = null;
  private audioElement: HTMLAudioElement = createElement("audio");

  private get currTrackIndex(): number {
    if (!this.album || !this.currTrack) throw new Error("No album");

    const index = this.album.tracks.findIndex(
      ({ name }) => this.currTrack?.name === name
    );

    return index > 0 ? index : 0;
  }

  private play(state: 0 | 1): void {
    if (!this.power) throw new Error("Device is off");

    if (!this.album || !this.currTrack) throw new Error("No album");

    if (!state) {
      this.isPlaying = false;

      this.message(`${this.currTrack.name} is paused`);

      return;
    }

    this.isPlaying = true;

    this.message(`${this.currTrack.name} is playing`);
  }

  private nextTrack(): void {
    if (!this.album || !this.currTrack) throw new Error("No album");

    if (this.currTrackIndex === this.album.tracks.length - 1) return;

    this.currTrack = this.album.tracks[this.currTrackIndex + 1];

    this.message(`Changed track to ${this.currTrack.name}`);
  }

  private prevTrack(): void {
    if (!this.album || !this.currTrack) throw new Error("No album");

    if (this.currTrackIndex === 0) return;

    this.currTrack = this.album.tracks[this.currTrackIndex - 1];

    this.message(`Changed track to ${this.currTrack.name}`);
  }

  private increaseVolume(): void {}

  private decreaseVolume(): void {}

  receiveSignal(signal: TAudioSystemSignal): void {
    switch (signal.type) {
      case "power":
        this.toggle();
        break;

      case "play":
        this.play(1);
        break;

      case "pause":
        this.play(0);
        break;

      case "next_track":
        this.nextTrack();
        break;

      case "prev_track":
        this.prevTrack();
        break;

      default:
        throw new Error(
          `Unknown audio system signal received. Signal: ${signal.type}`
        );
    }
  }

  public changeAlbum(nextAlbum: TAlbum): void {
    this.isPlaying = false;
    this.album = nextAlbum;
    this.currTrack = this.album.tracks[0];

    this.message(`Changed album to ${this.album.artist} - ${this.album.name}`);
  }

  public getStatus(): void {
    console.log(this);
  }

  public get element(): HTMLAudioElement {
    return this.audioElement;
  }

  public get currentTrack(): TTrack | null {
    return this.currTrack;
  }

  public get playing(): boolean {
    return this.isPlaying;
  }
}
