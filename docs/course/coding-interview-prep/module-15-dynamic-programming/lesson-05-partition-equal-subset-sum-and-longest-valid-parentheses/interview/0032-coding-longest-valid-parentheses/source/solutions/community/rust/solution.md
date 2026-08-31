# Rust stack solution 0ms

**Author:** Tomyyy-1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/5840253/](https://leetcode.com/problems/longest-valid-parentheses/solutions/5840253/)

---

# Code
```rust []
impl Solution {
    pub fn longest_valid_parentheses(s: String) -> i32 {
        s.chars().enumerate()
            .fold((0, vec![-1]), |(mut max, mut stack), (i, c)| {
                match c {
                    '(' => stack.push(i as i32),
                    ')' => {
                        stack.pop();
                        match stack.last() {
                            Some(&j) => max = max.max(i as i32 - j),
                            None => stack.push(i as i32),
                        }
                    }
                    _ => unreachable!(),
                }
                (max, stack)
            }).0
    }
}
```