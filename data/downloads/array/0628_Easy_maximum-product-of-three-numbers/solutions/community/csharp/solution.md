# Simple C# Solution With One For Loop (●ˇ∀ˇ●)

**Author:** Evgenoid
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3793426/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3793426/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
public class Solution 
{
    public int MaximumProduct(int[] nums) 
    {
        int firstMax = int.MinValue;
        int secondMax = int.MinValue;
        int thirdMax = int.MinValue;
        int firstNegative = int.MaxValue;
        int secondNegative = int.MaxValue;

        if (nums.Length == 3)
        {
            return nums[0] * nums[1] * nums[2];
        }

        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] > firstMax)
            {
                thirdMax = secondMax;
                secondMax = firstMax;
                firstMax = nums[i];
            }
            else if (nums[i] > secondMax)
            {
                thirdMax = secondMax;
                secondMax = nums[i];
            }
            else if (nums[i] > thirdMax)
            {
                thirdMax = nums[i];
            }

            if (nums[i] < firstNegative)
            {
                secondNegative = firstNegative;
                firstNegative = nums[i];
            }
            else if (nums[i] < secondNegative)
            {
                secondNegative = nums[i];
            }
        }

        return Math.Max(firstMax * secondMax * thirdMax, firstMax * firstNegative * secondNegative);
    }
}
```