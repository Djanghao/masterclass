# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1957505/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1957505/)

---

```
impl Solution {
    pub fn digit_sum(s: String, k: i32) -> String {
        let mut s = s;
        while s.len() > k as usize {
            s = s
                .chars()
                .collect::<Vec<_>>()
                .chunks(k as usize)
                .map(|chunk| {
                    chunk
                        .iter()
                        .map(|c| c.to_digit(10).unwrap())
                        .sum::<u32>()
                        .to_string()
                })
                .collect::<Vec<_>>()
                .join("");
        }
        s
    }
}
```