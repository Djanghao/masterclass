# Rust

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/4214272/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/4214272/)

---

```
impl Solution {
    pub fn can_divide_into_subsequences(nums: Vec<i32>, k: i32) -> bool {
        nums.iter()
            .fold(
                (nums[0], 0, 0),
                |(mut curr_num, mut curr_cnt, mut max_cnt), &v| {
                    if curr_num == v {
                        curr_cnt += 1;
                    } else {
                        curr_num = v;
                        curr_cnt = 1;
                    }
                    max_cnt = max_cnt.max(curr_cnt);
                    (curr_num, curr_cnt, max_cnt)
                },
            )
            .2
            * k
            <= nums.len() as i32
    }
}
```