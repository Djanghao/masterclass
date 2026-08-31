# 233. Number of Digit One - Solution

**Author:** pavelcecoi
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/6023280/](https://leetcode.com/problems/number-of-digit-one/solutions/6023280/)

---

# Intuition
To count how many times the digit '1' appears in all numbers from 0 to n, we can examine each digit place (units, tens, hundreds, etc.) separately. For each place, we'll determine how many times '1' appears based on the higher and lower digits relative to the current digit.

# Approach
1. Iterate Through Each Digit Place:
- Start with the units place and move leftwards to higher digit places by multiplying a factor by 10 each time.
2. Calculate Higher, Current, and Lower Parts:
 -  Higher: The number formed by the digits to the left of the current digit.
  - Current: The digit at the current place.
Lower: The number formed by the digits to the right of the current digit.
3. Determine the Contribution of '1's:
- If the current digit is greater than 1, the number of '1's contributed by this place is (higher + 1) * factor.
- If the current digit is exactly 1, the contribution is (higher * factor) + (lower + 1).
- If the current digit is 0, the contribution is higher * factor.
4. Accumulate the Total Count:
- Sum up the contributions from all digit places to get the total number of '1's.
# Complexity
- Time complexity:
We process each digit place of n, and the number of digit places is proportional to log \u2061 10 \uD835\uDC5B log 10 \u200B n.
- Space complexity:
We use a fixed amount of extra space regardless of the input size.

# Code
```csharp []
public class Solution {
    public int CountDigitOne(int n) {
        long factor = 1;
        int count = 0;
        while (factor <= n) {
            long higher = n / (factor * 10);
            long current = (n / factor) % 10;
            long lower = n % factor;
            if (current > 1)
                count += (int)((higher + 1) * factor);
            else if (current == 1)
                count += (int)(higher * factor + lower + 1);
            else
                count += (int)(higher * factor);
            factor *= 10;
        }
        return count;
    }
}
```