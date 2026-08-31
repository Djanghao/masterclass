# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/4515337/](https://leetcode.com/problems/permutation-in-string/solutions/4515337/)

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
  bool checkInclusion(String s1, String s2) {
    if (s1.length > s2.length) {
        return false;
    }

    Map<String, int> m1 = {};
    Map<String, int> m2 = {};

    for (int i = 0; i < s1.length; i++) {
        m1.update(
            s1[i],
            (value) => value + 1,
            ifAbsent: () => 1,
        );
        m2.update(
            s2[i],
            (value) => value + 1,
            ifAbsent: () => 1,
        );
    }

    if (matches(m1, m2)) {
        return true;
    }

    var l = 0;
    var r = s1.length;
    while (r < s2.length) {
        m2.update(s2[l], (value) => value - 1, ifAbsent: () => 0);
        m2.removeWhere((key, value) => value == 0);   
        m2.update(
            s2[r],
            (value) => value + 1,
            ifAbsent: () => 1,
        );
        if (matches(m1, m2)) {
            return true;
        }
        l++;
        r++;
    }

    return false;
  }

  bool matches(Map<String, int> m1, Map<String, int> m2) {
      return m1.keys.every((key) => m2.containsKey(key) && m1[key] == m2[key]);
  }
}
```