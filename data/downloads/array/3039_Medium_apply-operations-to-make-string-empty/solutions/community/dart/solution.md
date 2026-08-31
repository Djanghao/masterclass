# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4840328/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4840328/)

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
    String lastNonEmptyString(String s) {
        Map<String, int> m = {};
        for (final str in s.split('')) {
            if (!m.containsKey(str)) {
                m[str] = 1;
            } else {
                m[str] = m[str]! + 1;
            }
        }

        var maxi = 0;
        for (final entry in m.entries) {
            final value = entry.value;
            if (value > maxi) {
                maxi = value;
            }
        }
        
        final entriesFiltered = m.entries.where((e) => e.value == maxi).toList();

        var ans = "";
        final List<int> indices = [];
        final sList = s.split('');

        for (final entry in entriesFiltered) {
            final key = entry.key;
            final index = sList.lastIndexOf(key);
            indices.add(index);
        }

        indices.sort();
        for (final index in indices) {
            final char = s[index];
            ans += char;
        }
        return ans;
    }
}
```