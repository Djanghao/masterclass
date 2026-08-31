# c#, Binary Search

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3561241/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3561241/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- We can `never` do the task in `-1` step
- We can `ever` do the task in `Max(nums) / y + 1` step
- We can easily check if we can do the task in exactly `steps` step

So, it's a yet another problem to be solved by *binary search*.

# Approach
<!-- Describe your approach to solving the problem. -->
Binary Search

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(n * log(n) * log(max(nums)))$$ - an extra `log(n)` since I've sorted the array to easy process.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    private static bool CanDo(int[] nums, long x, long y, long steps) {
        long delta = steps * y;

        foreach (var num in nums) {
            long excess = num - delta;

            if (excess <= 0)
                return true;

            if ((steps -= excess / (x - y) + 
                 Math.Clamp(excess % (x - y), 0, 1)) < 0)
                return false;
        }

        return true;
    }

    public int MinOperations(int[] nums, int x, int y) {
        Array.Sort(nums, (a, b) => b.CompareTo(a));

        int never = -1;
        int ever = nums[0] / y + 1;

        while (ever - never > 1) {
            int middle = (ever + never) / 2;

            if (CanDo(nums, x, y, middle))
                ever = middle;
            else
                never = middle;
        }

        return ever;
    }
}
```