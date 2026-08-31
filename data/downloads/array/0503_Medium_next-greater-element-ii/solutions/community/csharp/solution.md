# C# Simple Solution Using Stack

**Author:** Omarkmyaaa
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/2837521/](https://leetcode.com/problems/next-greater-element-ii/solutions/2837521/)

---

# Approach
Using Stack
# Code
```
public class Solution {
    public int[] NextGreaterElements(int[] nums)
    {
        var result = new int[nums.Length];
        Array.Fill(result , -1);
        Stack<int> stack = new Stack<int>();

        for (int i = 0; i < 2 * nums.Length; i++)
        {
            while (stack.Any() && nums[stack.Peek()] < nums[i % nums.Length])
            {
                result[stack.Pop()] = nums[i % nums.Length];
            }
            if (i < nums.Length)
            {
                stack.Push(i);
            }
        }

        return result;
    }
}
```