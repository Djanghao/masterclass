# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4567369/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4567369/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: `O(N)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(N)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> getGoodIndices(List<List<int>> variables, int target) {
    final List<int> res = [];
    for (int i = 0; i < variables.length; i++) {
        final a = variables[i][0];
        final b = variables[i][1];
        final c = variables[i][2];
        final m = variables[i][3];
        final powA = BigInt.from(a).modPow(BigInt.from(b), BigInt.from(10));
        final mod = powA.modPow(BigInt.from(c), BigInt.from(m));
        if (mod == BigInt.from(target)) {
            res.add(i);
        }
    }

    return res;
  }
}
```