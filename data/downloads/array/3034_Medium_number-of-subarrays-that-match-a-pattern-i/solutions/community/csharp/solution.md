# One Line LINQ, Simple

**Author:** nithin1924
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4711537/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4711537/)

---

# Intuition
First Convert main array to 0, -1, 1 pattern
Then we split main array to sub array and check pattern and count.
# Approach
LINQ

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)


# Code
```
public class Solution {
    public int CountMatchingSubarrays(int[] nums, int[] pattern) {
       	int n = nums.Length, m = pattern.Length;
		return Enumerable.Range(0, n - m).Where(i => nums.Skip(1).Select((x, i) => x == nums[i] ? 0 : x > nums[i] ? 1 : -1)
			.Skip(i).Take(m).SequenceEqual(pattern.Select(x => x == -1 ? -1 : x))).Count(); 
    }
}
```