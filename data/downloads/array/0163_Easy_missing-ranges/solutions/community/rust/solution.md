# Explicitly handling all cases for clarity

**Author:** AbandonShip2023
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/4197277/](https://leetcode.com/problems/missing-ranges/solutions/4197277/)

---

# Intuition
We iterate over the provided nums array, and leverage that it is sorted in ascending order and no duplicates are present

# Approach
We handle the 4 scenarios individually
- When the input array is empty
- When the input array's start element is not the same as the lower bound
- Missing ranges within the elements in the input array
- When the input array's last element is not the same as the upper bound

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn find_missing_ranges(nums: Vec<i32>, lower: i32, upper: i32) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();
        let nums_len: usize = nums.len();

        if nums_len == 0 {
            result.push(vec![lower, upper]);
            return result;
        }

        // Left edge
        // Handle the case that 1st entry in "nums" is greater than the lower bound
        if nums[0] > lower {
            result.push(vec![lower, nums[0] - 1]);
        }

        // Add the intermediate missing ranges within nums
        for (index, num) in nums.iter().enumerate().skip(1) {
            let previous_num: i32 = nums[index - 1];
            if num - previous_num > 1 {
                result.push(vec![previous_num + 1, num - 1]);
            }
        }

        // Right edge
        // Handle the case where the last entry is smaller than the upper bound
        if *nums.last().unwrap() < upper {
            result.push(vec![nums.last().unwrap() + 1, upper]);
        }

        result
    }
}
```