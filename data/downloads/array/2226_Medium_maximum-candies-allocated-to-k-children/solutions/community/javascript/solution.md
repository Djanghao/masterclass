# [JavaScript] 2226. Maximum Candies Allocated to K Children

**Author:** pgmreddy
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1908890/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1908890/)

---


**Weekly Contest 287**

- Q1 answer
  - https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/discuss/1908839/JavaScript-2224.-Minimum-Number-of-Operations-to-Convert-Time
- Q2 answer
  - https://leetcode.com/problems/find-players-with-zero-or-one-losses/discuss/1908871/JavaScript-2225.-Find-Players-With-Zero-or-One-Losses
- Q3 answer
  - https://leetcode.com/problems/maximum-candies-allocated-to-k-children/discuss/1908890/JavaScript-2226.-Maximum-Candies-Allocated-to-K-Children
  - **below**
    - Similar to some other DP problems, but this is greedy
    - **Less code** solution
    - **More code - with comments** solution

---

Hope it is simple to understand.

---

**Less code** solution

```
var maximumCandies = function (candies, k) {
    function ok(min_candy) {
        let count = 0;
        for (let candy of candies) count += Math.floor(candy / min_candy);
        return count >= k;
    }

    let l = 0,
        h = Math.max(...candies);

    while (l <= h) {
        let m = l + Math.trunc((h - l) / 2);
        if (ok(m)) l = m + 1;
        else h = m - 1;
    }
    return h;
};
```

---

**More code - with comments** solution

```
var maximumCandies = function (cand, k) {
    function is_good_number_of_candies(cmin) {
        let count = 0;
        for (let c of cand) {
            count += Math.trunc(c / cmin); // how many mins (cmin) can we give from this pile (c)
        }
        return count >= k;
    }

    let sum = cand.reduce((sum, x) => sum + x, 0);
    if (sum < k) return 0; // not enough, to give at least 1 candy

    let lo = 1; // 1 is possible
    let hi = cand.reduce((max, x) => Math.max(max, x), -Infinity); // max possible

    // since # of candies are too large, try binary search
    while (lo <= hi) {
        let mid = lo + Math.trunc((hi - lo) / 2);
        if (is_good_number_of_candies(mid)) {
            lo = mid + 1; // mid is good (##), try next one
        } else {
            hi = mid - 1;
        }
    }
    return lo - 1; // last good was mid, 1 below lo (## above)
};
```

---
