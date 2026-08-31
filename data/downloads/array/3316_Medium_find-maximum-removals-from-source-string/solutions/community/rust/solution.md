# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/6080450/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/6080450/)

---

# Intuition
The problem requires us to determine how many characters we can remove from the `source` string while still being able to match the entire `pattern`. The challenge is that some characters are "removable" based on their indices, given in the `target_indices` array. The key observation is to use dynamic programming (DP) to track how many removable characters are necessary to match the `pattern` and then subtract this from the total number of removable characters to get the answer.

# Approach
We can approach the problem using a dynamic programming (DP) technique where:
- The `dp[i]` represents the minimum number of removable characters required to match the first `i` characters of the `pattern`.
- The base case is that `dp[0] = 0`, meaning no characters are removed to match an empty pattern.
- The goal is to match the entire `pattern` (i.e., `dp[plen]`).

The steps of the algorithm:
1. **Initialization**:
   - Create an array `trgt` of size equal to the `source` string's length, initialized to `false`. This will help us quickly check if a character at a given index in `source` is removable (i.e., it exists in `target_indices`).
   - Create a `dp` array with size `plen + 1`, initialized to `i32::MAX` except for `dp[0]`, which is set to `0`.

2. **Dynamic Programming Transition**:
   - Traverse each character of `source`.
   - For each character, check if it can contribute to a matching character in `pattern`. If it can, check whether it should be counted as removed by checking `trgt[i]`.
   - Update the DP array by considering the current character either as part of the match or as a removable character.

3. **Final Answer**:
   - After filling the DP array, if `dp[plen]` is `i32::MAX`, it means that we can't form the pattern by removing any characters, so return `0`. Otherwise, return the number of removable characters (`n`) minus the value of `dp[plen]`.

# Complexity

- **Time complexity**:
  - We iterate through each character of `source` (`O(slen)`) and for each character, we update the DP array (`O(plen)`), leading to a total time complexity of `O(slen * plen)`.

- **Space complexity**:
  - We use an array `trgt` of size `slen` and a DP array of size `plen + 1`. So the space complexity is `O(slen + plen)`.
# Code
```rust []
impl Solution {
    pub fn max_removals(source: String, pattern: String, target_indices: Vec<i32>) -> i32 {
        let n = target_indices.len() as i32;
        let slen = source.len();
        let plen = pattern.len();
        let mut trgt = vec![false; slen];
        for &ti in &target_indices {
            trgt[ti as usize] = true;
        }
        let mut dp = vec![i32::MAX; plen + 1];
        dp[0] = 0;
        for i in 0..slen {
            for j in (1..=plen).rev() {
                if source.as_bytes()[i] == pattern.as_bytes()[j - 1] && dp[j - 1] != i32::MAX {
                    if trgt[i] {
                        dp[j] = std::cmp::min(dp[j], dp[j - 1] + 1);
                    } else {
                        dp[j] = std::cmp::min(dp[j], dp[j - 1]);
                    }
                }
            }
        }

        n - if dp[plen] == i32::MAX { 0 } else { dp[plen] }
    }
}

```