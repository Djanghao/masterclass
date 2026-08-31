# [JavaScript] 2105. Watering Plants II

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/1624383/](https://leetcode.com/problems/watering-plants-ii/solutions/1624383/)

---

---

- Weekly Contest 271 - https://leetcode.com/contest/weekly-contest-271/ranking/83/
  - Q1 answer
    - https://leetcode.com/problems/rings-and-rods/discuss/1624271/JavaScript-2103.-Rings-and-Rods
  - Q2 answer
    - https://leetcode.com/problems/sum-of-subarray-ranges/discuss/1624314/JavaScript-2104.-Sum-of-Subarray-Ranges
  - Q3 answer
    - https://leetcode.com/problems/watering-plants-ii/discuss/1624383/JavaScript-2105.-Watering-Plants-II
    - below
  - Q4 answer
    - https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/discuss/1626153/JavaScript-2106.-Maximum-Fruits-Harvested-After-at-Most-K-Steps

---

Hope it is simple to understand.

---

```
var minimumRefill = function (plants, capacityA, capacityB) {
    let n = plants.length,
        mid = Math.trunc(n / 2),
        remainA = capacityA, // remaining
        remainB = capacityB,
        refills = 0;
    for (let i = 0; i < mid; i++) {
        if (remainA < plants[i])           (remainA = capacityA), refills++;
        if (remainB < plants[n - 1 - i])   (remainB = capacityB), refills++;
        remainA -= plants[i];
        remainB -= plants[n - 1 - i];
    }
    return refills + (n % 2 && plants[mid] > Math.max(remainA, remainB));
};
```

---
