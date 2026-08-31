# Rust | 0ms

**Author:** RBird111
**Votes:** 5
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249321/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249321/)

---

# Code
```Rust []
impl Solution {
    pub fn append_characters(s: String, t: String) -> i32 {
        let mut t = t.bytes().peekable();
        s.bytes().for_each(|n| {
            t.next_if_eq(&n);
        });
        t.len() as _
    }
}
```