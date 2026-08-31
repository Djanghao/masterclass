# Solution in dart  with two pointers

**Author:** meetmerahul
**Votes:** 2
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/3947927/](https://leetcode.com/problems/long-pressed-name/solutions/3947927/)

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
 bool isLongPressedName(String name, String typed) {
  if (typed.length < name.length) {
    return false;
  }
  
  int i = 0;
  int j = 0;
  
  while (j < typed.length) {
    if (i < name.length && (name[i] == typed[j])) {
      i++;
      j++;
    } else if (j > 0 && typed[j] == typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  
  return i == name.length;
}

}
```