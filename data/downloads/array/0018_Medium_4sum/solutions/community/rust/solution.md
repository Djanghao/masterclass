# Rust: loop solution

**Author:** 16yuki0702
**Votes:** 5
**Link:** [https://leetcode.com/problems/4sum/solutions/1047540/](https://leetcode.com/problems/4sum/solutions/1047540/)

---

Runtime: 12 ms, faster than 74.29% of Rust online submissions for 4Sum.
Memory Usage: 2 MB, less than 97.14% of Rust online submissions for 4Sum.
```
impl Solution {
    pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        if nums.len() < 4 {
            return res;
        }
        let mut nums = nums;
        nums.sort();

        for i in 0..nums.len() - 1 {
            if i > 0 && nums[i] == nums[i - 1] {
                continue;
            }

            for j in i + 1..nums.len() - 2 {
                if j > i + 1 && nums[j] == nums[j - 1] {
                    continue;
                }

                let (mut left, mut right) = (j + 1, nums.len() - 1);
                while left < right {
                    let tmp = nums[i] + nums[j] + nums[left] + nums[right];
                    if tmp == target {
                        res.push([nums[i], nums[j], nums[left], nums[right]].to_vec());
                        left += 1;
                        right -= 1;

                        while left < right && nums[left] == nums[left - 1] {
                            left += 1;
                        }
                        while left < right && nums[right] == nums[right + 1] {
                            right -= 1;
                        }
                    } else if tmp < target {
                        left += 1;
                    } else if tmp > target {
                        right -= 1;
                    }
                }
            }
        }
        res
    }
}
```