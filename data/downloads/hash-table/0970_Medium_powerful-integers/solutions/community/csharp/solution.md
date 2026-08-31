# C# Brute Force approach with Loop Optimizations

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/5481770/](https://leetcode.com/problems/powerful-integers/solutions/5481770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of finding all powerful integers less than or equal to a given bound, we can iterate over all possible values of x^i and y^i while their sums are less than or equal to the bound.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Outer loop for x:
//  *Iterate while x^i is within the bound.
//  *Use 'i < 20' as a safety measure to avoid infinite loops incase of higher values.
//  Inner loop for y:
//  *Iterate while y^i is within the bound.
//  *Use 'j < 20' as a safety measure.
//  Value Calculation and Check:
//  * Calculate 'value' as x^i + y^i.
//  *If 'value' is within the bound, add it to the result list.
//  *If 'value' exceeds the bound, break the inner loop.
//  Special Cases: If y or x is 1, break out of the respective loops early to avoid unnecessary 
//  calculations.
//  Return results: Convert the 'HashSet' to a list and return.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O((log bound)^2).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(bound).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> PowerfulIntegers(int x, int y, int bound) {
        HashSet<int> result = new HashSet<int>();

        // Loop until the power of x exceeds the bound
        for (int i = 0; Math.Pow(x, i) <= bound && i < 20; i++) {
            // Loop until the power of y exceeds the bound
            for (int j = 0; Math.Pow(y, j) <= bound && j < 20; j++) {
                int value = (int)Math.Pow(x, i) + (int)Math.Pow(y, j);
                if (value <= bound) {
                    result.Add(value);
                } else {
                    break; // If the value exceeds the bound, no need to continue with higher powers of y
                }
                if (y == 1) break; // If y is 1, we don't need to continue increasing j
            }
            if (x == 1) break; // If x is 1, we don't need to continue increasing i
        }

        return new List<int>(result);
    }
}
```