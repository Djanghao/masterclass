# Rotated Digits Solution

**Author:** AlexandrBelen
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/5220800/](https://leetcode.com/problems/rotated-digits/solutions/5220800/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach


# Complexity
- Time complexity: O(n*log(n))

- Space complexity: O(n*log(n))

# Code
```
public class Solution {
    public int RotatedDigits(int n) {
        int rotatedDigitsCount = 0;

        for (int i = 2; i <= n; i++)
        {
        	if (IsGoodNumber(i))
        	{
        		rotatedDigitsCount++;
        	}
        }

        return rotatedDigitsCount;
    }
    
    private bool IsGoodNumber(int number)
    {
    	bool canBeRotated = false;

        while (number > 0)
        {
        	int digit = number % 10;
        	if (digit == 3 || digit == 4 || digit == 7)
        	{
        		return false;
        	}
        
        	if (digit == 2 || digit == 5 || digit == 6 || digit == 9)
        	{
        		canBeRotated = true;
        	}
        
        	number /= 10;
        }
        
        return canBeRotated;
    }
}
```