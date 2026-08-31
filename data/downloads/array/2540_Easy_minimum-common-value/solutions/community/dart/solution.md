# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4346888/](https://leetcode.com/problems/minimum-common-value/solutions/4346888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int getCommon(List<int> nums1, List<int> nums2) {
    Set<int> s1 = Set.from(nums1);
    Set<int> s2 = Set.from(nums2);
    final intersect = s1.intersection(s2);
    return intersect.isEmpty ? -1 : intersect.first;
  }
}
```