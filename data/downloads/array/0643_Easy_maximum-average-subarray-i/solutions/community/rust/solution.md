# rust one line solution

**Author:** Droubnier
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/3492677/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/3492677/)

---

```
impl Solution {
    pub fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
        nums.windows(k as usize)
            .map(|w| w.iter().sum::<i32>())
            .max()
            .unwrap() as f64
            / k as f64
    }
}
```