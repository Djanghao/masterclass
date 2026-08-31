# Rust || Single line || O(n)

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5266392/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5266392/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
        nums.iter().max().unwrap() * k + (k * (k-1))/2
    }
}
```