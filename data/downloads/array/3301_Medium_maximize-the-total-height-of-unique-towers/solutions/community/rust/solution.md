# Rust Solution

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5863211/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5863211/)

---

# Intuition
The goal is to maximize the total sum of assigned heights while ensuring that no two consecutive heights are the same and each height does not exceed a specified maximum. To achieve this, we need to start with the largest possible height and work our way down, ensuring that each height assigned is less than the previous one.

# Approach
1. **Sorting**: First, sort the input array in ascending order. This allows us to easily access the maximum heights in descending order while iterating from the end.
  
2. **Iterating Backwards**: Start from the largest height and iterate backwards. For each height, assign the maximum possible value that is less than the last assigned height.
  
3. **Validation**: If the computed height goes below 1, it means it's impossible to assign valid heights, and we return -1.

4. **Sum Calculation**: Keep a running total of the assigned heights.

This approach ensures that we maximize the total height while respecting the constraints.

# Complexity
- **Time complexity**: $$O(n \\log n)$$ due to the sorting step, where \\(n\\) is the number of elements in `maximum_height`.
  
- **Space complexity**: $$O(1)$$ for the space used beyond the input array since we are reusing the same array for sorting and calculations.


# Code
```rust []
impl Solution {
    pub fn maximum_total_sum(maximum_height: Vec<i32>) -> i64 {
        let mut maximum_height = maximum_height.clone();
        maximum_height.sort_unstable();
        
        let n = maximum_height.len();
        let mut sum: i64 = 0;
        let mut last_assigned_height = i32::MAX;
        
        for i in (0..n).rev() {
            let current_height = std::cmp::min(maximum_height[i], last_assigned_height - 1);
            
            if current_height < 1 {
                return -1;
            }
            
            sum += current_height as i64;
            last_assigned_height = current_height;
        }
        
        sum
    }
}

```