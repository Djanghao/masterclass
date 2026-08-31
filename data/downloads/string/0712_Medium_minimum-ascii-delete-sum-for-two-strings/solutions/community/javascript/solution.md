# 🔥 100% DP [VIDEO] Decoding Approach to Minimum ASCII Delete Sum 📝

**Author:** vanAmsen
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840553/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840553/)

---

# Intuition
The problem is asking us to make two strings equal by deleting characters, while also minimizing the sum of the ASCII values of the deleted characters. This immediately brings to mind dynamic programming, as we can leverage the overlapping subproblems inherent in this task - that is, making smaller substrings equal and expanding upon that. 

https://youtu.be/OT6zcEATv1c

# Approach

To solve this problem, we use a dynamic programming approach. In dynamic programming, we break down a complex problem into simpler sub-problems and solve them, often iteratively. Our solutions to these sub-problems then feed into the solution for our overall problem. Here are the step by step details of our approach for this problem:

1. **Initialization and Swap**: If the length of `s1` is greater than the length of `s2`, we swap `s1` and `s2`. This ensures we use less space in our solution. After ensuring `s1` is the shorter string, we initialize an array `prev_row` of length equal to the length of `s2` plus one. Each entry in this array, indexed by `j`, holds the cumulative ASCII sum of the first `j` characters of `s2`. This essentially means that if we were to make `s1` empty by deleting all its characters, the minimum ASCII sum of deleted characters to make `s1` and the first `j` characters of `s2` equal would be the ASCII sum of those `j` characters. We are effectively considering all possible substrings of `s2` paired with an empty string.

2. **Iteration through `s1`**: We then iterate over each character of `s1`, indexed by `i`. For each `i`, we generate a new array `curr_row`. The first entry of `curr_row` is the cumulative ASCII sum of the first `i` characters of `s1` plus the last entry in `prev_row`. This effectively considers the case where we make `s2` empty by deleting all its characters. In that case, the minimum ASCII sum of deleted characters to make the first `i` characters of `s1` and `s2` equal would be the ASCII sum of those `i` characters.

3. **Iteration within `s1` through `s2`**: Within this iteration through `s1`, we iterate through each character of `s2`, indexed by `j`. For each `j`, we compare the `i`-th character of `s1` and the `j`-th character of `s2`.

    - If they are equal, we append the value of `prev_row[j - 1]` to `curr_row`. This is because we don't need to delete any characters in this case, so the minimum ASCII sum of deleted characters to make the first `i` characters of `s1` and the first `j` characters of `s2` equal would be the same as that to make the first `i - 1` characters of `s1` and the first `j - 1` characters of `s2` equal.
    
    - If they are not equal, we calculate two quantities: `prev_row[j]` + the ASCII value of `s1[i - 1]`, and `curr_row[j - 1]` + the ASCII value of `s2[j - 1]`. The former represents the minimum ASCII sum if we delete the `i`-th character of `s1`, while the latter represents the minimum ASCII sum if we delete the `j`-th character of `s2`. We append the minimum of these two quantities to `curr_row`.

4. **Completion of an iteration of `s1`**: After we have gone through all characters of `s2` for the current `i`, we set `prev_row` to `curr_row`, effectively storing our results for the current `i` and preparing to move to the next `i`.

5. **Final Result**: After we have iterated through all characters of `s1`, `prev_row` will have been updated to hold the minimum ASCII sums for all possible substring pairings of `s1` and `s2`. The last entry in `prev_row` represents the minimum ASCII sum of deleted characters to make `s1` and `s2` equal, which is the final result we return.

The transitions of the dynamic programming table `prev_row` / `curr_row` essentially represent our evolving solutions to the sub-problems of making the first `i` characters of `s1` and the first `j` characters of `s2` equal. As we expand `i` and `j` to cover all possible substring pairings, we eventually obtain our solution for the overall problem.

# Complexity
- Time complexity: O(n*m), where `n` and `m` are the lengths of `s1` and `s2`, respectively. This is because we need to iterate through all possible pairs of substrings from `s1` and `s2`.

- Space complexity: O(m), where `m` is the length of `s2`. This is because we only need to store the current and the previous rows of the dynamic programming table at any given time, not the entire table.

This solution iterates through each possible substring pairing, and calculates the minimum ASCII sum for each pair. By only storing the current and previous rows, it efficiently uses space while still providing the correct result.

# Code
``` Python []
#
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        if len(s1) > len(s2):
            s1, s2 = s2, s1
        prev_row = [0] * (len(s2) + 1) 
        for j in range(1, len(s2) + 1): 
            prev_row[j] = prev_row[j - 1] + ord(s2[j - 1]) 

        for i in range(1, len(s1) + 1): 
            curr_row = [prev_row[0] + ord(s1[i - 1])] 
            for j in range(1, len(s2) + 1): 
                if s1[i - 1] == s2[j - 1]: 
                    curr_row.append(prev_row[j - 1]) 
                else: 
                    curr_row.append(min(prev_row[j] + ord(s1[i - 1]), curr_row[j - 1] + ord(s2[j - 1]))) 
            prev_row = curr_row 

        return prev_row[-1] 
```
``` C++ []
class Solution {
public:
    int minimumDeleteSum(string s1, string s2) {
        vector<vector<int>> dp(s1.size() + 1, vector<int>(s2.size() + 1, 0));

        for (int i = 1; i <= s1.size(); i++)
            dp[i][0] = dp[i - 1][0] + s1[i - 1];

        for (int j = 1; j <= s2.size(); j++)
            dp[0][j] = dp[0][j - 1] + s2[j - 1];

        for (int i = 1; i <= s1.size(); i++) {
            for (int j = 1; j <= s2.size(); j++) {
                if (s1[i - 1] == s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = min(dp[i - 1][j] + s1[i - 1], dp[i][j - 1] + s2[j - 1]);
                }
            }
        }
        
        return dp[s1.size()][s2.size()];
    }
};
```
``` JavaScript []
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let prev_row = new Array(s2.length + 1).fill(0);
        for (let j = 1; j <= s2.length; j++)
            prev_row[j] = prev_row[j - 1] + s2.charCodeAt(j - 1);
        
        for (let i = 1; i <= s1.length; i++) {
            let curr_row = [prev_row[0] + s1.charCodeAt(i - 1)];
            for (let j = 1; j <= s2.length; j++) {
                if (s1[i - 1] === s2[j - 1])
                    curr_row.push(prev_row[j - 1]);
                else
                    curr_row.push(Math.min(prev_row[j] + s1.charCodeAt(i - 1), curr_row[curr_row.length - 1] + s2.charCodeAt(j - 1)));
            }
            prev_row = curr_row;
        }
        
        return prev_row[prev_row.length - 1];
};
```
``` Java []
class Solution {
    public int minimumDeleteSum(String s1, String s2) {
        int[][] dp = new int[s1.length() + 1][s2.length() + 1];

        for (int i = 1; i <= s1.length(); i++)
            dp[i][0] = dp[i - 1][0] + s1.charAt(i - 1);
        
        for (int j = 1; j <= s2.length(); j++)
            dp[0][j] = dp[0][j - 1] + s2.charAt(j - 1);
        
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j] + s1.charAt(i - 1), dp[i][j - 1] + s2.charAt(j - 1));
                }
            }
        }
        
        return dp[s1.length()][s2.length()];
    }
}
```
``` C# []
public class Solution {
    public int MinimumDeleteSum(string s1, string s2) {
        int[,] dp = new int[s1.Length + 1, s2.Length + 1];

        for (int i = 1; i <= s1.Length; i++)
            dp[i, 0] = dp[i - 1, 0] + s1[i - 1];

        for (int j = 1; j <= s2.Length; j++)
            dp[0, j] = dp[0, j - 1] + s2[j - 1];
        
        for (int i = 1; i <= s1.Length; i++) {
            for (int j = 1; j <= s2.Length; j++) {
                if (s1[i - 1] == s2[j - 1]) {
                    dp[i, j] = dp[i - 1, j - 1];
                } else {
                    dp[i, j] = Math.Min(dp[i - 1, j] + s1[i - 1], dp[i, j - 1] + s2[j - 1]);
                }
            }
        }
        
        return dp[s1.Length, s2.Length];
    }
}
```
``` Rust []
impl Solution {
    pub fn minimum_delete_sum(s1: String, s2: String) -> i32 {
        let mut prev_row = vec![0; s2.len() + 1];
        let s1 = s1.chars().collect::<Vec<_>>();
        let s2 = s2.chars().collect::<Vec<_>>();

        for j in 1..=s2.len() {
            prev_row[j] = prev_row[j - 1] + s2[j - 1] as i32;
        }

        for i in 1..=s1.len() {
            let mut curr_row = vec![prev_row[0] + s1[i - 1] as i32];
            for j in 1..=s2.len() {
                if s1[i - 1] == s2[j - 1] {
                    curr_row.push(prev_row[j - 1]);
                } else {
                    curr_row.push(std::cmp::min(prev_row[j] + s1[i - 1] as i32, curr_row[j - 1] + s2[j - 1] as i32));
                }
            }
            prev_row = curr_row;
        }

        *prev_row.last().unwrap()
    }
}
```

# Performance

Here's the table sorted by Runtime in ascending order:

| Language  | Runtime | Beats (Runtime) | Memory | Beats (Memory) |
|-----------|---------|-----------------|--------|----------------|
| Rust      | 6 ms    | 80%             | 2.1 MB | 86.67%         |
| Java      | 23 ms   | 84.93%          | 44.3 MB| 48.12%         |
| C++       | 38 ms   | 79.40%          | 15.3 MB| 41.16%         |
| C#        | 71 ms   | 90.63%          | 39.9 MB| 62.50%         |
| JavaScript| 88 ms   | 96.51%          | 49.5 MB| 60.46%         |
| Python3   | 440 ms  | 95.34%          | 16.5 MB| 91.25%         |


This table provides a summary of the performance metrics (runtime and memory usage) for each programming language for the given LeetCode problem, sorted by runtime in ascending order (from fastest to slowest). The "Beats" columns indicate the percentage of other LeetCode users' submissions that the corresponding solution outperforms in terms of runtime or memory usage.

# Video for JavaScript:
https://youtu.be/BSFWVKT-UNI

I hope this step-by-step guide aids you in understanding this problem and the thought process behind its solution. I am eager to hear any questions, suggestions, or comments you might have!