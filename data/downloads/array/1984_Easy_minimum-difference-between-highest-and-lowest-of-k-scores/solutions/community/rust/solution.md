# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432695/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432695/)

---

```
impl Solution {
    pub fn minimum_difference(mut nums: Vec<i32>, k: i32) -> i32 {
        nums.sort_unstable();
        nums.windows(k as usize)
            .map(|pair| pair[(k - 1) as usize] - pair[0])
            .min()
            .unwrap()
    }
}
```