# Rust solution

**Author:** BigMih
**Votes:** 6
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1517535/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1517535/)

---

```
impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let (mut low, mut high) = (1, n);
        loop {
            let mid = low + (high - low) / 2;
            match guess(mid) {
                0 => break mid,
                -1 => high = mid - 1,
                _ => low = mid + 1,
            }
        }
    }
}
```