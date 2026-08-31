# Binary search on solution space

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/3901111/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/3901111/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The number of piles, given the number of candies per child, can be calculated in linear time and is monotonic. So we can binary search on the solution space.

# Complexity
- Time complexity: $$O(N*log(k))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximum_candies(candies: Vec<i32>, k: i64) -> i32 {
        let count_piles = |n| {
            candies.iter().map(|&c| (c / n) as i64).sum::<i64>()
        };

        let mut lo = 0;
        let mut hi = *candies.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo + 1) / 2;
            if count_piles(mid) >= k { lo = mid }
            else { hi = mid - 1 }
        }
        lo
    }
}
```