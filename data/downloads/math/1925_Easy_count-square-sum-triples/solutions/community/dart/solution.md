# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/4352571/](https://leetcode.com/problems/count-square-sum-triples/solutions/4352571/)

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
  int countTriples(int n) {
    var c = 0;
    for (int i = 1; i <= n - 2; i++) {
        for (int j = i + 1; j <= n - 1; j++) {
            for (int k = j + 1; k <= n; k++) {
                if (pow(i, 2).toInt() + pow(j, 2).toInt() == pow(k, 2).toInt()) {
                    c += 2;
                }
            }
        }
    }

    return c;
  }
}
```