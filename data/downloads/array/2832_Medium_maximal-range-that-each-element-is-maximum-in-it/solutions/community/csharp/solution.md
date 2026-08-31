# Monotonic stack beating 100%!

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/4927697/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/4927697/)

---

# Code
```
public class Solution 
{
    public int[] MaximumLengthOfRanges(int[] nums) 
    {
        var result = new int[nums.Length];
        var stack = new Stack<(int Value, int Index)>();
        var i = 0;

        for (; i < nums.Length; i++)
        {
            while (stack.TryPeek(out var top) && top.Value < nums[i])
            {
                stack.Pop();
                if (stack.TryPeek(out var top2))
                    result[top.Index] = top.Index - top2.Index + i - top.Index - 1;
                else
                    result[top.Index] = i;
            }

            stack.Push((nums[i], i));
        }

        while (stack.TryPop(out var top))                
            if (stack.TryPeek(out var top2))
                result[top.Index] = top.Index - top2.Index + i - top.Index - 1;
            else
                result[top.Index] = i;

        return result;
    }
}
```