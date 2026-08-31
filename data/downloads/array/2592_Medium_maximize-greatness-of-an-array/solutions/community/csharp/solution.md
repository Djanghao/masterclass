# Go, C# || Sorted slice

**Author:** Wild-Boar
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312404/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312404/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlog(n))
- Space complexity: O(1)

# Code
```Go []
func maximizeGreatness(nums []int) int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[j] > nums[i]
	})

	var res int = 0
	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[res] {
			res++
		}
	}
	return res
}
```
```C# []
public class Solution {
    public int MaximizeGreatness(int[] nums)
    {
        Array.Sort(nums);
        int res = 0;
        for (int i = 1; i < nums.Length; i++)
            if (nums[i] > nums[res])
                res++;
        return res;
    }
}
``'