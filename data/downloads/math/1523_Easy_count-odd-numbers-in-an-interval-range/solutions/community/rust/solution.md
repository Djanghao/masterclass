# Rust simple solution

**Author:** BigMih
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1247567/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1247567/)

---

```
impl Solution {
    pub fn count_odds(low: i32, high: i32) -> i32 {
        (high - low) / 2 + (high % 2 | low % 2)
		// or ((high - low) >> 1) + ((high & 1) | (low & 1))
    }
}
```