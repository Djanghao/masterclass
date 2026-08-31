# Rust solution with sort

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623904/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623904/)

---

```
impl Solution {
    pub fn max_subsequence(nums: Vec<i32>, k: i32) -> Vec<i32> {
        if k == nums.len() as i32 || nums.len() == 1 {
            return nums;
        }

        let mut num_idx = nums.iter().enumerate().collect::<Vec<_>>();
        num_idx.sort_unstable_by_key(|(_, x)| **x);

        let mut idx = vec![false; nums.len()];
        num_idx
            .into_iter()
            .rev()
            .take(k as usize)
            .for_each(|(i, _)| idx[i] = true);

        nums.into_iter()
            .enumerate()
            .filter_map(|(i, x)| if idx[i] { Some(x) } else { None })
            .collect()
    }
}
```