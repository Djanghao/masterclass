# An easy-understand solution

**Author:** menghuan1918
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5508914/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5508914/)

---

# Intuition
An easy-to-understand solution

# Approach
An easy-to-understand solution
# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
impl Solution {
    pub fn count_hill_valley(nums: Vec<i32>) -> i32 {
        let mut hits = 0;
        let mut left = nums[0];

        for i in 1..nums.len()-1{
            if nums[i] == nums[i+1] {continue};
            if (nums[i] > left && nums[i] > nums[i + 1]) || (nums[i] < left && nums[i] < nums[i + 1]) {hits += 1};
            left = nums[i];
        }

        hits
    }
}
```