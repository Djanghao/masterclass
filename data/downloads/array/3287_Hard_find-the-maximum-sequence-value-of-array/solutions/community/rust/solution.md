# Simple Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5837086/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5837086/)

---

# Intuition
The problem involves finding the maximum value obtainable from a combination of bitwise operations on subsets of an integer array. The goal is to split the array into two parts, with each part contributing to a maximum XOR value based on a specified number of elements, `k`. The intuition is to use a dynamic programming approach to keep track of all possible XOR values that can be formed by using up to `k` elements from both the left and right parts of the array.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Dynamic Programming Tables**: Use two dynamic programming tables (`left` and `right`) to store sets of possible XOR values for subarrays:
   - `left[i][j]` represents all possible XOR values using up to `j` elements from the first `i` elements of the array.
   - `right[i][j]` does the same for the last `n-i` elements.
  
2. **Initialization**: Start with base cases where no elements yield an XOR of 0.

3. **Filling the Tables**:
   - For the `left` table, iterate through the elements and update the possible XOR values. For each count of selected elements, combine previous values with the current element's contribution.
   - Similarly, fill the `right` table but iterate from the end of the array backward.

4. **Maximizing the Result**: After constructing both tables, iterate through them to find the maximum XOR of values from `left` and `right` that use exactly `k` elements.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  O(n<sup>2</sup>\u22C5k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n\u22C5k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::HashSet;
use std::convert::TryInto;

impl Solution {
    pub fn max_value(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let k = k.try_into().unwrap();
        let mut left = vec![vec![HashSet::new(); k + 1]; n];
        let mut right = vec![vec![HashSet::new(); k + 1]; n];

        left[0][0].insert(0);
        left[0][1].insert(nums[0]);

        for i in 1..(n - k) {
            left[i][0].insert(0);
            for j in 1..=k {
                left[i][j] = left[i - 1][j].clone();
                let previous = left[i - 1][j - 1].clone();
                for v in previous {
                    left[i][j].insert(v | nums[i]);
                }
            }
        }

        right[n - 1][0].insert(0);
        right[n - 1][1].insert(nums[n - 1]);
        let mut result = 0;

        if k == 1 {
            for &l in &left[n - 2][k] {
                result = result.max(l ^ nums[n - 1]);
            }
        }

        for i in (k..n - 1).rev() {
            right[i][0].insert(0);
            for j in 1..=k {
                right[i][j] = right[i + 1][j].clone();
                let previous = right[i + 1][j - 1].clone();
                for v in previous {
                    right[i][j].insert(v | nums[i]);
                }
            }
            for &l in &left[i - 1][k] {
                for &r in &right[i][k] {
                    result = result.max(l ^ r);
                }
            }
        }

        result
    }
}

```