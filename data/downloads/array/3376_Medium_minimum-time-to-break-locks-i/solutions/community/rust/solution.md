# Rust - Brute Force (just check all possible permutations)  [TC: O(n!) SC: O(n)]

**Author:** alexpods
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123941/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123941/)

---

# Complexity
- Time complexity: $$O(n!)$$ - checking all permutations
- Space complexity: $$O(n)$$ - the size of the call stack

# Code
```rust []
impl Solution {
    pub fn find_minimum_time(mut strength: Vec<i32>, k: i32) -> i32 {
        return Self::find_minimum_time_recursive(&mut strength, k, 1);
    }

    fn find_minimum_time_recursive(nums: &mut [i32], k: i32, x: i32) -> i32 {
        let mut time = i32::MAX;

        for i in 0..nums.len() {
            let num = nums[i];

            if num > 0 {
                nums[i] = 0;
                time = time.min(((num + x - 1) / x) + Self::find_minimum_time_recursive(nums, k, x + k));
                nums[i] = num;    
            }
        }

        if time < i32::MAX { time } else { 0 }
    }
}
```