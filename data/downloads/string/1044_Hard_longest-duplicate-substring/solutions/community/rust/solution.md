# Rust binary-search + Rabin-Karp solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/695243/](https://leetcode.com/problems/longest-duplicate-substring/solutions/695243/)

---

```rust
use std::collections::HashMap;

const P: i64 = 127;
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn longest_dup_substring(s: String) -> String {
        // prepare
        let mut v = vec![0; s.len() + 1];
        let mut pows = vec![1; s.len() + 1];
        for (i, u) in s.bytes().enumerate() {
            v[i + 1] = (v[i] * P + u as i64) % MOD;
            pows[i + 1] = pows[i] * P % MOD;
        }
        // binary search
        let mut answer = 0;
        let (mut lo, mut hi) = (0, s.len());
        while lo < hi {
            let mid = (lo + hi) / 2;
            if let Some(i) = Self::search(s.as_bytes(), &v, pows[mid], mid) {
                answer = i;
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        s[answer..answer + lo - 1].to_string()
    }
    fn search(s: &[u8], v: &[i64], pow: i64, len: usize) -> Option<usize> {
        let mut hm = HashMap::new();
        for i in 0..=s.len() - len {
            let hash = (v[i + len] - v[i] * pow).rem_euclid(MOD);
            if let Some(&j) = hm.get(&hash) {
                if (0..len).all(|k| s[i + k] == s[j + k]) {
                    return Some(i);
                }
            }
            hm.insert(hash, i);
        }
        None
    }
}
```