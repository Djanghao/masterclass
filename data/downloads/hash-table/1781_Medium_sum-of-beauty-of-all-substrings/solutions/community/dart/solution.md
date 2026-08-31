# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/4583899/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/4583899/)

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
  int beautySum(String s) {
    var sum = 0;
    for (int i = 0; i < s.length; i++) {
        Map<String, int> m = {};
        for (int j = i; j < s.length; j++) {
            if (!m.containsKey(s[j])) {
                m[s[j]] = 1;
            } else {
                m[s[j]] = m[s[j]]! + 1;
            }

            final maxi = m.values.reduce(max);
            final mini = m.values.reduce(min);
            final diff = (maxi - mini);
            if (diff != 0) {
                sum += diff;
            }
        }
    }

    return sum;
  }
}
```