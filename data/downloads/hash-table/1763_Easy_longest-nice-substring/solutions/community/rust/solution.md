# Rust brute force solution with bytes and bit masks

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/1151065/](https://leetcode.com/problems/longest-nice-substring/solutions/1151065/)

---

```
impl Solution {
    pub fn longest_nice_substring(s: String) -> String {
        let sb = s.as_bytes();
        let mut max_range: (usize, usize) = (0, 0);

        for i in 0..(s.len() - 1) {
            let (mut lower_mask, mut upper_mask) = (0u32, 0u32);

            for j in i..s.len() {
                match sb[j] >= b'a' {
                    true => lower_mask |= 1 << (sb[j] - b'a'),
                    false => upper_mask |= 1 << (sb[j] - b'A')
                };

                if lower_mask == upper_mask && (j + 1 - i) > (max_range.1 - max_range.0) {
                    max_range = (i, j + 1);
                }
            }
        }

        String::from_utf8(sb[max_range.0..max_range.1].to_vec()).unwrap()
    }
}
```