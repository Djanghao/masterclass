# Readable Rust - two pointers

**Author:** DecisiveVictory
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4826285/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4826285/)

---

# Code
```

impl Solution {
    #[allow(
        clippy::needless_pass_by_value,
        clippy::cast_possible_wrap,
        clippy::cast_possible_truncation
    )]
    pub fn minimum_length(s: String) -> i32 {
        let v: Vec<char> = s.chars().collect();
        let mut left: usize = 0;
        let mut right: usize = v.len() - 1;
        while left < right && v[left] == v[right] {
            let left_char = v[left];
            while left <= right && v[left] == left_char {
                left += 1;
            }

            if left >= right {
                return 0;
            }
            let right_char = v[right];
            while v[right] == right_char {
                right -= 1;
            }
        }
        (right - left + 1) as i32
    }
}

```