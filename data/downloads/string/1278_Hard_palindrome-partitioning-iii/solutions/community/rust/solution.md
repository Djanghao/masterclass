# Rust :) --- 0 ms Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5953855/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5953855/)

---



# Code
```rust []
impl Solution {
    // Helper function to calculate minimum changes needed to make a substring palindrome
    fn min_changes_to_palindrome(s: &[u8], i: usize, j: usize) -> i32 {
        let mut changes = 0;
        let mut left = i;
        let mut right = j;
        
        while left < right {
            if s[left] != s[right] {
                changes += 1;
            }
            left += 1;
            right -= 1;
        }
        changes
    }
    
    pub fn palindrome_partition(s: String, k: i32) -> i32 {
        let n = s.len();
        let k = k as usize;
        let s = s.as_bytes();
        
        // dp[i][j] represents the minimum changes needed for string[i..] split into j parts
        let mut dp = vec![vec![i32::MAX; k + 1]; n + 1];
        // cost[i][j] represents minimum changes needed to make substring[i..j] palindrome
        let mut cost = vec![vec![0; n]; n];
        
        // Precompute costs for all possible substrings
        for i in 0..n {
            for j in i..n {
                cost[i][j] = Self::min_changes_to_palindrome(s, i, j);
            }
        }
        
        // Base case: Empty string needs 0 changes for 0 partitions
        dp[n][0] = 0;
        
        // For each position from right to left
        for i in (0..n).rev() {
            // For each number of partitions
            for j in 1..=k {
                // Try different lengths for current partition
                for l in i..n {
                    // If we can make j-1 partitions with remaining string
                    if dp[l + 1][j - 1] != i32::MAX {
                        // Update minimum changes needed
                        dp[i][j] = dp[i][j].min(dp[l + 1][j - 1] + cost[i][l]);
                    }
                }
            }
        }
        
        dp[0][k]
    }
}
```