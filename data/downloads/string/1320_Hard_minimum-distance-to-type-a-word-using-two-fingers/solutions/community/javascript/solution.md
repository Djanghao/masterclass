# JavaScript Dynamic Programming & Dijkstra's (2 solutions)

**Author:** stevenkinouye
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/478763/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/478763/)

---

# Dynamic Programming (fastest)
```javascript
/**
 * @param {string} word
 * @return {number}
 */
const map = {
  A: [0,0],
  B: [0,1],
  C: [0,2],
  D: [0,3],
  E: [0,4],
  F: [0,5],
  G: [1,0],
  H: [1,1],
  I: [1,2],
  J: [1,3],
  K: [1,4],
  L: [1,5],
  M: [2,0],
  N: [2,1],
  O: [2,2],
  P: [2,3],
  Q: [2,4],
  R: [2,5],
  S: [3,0],
  T: [3,1],
  U: [3,2],
  V: [3,3],
  W: [3,4],
  X: [3,5],
  Y: [4,0],
  Z: [4,1],
}

const distance = (ltr1, ltr2) => (
  Math.abs(map[ltr1][0] - map[ltr2][0]) + Math.abs(map[ltr1][1] - map[ltr2][1])
)

/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  const chars = new Set(word.split(''))
  const cache = new Array(word.length);
  for (let i = 0; i < cache.length; i++) cache[i] = {};
  const dfs = (left, right, next) => {
    if (next === word.length) return 0;
    const key = left === word[next - 1] ? right : left;
    if (cache[next][key] !== undefined) return cache[next][key];
    let res = dfs(word[next], right, next + 1) + distance(left, word[next]);
    res = Math.min(res, dfs(left, word[next], next + 1) + distance(right, word[next]));
    return cache[next][key] = res;
  }
  let min = Infinity;
  for (let char of chars) {
    min = Math.min(min, dfs(word[0], char, 1))
  }
  return min;
};
```

# Dijkstra's Algorithm (works)

```javascript
class MinHeap {
  constructor() {
    this.store = [];
  }

  isEmpty() {
    return this.store.length === 0;
  }

  pop() {
    if (this.store.length < 2) return this.store.pop();
    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  push(value) {
    this.store.push(value);
    this.heapifyUp(this.store.length - 1);
  }

  heapifyDown(parent) {
    const childs = [1,2].map((n) => parent * 2 + n).filter((n) => n < this.store.length);
    let child = childs[0];
    if (childs[1] && this.store[childs[1]].distance < this.store[child].distance) {
      child = childs[1];
    }
    if (child && this.store[child].distance < this.store[parent].distance) {
      const temp = this.store[child];
      this.store[child] = this.store[parent];
      this.store[parent] = temp;
      this.heapifyDown(child);
    }
  }

  heapifyUp(child) {
    const parent = Math.floor((child - 1) / 2);
    if (child && this.store[child].distance < this.store[parent].distance) {
      const temp = this.store[child];
      this.store[child] = this.store[parent];
      this.store[parent] = temp;
      this.heapifyUp(parent);
    }
  }
}

/**
 * @param {string} word
 * @return {number}
 */
const map = {
  A: [0,0],
  B: [0,1],
  C: [0,2],
  D: [0,3],
  E: [0,4],
  F: [0,5],
  G: [1,0],
  H: [1,1],
  I: [1,2],
  J: [1,3],
  K: [1,4],
  L: [1,5],
  M: [2,0],
  N: [2,1],
  O: [2,2],
  P: [2,3],
  Q: [2,4],
  R: [2,5],
  S: [3,0],
  T: [3,1],
  U: [3,2],
  V: [3,3],
  W: [3,4],
  X: [3,5],
  Y: [4,0],
  Z: [4,1],
}

const getDistance = (ltr1, ltr2) => (
  Math.abs(map[ltr1][0] - map[ltr2][0]) + Math.abs(map[ltr1][1] - map[ltr2][1])
)

/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  const heap = new MinHeap();
  for (let letter in map) {
    heap.push({ left: word[0], right: letter, pos: 1, distance: 0 });
  }
  const visited = word.split('').map(() => new Set());
  while (!heap.isEmpty()) {
    const { left, right, pos, distance } = heap.pop();
    if (pos === word.length) return distance;
    const key = left === word[pos - 1] ? right : left;
    if (visited[pos].has(key)) continue;
    visited[pos].add(key)
    heap.push({
      left: word[pos],
      right,
      pos: pos + 1,
      distance: distance + getDistance(left, word[pos])
    })
    heap.push({
      left,
      right: word[pos],
      pos: pos + 1,
      distance: distance + getDistance(right, word[pos])
    })
  }
};
```