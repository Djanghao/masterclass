# Simple and legible, brute force solution

**Author:** SebastiaanTheCoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5897068/](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5897068/)

---

Check all the slices of s that correspond with the length of the pattern. Count the number of discrepancies and continue if it's more than 1.

Simple, straightforward solution, definitely not the fastest bur very legible. 

- Time complexity:
O((N\u2212M)M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn min_starting_index(s: String, pattern: String) -> i32 {
        'outer: for i in 0..=s.len() - pattern.len() {
            let mut wrong = 0;
            for (j,ch) in pattern.bytes().enumerate() {
                if s.bytes().nth(i + j) != Some(ch) {
                    wrong += 1;
                }
                if wrong > 1 {
                    continue 'outer;
                }
            }
            return i as i32;
        }
        -1
    }
}
```