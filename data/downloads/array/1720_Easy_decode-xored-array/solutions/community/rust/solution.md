# Rust 8ms solution with scan

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/1156667/](https://leetcode.com/problems/decode-xored-array/solutions/1156667/)

---

```
impl Solution {
    pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
        std::iter::once(&first)
            .chain(encoded.iter())
            .scan(0, |xored, &x| {
                *xored ^= x;
                Some(*xored)
            })
            .collect::<Vec<i32>>()
    }
}
```