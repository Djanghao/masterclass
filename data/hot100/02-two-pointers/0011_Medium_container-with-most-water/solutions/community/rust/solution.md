# Rust solution with DoubleEndedIterator

**Author:** tinozzo123
**Votes:** 16
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/943677/](https://leetcode.com/problems/container-with-most-water/solutions/943677/)

---

```
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut iter = height.iter().enumerate();
        let mut p1 = iter.next();
        let mut p2 = iter.next_back();
        while let (Some((i, h1)), Some((j, h2))) = (p1, p2) {
            result = result.max(h1.min(h2) * (j - i) as i32);
            if h1 < h2 {
                p1 = iter.next();
            }
            else {
                p2 = iter.next_back();
            }
        }
        result
    }
}
```

This `while let` is a bit ugly. When [eRFC 2497](https://github.com/rust-lang/rust/issues/53667) will be stabilized you can use instead:
`while let Some((i, h1)) = p1 && let Some((j, h2)) = p2 {`