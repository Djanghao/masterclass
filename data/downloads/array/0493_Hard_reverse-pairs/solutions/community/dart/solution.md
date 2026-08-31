# Dart :  Merge Sort Solution

**Author:** aswanth_ds_
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/4960825/](https://leetcode.com/problems/reverse-pairs/solutions/4960825/)

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
  late int count;
  int reversePairs(List<int> nums) {
    count = 0;
    _mergeSort(nums);
    return count;
  }

  List<int> _merge(List<int> firstHalf, List<int> secondHalf) {
    int i = 0, j = 0;
    List<int> ar = [];

    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] <= secondHalf[j]) {
        ar.add(firstHalf[i]);
        i++;
      } else {
        ar.add(secondHalf[j]);
        j++;
      }
    }
    while (i < firstHalf.length) {
      ar.add(firstHalf[i]);
      i++;
    }
    while (j < secondHalf.length) {
      ar.add(secondHalf[j]);

      j++;
    }
    return ar;
  }

  void _helper(List<int> left, List<int> right) {
    int i = 0;
    int j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] > 2 * (right[j])) {
        count += left.length - i;
        j++;
      }

      else
        i++;
    }
  }

  List<int> _mergeSort(List<int> ar) {
    if (ar.length <= 1) return ar;

    int mid = ar.length ~/ 2;
    List<int> firstHalf = ar.sublist(0, mid);
    List<int> secondHalf = ar.sublist(mid);

    var left = _mergeSort(firstHalf);
    var right = _mergeSort(secondHalf);
    _helper(left, right);

    return _merge(left, right);
  }
}
```