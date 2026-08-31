# Rust | O(1) Space - Idiomatic Kadane’s algorithm

**Author:** luizgabriel
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5212988/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5212988/)

---

# Intuition
To find the substring with the maximum cost, we need to calculate the value of each character in the string based on the given rules and then find the maximum sum of contiguous characters using these values.

# Approach
1. **Character Value Calculation:** 
   - Create an array `costs` where the index represents each character from 'a' to 'z' and initialize it with their 1-indexed positions.
   - Update the values of the characters that are present in the `chars` string with their corresponding values from the `vals` array.
   
2. **Maximum Subarray Sum (Kadane\u2019s Algorithm):**
   - Convert each character in the string `s` to its corresponding value using the `costs` array.
   - Apply Kadane\u2019s algorithm to find the maximum sum of any contiguous subarray. This algorithm maintains a running sum of the current subarray and resets it to zero whenever it drops below zero, ensuring that only positive contributing subarrays are considered.

# Complexity
- **Time Complexity:** $$O(n)$$
  - $$O(n)$$ for processing the string `s` and calculating the maximum subarray sum.
  - $$O(1)$$ for creating and updating the `costs` array since its size is constant (26).
  
  Thus, the overall time complexity is $$O(n)$$, where n is the length of the string `s`.

- **Space Complexity:** $$O(1)$$
  - $$O(1)$$ because the extra space used does not scale with the input size (the `costs` array is of fixed size 26).

# Code
```rust
use std::collections::*;

impl Solution {
    pub fn maximum_cost_substring(s: String, chars: String, vals: Vec<i32>) -> i32 {
        let mut costs = [0i32; 26];
        for i in 0..26 {
            costs[i] = (i + 1) as i32;
        }

        for (i, c) in chars.chars().enumerate() {
            costs[(c as u8 - b'a') as usize] = vals[i];
        }

        let nums = s.chars().map(|c| costs[(c as u8 - b'a') as usize]);
        let (max, _) = nums.fold((0, 0), |(max, cur), n| {
            let new_cur = (cur + n).max(0);
            (max.max(new_cur), new_cur)
        })

        return max;
    }
}
```