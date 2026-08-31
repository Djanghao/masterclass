# Binary Search on Space

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/5925185/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/5925185/)

---

```javascript []
var equalizeWater = function (buckets, loss) {
  const lossFactor = 1 - loss / 100;

  const canEqualize = (target) => {
    let excess = 0, need = 0;
    buckets.forEach(water => {
      if (water > target) excess += (water - target) * lossFactor;
      else need += (target - water);
    });
    return excess >= need;
  };

  let low = 0, high = Math.max(...buckets);
  //high - low > 1e-6 checks if the difference between the current high and low values is greater than a small threshold (1e-6, or 0.000001).
  while (high - low > 1e-6) {
    let mid = (low + high) / 2;
    canEqualize(mid) ? (low = mid) : (high = mid);
  }

  return low;
};
```