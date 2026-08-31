# Binary search on solution space

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/3901142/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/3901142/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The number of candies, given the tastiness, can be calculated in linear time and is monotonic. So we can binary search on the solution space.

# Complexity
- Time complexity: $O(N*log(Nk))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximum_tastiness(mut price: Vec<i32>, k: i32) -> i32 {
        price.sort_unstable();

        let count_candies = |min_diff| {
            let mut count = 1;
            let mut diff = 0;
            for i in 1..price.len() {
                diff += price[i] - price[i - 1];
                if diff >= min_diff {
                    diff = 0;
                    count += 1;
                }
            }
            count
        };

        let mut lo = 0;
        let mut hi = *price.last().unwrap() - *price.first().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo + 1) / 2;
            if count_candies(mid) >= k { lo = mid }
            else { hi = mid - 1 }
        }
        lo
    }
}
```