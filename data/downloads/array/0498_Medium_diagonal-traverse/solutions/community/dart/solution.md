# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/4448191/](https://leetcode.com/problems/diagonal-traverse/solutions/4448191/)

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
  List<int> findDiagonalOrder(List<List<int>> mat) {
    Map<int, List<int>> m = {};
    for (int i = 0; i < mat.length; i++) {
        for (int j = 0; j < mat.first.length; j++) {
            if (!m.containsKey(i + j)) {
                m[i+j] = List.from([mat[i][j]]);
            } else {
                m[i+j]!.add(mat[i][j]);
            }
        }
    }

    m.forEach((key, value) {
        if (key % 2 == 0) {
            m[key] = value.reversed.toList();
        }
    });

    return m.values.toList().reduce((a, b) => a + b);
  }
}
```