# Rust solution

**Author:** 54k
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/3213794/](https://leetcode.com/problems/reverse-string-ii/solutions/3213794/)

---

# Code
```
impl Solution {
    pub fn reverse_str(s: String, k: i32) -> String {
        let k = k as usize;
        let mut s = s.chars().collect::<Vec<_>>();
        for start in (0..s.len()).step_by(2 * k) {
            let mut i = start;
            let mut j = (start + k - 1).min(s.len() - 1);
            while i < j {
                s.swap(i, j);
                i += 1;
                j -= 1;
            }
        }
        s.into_iter().collect()
    }
}
```