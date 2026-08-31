# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/6127728/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/6127728/)

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
```dart []
class Solution {
  bool arrayStringsAreEqual(List<String> word1, List<String> word2) {
    String new1 = word1.join();
    String new2 = word2.join();

    if(new1 == new2) return true;

    return false;
  }
}
```