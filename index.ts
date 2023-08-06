import { map, concatAll } from 'rxjs/operators';
import { interval } from 'rxjs';
// doc https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall

//create and resolve basic promise
const samplePromise = (val) => new Promise((resolve) => resolve(val));
const addTwoPromise = (val) => new Promise((resolve) => resolve(val + 2));

//emit a value every 2 seconds
const srcInterval = interval(2000);

const obsObj = srcInterval.pipe(
  // map((val) => addTwoPromise(val)),
  map((val) => samplePromise(val)),
  //merge values from resolved promise
  concatAll()
);
//output: 'Example with Promise 0', 'Example with Promise 1'...
const subscribe = obsObj.subscribe((val) =>
  console.log('Example with Promise:', val)
);
