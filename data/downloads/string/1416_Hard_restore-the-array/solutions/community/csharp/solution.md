# Easy and fast C# solution with explanation

**Author:** dr41n
**Votes:** 2
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3445422/](https://leetcode.com/problems/restore-the-array/solutions/3445422/)

---

# Intuition
The problem can be solved using dynamic programming approach. The idea is to use a one-dimensional array **dp[]**, where **dp[i]** represents the number of possible arrays that can be printed using the substring **s[i:]** as input, considering the constraint that all integers in the array were in the range **[1, k]**.

# Approach
To fill the **dp** array, we iterate through the string **s** from right to left. For each position **i**, we check if the digit at that position is 0 or not. If it is 0, then it is not possible to form any array using that digit. Therefore, **dp[i]** will be 0. If it is not 0, we try to form all possible arrays that can start with that digit. We keep a running total of the number of such arrays in the variable **dp[i]**.

To form all possible arrays, we iterate through all the digits starting from the current position **i**, until we find a number greater than **k** or we reach the end of the string. At each position **j**, we append the digit to a number **num**, which we check if it is less than or equal to **k**. If it is, then we add the value of **dp[j+1]** to **dp[i]**. Finally, we return **dp[0]** as the answer.

# Complexity
- Time complexity: $$O(n^2)$$, where $$n$$ is the length of the string **s**. This is because for each position **i**, we may have to iterate through all remaining positions to find the possible arrays that start with the digit at position **i**.

- Space complexity: $$O(n)$$, where $$n$$ is the length of the string s. This is because we are using a one-dimensional array **dp[]** of size **n+1**.

# Code
```
public class Solution {
    public int NumberOfArrays(string s, int k) {
        int mod = 1000000007;
        int n = s.Length;
        long[] dp = new long[n+1];
        dp[n] = 1;
        for (int i = n-1; i >= 0; i--) {
            if (s[i] == '0') {
                dp[i] = 0;
            } else {
                long num = 0;
                for (int j = i; j < n; j++) {
                    num = num * 10 + (s[j] - '0');
                    if (num > k) break;
                    dp[i] = (dp[i] + dp[j+1]) % mod;
                }
            }
        }
        return (int) dp[0];
    }
}
```