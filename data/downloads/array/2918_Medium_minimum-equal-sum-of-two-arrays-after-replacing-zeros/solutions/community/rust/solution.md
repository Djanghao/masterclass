# [🦀] Rust O(n+m)/O(1) solution

**Author:** Tsimon-Dorakh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4232208/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4232208/)

---

# Complexity
- Time complexity: O(n+m)
- Space complexity: O(1)

# Code
```
impl Solution {
    pub fn min_sum(ls: Vec<i32>, rs: Vec<i32>) -> i64 {
        let (mut lsum, mut l0) = (0, 0);
        for x in ls {
            lsum += (x as i64).max(1);
            if (x == 0) { l0 += 1; }
        }

        let (mut rsum, mut r0) = (0, 0);
        for x in rs {
            rsum += (x as i64).max(1);
            if (x == 0) { r0 += 1; }
        }

        if (lsum < rsum && l0 == 0) { return -1; }
        if (lsum > rsum && r0 == 0) { return -1; }

        lsum.max(rsum)
    }
}
```