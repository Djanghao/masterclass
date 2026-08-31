# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4729376/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4729376/)

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
  bool canConstruct(String s, int k) {
    final size = s.length;
    if (size < k) {
        return false;
    }

    Map<String, int> m = {};
    for (final char in s.split('')) {
        if (!m.containsKey(char)) {
            m[char] = 1;
        } else {
            m[char] = m[char]! + 1;
        }
    }

    var oddCount = 0;

    for (final value in m.values) {
        if (value % 2 != 0) {
            oddCount++;
        }
    }

    if (oddCount > k) {
        return false;
    }

    return true;
  }
}
```