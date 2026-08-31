# Rust iter-windows solution

**Author:** BigMih
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1198292/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1198292/)

---

```
impl Solution {
    pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
        let mut res = 0;
        for i in (1..=arr.len()).step_by(2) {
            for w in arr.windows(i) {
                res += w.iter().sum::<i32>();
            }
        }
        res
    }
}
```