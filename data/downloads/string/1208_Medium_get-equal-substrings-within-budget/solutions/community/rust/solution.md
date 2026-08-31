# [Rust] Average iterator enjoyer

**Author:** discreaminant2809
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5219141/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5219141/)

---

![Screenshot 2024-05-27 at 9.34.06\u202FPM.png](./images/0.png)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```rust
impl Solution {
    pub fn equal_substring(s: String, t: String, max_cost: i32) -> i32 {
        let (mut s_front, mut s_back) = (s.as_bytes().iter(), s.as_bytes().iter());
        let (mut t_front, mut t_back) = (t.as_bytes().iter(), t.as_bytes().iter());
        let mut max_len = 0_usize;
        let mut curr_cost = 0_i32;

        while let (Some(&s_byte_back), Some(&t_byte_back)) = (s_back.next(), t_back.next()) {
            curr_cost += s_byte_back.abs_diff(t_byte_back) as i32;

            while curr_cost > max_cost {
                curr_cost -= s_front
                    .next()
                    .unwrap()
                    .abs_diff(t_front.next().copied().unwrap()) as i32;
            }

            max_len = max_len.max(s_front.len() - s_back.len());
        }

        max_len as _
    }
}
```