# Number of Smooth Descent Periods of a Stock | C# | O(n)

**Author:** shreymehul
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/4882569/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/4882569/)

---

# Intuition
Sliing Window

# Approach
Based on Sliing Window.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public long GetDescentPeriods(int[] prices) {
        int prev = -1;
        long days = 0;
        int contiguous = 0;
        for(int i = 0; i < prices.Length; i++){
            if(prices[i] == prev - 1)
                contiguous++;
            else
                contiguous = 1;
            days += contiguous;
            prev = prices[i];
        }
        return days;
    }
}
```