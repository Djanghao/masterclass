# Rust easy fp-solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/1234133/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/1234133/)

---

```
impl Solution {
    pub fn most_visited(n: i32, rounds: Vec<i32>) -> Vec<i32> {
        let &start = rounds.first().unwrap();
        let &end = rounds.last().unwrap();
        match end >= start {
            true => (start..=end).collect(),
            false => (1..=end).chain(start..=n).collect()
        }
    }
}
```