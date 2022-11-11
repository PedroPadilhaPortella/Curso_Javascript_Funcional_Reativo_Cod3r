const { mergeMap, map } = require("rxjs/operators");
const { from } = require("rxjs");

const obs1 = from([1, 2, 3, 4, 5]);
const obs2 = from([6, 7, 8, 9, 10]);

obs1
    .pipe(mergeMap((n1) => obs2.pipe(map((n2) => `${n1}, ${n2}`))))
.subscribe(console.log);
