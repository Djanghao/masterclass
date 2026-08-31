# stack

**Author:** shahinurcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/5789295/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/5789295/)

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
  String removeDuplicates(String s) {
      List<String> stack = [];

  for (int i = 0; i < s.length; i++) {
    if (stack.isNotEmpty && stack.last == s[i]) {
      stack.removeLast();
    } else {
      stack.add(s[i]);
    }
  }

  return stack.join('');
    
  }
}
```