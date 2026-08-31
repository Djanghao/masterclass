# [JavaScript] Neat: spiral trick

**Author:** mxn42
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162985/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162985/)

---

```js
const numberOfCleanRooms = (room) => {
  const visited = new Set()
  const cleaned = new Set()
  const traverse = (y, x, dy, dx) => {
    if (visited.has(`${[y, x, dy, dx]}`))
      return cleaned.size
    visited.add(`${[y, x, dy, dx]}`)
    cleaned.add(`${[y, x]}`)
    return room[y + dy]?.[x + dx] === 0 
      ? traverse(y + dy, x + dx, dy, dx)
      : traverse(y, x, dx, -dy)
  }
  return traverse(0, 0, 0, 1)
}
```

More math: vector
```js
    const vector = (y * 300 + x) * 4 + Math.abs(2 * dy + dx - 1)
    if (visited.has(vector))
      return cleaned.size
    visited.add(vector)
    cleaned.add(vector - vector % 4)
```