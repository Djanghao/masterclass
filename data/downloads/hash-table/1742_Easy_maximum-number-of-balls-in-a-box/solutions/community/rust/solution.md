# Rust || 3ms || beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5297576/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5297576/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_balls(low_limit: i32, high_limit: i32) -> i32 {
        let mut counts = [0; 100];
        let digit_sum = |n| -> usize {
            let mut x = n;
            let mut sum = 0;
            while x > 0 {
                sum += x % 10;
                x /= 10;
            }
            sum as usize
        };
        let mut max = 0;
        for i in low_limit..=high_limit {
            let idx = digit_sum(i);
            counts[idx] += 1;
            max = max.max(counts[idx]);
        }
        max
    }
}
```