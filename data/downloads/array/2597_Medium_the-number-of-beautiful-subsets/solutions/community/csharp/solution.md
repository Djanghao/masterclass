# C# Solution for The Number of Beautiful Subsets Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195456/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195456/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to count all \u201Cbeautiful\u201D subsets of an array, where a subset is considered beautiful if it does not contain any two elements whose absolute difference is equal to k. The solution uses a backtracking approach to explore all possible subsets, checking dynamically if the subset remains beautiful as elements are added.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sorting the Array: Sorting helps in managing the subset generation in a structured way and facilitates easier handling of duplicates.
2.	Backtracking with State Tracking:
	\u2022	Function Definition: A recursive function CountBeautifulSubsets is used to explore subsets. The function takes the current index, the current subset, and a set to track the elements included so far.
	\u2022	Base Case: If the current index reaches the end of the array, it checks if the current subset is non-empty and returns 1 (counting it as a valid subset) or 0 (if empty).
	\u2022	Recursive Case:
	\u2022	Exclude Current Element: The function calls itself without including the current element.
	\u2022	Include Current Element: Before including the current element, it checks if including this element would violate the beautiful condition by checking the set for num - k or num + k. If valid, it includes the element, recurses, and then backtracks by removing the element.
	\u2022	Accumulation: The counts from including and excluding the current element are accumulated to get the total count of beautiful subsets.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach is O(2^n), where n is the length of the array:

\u2022	Each element has two choices (include or exclude), leading to 2^n possible subsets.
\u2022	The check for the beautiful condition (set operations) takes O(1) on average due to the use of a hash set.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n):

\u2022	The recursion stack can go up to n levels deep in the worst case.
\u2022	The space used for the current subset and the set of seen elements is proportional to n.

# Code
```
public class Solution {
    public int BeautifulSubsets(int[] nums, int k) {
        Array.Sort(nums);
        return CountBeautifulSubsets(nums, k, 0, new List<int>(), new HashSet<int>());
    }

    private int CountBeautifulSubsets(int[] nums, int k, int index, List<int> currentSubset, HashSet<int> seen) {
        if (index == nums.Length) {
            return currentSubset.Count > 0 ? 1 : 0;
        }

        int count = 0;

        // Case 1: Exclude current element and move to next element
        count += CountBeautifulSubsets(nums, k, index + 1, currentSubset, seen);

        // Case 2: Include current element if it does not violate the beautiful condition
        int currentElement = nums[index];
        if (!seen.Contains(currentElement - k) && !seen.Contains(currentElement + k)) {
            currentSubset.Add(currentElement);
            seen.Add(currentElement);
            count += CountBeautifulSubsets(nums, k, index + 1, currentSubset, seen);
            currentSubset.RemoveAt(currentSubset.Count - 1);
            seen.Remove(currentElement);
        }

        return count;
    }
}
```