# [JavaScript] Easy to understand - 2 solutions - BFS & DFS

**Author:** poppinlp
**Votes:** 14
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/466839/](https://leetcode.com/problems/jump-game-iii/solutions/466839/)

---

### SOLUTION 1

After reading this problem, the first strategy came out is BFS. So I use a `visited` set and a `queue` to implement it. It's pretty straight forward I think.

```js
const canReach = (arr, start) => {
  const visited = new Set();
  const queue = [start];
  for (let len = 0, max = arr.length; len < queue.length; ++len) {
    const idx = queue[len];
    if (visited.has(idx)) continue;
    if (arr[idx] === 0) return true;
    visited.add(idx);
    idx + arr[idx] < max && queue.push(idx + arr[idx]);
    idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
  }
  return false;
};
```

And we could optimize it by changing the value in `arr` to `-1` which is outside of `[0, arr.length]` to discard the `visited` set. Here's the code:

```js
const canReach = (arr, start) => {
  const queue = [start];
  for (let len = 0, max = arr.length; len < queue.length; ++len) {
    const idx = queue[len];
    if (arr[idx] === -1) continue;
    if (arr[idx] === 0) return true;
    idx + arr[idx] < max && queue.push(idx + arr[idx]);
    idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
    arr[idx] = -1;
  }
  return false;
};
```

### SOLUTION 2

We could do it in DFS way also based on recursion.

```js
const canReach = (arr, start) => {
  const val = arr[start];
  if (val === 0) return true;
  if (val === -1) return false;
  arr[start] = -1;
  return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};
```

Here's an one-line version for strategy above.
I know it's really hard to read. >.<

```js
const canReach = (arr, start, val = arr[start]) => val === 0 || (arr[start] = -1, val !== -1) && ((start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val)));
```