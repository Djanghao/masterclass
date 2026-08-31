# simple O(n) JS and TS.

**Author:** anuchataowkaen
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/4911153/](https://leetcode.com/problems/distance-between-bus-stops/solutions/4911153/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

> sCW = Sum Clockwise, cCW= Count Clockwise
> sCCW = Sum CounterClockWise, cCCW= Count CounterClockwise

### follow-up
i think we can use pointer left and right on one loop

# Code
``` javascript []
function distanceBetweenBusStops(
  distance,
  start,
  destination,
) {
  const n = distance.length
  let i = start
  let sCW = 0
  let cCW = 0

  let sCCW = 0
  let cCCW = n

  // clockwise
  while (cCW < n) {
    sCW += distance[i]
    i++
    cCW++
    if (cCW < n && i > n - 1) i = 0
    if (i === destination) break
  }

  // counterClockWise
  i = start
  while (cCCW > 0) {
    if (cCCW > 0 && i <= 0) i = n - 1
    else i--

    sCCW += distance[i]
    if (i === destination) break
    cCCW--
  }

  return Math.min(sCW, sCCW)
}
```
``` typescript []
function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number,
): number {
  const n = distance.length
  let i = start
  let sCW = 0
  let cCW = 0

  let sCCW = 0
  let cCCW = n

  // clockwise
  while (cCW < n) {
    sCW += distance[i]
    i++
    cCW++
    if (cCW < n && i > n - 1) i = 0
    if (i === destination) break
  }

  // counterClockWise
  i = start
  while (cCCW > 0) {
    if (cCCW > 0 && i <= 0) i = n - 1
    else i--

    sCCW += distance[i]
    if (i === destination) break
    cCCW--
  }

  return Math.min(sCW, sCCW)
}
```