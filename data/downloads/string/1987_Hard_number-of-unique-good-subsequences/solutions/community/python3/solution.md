# 1987. Number of Unique Good Subsequences [Python]

**Author:** shellpy03
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/3973566/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/3973566/)

---



```python
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        mod = 10**9 + 7
        dp = [[0, 0] for _ in range(2)]  # dp[i][j] represents count of subsequences ending at index i with last element j (0 or 1)
        n = len(binary)
        
        for ch in binary:
            if ch == '0':
                # For a '0', we have two cases:
                # 1. Extend the subsequences ending with '0' by one more '0'.
                # 2. Extend the subsequences ending with '1' by appending this '0' to form new subsequences.
                dp[0][0] = 1
                dp[1][0] = (dp[1][0] + dp[1][1]) % mod
            else:
                # For a '1', we have one case:
                # Extend the subsequences ending with '0' or '1' by appending this '1' to form new subsequences.
                dp[1][1] = (dp[1][0] + dp[1][1] + 1) % mod
        
        # The answer is the sum of counts of subsequences ending with '0' and '1',
        # considering all the possibilities.
        result = (dp[0][0] + dp[0][1] + dp[1][0] + dp[1][1]) % mod
        return result

# Create an instance of the Solution class
sol = Solution()

# Test cases
print(sol.numberOfUniqueGoodSubsequences("001"))  # Output: 2
print(sol.numberOfUniqueGoodSubsequences("11"))   # Output: 2
print(sol.numberOfUniqueGoodSubsequences("101"))  # Output: 5
```

**Intuition:**

The algorithm works by maintaining two sets of counts for each index: `dp[i][0]` represents the count of subsequences ending at index `i` with the last element being '0', and `dp[i][1]` represents the count of subsequences ending at index `i` with the last element being '1'. 

When a '0' is encountered, two possibilities arise:
1. We can extend the subsequences ending with '0' by one more '0', and this count is updated in `dp[0][0]`.
2. We can append this '0' to subsequences ending with '1', creating new subsequences, and this count is updated in `dp[1][0]`.

When a '1' is encountered, we can extend the subsequences ending with '0' or '1' by appending this '1' to form new subsequences. This count is updated in `dp[1][1]`.

Finally, the answer is the sum of counts of subsequences ending with '0' and '1', considering all the possibilities.

**Time Complexity:**

The algorithm iterates through the binary string once, performing constant time operations for each character. Hence, the time complexity is O(N), where N is the length of the binary string. The space complexity is O(1) since we are using a fixed-size array for dynamic programming.

# Code
```
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        mod = 10**9 + 7
        dp = [[0, 0] for _ in range(2)]
        n = len(binary)
        
        for ch in binary:
            if ch == '0':
                dp[0][0] = 1
                dp[1][0] = (dp[1][0] + dp[1][1]) % mod
            else:
                dp[1][1] = (dp[1][0] + dp[1][1] + 1) % mod
        
        return (dp[0][0] + dp[0][1] + dp[1][0] + dp[1][1]) % mod
```