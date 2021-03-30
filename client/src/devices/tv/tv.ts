import { Device } from "..";
import { ISignalReceiver, TTvSignal } from "../../typings/signals";

type TTvBrands = "samsung" | "panasonic" | "sony";

export class TV extends Device implements ISignalReceiver<TTvSignal> {
  public brand: TTvBrands;
  private channel = 0;

  private switchChannel(nextChannel: number): void {
    if (!this.power) throw new Error("TV is off");
    this.channel = nextChannel;

    console.log(`${this.brand} TV running on ${this.channel} channel`);
  }

  constructor(brand: TTvBrands) {
    super();
    this.brand = brand;
  }

  public receiveSignal(signal: TTvSignal): void {
    switch (signal.type) {
      case "power":
        this.toggle();
        break;

      case "channel":
        this.switchChannel(signal.payload as number);
        break;

      default:
        throw new Error(`Unknown TV signal received. Signal: ${signal.type}`);
    }
  }

  public get currentChannel(): number {
    return this.channel;
  }
}
