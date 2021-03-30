import { Device } from "..";
import { ISignalReceiver, TRadioSignal } from "../../typings/signals";

export class Radio extends Device implements ISignalReceiver<TRadioSignal> {
  private frequency = "0.000";

  private changeFrequency(nextFrequency: string): void {
    if (!this.power) throw new Error("Radio is off");
    this.frequency = nextFrequency;

    console.log(`Radio running on ${this.frequency} frequency`);
  }

  public receiveSignal(signal: TRadioSignal): void {
    switch (signal.type) {
      case "power":
        this.toggle();
        break;

      case "frequency":
        this.changeFrequency(signal.payload as string);
        break;

      default:
        throw new Error(
          `Unknown radio signal received. Signal: ${signal.type}`
        );
    }
  }
}
