# 💥💥 Runtime and memory beats 100.00%

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/5717110/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/5717110/)

---

# Intuition
It requires finding the maximum "frequency score" for any subarray of length k in the array. The score is based on how many times each number appears in the subarray. We slide a window of size k across the array, updating the frequency of each number and recalculating the score as the window moves.

# Approach
This code should handle the given test cases correctly by ensuring that all operations related to the sliding window and frequency map updates are performed accurately.

# Complexity
- Time complexity:
O(n * log m): n is the array length; m is the maximum frequency of a number in a subarray.

- Space complexity:
O(m): Space is used by the frequency map to store element counts.

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn max_frequency_score(nums: Vec<i32>, k: i32) -> i32 {
        const MOD: i32 = 1_000_000_007;
        let k = k as usize;
        let n = nums.len();
        let mut freq_map = HashMap::new();
        let mut max_score = 0;
        let mut current_score = 0;

        // Initialize frequency map and compute score for the first window
        for i in 0..k {
            *freq_map.entry(nums[i]).or_insert(0) += 1;
        }
        for (&num, &count) in &freq_map {
            current_score = (current_score + Self::mod_exp(num, count)) % MOD;
        }
        max_score = current_score;

        // Slide the window across the array
        for i in k..n {
            let outgoing = nums[i - k];
            let incoming = nums[i];

            // Remove the effect of the outgoing element
            if let Some(&mut count) = freq_map.get_mut(&outgoing) {
                current_score = (current_score - Self::mod_exp(outgoing, count) + MOD) % MOD;
                if count == 1 {
                    freq_map.remove(&outgoing);
                } else {
                    *freq_map.get_mut(&outgoing).unwrap() -= 1;
                    current_score = (current_score + Self::mod_exp(outgoing, count - 1)) % MOD;
                }
            }

            // Add the effect of the incoming element
            let incoming_count = freq_map.entry(incoming).or_insert(0);
            if *incoming_count > 0 {
                current_score = (current_score - Self::mod_exp(incoming, *incoming_count) + MOD) % MOD;
            }
            *incoming_count += 1;
            current_score = (current_score + Self::mod_exp(incoming, *incoming_count)) % MOD;

            // Update the maximum score
            max_score = max_score.max(current_score);
        }

        max_score
    }

    // Function to compute (base^exp) % MOD
    fn mod_exp(base: i32, exp: i32) -> i32 {
        const MOD: i32 = 1_000_000_007;
        let (mut base, mut exp, mut result) = (base as i64, exp as i64, 1);
        while exp > 0 {
            if exp % 2 == 1 {
                result = (result * base) % MOD as i64;
            }
            base = (base * base) % MOD as i64;
            exp /= 2;
        }
        result as i32
    }
}

```