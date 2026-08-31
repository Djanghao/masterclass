# Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/6041305/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/6041305/)

---

# Intuition
The problem asks us to calculate the total strength for all contiguous subarrays of the given array. For each subarray, the strength is calculated as the product of two values:

- The minimum element of the subarray.
- The sum of the elements in that subarray.

Naively, we could try to generate all possible subarrays and calculate their strengths. However, this would be inefficient since the number of subarrays grows quadratically (O(n\xB2)), and recalculating the sum and minimum for each subarray would lead to excessive time complexity. To make the solution more efficient, we need to find a way to compute these values for many subarrays in a smart way without recalculating them from scratch every time.

# Approach
We can break down the problem using a monotonic stack to efficiently compute the contribution of each element as the minimum in all possible subarrays that include it. Here's how we can achieve this:

Prefix Sums: We compute prefix sums and weighted prefix sums of the array. The prefix sum stores the sum of all elements from the beginning up to the current index, while the weighted prefix sum stores the sum of the array elements weighted by their indices. These allow us to calculate the sum of any subarray in constant time, which is crucial for efficiency.

Monotonic Stack: We use a stack to process each element and determine in which subarrays that element is the minimum. For each element, we want to find how many subarrays it is the minimum in, and for each of these subarrays, calculate their total contribution to the result.

When processing an element, if it is greater than or equal to the element at the top of the stack, we pop from the stack. This means the top element was the smallest element in some previous subarrays, and we can now compute its contribution.
The stack helps us efficiently track which elements are the smallest for subarrays that extend from their left neighbor to the current position.
Calculating the Contribution of Each Element:

For each element processed, the leftmost and rightmost positions where it is the smallest element in the subarray are tracked using the stack. These indices help determine the sum of the subarray and the contribution of that element to the final result.
The total contribution of each element is calculated by combining the sum of the subarray and the weighted sum, adjusting for the ranges where the element is the minimum.
Efficient Calculation: After processing all elements using the stack, the total strength of all subarrays is accumulated by summing the contributions of each element in the array as the minimum in the subarrays it participates in.

# Complexity
- Time complexity:
The time complexity of this approach is O(n), where n is the length of the input array.

- Space complexity:
O(n). This is due to the following:

-- We store the prefix sums and weighted prefix sums arrays, which both take O(n) space.

-- We maintain a stack to track the indices of the elements, which also requires O(n) space in the worst case.

# Code
```rust []
impl Solution {
    pub fn total_strength(strength: Vec<i32>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        
        let n = strength.len();
        let strength = strength.into_iter().map(|x| x as i64).collect::<Vec<_>>(); // Convert to i64 for calculations

        // Initialize prefix sums and weighted prefix sums from both directions
        let mut sum_left = vec![0; n + 1];
        let mut weighted_left = vec![0; n + 1];
        let mut sum_right = vec![0; n + 1];
        let mut weighted_right = vec![0; n + 1];

        for i in 0..n {
            sum_left[i + 1] = (sum_left[i] + strength[i]) % MOD;
            weighted_left[i + 1] = (weighted_left[i] + (i as i64 + 1) * strength[i]) % MOD;
        }
        
        for i in (0..n).rev() {
            sum_right[i] = (sum_right[i + 1] + strength[i]) % MOD;
            weighted_right[i] = (weighted_right[i + 1] + (n as i64 - i as i64) * strength[i]) % MOD;
        }

        // The stack will hold indices of the strength array
        let mut stack = vec![];
        let mut result = 0_i64;

        // Iterate through each index to calculate the contributions
        for right in 0..=n {
            // While the stack is not empty, process the current element
            while !stack.is_empty() && (right == n || strength[stack[stack.len() - 1]] >= strength[right]) {
                let idx = stack.pop().unwrap();
                let idx_i64 = idx as i64;

                // Calculate the left and right bounds of the subarray
                let left = stack.last().map(|&x| x + 1).unwrap_or(0);

                let left_contrib = (MOD + weighted_left[idx + 1] - weighted_left[left]
                    - (left as i64) * (sum_left[idx + 1] - sum_left[left]) % MOD) % MOD;

                let right_contrib = (MOD + weighted_right[idx + 1] - weighted_right[right]
                    - (n as i64 - right as i64) * (sum_right[idx + 1] - sum_right[right])) % MOD;

                // Total contribution from the left and right
                let total_contrib = (left_contrib * (right as i64 - idx_i64) + right_contrib * (idx_i64 - left as i64 + 1)) % MOD;

                // Accumulate result
                result = (result + total_contrib * strength[idx]) % MOD;
            }
            stack.push(right);
        }

        // Final result, converted back to i32
        result as i32
    }
}

```