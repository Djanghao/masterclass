# Rust solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5739185/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5739185/)

---

Spent lots of time figuring out the pattern for each `k`, until the boss 7 shows up, which is handled with help of greedy approach.
# Code
```rust []
use std::iter::{once, repeat};

impl Solution {
    pub fn largest_palindrome(n: i32, k: i32) -> String {
        let n = n as usize;
        match k {
            1 | 3 | 9 => "9".repeat(n),
            2 => Self::pre_999_suf(n, "8"),
            4 => Self::pre_999_suf(n, "88"),
            5 => Self::pre_999_suf(n, "5"),
            6 => match n {
                1 | 2 => "6".repeat(n),
                n if n & 1 == 1 => format!("{s:9<w$}8{s:9>w$}", s = "8", w = n / 2),
                n => format!("{s:9<w$}77{s:9>w$}", s = "8", w = n / 2 - 1),
            }
            7 => match n {
                1 | 2 => "7".repeat(n),
                n => Self::solve7(n),
            }
            8 => Self::pre_999_suf(n, "888"),
            _ => unreachable!(),
        }
    }

    fn pre_999_suf(len: usize, pre_suf: &str) -> String {
        pre_suf.chars()
            .chain(repeat('9'))
            .take(len.saturating_sub(pre_suf.len()))
            .chain(pre_suf.chars())
            .take(len)
            .collect()
    }

    fn solve7(len: usize) -> String {
        let arr = [1i32, 3, 2, 6, 4, 5]; // arr[i] = 10^i % 7
        let mut rem = arr[len % 6] - 1;
        let minus = if len & 1 == 0 {
            let a = arr[(len / 2 - 1) % 6];
            let b = arr[(len / 2) % 6];
            (a + b) % 7
        }
        else {
            arr[(len / 2) % 6]
        };
        let mut mid = b'9';
        while rem != 0 {
            mid -= 1;
            rem = (rem + 7 - minus) % 7;
        }
        let mid_s: String = repeat(mid as char).take(2 - (len & 1)).collect();
        format!("{mid_s:9^w$}", w = len)
    }
}
```