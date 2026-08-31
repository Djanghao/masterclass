# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/4835473/](https://leetcode.com/problems/reordered-power-of-2/solutions/4835473/)

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
    bool reorderedPowerOf2(int n) {
        final inputMap = convertToMap(n);

        for (int i = 1; i <= pow(10, 9); i <<= 1) {
            final candMap = convertToMap(i);
            if (isEqual(candMap, inputMap)) {
                return true;
            }
        }

        return false;
    }

    bool isEqual(Map<String, int> c1, Map<String, int> c2) {
        if (c1.length != c2.length) {
            return false;
        }

        for (final entry in c1.entries) {
            if (c2[entry.key] != entry.value) {
                return false;
            }
        }

        return true;
    }

    Map<String, int> convertToMap(int num) {
        final nStr = num.toString();
        Map<String, int> m = {};
        for (final str in nStr.split('')) {
            if (!m.containsKey(str)) {
                m[str] = 1;
            } else {
                m[str] = m[str]! + 1;
            }
        }

        return m;
    } 
}

```