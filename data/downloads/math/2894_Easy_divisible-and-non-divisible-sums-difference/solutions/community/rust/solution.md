# Rust Oneline Solution

**Author:** io80686
**Votes:** 1
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144044/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144044/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn difference_of_sums(n: i32, m: i32) -> i32 {
        (1..=n).sum::<i32>() - ((1..=n).filter(|x| x % m == 0).sum::<i32>() << 1)
    }
}
```