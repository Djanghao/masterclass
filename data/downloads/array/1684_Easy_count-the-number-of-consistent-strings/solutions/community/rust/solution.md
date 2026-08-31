# Fast Rust solution with bit mask

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1165541/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1165541/)

---

Runtime: 8 ms, faster than 100.00% of Rust online submissions
Memory Usage: 2.9 MB, less than 13.51% of Rust online submissions
```
impl Solution {
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        let mask = allowed.as_bytes().iter().fold(0, |mut acc, &c| {
            acc += 1 << (c - b'a');
            acc
        });

        let mut result = 0;
        for word in words {
            if word
                .as_bytes()
                .iter()
                .all(|&c| (mask & (1 << (c - b'a'))) > 0)
            {
                result += 1;
            }
        }
        result
    }
}
```