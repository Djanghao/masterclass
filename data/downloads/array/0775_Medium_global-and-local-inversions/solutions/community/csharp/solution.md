# A C# Solution

**Author:** jlccl
**Votes:** 1
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/3615184/](https://leetcode.com/problems/global-and-local-inversions/solutions/3615184/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool IsIdealPermutation(int[] nums) {
        int max = int.MinValue;
        for (int i = 0; i < nums.Length - 1; i++)
        {
            if (nums[i] > nums[i + 1])
            {
                if (nums[i + 1] < max) return false;
            }
            else if (nums[i + 1] < max)
            return false;
            max = Math.Max(max, nums[i]);
        }
        return true;
    }
}
```