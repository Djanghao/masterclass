# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3884155/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3884155/)

---

# Code
```
class Solution {
  bool canSplitArray(List<int> numbers, int m) {
    if (numbers.length < 3)
      return true;

    for (int i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + numbers[i]) >= m)
        return true;
    }
    return false;
  }
}
```