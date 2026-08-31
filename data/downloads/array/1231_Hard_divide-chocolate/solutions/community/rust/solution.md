# Binary search

**Author:** mperepelitsyn
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/3879248/](https://leetcode.com/problems/divide-chocolate/solutions/3879248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary search on the solution space

# Complexity
- Time complexity: $$O(N*log(N/k))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximize_sweetness(sweetness: Vec<i32>, k: i32) -> i32 {
        let can_cut = |min_sweet| {
            let mut cuts = 0;
            let mut sum = 0;
            for s in &sweetness {
                sum += s;
                if sum >= min_sweet {
                    cuts += 1;
                    sum = 0;
                }
            }
            cuts > k
        };

        let mut lo = 0;
        let mut hi = sweetness.iter().sum::<i32>() / k.max(1) + 1;
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if !can_cut(mid) { hi = mid; }
            else { lo = mid + 1; }
        } 
        lo - 1
    }
}
```