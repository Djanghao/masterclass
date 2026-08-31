# VERY EASY 95% solution

**Author:** uiopuiop
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/4918341/](https://leetcode.com/problems/missing-ranges/solutions/4918341/)

---

# Intuition
Iterate and keep track of the expected vs found variation.

# Approach
1. Define the expectation as 'lower'
2. Iterate over the array. If the expectation doesn't match, add the range [expected, current-1].
3. Current already exists so we are good on the current.
4. Increment the expectation by 1 to indicate we are good so far, next we need to find current+1.
5. At the end of iterating over the array, check if expected value is <= upper bound. If yes, this means we were expecting array to have a value i.e. inside the upper range (inclusive) but wasn't found. Add that to missing range.

# Complexity
- Time complexity:
$$O(n)$$ where $$n$$ refers to length of $$nums$$

- Space complexity:
$$O(n)$$ where $$n$$ refers to length of $$nums$$

# Code
```
public class Solution {
    public IList<IList<int>> FindMissingRanges(int[] nums, int lower, int upper) {
        var ans = new List<IList<int>>();
        var expected = lower;
        for (int i=0; i<nums.Length; i++)
        {
            if (nums[i] != expected)
            {
                ans.Add(new List<int>(){expected, nums[i]-1});
                expected = nums[i];
            }
            expected++;
        }
        if (expected <= upper)
        {
            ans.Add(new List<int>(){expected, upper});
        }
        return ans;
    }
}
```