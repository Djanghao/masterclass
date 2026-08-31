# 💥Runtime beats 100.00%, Memory beats 82.35% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/5708964/](https://leetcode.com/problems/decode-ways-ii/solutions/5708964/)

---

# Intuition
Decode the string by counting how many ways you can interpret each part. Characters '1' to '9' directly map to letters, '0' needs a valid prefix, and '*' can be any digit from '1' to '9'.

# Approach
This approach efficiently keeps track of all possible decodings with minimal memory usage, making it suitable even for long strings.

# Complexity
- Time complexity:
O(n) \u2014 Each character is processed once.

- Space complexity:
O(1) \u2014 Constant space for tracking results.

# Code
```csharp []
public class Solution {
    public int NumDecodings(string s) {
        const int MOD = 1_000_000_007;
        int n = s.Length;

        // If the first character is '0', return 0 immediately as it's invalid
        if (s[0] == '0') return 0;

        long prev1 = s[0] == '*' ? 9 : 1;
        long prev2 = 1;

        for (int i = 1; i < n; i++) {
            long current = 0;

            if (s[i] == '0') {
                if (s[i - 1] == '1' || s[i - 1] == '2') {
                    current = prev2;
                } else if (s[i - 1] == '*') {
                    current = prev2 * 2;
                }
            } else if (s[i] == '*') {
                current = (prev1 * 9) % MOD;

                if (s[i - 1] == '1') {
                    current = (current + prev2 * 9) % MOD;
                } else if (s[i - 1] == '2') {
                    current = (current + prev2 * 6) % MOD;
                } else if (s[i - 1] == '*') {
                    current = (current + prev2 * 15) % MOD;
                }
            } else {
                current = prev1;

                if (s[i - 1] == '1') {
                    current = (current + prev2) % MOD;
                } else if (s[i - 1] == '2' && s[i] <= '6') {
                    current = (current + prev2) % MOD;
                } else if (s[i - 1] == '*') {
                    current = (current + (s[i] <= '6' ? prev2 * 2 : prev2)) % MOD;
                }
            }

            prev2 = prev1;
            prev1 = current;
        }

        return (int)prev1;
    }
}

```