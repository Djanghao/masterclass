# Maximum of minimum values in all subarrays (Rust)

**Author:** lyxuansang91
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/solutions/6071599/](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/solutions/6071599/)

---

# Maximum of minimum values in all subarrays
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- To solve the `i-th` query, find the minimum values for all subarrays of size `i+1`.
- Determine the maximum among these minimum values.

# Approach

- Use a monotonic stack to efficiently determine the next smaller element and the previous smaller element for each number in nums.
    - Next Smaller Element (NSE) `right`: The first smaller element to the right of each element.
    - Previous Smaller Element (PSE) `left`: The first smaller element to the left of each element.
- For each element, calculate its range of influence:
$$ range[i] = right[i] - left[i] - 1 $$.
- Use the range information to populate a temporary array where each position stores the maximum minimum value for subarrays of that size.
- Propagate the maximum values backward to ensure correctness for all subarray sizes.
- Return the result array where each element corresponds to the answer for a query.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N).$$
- Space complexity: $$O(N).$$


# Code
```go []
func findMaximums(nums []int) []int {
    n := len(nums)
    left, right := make([]int, n), make([]int, n)
    stack := []int{}
    // calculate left
    for i := 0; i < n; i++ {
        for len(stack) > 0 && nums[stack[len(stack) - 1]] >= nums[i] {
            stack = stack[:len(stack) - 1]
        }
        if len(stack) == 0 {
            left[i] = -1
        } else {
            left[i] = stack[len(stack) - 1]
        }
        stack = append(stack, i)
    }

    // calculate right
    stack = []int{}
    for i := n-1; i >= 0; i-- {
        for len(stack) > 0 && nums[stack[len(stack) - 1]] >= nums[i] {
            stack = stack[:len(stack) - 1]
        }
        if len(stack) == 0 {
            right[i] = n
        } else {
            right[i] = stack[len(stack) - 1]
        }
        stack = append(stack, i)
    }
    result := make([]int, n + 1)
    for i := 0; i < n; i++ {
        length := right[i] - left[i] - 1
        result[length] = max(result[length], nums[i])
    }
    for i := n - 1; i > 0; i-- {
        result[i] = max(result[i], result[i+1])
    }
    ans := make([]int, n)
    for i := 0; i < n; i++ {
        ans[i] = result[i+1]
    }
    return ans
}
```
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn find_maximums(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut left: Vec<i32> = vec![-1; n];
        let mut right: Vec<i32> = vec![n as i32; n];
        let mut stack: VecDeque<usize> = VecDeque::new();
        // calculate left
        for i in 0..n {
            while !stack.is_empty() && nums[stack[stack.len() - 1] as usize] >= nums[i] {
                stack.pop_back();
            }
            if !stack.is_empty() {
                left[i] = stack[stack.len() - 1] as i32;
            }
            stack.push_back(i);
        }
        stack.clear();
        for i in (0..n).rev() {
            while !stack.is_empty() && nums[stack[stack.len() - 1] as usize] >= nums[i] {
                stack.pop_back();
            }
            if !stack.is_empty() {
                right[i] = stack[stack.len() - 1] as i32;
            }
            stack.push_back(i);
        }

        let mut result = vec![0; n];
        for i in 0..n {
            let length = (right[i] - left[i] - 1) as usize;
            result[length-1] = result[length-1].max(nums[i]);
        }

        for i in (0..n-1).rev() {
            result[i] = result[i].max(result[i+1]);
        }
        
        result
    }
}
```