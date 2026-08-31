# C# | Monotonic Increasing Stack | O(n)

**Author:** slnkiharsh25
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/4830619/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/4830619/)

---

# Approach
Using Monotonic Increasing Stack

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int MaxSumMinProduct(int[] nums) {
        long res = 0;
        long[] prefix = new long[nums.Length + 1];
        prefix[0] = 0;
        Stack<(int, int)> stack = new(); // start index, min value

        for (int i = 0; i < nums.Length; i++)
        {
            prefix[i + 1] = nums[i] + prefix[i];
        }

        for (int i = 0; i < nums.Length; i++)
        {
            int newStart = i;

            while (stack.Any() && stack.Peek().Item2 > nums[i])
            {
                int start = stack.Peek().Item1;
                int val = stack.Peek().Item2;
                stack.Pop();
                long total = prefix[i] - prefix[start];
                res = Math.Max(res, total * val);
                newStart = start;
            }

            stack.Push((newStart, nums[i]));
        }

        while (stack.Any())
        {
            int index = stack.Peek().Item1;
            int val = stack.Peek().Item2;
            stack.Pop();
            long total = prefix[nums.Length] - prefix[index];
            res = Math.Max(res, total * val);
        }

        long modulo = (long)(Math.Pow(10, 9) + 7);

        return (int)(res % modulo);
    }
}
```