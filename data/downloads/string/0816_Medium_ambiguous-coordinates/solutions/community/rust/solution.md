# Rust: 0-4ms, 100% Runtime - Iterative Solution

**Author:** seandewar
**Votes:** 5
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/1205957/](https://leetcode.com/problems/ambiguous-coordinates/solutions/1205957/)

---

```rust
impl Solution {
    pub fn ambiguous_coordinates(s: String) -> Vec<String> {
        let s = &s.as_bytes()[1..s.len() - 1]; // ignore the parenthesis around the coords
        (1..s.len()).fold(vec![], |mut acc, commai| {
            let (x, y) = s.split_at(commai);
            (0..x.len())
                .filter_map(|doti| Self::make_coord(x, doti))
                .for_each(|x| {
                    (0..y.len())
                        .filter_map(|doti| Self::make_coord(y, doti))
                        .for_each(|y| acc.push(format!("({}, {})", x, y)))
                });
            acc
        })
    }

    fn make_coord(s: &[u8], doti: usize) -> Option<String> {
        if (s.len() == 1 || doti == 1 || s[0] != b'0') && (doti == 0 || s[s.len() - 1] != b'0') {
            let (l, r) = s.split_at(doti);
            let l = unsafe { String::from_utf8_unchecked(l.into()) }; // these are safe, as s is
            let r = unsafe { String::from_utf8_unchecked(r.into()) }; // always valid ASCII
            Some(format!("{}{}{}", l, if l.is_empty() { "" } else { "." }, r))
        } else {
            None
        }
    }
}
```