# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/3199650/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/3199650/)

---

# Code
```
impl Solution {
    pub fn min_moves(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut a = Vec::new();
        for (i, &num) in nums.iter().enumerate() {
            if num == 1 {
                a.push(i as i64);
            }
        }
        let mut b = vec![0];
        for &num in a.iter() {
            b.push(b.last().unwrap() + num);
        }
        let mut res = 2e9 as i64;
        for i in 0..a.len() - k + 1 {
            res = res.min(b[i + k] - b[k / 2 + i] - b[(k + 1) / 2 + i] + b[i]);
        }
        res -= ((k / 2) * ((k + 1) / 2)) as i64;
        res as _
    }
}
```