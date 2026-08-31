# dart

**Author:** xfjboss
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4413494/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4413494/)

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
  int distinctEchoSubstrings(String text) {
    List<String> res = [];
    for (int i = 0 ; i < text.length ; i++) {
        if (i == 0 || i == text.length - 1) {
            continue;
        }
        String p1 = text.substring(0, i);
        String p2 = text.substring(i);
        dealString(p1, p2, res);
    }
    return res.length;
  }

  void dealString(String p1, String p2, List<String> res) {
    for (int i = 0 ; i < p1.length ; i++) {
        String t = p1.substring(i);
        if (t.length > p2.length) {
            continue;
        }
        if (p2.startsWith(t) && !res.contains(t)) {
            res.add(t);
        }
    }
  }
}
```