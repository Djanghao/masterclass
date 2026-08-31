# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/4959511/](https://leetcode.com/problems/unique-binary-search-trees/solutions/4959511/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
count the nth [catalan number](https://cp-algorithms.com/combinatorics/catalan-numbers.html). Catalan numbers can be used to count the amount of binary trees.

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
    int numTrees(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        final List<int> catalan = List.filled(n + 1, 0);
        catalan[0] = 1;
        catalan[1] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                catalan[i] += catalan[j] * catalan[i - j - 1];
            }
        }

        return catalan[n];
    }
}
```