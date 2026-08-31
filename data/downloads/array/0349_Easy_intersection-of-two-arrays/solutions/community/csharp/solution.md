# C# Solution for Intersection of Two Arrays Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/4851953/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/4851953/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This C# solution uses HashSet\u2019s IntersectWith method to efficiently find the common elements between two sets, representing the unique elements of each array.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create two hash sets (set1 and set2) from nums1 and nums2, respectively.
2.	Use the IntersectWith method to find the common elements between set1 and set2.
3.	Convert the resulting set (set1) to an array to obtain the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Let n be the length of the longer array between nums1 and nums2. The time complexity is O(n) due to the set intersection operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(m + K), where m is the length of nums1, k is the length of nums2, and m + k represents the total unique elements stored in the hash sets set1 and set2.

# Code
```
public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> set2 = new HashSet<int>(nums2);

        set1.IntersectWith(set2);

        return set1.ToArray();
    }
}
```