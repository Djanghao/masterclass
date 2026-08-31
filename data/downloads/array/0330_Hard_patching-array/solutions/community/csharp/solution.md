# C# Solution for Patching Array Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/patching-array/solutions/5322257/](https://leetcode.com/problems/patching-array/solutions/5322257/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is that we aim to cover the range of sums from 1 to n using the elements in nums and additional patches if necessary. However, this solution uses a dynamic approach to iteratively extend the maximum sum that can be covered (maxSumCovered). If there is a gap (i.e., a number that cannot be formed with the current set of numbers), we add a patch to bridge that gap.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization:
	\u2022	patches is initialized to 0 to count the number of patches added.
	\u2022	maxSumCovered is initialized to 0, representing the largest sum that can be formed with the current set of numbers.
	\u2022	i is initialized to 0 to iterate through the nums array.
2.	Iteration:
	\u2022	While maxSumCovered is less than n:
	\u2022	If the current element in nums (i.e., nums[i]) is less than or equal to maxSumCovered + 1, it means we can use nums[i] to extend our range of sums. Update maxSumCovered to maxSumCovered + nums[i] and increment i.
	\u2022	If nums[i] is greater than maxSumCovered + 1 or there are no more elements left in nums, we add maxSumCovered + 1 as a patch. This new element bridges the gap and extends our coverage to 2 * maxSumCovered + 1, and we increment the patches count.
3.	Return:
	\u2022	The total number of patches added is returned.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(m + log n), where:

	\u2022	m is the length of the array nums.
	\u2022	log n comes from the fact that each patching operation doubles the value of maxSumCovered, and the number of such operations required to reach n is log n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this solution is O(1) since we are using only a fixed amount of additional space (for variables like maxSumCovered, patches, and i).

# Code
```
public class Solution {
    public int MinPatches(int[] nums, int n) {
        int patches = 0;
        long maxSumCovered = 0;
        int i = 0;
        
        while (maxSumCovered < n) {
            if (i < nums.Length && nums[i] <= maxSumCovered + 1) {
                maxSumCovered += nums[i];
                i++;
            } else {
                maxSumCovered += maxSumCovered + 1;
                patches++;
            }
        }
        
        return patches;
    }
}
```