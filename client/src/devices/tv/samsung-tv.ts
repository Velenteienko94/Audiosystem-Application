import { TSamsungTvSignal, TTvSignal } from "../../typings/signals";
import { TV } from "./tv";

export class SamsungTV extends TV {
  private connected = false;

  private connectToWeb(): void {
    this.connected = !this.connected;
    console.log(`${this.brand} TV is connected to the WEB`);
  }

  constructor() {
    super("samsung");
  }

  public receiveSignal(signal: TSamsungTvSignal) {
    switch (signal.type) {
      case "web":
        this.connectToWeb();
        break;

      default:
        super.receiveSignal(signal as TTvSignal);
    }
  }
}
