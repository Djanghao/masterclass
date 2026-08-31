# Dart Solution

**Author:** anilantony49
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5315500/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5315500/)

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
bool isAcronym(List<String> words, String s) {
  if (s.length != words.length) {
    return false;
  }

  for (int i = 0; i < s.length; i++) {
    if (!words[i].startsWith(s[i])) {
      return false;
    }
  }

  return true;
}
}
```