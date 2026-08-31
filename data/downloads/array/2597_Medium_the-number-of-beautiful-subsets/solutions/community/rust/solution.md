# Rust 25 lines solution

**Author:** LaGee
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5267386/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5267386/)

---


# Code
```
impl Solution {
    pub fn beautiful_subsets(nums: Vec<i32>, k: i32) -> i32 {
        let mut ans = 0;
        let mut nums = nums;
        nums.sort();
        for i in 1..=nums.len() {
            Self::recurse(&nums, i, 0, &mut ans, &mut vec![], k);
        }
        ans
    }

    fn recurse(nums: &[i32], len: usize, count: usize, ans: &mut i32, tmp: &mut Vec<i32>, k: i32) {
        if tmp.len() == len {
            *ans += 1;
        } else if count != nums.len() {
            for i in count..nums.len() {
                if tmp.is_empty() || !tmp.contains(&(nums[i] - k)) {
                    tmp.push(nums[i]);
                    Self::recurse(nums, len, i + 1, ans, tmp, k);
                    tmp.pop();
                }
            }
        }
    }
}
```