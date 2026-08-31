# ✅97.43%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 213
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4454037/](https://leetcode.com/problems/decode-ways/solutions/4454037/)

---

# Intuition
#### The problem can be solved using dynamic programming. We can define a dynamic programming array `dp`, where `dp[i]` represents the number of ways to decode the substring `s[:i]`. We can iterate through the string and update the `dp` array based on the current digit and the previous digits.

---

# Approach
#### 1. Check if the input string `s` is empty or starts with '0'. If so, return 0 because a valid decoding is not possible.
#### 2. Initialize a dynamic programming array `dp` of size `n + 1`, where `n` is the length of the input string. Set `dp[0]` and `dp[1]` to 1, as there is one way to decode an empty string and a string of length 1.
#### 3. Iterate through the string starting from index 2 up to `n + 1`.
-  Convert the current one-digit and two-digit substrings to integers.
- If the one-digit substring is not '0', update `dp[i]` by adding `dp[i - 1]` because we can consider the current digit as a single character.
- If the two-digit substring is between 10 and 26 (inclusive), update `dp[i]` by adding `dp[i - 2]` because we can consider the current two digits as a single character.
#### 4.The final result is stored in `dp[n]`, where n is the length of the input string.
---
# Complexity
- ### Time complexity:
##### $$O(n)$$ where n is the length of the input string. We iterate through the string once.

- ### Space complexity:
##### O(n) for the dynamic programming array `dp`.
---
# Code
```python []
class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        n = len(s)
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1

        for i in range(2, n + 1):
            one_digit = int(s[i - 1])
            two_digits = int(s[i - 2:i])

            if one_digit != 0:
                dp[i] += dp[i - 1]

            if 10 <= two_digits <= 26:
                dp[i] += dp[i - 2]

        return dp[n]
```
```C++ []
class Solution {
public:
    int numDecodings(std::string s) {
        if (s.empty() || s[0] == '0') {
            return 0;
        }

        int n = s.length();
        std::vector<int> dp(n + 1, 0);
        dp[0] = 1;
        dp[1] = 1;

        for (int i = 2; i <= n; ++i) {
            int oneDigit = s[i - 1] - '0';
            int twoDigits = std::stoi(s.substr(i - 2, 2));

            if (oneDigit != 0) {
                dp[i] += dp[i - 1];
            }

            if (10 <= twoDigits && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
};

```
```java []
public class Solution {
    public int numDecodings(String s) {
        if (s == null || s.length() == 0 || s.charAt(0) == '0') {
            return 0;
        }

        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;

        for (int i = 2; i <= n; ++i) {
            int oneDigit = s.charAt(i - 1) - '0';
            int twoDigits = Integer.parseInt(s.substring(i - 2, i));

            if (oneDigit != 0) {
                dp[i] += dp[i - 1];
            }

            if (10 <= twoDigits && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
```
```javascript []
var numDecodings = function(s) {
    if (!s || s[0] === '0') {
        return 0;
    }

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; ++i) {
        const oneDigit = parseInt(s[i - 1]);
        const twoDigits = parseInt(s.substring(i - 2, i));

        if (oneDigit !== 0) {
            dp[i] += dp[i - 1];
        }

        if (10 <= twoDigits && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};
```
```C# []
public class Solution {
    public int NumDecodings(string s) {
        if (string.IsNullOrEmpty(s) || s[0] == '0') {
            return 0;
        }

        int n = s.Length;
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;

        for (int i = 2; i <= n; ++i) {
            int oneDigit = s[i - 1] - '0';
            int twoDigits = int.Parse(s.Substring(i - 2, 2));

            if (oneDigit != 0) {
                dp[i] += dp[i - 1];
            }

            if (10 <= twoDigits && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)
