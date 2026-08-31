# C# Solution for Minimum Common Value Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4847053/](https://leetcode.com/problems/minimum-common-value/solutions/4847053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The C# solution utilizes a HashSet to efficiently check for the existence of elements. By storing the elements of the first array in a HashSet, we can quickly look up whether each element from the second array is present. If a common element is found, it is returned as the minimum common integer.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create a HashSet (set) containing the elements of the first array (nums1).
2.	Iterate through the elements of the second array (nums2).
3.	Check if the current element from nums2 is present in the HashSet.
4.	If a common element is found, return it as the minimum common integer.
5.	If no common integer is found, return -1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(m + n), where m and n are the lengths of nums1 and nums2 respectively. Constructing the HashSet takes O(m) time, and iterating through the second array takes O(n) time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(m), where m is the length of nums1. The additional space is used to store the elements in the HashSet. The space complexity is linear with respect to the size of the first array.

# Code
```
public class Solution {
    public int GetCommon(int[] nums1, int[] nums2) {
        HashSet<int> set = new HashSet<int>(nums1);

        foreach (int num in nums2) {
            if (set.Contains(num)) {
                return num;
            }
        }

        return -1; // No common element found
    }
}
```