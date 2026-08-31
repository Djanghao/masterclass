# Dart solution

**Author:** aospiridonov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826410/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826410/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int longestCommonPrefix(List<int> arr1, List<int> arr2) {
    final set = <int>{};
    for (int val in arr1) {
      String str = '$val';
      for (int i = 0; i < str.length; i++) {
        int curr = int.parse(str.substring(0, i + 1));
        set.add(curr);
      }
    }

    int result = 0;
    for (int val in arr2) {
      String str = '$val';
      for (int i = result; i < str.length; i++) {
        int curr = int.parse(str.substring(0, i + 1));
        if (set.contains(curr)) {
          result = i + 1;
        }
      }
    }

    return result;
  }
}

```