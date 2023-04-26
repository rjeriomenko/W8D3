class Clock {
    constructor() {
        // console.log(this);
        const startTime = new Date(Date.now()) 
        this.hours = startTime.getHours();
        this.minutes = startTime.getMinutes();
        this.seconds = startTime.getSeconds();
        this.printTime();
        setInterval( () => {
            this._tick();
        }, 1000);
        // setInterval(this._tick.bind(this), 1000);
    };

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    };

    _tick() {
        this.seconds++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        };
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        };

        if (this.hours === 24) {
            this.hours = 0;
        };
        // console.log(this)
        return this.printTime();
    };
};
    
// const clock = new Clock();
function testAddNums() {

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if(numsLeft === 0) {
        rl.close()
        return completionCallback(sum);
    };

    if(numsLeft > 0) {
        rl.question("Enter a number:", answer => {
            return addNumbers(sum + parseInt(answer), numsLeft - 1, completionCallback);
        });
    };

};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
};

Function.prototype.myBind = function(context) {
    return () => {
        this.apply(context)
    };
};


class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp
    turnOn.myBind(lamp)(); // this is the same as myBoundTurnOn();

class Lion {
    constructor() {
        this.name = "Leon";
    };
};

const leon = new Lion();
turnOn.myBind(leon)();