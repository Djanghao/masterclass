# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1188277/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1188277/)

---

```
impl Solution {
    pub fn get_min_distance(nums: Vec<i32>, target: i32, start: i32) -> i32 {
        let mut min_dist = std::i32::MAX;
        for (i, val) in nums.iter().enumerate() {
            if *val == target {
                min_dist = min_dist.min((i as i32 - start).abs());
                if min_dist == 0 {
                    break;
                }
            }
        }
        min_dist
    }
}
```