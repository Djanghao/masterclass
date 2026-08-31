# Simple JavaScript solution optimized for an interview

**Author:** zwilderrr
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/894710/](https://leetcode.com/problems/design-hit-counter/solutions/894710/)

---

Most of the solutions I saw seemed to be optimized for LeetCode performance, not interview performance (which is what counted, last time I checked)!

This solution accepts a time range and doesn't eject old timestamps


```
var HitCounter = function () {
  // quick lookups
  // shape -> { timestamp: count }
  this.hitHash = {};
};

HitCounter.prototype.hit = function (timestamp) {
  if (!this.hitHash[timestamp]) {
    this.hitHash[timestamp] = 0;
  }
  return ++this.hitHash[timestamp];
};

HitCounter.prototype.getHits = function (timestamp, range = 300) {
  let count = 0;
  let lowerBound = timestamp > range ? timestamp - range : 0;
  while (timestamp > lowerBound) {
    this.hitHash[timestamp] && (count += this.hitHash[timestamp]);
    timestamp--;
  }
  return count;
};
```

And for the es6 folks in the crowd:
```
class HitCounter {
  constructor() {
    this.hitHash = [];
  }

  hit(timestamp) {
    if (!this.hitHash[timestamp]) {
      this.hitHash[timestamp] = 0;
    }
    return ++this.hitHash[timestamp];
  }

  getHits(timestamp, range = 300) {
    let count = 0;
    let lowerBound = timestamp > range ? timestamp - range : 0;
    while (timestamp > lowerBound) {
      this.hitHash[timestamp] && (count += this.hitHash[timestamp]);
      timestamp--;
    }
	return count;
  }
}
```