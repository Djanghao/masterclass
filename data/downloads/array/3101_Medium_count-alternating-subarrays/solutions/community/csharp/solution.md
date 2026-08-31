# c#, Simple loop

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4968092/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4968092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can scan `nums` from the end; let `current` be a length of the longest alternating subarray starting from `nums[i + 1]`. For `nums[i]` we have two cases:
1. If `nums[i]` alternates, i.e. `nums[i] == 1 - nums[i + 1]` we have `current + 1` alternating subarrays more
2. If `nums[i]` doesn't alternate, then we have `1` alternating subarray more (`nums[i]` itself)   

# Approach
<!-- Describe your approach to solving the problem. -->
A simple `for` loop

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
    public long CountAlternatingSubarrays(int[] nums) {
        long result = 0;

        for (int i = nums.Length - 1, current = 0; i >= 0; --i) 
            result += current = i == nums.Length - 1 || nums[i] == nums[i + 1] ? 1 : current + 1;

        return result;    
    }
}
```