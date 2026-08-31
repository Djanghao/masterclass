# DP in C++, Java & Python

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/4500906/](https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/4500906/)

---

# Intuition
Use bitset/mask to represent whether a number is used before or not.
dp[i] is the number of valid orders when only use the numbers that i represents. 
Let the number of set bits in i is c, we know we used c numbers before and the next number's index should be c + 1. And we'll select number x such that 
1 <= x <= n
x % (c + 1) == 0 or (c + 1) % x == 0
bit x is unset in i.

And dp[i'] += dp[i] where i' is got by setting i's xth bit.


# Complexity
- Time complexity:
O(2 ^ n * n)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
public:
    int selfDivisiblePermutationCount(int n) {
        const int s = 1 << n;
        vector<int> dp(s);
        dp[0] = 1;
        for (int i = 0; i < s; ++i) {
            if (dp[i] == 0) continue;
            const int c = __builtin_popcount(i) + 1;
            for (int j = 1; j <= n; ++j) {
                if ((((i >> (j - 1)) & 1) == 0) && (j % c == 0 || c % j == 0)) {
                    dp[i | (1 << (j - 1))] += dp[i];

                }
            }
        }
        return dp[s - 1];
    }
};
```

Java
```
class Solution {
    public int selfDivisiblePermutationCount(int n) {
        int s = 1 << n;
        int[] dp = new int[s];
        dp[0] = 1;

        for (int i = 0; i < s; ++i) {
            if (dp[i] == 0) continue;
            int c = Integer.bitCount(i) + 1;

            for (int j = 1; j <= n; ++j) {
                if ((((i >> (j - 1)) & 1) == 0) && (j % c == 0 || c % j == 0)) {
                    dp[i | (1 << (j - 1))] += dp[i];
                }
            }
        }

        return dp[s - 1];
        
    }
}
```

Python
```
class Solution:
    def selfDivisiblePermutationCount(self, n: int) -> int:
        s = 1 << n
        dp = [0] * s
        dp[0] = 1

        for i in range(s):
            if dp[i] == 0:
                continue
            c = bin(i).count('1') + 1

            for j in range(1, n + 1):
                if (((i >> (j - 1)) & 1) == 0) and (j % c == 0 or c % j == 0):
                    dp[i | (1 << (j - 1))] += dp[i]

        return dp[s - 1]
        
```