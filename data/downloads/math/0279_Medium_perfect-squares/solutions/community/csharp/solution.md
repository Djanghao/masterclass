# Beats 100%🚀➡️| In Depth Analysis💯➡️[Java/C++/C#/Python3/JavaScirpt]

**Author:** Shivansu_7
**Votes:** 24
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4695995/](https://leetcode.com/problems/perfect-squares/solutions/4695995/)

---

# Intuition
```
Perfect square before 43 are 36, 25, 16, 9, 4, 1
//43 = 36 + 4 + 1 + 1 +1, number of perfect square numbers 5
//43 = 25 + 16 + 1 + 1, number of perfect square numbers 4
// 43 = 25 + 9 + 9, number of perfect square numbers 3
//43 = 16 + 16 + 9 + 1 + 1, number of perfect square numbers 5
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Define Dynamic Programming Array:**
    - Initialize an array `dp[]` of size `n+1` to store the minimum number of perfect square numbers required to sum up to each index `i` from `0` to `n`.
2. **Base Cases Initialization:**
    - Set `dp[0]` to `0`, as it takes 0 perfect square numbers to sum up to 0.
    - Set `dp[1]` to `1`, as it takes 1 perfect square number (1) to sum up to 1.
3. **Iterate over All Numbers:**
    - Iterate from i = 2 to n.
4. **Initialize Minimum Counter:**
    - Initialize a variable `min` to `Integer.MAX_VALUE` to keep track of the minimum number of perfect square numbers for the current `i`.
5. **Find Minimum Number of Perfect Squares:**
    - Iterate over all possible perfect square numbers less than or equal to `i`, denoted as `j*j <= i`.
For each `j`, calculate the remainder rem by subtracting `j*j` from `i`.
6. **Update Minimum Count:**
    - Check if the number of perfect square numbers required to sum up to rem, denoted as `dp[rem]`, is less than the current minimum (`min`).
    - If so, update min to dp[rem].
7. **Update dp Array:**
    - After iterating through all possible perfect square numbers for the current `i`, update `dp[i]` to be the minimum number found (`min + 1`) (since i itself can be considered as one perfect square).
8. **Return Result:**
    - Finally, return `dp[n]`, which represents the minimum number of perfect square numbers required to sum up to `n`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n\u221An)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 1;

        for(int i=2; i<=n; i++) {
            int min = Integer.MAX_VALUE;

            for(int j=1; j*j<=i; j++) {
                int rem = i-j*j;
                if(dp[rem] < min) {
                    min = dp[rem];
                }
            }
            dp[i] = min + 1;
        }
        return dp[n];
    }
}
```
```C++ []
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, 0);
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            int minVal = INT_MAX;

            for (int j = 1; j * j <= i; j++) {
                int remainder = i - j * j;
                minVal = min(minVal, dp[remainder]);
            }
            dp[i] = minVal + 1;
        }
        return dp[n];
    }
};
```
```Python3 []
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[0] = 0
        dp[1] = 1

        for i in range(2, n + 1):
            min_val = float('inf')

            for j in range(1, int(i ** 0.5) + 1):
                remainder = i - j * j
                min_val = min(min_val, dp[remainder])
            dp[i] = min_val + 1

        return dp[n]
```
```C# []
public class Solution {
    public int NumSquares(int n) {
        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 1;

        for(int i=2; i<=n; i++) {
            int min = int.MaxValue;

            for(int j=1; j*j<=i; j++) {
                int rem = i-j*j;
                if(dp[rem] < min) {
                    min = dp[rem];
                }
            }
            dp[i] = min + 1;
        }
        return dp[n];
    }
}
```
```JavaScript []
/**
 * @param {number} n - The input number
 * @return {number} - The minimum number of perfect squares required to sum up to n
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = 1; j * j <= i; j++) {
            const remainder = i - j * j;
            min = Math.min(min, dp[remainder]);
        }
        dp[i] = min + 1;
    }
    return dp[n];
};
```
---


---
![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

