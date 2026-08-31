# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/3721767/](https://leetcode.com/problems/advantage-shuffle/solutions/3721767/)

---


# Code
```
import 'dart:core';

class Solution {
  List<int> advantageCount(List<int> nums1, List<int> nums2) {
    int n = nums1.length;
    List<int> idx1 = List<int>.generate(n, (i) => i);
    List<int> idx2 = List<int>.generate(n, (i) => i);

    idx1.sort((i, j) => nums1[i] - nums1[j]);
    idx2.sort((i, j) => nums2[i] - nums2[j]);

    List<int> res = List<int>.filled(n, 0);
    int left = 0, right = n - 1;

    for (int i = 0; i < n; ++i) {
      if (nums1[idx1[i]] > nums2[idx2[left]]) {
        res[idx2[left]] = nums1[idx1[i]];
        ++left;
      } else {
        res[idx2[right]] = nums1[idx1[i]];
        --right;
      }
    }

    return res;
  }
}

```