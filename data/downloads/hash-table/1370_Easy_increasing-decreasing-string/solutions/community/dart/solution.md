# simple solution

**Author:** muhdsahaddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/6051147/](https://leetcode.com/problems/increasing-decreasing-string/solutions/6051147/)

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
String sortString(String s) {
  List<int> unitCode = List<int>.from(s.codeUnits);
  List<int> result = [];

  while (unitCode.isNotEmpty) {
    for (var i = 97; i <= 122; i++) {
    if (unitCode.contains(i)) {
      result.add(i);
      unitCode.remove(i);
    }
  }
  for (var i = 122; i >= 97; i--) {
     if (unitCode.contains(i)) {
      result.add(i);
      unitCode.remove(i);
    }
  }
  }
   return String.fromCharCodes(result);
}

}
```