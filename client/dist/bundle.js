/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.dispatchSignal = function (receiver, signal) {
        receiver.receiveSignal(signal);
    };
    return Controller;
}());
var controller = new Controller();
var TV = /** @class */ (function () {
    function TV(brand) {
        this.power = false;
        this.channel = 0;
        this.brand = brand;
    }
    TV.prototype.switchChannel = function (next) {
        if (!this.power)
            throw new Error('TV is off');
        this.channel = next;
    };
    TV.prototype.receiveSignal = function (signal) {
        switch (signal.type) {
            case 'power':
                this.toggle();
                break;
            case 'channel':
                this.switchChannel(signal.payload);
                break;
            default:
                throw new Error('Unknown signal received');
        }
    };
    TV.prototype.toggle = function () {
        this.power = !this.power;
    };
    Object.defineProperty(TV.prototype, "currentChannel", {
        get: function () {
            return this.channel;
        },
        enumerable: false,
        configurable: true
    });
    return TV;
}());
var samsung = new TV('samsung');
controller.dispatchSignal(samsung, { type: 'power' });
controller.dispatchSignal(samsung, { type: 'channel', payload: 5 });
controller.dispatchSignal(samsung, { type: 'power' });
console.log(samsung);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBO0lBQUE7SUFJQSxDQUFDO0lBSFEsbUNBQWMsR0FBckIsVUFBc0IsUUFBeUIsRUFBRSxNQUFlO1FBQzlELFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFJcEM7SUFVRSxZQUFZLEtBQWdCO1FBUnBCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQVExQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBUE8sMEJBQWEsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFNTSwwQkFBYSxHQUFwQixVQUFxQixNQUFlO1FBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE1BQU07WUFFUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLE1BQU07WUFFUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU0sbUJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBVyw4QkFBYzthQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU87UUFDckIsQ0FBQzs7O09BQUE7SUFDSCxTQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3JELFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRSxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVFNpZ25hbCA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSVNpZ25hbFJlY2VpdmVyIHtcbiAgcmVjZWl2ZVNpZ25hbChzaWduYWw6IFRTaWduYWwpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVNpZ25hbERpc3BhdGNoZXIge1xuICBkaXNwYXRjaFNpZ25hbChcbiAgICByZWNlaXZlcjogSVNpZ25hbFJlY2VpdmVyLFxuICAgIHNpZ25hbDogVFNpZ25hbFxuICApOiB2b2lkXG59XG5cbnR5cGUgVEJhc2VDb250cm9sbGVyU2lnbmFscyA9ICdwb3dlcic7XG5cbmNsYXNzIENvbnRyb2xsZXIgaW1wbGVtZW50cyBJU2lnbmFsRGlzcGF0Y2hlciB7XG4gIHB1YmxpYyBkaXNwYXRjaFNpZ25hbChyZWNlaXZlcjogSVNpZ25hbFJlY2VpdmVyLCBzaWduYWw6IFRTaWduYWwpe1xuICAgIHJlY2VpdmVyLnJlY2VpdmVTaWduYWwoc2lnbmFsKTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxudHlwZSBUVHZCcmFuZHMgPSAnc3Vtc3VuZycgfCAncGFuYXNvbmljJyB8ICdzb255J1xuXG5jbGFzcyBUViBpbXBsZW1lbnRzIElTaWduYWxSZWNlaXZlciB7XG4gIHB1YmxpYyBicmFuZDogVFR2QnJhbmRzO1xuICBwcml2YXRlIHBvd2VyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhbm5lbDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHN3aXRjaENoYW5uZWwobmV4dDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvd2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RWIGlzIG9mZicpO1xuICAgIHRoaXMuY2hhbm5lbCA9IG5leHQ7XG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKGJyYW5kOiBUVHZCcmFuZHMpe1xuICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcbiAgfVxuXG4gIHB1YmxpYyByZWNlaXZlU2lnbmFsKHNpZ25hbDogVFNpZ25hbCk6IHZvaWQge1xuICAgIHN3aXRjaCAoc2lnbmFsLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Bvd2VyJzpcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICB0aGlzLnN3aXRjaENoYW5uZWwoc2lnbmFsLnBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHNpZ25hbCByZWNlaXZlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5wb3dlciA9ICF0aGlzLnBvd2VyO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50Q2hhbm5lbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWxcbiAgfVxufVxuXG5jb25zdCBzdW1zdW5nID0gbmV3IFRWKCdzdW1zdW5nJyk7XG5cbmNvbnRyb2xsZXIuZGlzcGF0Y2hTaWduYWwoc3Vtc3VuZywgeyB0eXBlOiAncG93ZXInIH0pXG5jb250cm9sbGVyLmRpc3BhdGNoU2lnbmFsKHN1bXN1bmcsIHsgdHlwZTogJ2NoYW5uZWwnLCBwYXlsb2FkOiA1IH0pO1xuY29udHJvbGxlci5kaXNwYXRjaFNpZ25hbChzdW1zdW5nLCB7IHR5cGU6ICdwb3dlcicgfSlcblxuY29uc29sZS5sb2coc3Vtc3VuZyk7Il0sInNvdXJjZVJvb3QiOiIifQ==