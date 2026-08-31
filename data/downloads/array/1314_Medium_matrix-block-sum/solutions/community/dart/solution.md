# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/5388222/](https://leetcode.com/problems/matrix-block-sum/solutions/5388222/)

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
  List<List<int>> matrixBlockSum(List<List<int>> mat, int k) {
    List<List<int>> ans = List.generate(mat.length, (_) => List.filled(mat[0].length, 0));
    for (int i = 0; i < mat.length; i++) {
        for (int j = 0; j < mat[0].length; j++) {
            var sum = 0;
            for (int r = i - k; r <= i + k; r++){
                if (r < 0 || r >= mat.length) {
                    continue;
                }
                for (int c = j - k; c <= j + k; c++) {
                    if (c < 0 || c >= mat[0].length) {
                        continue;
                    }
                    sum += mat[r][c];
                }
            }

            ans[i][j] = sum;
        }
    }

    return ans;
  }
}
```