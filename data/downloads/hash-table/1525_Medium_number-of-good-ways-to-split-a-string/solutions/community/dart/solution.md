# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/4459049/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/4459049/)

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
  int numSplits(String s) {
    Map<String, int> l = {};
    Map<String, int> r = {};
    var res = 0;
    for (final char in s.split('')) {
        if (!r.containsKey(char)) {
            r[char] = 1;
        } else {
            r[char] = r[char]! + 1;
        }
    }

    for (final c in s.split('')) {
        r[c] = (r[c] ?? 0) - 1;
        if (r[c] == 0) {
            r.remove(c);
        }
        l[c] = (l[c] ?? 0) + 1;
        if (r.length == l.length) {
            res += 1;
        }
    }
    return res;
  }
}
```