# Rust solution

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/min-max-game/solutions/2117265/](https://leetcode.com/problems/min-max-game/solutions/2117265/)

---

```
impl Solution {
    pub fn min_max_game(mut nums: Vec<i32>) -> i32 {
        while nums.len() > 1 {
            nums = nums
                .chunks(2)
                .enumerate()
                .map(|(i, pair)| match i % 2 {
                    0 => *pair.iter().min().unwrap(),
                    _ => *pair.iter().max().unwrap(),
                })
                .collect();
        }
        nums[0]
    }
}
```