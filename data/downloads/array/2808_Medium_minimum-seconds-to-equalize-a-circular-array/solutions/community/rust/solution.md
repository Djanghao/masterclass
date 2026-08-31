# Rust  22ms sort + fold

**Author:** N0fail
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/4771831/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/4771831/)

---

# Intuition
We need to find minimum of max distances between same elemets

# Complexity
- Time complexity:
$$O(n*log(n))$$ for sorting

- Space complexity:
$$O(n)$$ for vector with indexes

# Code
```
impl Solution {
    pub fn minimum_seconds(nums: Vec<i32>) -> i32 {
        let mut idx_vec = nums
            .iter()
            .copied()
            .enumerate()
            .map(|(idx, num)| (num, idx))
            .collect::<Vec<_>>();
        idx_vec.sort_unstable();
        let n = nums.len();
        idx_vec.push((-1, n)); // pad
        idx_vec
            .windows(2)
            .fold((idx_vec[0].1, 0, n), |(fist_idx, cur_max, res), lr| {
                let (prev_num, prev_idx) = lr[0];
                let (cur_num, cur_idx) = lr[1];
                if prev_num == cur_num {
                    (fist_idx, cur_max.max(cur_idx - prev_idx), res)
                } else {
                    (cur_idx, 0, res.min(cur_max.max(fist_idx + n - prev_idx)))
                }
            })
            .2 as i32
            / 2
    }
}
```