# Rust solution with itertools (won't work on the website)

**Author:** sthornington
**Votes:** 3
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1649893/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1649893/)

---

```
use itertools::Itertools;
struct Solution {}
impl Solution {
    pub fn find_even_numbers(digits: Vec<i32>) -> Vec<i32> {
        digits.into_iter()
            .permutations(3)
            .map(|v| {
                v[0]*100 + v[1]*10 + v[2]
            })
            .filter(|x| *x >= 100)
            .filter(|x| *x % 2 == 0)
            .sorted()
            .unique()
            .collect()
    }
}
```