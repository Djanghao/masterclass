# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/4935359/](https://leetcode.com/problems/simplified-fractions/solutions/4935359/)

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
    List<String> simplifiedFractions(int n) {
        final List<String> res = [];
        final List<double> values = [];
        for (int i = 1; i < n; i++) {
            for (int j = 1; j <= n; j++) {
                final fraction = i/j;
                if (fraction > 0 && fraction < 1 && !res.contains(fraction) && !values.contains(fraction)) {
                    res.add("$i" + "/" + "$j");
                    values.add(i/j);
                }
            }
        }

        return res;
    }
}

```