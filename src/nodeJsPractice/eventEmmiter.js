import { EventEmitter } from "node:events";

class School extends EventEmitter {
  startPeriod() {
    console.log("Class Started");

    setTimeout(() => {
      this.emit("bellRing", {
        period: "first",
        text: "period ended",
      });
    }, 2000);
  }
}

export default School;
