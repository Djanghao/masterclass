# [JavaScript] Easy to understand - map & BST

**Author:** poppinlp
**Votes:** 4
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/518845/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/518845/)

---

## Map

Actually, I don't get the point of this problem.
I just follow the description and to implement it.

- recordTweet
	- Using a map to store the tweet name and its time list.
- getTweetCountsPerFrequency
	- Calculate the interval count.
	- Traversal the time list to fill the result array.

```js
class TweetCounts {
  constructor() {
    this.freqInterval = {
      minute: 60,
      hour: 3600,
      day: 86400,
    };
    this.data = new Map();
  }

  recordTweet(name, time) {
    if (this.data.has(name) === false) {
      this.data.set(name, []);
    }
    this.data.get(name).push(time);
  }

  getTweetCountsPerFrequency(freq, name, start, end) {
    const interval = this.freqInterval[freq];
    const ret = new Uint16Array(Math.ceil((end - start + 1) / interval));
    if (this.data.has(name)) {
      for (const time of this.data.get(name)) {
        if (time > end || time < start) continue;
        ++ret[Math.floor((time - start + 1) / interval)];
      }
    }
    return ret;
  }
};
```

## BST

We could use a binary search tree to optimize it.
Actually, a self-balanced binary search tree is better. But JS has no such native data structure. And I don't wanna write too much code. So I just use a simple binary search tree here.

```js
const createNode = val => ({ val, left: null, right: null });
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val, cur = this.root) {
    const node = createNode(val);
    if (!this.root) { this.root = node; return; }
    if (val >= cur.val) {
      !cur.right ? (cur.right = node) : this.insert(val, cur.right);
    } else {
      !cur.left ? (cur.left = node) : this.insert(val, cur.left);
    }
  }
  traversal(low, high, interval, intervals, cur = this.root) {
    if (!cur) return;
    if (cur.val <= high && cur.val >= low) {
      ++intervals[Math.floor((cur.val - low + 1) / interval)];
    }
    cur.val > low && this.traversal(low, high, interval, intervals, cur.left);
    cur.val < high && this.traversal(low, high, interval, intervals, cur.right);
  }
};
class TweetCounts {
  constructor() {
    this.freqInterval = {
      minute: 60,
      hour: 3600,
      day: 86400,
    };
    this.data = new Map();
  }

  recordTweet(name, time) {
    if (this.data.has(name) === false) {
      this.data.set(name, new BinarySearchTree());
    }
    this.data.get(name).insert(time);
  }

  getTweetCountsPerFrequency(freq, name, start, end) {
    const interval = this.freqInterval[freq];
    const ret = new Uint16Array(Math.ceil((end - start + 1) / interval));
    this.data.has(name) && this.data.get(name).traversal(start, end, interval, ret);
    return ret;
  }
};
```
