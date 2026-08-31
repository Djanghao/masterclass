# C# Simple Solution

**Author:** ashishksingh23
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4147430/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4147430/)

---


# Code
```
public class Solution {
    public int MinOperations(string s1, string s2, int x) {
        
        ///Compare the values of s1 and s2 of not Equal so put into the list
        List<int> a = new List<int>();
        for (int i = 0; i < s1.Length; i++) {
            if (s1[i] != s2[i]) {
                a.Add(i);
            }
        }
        /// If compared list count is ODD return-1 as we need Even numbers to cpmpare
        if (a.Count % 2 != 0) {
            return -1;
        }

        int n = a.Count;
        List<int> dp = new List<int>(new int[n + 1]);
        
        dp[0] = 0;
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + x;
            if (i >= 2) {
                dp[i] = Math.Min(dp[i], dp[i - 2] + 2 * (a[i - 1] - a[i - 2]));
            }
        }
        return dp[n] / 2;
        
    }
}
```