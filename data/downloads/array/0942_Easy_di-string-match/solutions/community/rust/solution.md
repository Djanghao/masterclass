# Rust solution (4 ms)

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/di-string-match/solutions/1557769/](https://leetcode.com/problems/di-string-match/solutions/1557769/)

---

```
impl Solution {
    pub fn di_string_match(s: String) -> Vec<i32> {
        let mut res = Vec::with_capacity(s.len() + 1);
        let (mut min_val, mut max_val) = (0, s.len() as i32);

        s.as_bytes().iter().for_each(|b| match *b {
            b'I' => {
                res.push(min_val);
                min_val += 1
            }
            _ => {
                res.push(max_val);
                max_val -= 1
            }
        });
        res.push(max_val);
        res
    }
}
```