# C# Solution for Longest Arithmetic Subsequence of given Difference Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761812/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the length of the longest arithmetic subsequence in the given array with a specified difference. We can use dynamic programming to solve this problem efficiently.

# Approach
<!-- Describe your approach to solving the problem. -->
- The code uses a dynamic programming approach to solve the problem.
- It iterates over each number in the given array arr.
- For each number, it checks if there is a previous number in the subsequence with a difference of difference.
- If a previous number is found, the length of the current subsequence is updated in the dp dictionary.
- The maximum length of the subsequence is tracked in the maxLength variable.
- Finally, the code returns the maxLength as the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n), where n is the length of the input array. We iterate over each element of the array once, and the dictionary lookup and update operations take constant time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(n), where n is the length of the input array. We use a dictionary to store the lengths of the subsequences. In the worst case, all elements of the array could be part of distinct subsequences, so the dictionary will contain n entries.

# Code
```
public class Solution {
    public int LongestSubsequence(int[] arr, int difference) {
        Dictionary<int, int> dp = new Dictionary<int, int>();
        int maxLength = 1;

        foreach (int num in arr) {
            int prevNum = num - difference;
            if (dp.ContainsKey(prevNum)) {
                dp[num] = dp[prevNum] + 1;
            } else {
                dp[num] = 1;
            }
            maxLength = Math.Max(maxLength, dp[num]);
        }

        return maxLength;
    }
}
```