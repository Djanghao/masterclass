# Simple with sets

**Author:** kiujpl
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4660137/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4660137/)

---

# Intuition
Greedy algorithm: first pick unique elements from each list, then pick common elements.

# Approach

Let A be the (unique) elements that are only in nums1, let B be the (unique) elements that are only in nums2, and let C be the (unique) elements that are in both.

First pick `a = min(n/2, len(A))` elements from A and `b = min(n/2, len(B))` elements from B, which will be unique.
Then pick `c = min(len(C), n-(a+b))` elements from C since we can pick `n/2-a` common elements from nums1 and `n/2-b` common elements from nums2, but at most `len(C)` common elements overall.
The answer is a + b + c.

Example 1: A = [2], B = [], C = [1], n = 4.
           a = 1, b = 0, c = 1 -> return 2.

Example 2: A = [1,4,5,6], B = [], C = [2,3], n = 6.
           a = 3, b = 0, c = 2 -> return 5.

Example 3: A = [1,2,3], B = [4,5,6], C = [], n = 6.
           a = 3, b = 3, c = 0 -> return 6.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int maximumSetSize(List<int> nums1, List<int> nums2) {
      final set1 = Set<int>.from(nums1);
      final set2 = Set<int>.from(nums2);
      final A = set1.difference(set2);
      final B = set2.difference(set1);
      final C = set1.intersection(set2);
      final n = nums1.length;
      final a = min(A.length, n~/2);
      final b = min(B.length, n~/2);
      final c = min(C.length, n-(a+b));
      return a + b + c;
  }
}
```