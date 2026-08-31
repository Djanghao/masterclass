# TypeScript Binary Search

**Author:** Hanaasagi
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267027/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3267027/)

---

```
function minimumTime(time: number[], totalTrips: number): number {
  // t is in [1, 10 ** 14]
  let left = 1;
  let right = 10 ** 14;

  while (left <= right) {
    // using binary search to guess a t
    let mid = left + Math.floor((right - left) / 2);
    // how many trips we could finish
    let total = 0;
    for (var t of time) {
      total += Math.floor(mid / t);
    }
    // not enough, guess a larger t in next round
    if (total < totalTrips) {
      left = mid + 1;
    } else {
      // to find the smallest t
      right = mid -1;
    }
  }

  return left;
}

```