# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4397081/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4397081/)

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
  String minRemoveToMakeValid(String s) {
    final List<int> stack = [];
    final sL = s.split('');
    for (int i = 0; i < sL.length; i++) {
        if (s[i] == '(') {
            stack.add(i);
        } else if (s[i] == ')') {
            if (stack.isNotEmpty) {
                stack.removeLast();
            } else {
                sL[i] = '';
            }
        }
    }

    for (int i = 0; i < stack.length; i++) {
        sL[stack[i]] = '';
    }

    return sL.join('');

  }
}
```