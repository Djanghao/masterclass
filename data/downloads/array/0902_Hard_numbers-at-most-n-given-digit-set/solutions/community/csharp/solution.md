# 💥💥 C# | Runtime and memory beats 100%! [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/5764934/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/5764934/)

---

# Intuition
When I want to generate numbers smaller than or equal to n using the available digits, I realize that:

Numbers with fewer digits are always valid.

For numbers with the same length as n, I need to carefully match each digit while ensuring they don't exceed n.

# Approach
Fewer Digits: For numbers with fewer digits than n, I can freely form numbers, so I count all possible combinations.

Same Digits: For numbers with the same number of digits as n, I compare each digit step by step. If a digit matches, I continue; if it\u2019s smaller, I count valid combinations for the remaining digits; if it\u2019s bigger, I stop.

# Complexity
- Time complexity:
O(d * log n), where d is the number of available digits and log n is the number of digits in n.

- Space complexity:
O(log n) for storing the digits of n and precomputed powers.

# Code
```csharp []
public class Solution {
    public int AtMostNGivenDigitSet(string[] digits, int n) {
        string strN = n.ToString();
        int lenN = strN.Length;
        int lenD = digits.Length;
        int result = 0;
        
        // Precompute powers of lenD
        int[] powers = new int[lenN + 1];
        powers[0] = 1;
        for (int i = 1; i <= lenN; i++) {
            powers[i] = powers[i - 1] * lenD;
        }

        // Step 1: Count numbers with fewer digits than n
        for (int i = 1; i < lenN; i++) {
            result += powers[i];  // lenD^i numbers can be formed with i digits
        }

        // Step 2: Count numbers with the same number of digits as n
        for (int i = 0; i < lenN; i++) {
            bool hasSamePrefix = false;
            foreach (var digit in digits) {
                if (digit[0] < strN[i]) {
                    result += powers[lenN - i - 1];  // If digit is smaller, we can form valid numbers
                } else if (digit[0] == strN[i]) {
                    hasSamePrefix = true;  // Continue to the next digit
                    break;  // No need to check further as the prefix matches
                } else {
                    break;  // All larger digits won't work, stop checking
                }
            }

            if (!hasSamePrefix) {
                return result;  // If no matching prefix, stop further exploration
            }
        }

        // Add 1 for the number n itself, since it's valid
        return result + 1;
    }
}

```