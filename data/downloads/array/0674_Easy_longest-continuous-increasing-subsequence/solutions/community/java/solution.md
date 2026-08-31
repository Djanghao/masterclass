# Java | 100% faster | simple - O(n) time and O(1) space - simple and only few lines

**Author:** C0deHacker
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/979680/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/979680/)

---

```
public int findLengthOfLCIS(int[] nums) 
{
	int maximum = 1;
	int currentMax = 1;
	for(int i = 1; i < nums.length; i++)
	{
		currentMax = nums[i] > nums[i - 1] ? currentMax + 1 : 1;   
		maximum = Math.max(maximum, currentMax);
	}

	return nums.length == 0 ? 0 : maximum;
}
```