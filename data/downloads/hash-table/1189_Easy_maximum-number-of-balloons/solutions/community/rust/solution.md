# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/1441918/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/1441918/)

---

```
impl Solution {
    pub fn max_number_of_balloons(text: String) -> i32 {
        use std::collections::HashMap;
        
        let mut counter: HashMap<char, i32> = "balloon".chars().map(|c| (c, 0)).collect();

        text.chars().for_each(|c| {
            counter.entry(c).and_modify(|e| *e += 1);
        });

        counter
            .iter()
            .map(|(&c, &num)| num / if "lo".contains(c) { 2 } else { 1 })
            .min()
            .unwrap()
    }
}
```