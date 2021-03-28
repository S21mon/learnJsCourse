import Clock from './clock.js';

const DEFAULT_TICK_MS = 1000;

class ExtendedClock extends Clock {
    constructor(delay) {
        super(delay);
        this.delay = delay;
    }

    start() {
        this.render();
        this.timer = setTimeout(() => this._render(), this.delay);
    }
}

const clock = new ExtendedClock(DEFAULT_TICK_MS);