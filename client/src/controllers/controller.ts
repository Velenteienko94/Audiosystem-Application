import {
  ISignalDispatcher,
  ISignalReceiver,
  TBaseDeviceSignal,
} from "../typings/signals";

export class Controller<ST = TBaseDeviceSignal>
  implements ISignalDispatcher<ST> {
  public dispatchSignal(receiver: ISignalReceiver<ST>, signal: ST) {
    receiver.receiveSignal(signal);
  }
}
