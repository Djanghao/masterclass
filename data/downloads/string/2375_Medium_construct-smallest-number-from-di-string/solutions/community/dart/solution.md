# Easy solution using array

**Author:** sayanthmk99
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5261795/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5261795/)

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
  String smallestNumber(String pattern) {
   List<int> ans = [];
  List<int> stack = [];

  for (int i = 0; i <= pattern.length; i++) {
    stack.add(i + 1);
    if (i == pattern.length || pattern[i] == 'I') {
      ans.addAll(stack.reversed);
      stack = [];
    }
  }

  return ans.join('');
  }
}
```