# Rust functional solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1477616/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1477616/)

---

```
impl Solution {
    pub fn count_k_difference(nums: Vec<i32>, k: i32) -> i32 {
        nums.iter()
            .enumerate()
            .map(|(ind, &x)| {
                nums[ind + 1..]
                    .iter()
                    .filter(|&&y| (x - y).abs() == k)
                    .count() as i32
            })
            .sum::<_>()
    }
}
```