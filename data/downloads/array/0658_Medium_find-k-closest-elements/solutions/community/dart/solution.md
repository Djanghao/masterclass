# 658. Find K Closest Elements || Easy Solution || Dart

**Author:** uzbek-coder-2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/4735557/](https://leetcode.com/problems/find-k-closest-elements/solutions/4735557/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n-k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> findClosestElements(List<int> arr, int k, int x) {
    var l = 0, r = arr.length - 1;
    while (r - l >= k) {
        if (x-  arr[l] <= arr[r] - x) r--;
        else l++;
    }
    return arr.sublist(l, r+1);
  }
}
```