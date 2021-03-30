export interface IDevice {
  toggle(): void;
}

export interface IWithStatus {
  getStatus(): void;
}

export class Device implements IDevice {
  protected power = false;

  protected message(msg: string): void {
    console.log(msg);
  }

  public toggle(): void {
    this.power = !this.power;
  }
}
