class PomodoroTimer {
    constructor() {
        this.workTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.leftTime = this.workTime;
        this.running = false;
        this.mode = 'work';
        this.interval = null;


        // Dom elements
        this.timeDosplay = document.getElementById('time')
        this.startBtn = document.getElementById('mode-label');
    }
}