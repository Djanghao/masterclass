# Rust 4ms solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1038734/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1038734/)

---

```
impl Solution {
    pub fn get_smallest_string(n: i32, k: i32) -> String {
        let mut v = vec![0; n as usize];
        let mut k = k - n;
        for e in v.iter_mut().rev() {
            let m = std::cmp::min(25, k);
            *e = m as u8 + b'a';
            k -= m;
        }
        String::from_utf8(v).unwrap()
    }
}
```