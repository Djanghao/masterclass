# C# solution: Attempt and understand Leetcode 462 first

**Author:** huikinglam02
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/3364815/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/3364815/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I strongly recommend one should attempt and go back to 462 first. This problem essentially is to run the 462 algorithm on all k-subarrays of the indices array ($$nums[i] == 1$$)
# Approach
<!-- Describe your approach to solving the problem. -->
Refer to the comments. The odd and even scenarios are nicely combined into one by floor division.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
/*
 * @lc app=leetcode id=1703 lang=csharp
 *
 * [1703] Minimum Adjacent Swaps for K Consecutive Ones
 */

// @lc code=start
using System.Linq;
using System.Collections.Generic;
using System;
public class Solution {
    /// <summary>
    ///     Remember one key point: the median of a sequence is where we should swap all sequence elements to if we want to make all elements equal and the number of +- 1 swaps is minimized (Leetcode 462). <br/>
    ///     So we record occurence of 1 in nums. Then we consider length k subarrays of the indices array and decide how many swaps to create a consecutive k 1s around the median. Leetcode 462 tells us how many swaps to turn all of them to the median. To get k consecutives 1s around mid: <br/>
    ///     1. if k is odd, number of moves = 2 * (1 + 2 + ... + (k - 1) // 2) = k // 2 * (k // 2 + 1) <br/>
    ///     2. if k is even, number of moves = (1 + 2 + ... + k // 2) + (1 + 2 + ... + (k - 2) // 2) = (k // 2) * (k // 2) <br/>
    ///     Since k can be large, using the 462 algorithm can be time consuming O(nk). If we look carefully at the formula, minMoves2(nums) = nums[-1] - nums[0] + nums[-2] - nums[1] +... : <br/>
    ///     1. if n is odd: minMoves(nums) = (nums[mid + 1] +... + nums[-1]) - (nums[mid - 1] + nums[mid - 2] + ... + nums[0]) <br/>
    ///     2. if n is even: minMoves(nums) = (nums[mid] +... + nums[-1]) - (nums[mid - 1] + nums[mid - 2] + ... + nums[0]) <br/>
    ///     We can prepare prefix sum array to quickly calculate the output of Leetcode 462
    /// </summary>
    /// <param name="nums"></param>
    /// <param name="k"></param>
    /// <returns></returns>
    public int MinMoves(int[] nums, int k) 
    {
        List<int> prefix = new List<int>();
        prefix.Add(0);
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == 1)
            {
                prefix.Add(prefix.Last() + i);
            }
        }
        int result = Int32.MaxValue;
        for (int i = 0; i < prefix.Count - k; i++)
        {
            result = Math.Min(result, prefix[i + k] + prefix[i] - prefix[i + (k + 1) / 2] - prefix[i + k / 2] - (k / 2)*((k + 1) / 2));
        }
        return result;
    }
}
// @lc code=end


```