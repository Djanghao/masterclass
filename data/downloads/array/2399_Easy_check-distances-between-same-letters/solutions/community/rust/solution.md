# Rust | O(n) | 1ms

**Author:** user7454af
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/5359276/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/5359276/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn check_distances(s: String, mut distance: Vec<i32>) -> bool {
        let sb = s.into_bytes();
        for (i, &b) in sb.iter().enumerate() {
            match distance[(b-b'a') as usize] {
                -1 => continue,
                d @ _ => {
                    let idx = i + d as usize + 1;
                    if idx >= sb.len() || sb[idx] != b {return false};
                    distance[(b-b'a') as usize] = -1;
                }
            }
        }
        true
    }
}
```