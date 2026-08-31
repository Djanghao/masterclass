# Dart solution using hashmap

**Author:** marcinje
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3403657/](https://leetcode.com/problems/find-anagram-mappings/solutions/3403657/)

---

# Approach
Elements from nums2 are put into a map, if duplicate is found then its index is appended to the value list of each map element. Later I itereate nums1 and for each element I use its first free index from the previously created mappings. I put it in the output list, and remove it from the mapping.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
  List<int> anagramMappings(List<int> nums1, List<int> nums2) {
    var inds = <int, List<int>>{};
    for (int index = 0; index < nums2.length; ++index) {
      var element = nums2[index];
      inds.putIfAbsent(element, () => []).add(index);
    }
    var mapping = List<int>.filled(nums1.length, 0);
    for (int index = 0; index < nums1.length; ++index) {
      var element = nums1[index];
      mapping[index] = inds[element]![0];
      inds[element]!.removeAt(0);
    }
    return mapping;
  }
}
```