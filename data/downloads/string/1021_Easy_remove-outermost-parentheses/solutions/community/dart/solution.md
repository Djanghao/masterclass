# Easy solution || One loop

**Author:** K4zhymukhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/5558740/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/5558740/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  String removeOuterParentheses(String s) {

    int count = 0;

    String output = "";

    for (int i = 0; i < s.length; i++) {

        if (s[i] == '(') count++;

        if (count > 1) output+=s[i];

        if (s[i] == ')') count--;

    }

    return output;
  }

}
```