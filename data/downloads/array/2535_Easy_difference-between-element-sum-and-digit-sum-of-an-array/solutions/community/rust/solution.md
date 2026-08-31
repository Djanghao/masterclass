# Rust Solution

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052934/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052934/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```


impl Solution {
    pub fn difference_of_sum(nums: Vec<i32>) -> i32 {
        let sum = nums.iter().sum::<i32>();
        let mut digits = 0;
        
        for mut a in nums {
            while a > 0 {
                digits += a % 10;
                a /= 10;
            }
        }
        
        i32::abs(sum - digits)
    }
}
```