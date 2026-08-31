# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1785781/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1785781/)

---

```
impl Solution {
    pub fn count_pairs(nums: Vec<i32>, k: i32) -> i32 {
        let mut res = 0;
        let mut nums_ind = nums.iter().cloned().zip(0..).collect::<Vec<_>>();
        nums_ind.sort_unstable_by_key(|(x, _)| *x);

        for (ind, &(x, i)) in nums_ind.iter().enumerate() {
            for &(y, j) in nums_ind[ind + 1..].iter() {
                match y > x {
                    true => break,
                    false if i * j % k == 0 => res += 1,
                    _ => (),
                }
            }
        }
        res
    }
}
```