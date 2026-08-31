# Rust 2ms 🔥 2.10Mb ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/5489922/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/5489922/)

---

# Complexity
- Time complexity: $$O(sqrt(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn consecutive_numbers_sum(n: i32) -> i32 {
        let (mut k, mut ans) = (1, 0);
        loop {
            let x = k * (k-1) / 2;
            if n <= x {break;}
            if (n - x) % k == 0 {ans += 1;}
            k += 1;
        }
        ans
    }
}
```