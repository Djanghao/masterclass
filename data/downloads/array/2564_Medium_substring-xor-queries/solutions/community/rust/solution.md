# Rust solution

**Author:** BigMih
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3196950/](https://leetcode.com/problems/substring-xor-queries/solutions/3196950/)

---

# Code
```
const MAX_LENGTH: usize = 30;

impl Solution {
    pub fn substring_xor_queries(s: String, queries: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut hm = std::collections::HashMap::new();
        let mut zero_found = false;
        let bytes = s.as_bytes();

        for (start, b) in bytes.iter().map(|&b| (b - b'0') as i32).enumerate() {
            if b == 0 {
                if !zero_found {
                    hm.insert(0, (start, start));
                    zero_found = true;
                }
            } else {
                let mut num = 0;
                let end = (start + MAX_LENGTH).min(bytes.len());
                bytes[start..end].iter().enumerate().for_each(|(i, &b)| {
                    num = (num << 1) + (b - b'0') as i32;
                    hm.entry(num).or_insert((start, start + i));
                })
            }
        }

        queries
            .iter()
            .map(|q| {
                let val = q[0] ^ q[1];
                match hm.get(&val) {
                    Some(&(start, end)) => vec![start as i32, end as i32],
                    None => vec![-1, -1],
                }
            })
            .collect()
    }
}
```