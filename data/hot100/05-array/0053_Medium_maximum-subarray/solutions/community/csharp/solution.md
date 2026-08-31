# C# Solution

**Author:** jovedev
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/252058/](https://leetcode.com/problems/maximum-subarray/solutions/252058/)

---

Runtime: 112 ms, Beats 100.00% of users with C#
Memory Usage: 23.22 MB, Beats 100.00% of users with C#

My solution:

```
public int MaxSubArray(int[] nums) {
	int sum = 0;
	int maxSum = nums[0];

	for (int i=0; i<nums.Length; i++) {
		sum += nums[i];
		if (nums[i] > sum) {
			sum = nums[i];
		}
		if (sum > maxSum) { 
			maxSum = sum; 
		}
	}
	return maxSum;
}
```