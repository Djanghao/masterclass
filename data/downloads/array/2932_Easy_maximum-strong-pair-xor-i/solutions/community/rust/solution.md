# nested loop

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5516882/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5516882/)

---

```
impl Solution {
    pub fn maximum_strong_pair_xor(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut best = 0;
        for i in 0..n-1 {
            let x = nums[i];
            for j in i+1..n {
                let y = nums[j];
                if (x-y).abs() <= x.min(y) {
                    best = best.max(x^y)
                }
            }
        }
        best
    }
}
```