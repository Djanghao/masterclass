# c#, Greedy

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4130813/](https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4130813/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The edge case: if `nums` contains `0` the answer is `1`: any time we multiply `0` by any other value we get `0` which we use again and again.

Otherwise *greedy* approach will do: scan array from left to right and eliminate items as early as possible.

# Approach
<!-- Describe your approach to solving the problem. -->
Linq validation for an edge case (`nums` has at least one `0`)

Loop over the array while applying greedy elimination

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int MinArrayLength(int[] nums, int k) {
        if (nums.Any(item => item == 0))
            return 1; 

        int result = nums.Length;

        long current = nums[0];

        foreach (int v in nums.Skip(1))
            if (current * v > k)
                current = v;
            else {
                current *= v;

                result -= 1;
            }     

        return result; 
    }
}
```