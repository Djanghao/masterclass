# Rust solution by surrounding LCS string with residual characters

**Author:** rishikumarikuf
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/5687367/](https://leetcode.com/problems/shortest-common-supersequence/solutions/5687367/)

---

# Intuition
LCS of both strings will be common from both strings in the answer, and the characters appearing before the characters in the LCS string must be before the LCS string in the answer. Similarly, the subsequent characters must be handled.

# Approach
1. Calculate DP matrix of LCS of both strings
2. Reconstruct LCS string from DP matrix
3. Form answer string

# Complexity
- Time complexity:
$$ O(n*m)$$
- Space complexity:
$$ O(n*m)$$

# Code
```rust []
impl Solution {
    fn lcs(s1: &Vec<char>, s2: &Vec<char>) -> Vec<Vec<i32>> {
        //! Performs Longest Common Subsequence on both strings
        use std::cmp;
        let (m, n) = (s1.len(), s2.len());
        let mut dp = vec![vec![0; n + 1]; m + 1];

        for i in 1..=m {
            for j in 1..=n {
                if s1[i - 1] == s2[j - 1] {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = cmp::max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        dp
    }


    pub fn shortest_common_supersequence(str1: String, str2: String) -> String {
        let s1 = str1.chars().collect();
        let s2 = str2.chars().collect();

        let dp = Self::lcs(&s1, &s2);
        let (mut i, mut j) = (s1.len(), s2.len());

        let mut subseq = vec![];

        // Reconstruct LCS string (back to front)
        while i > 0 && j > 0 {
            if s1[i - 1] == s2[j - 1] {
                subseq.push(s1[i - 1]);
                j -= 1;
                i -= 1;
            } else if dp[i - 1][j] > dp[i][j - 1] {
                i -= 1;
            } else {
                j -= 1;
            }
        }

        let mut ans = String::from("");
        (i, j) = (0, 0);

        // Form answer till LCS is completely added to ans
        // NOTE: reversed LCS string because it was constructed back to front
        for ch in subseq.iter().rev() {
            while *ch != s1[i] && i < s1.len() {
                ans.push(s1[i]);
                i += 1;
            }

            while *ch != s2[j] && j < s2.len() {
                ans.push(s2[j]);
                j += 1;
            }

            ans.push(*ch);
            i += 1;
            j += 1;
        }
        
        // Add the residual characters from both strings into the answer
        while i < s1.len() {
            ans.push(s1[i]);
            i += 1;
        }

        while j < s2.len() {
            ans.push(s2[j]);
            j += 1;
        }

        ans
    }
}
```