# Concise solution with full comment

**Author:** sangkhuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/5811012/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/5811012/)

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
```rust []
impl Solution {
    pub fn minimum_partition(s: String, k: i32) -> i32 {
        let k = k as u64; // Convert k to u64 to handle larger numbers safely.
        let mut partition_count = 0; // Track the number of partitions.
        let mut current_substring_value: u64 = 0; // The value of the ongoing substring being formed.

        // Iterate through each character (digit) in the string s.
        for c in s.chars() {
            // Convert character to its corresponding digit.
            let digit_value = c.to_digit(10).unwrap() as u64;

            // If a single digit is greater than k, partitioning is impossible.
            if digit_value > k {
                return -1;
            }

            // Try to add the current digit to the ongoing substring number.
            let new_substring_value = current_substring_value * 10 + digit_value;

            // Check if the new value is still within the valid range (<= k).
            if new_substring_value <= k {
                // If it's valid, continue forming the current substring.
                current_substring_value = new_substring_value;
            } else {
                // If it's invalid, finalize the current partition, and start a new one with this digit.
                partition_count += 1;
                current_substring_value = digit_value;
            }
        }

        // Account for the final substring value after the loop ends.
        if current_substring_value != 0 {
            partition_count += 1;
        }

        partition_count
    }
}

```