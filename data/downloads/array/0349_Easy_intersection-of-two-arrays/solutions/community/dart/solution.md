# Intersection of Two Arrays. Solution is too easy in Dart

**Author:** codewithbek
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/3099038/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/3099038/)

---

# Intuition
The first step in the method is to convert the input lists 'nums1' and 'nums2' into sets, 'newNums1' and 'newNums2', respectively. This is done using the 'toSet()' method which converts a list into a set.

The next step is to find the intersection of these two sets, which can be done using the 'intersection' method, and then convert it back to a list using 'toList()'. The returned list will contain all the integers that are common to both input lists 'nums1' and 'nums2'
# Approach
Overall, the approach taken in this code is to use sets to find the intersection of the input lists, since sets have fast lookups and can be used to find common elements in two lists efficiently.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> intersection(List<int> nums1, List<int> nums2) {
    Set<int> newNums1 = nums1.toSet();
    Set<int> newNum2 = nums2.toSet();
    return newNums1.intersection(newNum2).toList();
  }
}
```