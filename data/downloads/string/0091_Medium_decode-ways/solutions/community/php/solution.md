# PHP DP solution with comments.

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4455602/](https://leetcode.com/problems/decode-ways/solutions/4455602/)

---

# Code
```
class Solution {
    function numDecodings($s) {
        // Check if the first character is '0'. If so, return 0 as it cannot be decoded
        if ((int)$s[0] == 0) return 0;

        $ln = strlen($s);

        // Loop through the string to check for invalid patterns like '30', '40', etc.,
        // which cannot be decoded. Return 0 if such patterns are found.
        // This validation is not necessary but improves performance, beating 100% of PHP submissions.
        for ($i = 0; $i < $ln - 1; $i++) {
            if ((int)$s[$i] > 2 && (int)$s[$i + 1] === 0) {
                return 0;
            }
        }
        
        // Dynamic programming array to store the number of ways to decode
        $dp[$ln] = 1; // Base case: There's 1 way to decode an empty string

        for ($i = $ln - 1; $i >= 0; $i--) {
            if ((int)$s[$i] == 0) {
                // If the current character is '0', it cannot be used for decoding
                $dp[$i] = 0;
            } elseif ((int)$s[$i] > 2) {
                // If the current character is greater than '2', it must be decoded separately
                $dp[$i] = $dp[$i + 1];
            } elseif ((int)$s[$i] == 2 && (int)$s[$i + 1] > 6) {
                // If the current character is '2' and the next character is greater than '6',
                // this '2' must be decoded separately
                $dp[$i] = $dp[$i + 1];
            } else {
                // Otherwise, the current character can be decoded either separately or
                // combined with the next character. So we add both possibilities.
                $dp[$i] = $dp[$i + 1] + $dp[$i + 2];
            }
        }
        return $dp[0];   
    }
}

```