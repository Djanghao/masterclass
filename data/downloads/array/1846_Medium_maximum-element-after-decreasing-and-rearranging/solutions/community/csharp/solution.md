# C# Solution for Maximum Element After Decreasing and Rearranging Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289192/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This approach optimizes the solution by sorting the array first and then traversing it only once to update each element. The focus is on adjusting each element in a way that maintains the condition of having an absolute difference of <= 1 with the previous element while maximizing the values of the elements to achieve the largest possible value in the modified array.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort the array arr to bring it in ascending order.
2.	Initialize a variable max to keep track of the current maximum value that can be set while satisfying the conditions.
3.	Iterate through the sorted array.
4.	For each element num in the array, update max to be the minimum value between num and max + 1. This ensures that the element num is adjusted to meet the condition of having an absolute difference of <= 1 with the previous element (previously updated maximum value).
5.	After iterating through the array, return the maximum value obtained (max), representing the largest possible element in the modified array satisfying the given conditions.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Sorting the array initially takes O(n log n), where n is the length of the array.
\u2022	Iterating through the sorted array takes O(n).
\u2022	Overall time complexity: O(n log n) + O(n) \u2248 O(n log n) due to the sorting dominating the time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) as the algorithm sorts and modifies the array in place without using any additional space that scales with the input size.

# Code
```
public class Solution {
    public int MaximumElementAfterDecrementingAndRearranging(int[] arr) {
        Array.Sort(arr);
        int max = 0;

        foreach (int num in arr) {
            max = Math.Min(num, max + 1);
        }

        return max;
    }
}
```