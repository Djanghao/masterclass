# C#

**Author:** Dmitriy-Maksimov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/5846089/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/5846089/)

---

# Approach
- If we can represent the number as $$x - 1, x, x + 1$$ than the sum will be $$3 \	imes x$$

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution
{
    public long[] SumOfThree(long num)
    {
        if (num % 3 != 0)
        {
            return [];
        }

        var middle = num / 3;
        return [middle - 1, middle, middle + 1];
    }
}
```