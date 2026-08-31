# 💥 C# | Runtime beats 96.83%, memory beats 92.06% [EXPLAINED]

**Author:** r9n
**Votes:** 13
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/5768210/](https://leetcode.com/problems/divide-two-integers/solutions/5768210/)

---

# Intuition
I realized that instead of normal division, I could repeatedly subtract the divisor from the dividend. To speed this up, I thought of doubling the divisor using bit shifts, making the process faster.

# Approach
Handle special cases (like overflow).

Determine the sign of the result.

Work with positive numbers.

Use bit shifts to subtract large chunks of the divisor from the dividend.

Apply the correct sign to the result.

# Complexity
- Time complexity:
O(log N), because I double the divisor each time.

- Space complexity:
O(1), using only a few variables.

# Code
```csharp []
public class Solution {
    public int Divide(int dividend, int divisor) {
        // Handle edge cases
        if (dividend == int.MinValue && divisor == -1)
            return int.MaxValue;
        
        // Get the signs of the result
        bool negative = (dividend < 0) ^ (divisor < 0);

        // Convert both numbers to positive values
        long absDividend = Math.Abs((long)dividend);
        long absDivisor = Math.Abs((long)divisor);
        
        int result = 0;
        
        // Shift divisor left until it's larger than the dividend
        while (absDividend >= absDivisor) {
            long temp = absDivisor, multiple = 1;
            while (absDividend >= (temp << 1)) {
                temp <<= 1;
                multiple <<= 1;
            }
            absDividend -= temp;
            result += (int)multiple;
        }
        
        // Apply the sign
        return negative ? -result : result;
    }
}

```