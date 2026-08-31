# Easy C# solution.

**Author:** eus102025
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5081738/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5081738/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int WaysToSplitArray(int[] nums) {
			var ans = 0;
			var prefix = new long[nums.Length];
			prefix[0] = nums[0];

			for(int i = 1; i < nums.Length; i++)
			{
				prefix[i] = prefix[i - 1] + nums[i];
			}

			for(int i = 0; i < prefix.Length - 1; i++)
			{
				long left = prefix[i];
				long right = prefix[prefix.Length - 1] - prefix[i + 1] + nums[i + 1];

				if(left >= right)
				{
					ans++;
				}
			}

			return ans;

    }
}
```