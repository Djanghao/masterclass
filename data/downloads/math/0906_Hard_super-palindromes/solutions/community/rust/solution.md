# Rust backtracking solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1197431/](https://leetcode.com/problems/super-palindromes/solutions/1197431/)

---

The square root of **super-palindrome** (also palindrome) requires that the sum of the squares of each digit be less than 10.

```rust
use std::ops::RangeInclusive;

impl Solution {
    pub fn superpalindromes_in_range(left: String, right: String) -> i32 {
        let mut answer = 0;
        if let (Ok(l), Ok(r)) = (left.parse::<u64>(), right.parse::<u64>()) {
            {
                let mut v = Vec::with_capacity(6);
                Self::backtrack(&mut answer, &mut v, &(l..=r), false);
            }
            {
                let mut v = Vec::with_capacity(6);
                Self::backtrack(&mut answer, &mut v, &(l..=r), true);
            }
        }
        answer
    }
    fn backtrack(answer: &mut i32, v: &mut Vec<u64>, range: &RangeInclusive<u64>, odd: bool) {
        if v.len() == 6 {
            let digits = if let Some(pos) = v.iter().position(|&d| d != 0) {
                &v[pos..]
            } else {
                &v
            };
            let mut n = 0;
            for &d in digits.iter() {
                n = n * 10 + d;
            }
            for &d in digits.iter().rev().skip(if odd { 1 } else { 0 }) {
                n = n * 10 + d;
            }
            if range.contains(&(n.saturating_mul(n))) {
                *answer += 1;
            }
        } else {
            let sum = v.iter().map(|d| d * d).sum::<u64>();
            for u in 0..=9 {
                if sum * 2 + u * u * if odd { 1 } else { 2 } < 10 {
                    v.push(u);
                    Self::backtrack(answer, v, range, odd);
                    v.pop();
                }
            }
        }
    }
}
```