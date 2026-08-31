# Dart Approach

**Author:** 4khil_Raj
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/4608870/](https://leetcode.com/problems/minimize-string-length/solutions/4608870/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(n)

# Code
```
class Solution {
  int minimizedStringLength(String s) {
      Set<String>out={};
       out.addAll(s.split(''));
       return out.length;
  }
}
```