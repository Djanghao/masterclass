# Just a runnable solution.

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/2858740/](https://leetcode.com/problems/circular-array-loop/solutions/2858740/)

---

# Code
```
impl Solution {
    pub fn circular_array_loop(nums: Vec<i32>) -> bool {
        pub fn _circular_array_loop(nums: Vec<i64>) -> bool {
            let mut nums = nums;
            for i in 0..nums.len() {
                nums[i] %= nums.len() as i64;
            }
            for i in 0..nums.len() {
                if nums[i] % nums.len() as i64 <= 0 {
                    continue;
                }
                let mut index = i;
                while nums[index] % nums.len() as i64 > 0 {
                    let next_index = (index as i64 + nums[index]) as usize % nums.len();
                    nums[index] = (i + 1) as i64 * nums.len() as i64;
                    index = next_index;
                }
                if nums[index] == (i + 1) as i64 * nums.len() as i64 {
                    return true;
                }
            }
            for i in 0..nums.len() {
                if nums[i] % nums.len() as i64 >= 0 {
                    continue;
                }
                let mut index = i;
                let mut feet = std::collections::HashMap::new();
                while (nums[index] % nums.len() as i64) < 0 {
                    feet.insert(index, ());
                    let next_index = (index as i64 + nums[index] + nums.len() as i64) as usize % nums.len();
                    nums[index] = -((i + 1) as i64) * nums.len() as i64;
                    index = next_index;
                }
                if nums[index] == -((i + 1) as i64) * nums.len() as i64 {
                    return true;
                }
            }
            false
        }
        _circular_array_loop(nums.into_iter().map(|v| v as i64).collect())
    }
}
```