# Beats 100% Rust

**Author:** zNqZe8AhLV
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/5943424/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/5943424/)

---

# Code
```rust []
impl Solution {
    pub fn appeal_sum(s: String) -> i64 {
        let mut last = [-1i64; 26];
        let len = s.len() as i64;
        s.bytes().enumerate().fold(0, |acc, (i, x)| {
            let i = i as i64;
            let acc = acc + (i - last[(x - b'a') as usize]) * (len - i);
            last[(x - b'a') as usize] = i;
            acc
        })
        
    }
}
```