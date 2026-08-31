# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5271997/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5271997/)

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
  int minimumPushes(String word) {
    Map<String, int> m = {};
    for (int i = 0; i < word.length; i++) {
        m[word[i]] = (m[word[i]] ?? 0) + 1;
    }

    final mapEntries = m.entries.toList();
    mapEntries.sort((a, b) => b.value.compareTo(a.value));

    var cost = 0;
    var characterCount = 0;
    var totalCost = 0;
    for (int i = 0; i < mapEntries.length; i++) {
        final k = mapEntries[i].key;
        final v = mapEntries[i].value;
        characterCount++;
        if (characterCount < 9) {
            cost = 1;
        } else if (characterCount > 8 && characterCount < 17) {
            cost = 2;
        } else if (characterCount > 16 && characterCount < 25) {
            cost = 3;
        } else if (characterCount > 24) {
            cost = 4;
        }
        totalCost += (cost * v);
    }

    return totalCost;
  }
}

```