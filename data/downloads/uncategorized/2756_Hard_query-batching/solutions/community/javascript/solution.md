# A generalization of LC2676

**Author:** cpcs
**Votes:** 7
**Link:** [https://leetcode.com/problems/query-batching/solutions/3695740/](https://leetcode.com/problems/query-batching/solutions/3695740/)

---

In [LC2676](https://leetcode.com/problems/throttle/description/), the batch is only one ID, now we need to create an array of keys to batch.

# Code
```
var QueryBatcher = function (queryMultiple, t) {
  this.queryMultiple = queryMultiple;
  this.t = t;
  this.batchedKeys = [];
  this.timerId = null;
  this.lastCallTime = 0;
};

QueryBatcher.prototype.getValue = function (key) {
  return new Promise((resolve) => {
    const currentTime = Date.now();
    const timeSinceLastCall = currentTime - this.lastCallTime;
    const timeRemaining = Math.max(0, this.t - timeSinceLastCall);

    this.lastCallTime = currentTime + timeRemaining;

    this.batchedKeys.push({ key, resolve });

    if (!this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => this.processBatchedKeys(), timeRemaining);
    }
  });
};

QueryBatcher.prototype.processBatchedKeys = async function () {
  const currentBatchedKeys = this.batchedKeys.slice();
  this.batchedKeys = [];
  this.timerId = null;

  const keys = currentBatchedKeys.map((obj) => obj.key);
  const resolves = currentBatchedKeys.map((obj) => obj.resolve);

  this.lastCallTime = Date.now();
  const resolvedValues = await this.queryMultiple(keys);

  for (let i = 0; i < keys.length; i++) {
    resolves[i](resolvedValues[i]);
  }
};

```