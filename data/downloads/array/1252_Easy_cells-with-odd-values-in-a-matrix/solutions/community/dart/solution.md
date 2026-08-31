# Easy solution

**Author:** Tyukmaev5
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4932991/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4932991/)

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
  int oddCells(int n, int m, List<List<int>> indices) {
    int count = 0;
    List<int> row = List<int>.filled(n, 0);
    List<int> col = List<int>.filled(m, 0); 
  
    for (int i = 0; i < indices.length; i++) {
        row[indices[i][0]]++;
        col[indices[i][1]]++;  
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if ((row[i] + col[j]) % 2 != 0) {
                count++;
            }
        }
    }
    return count;  
  }
}
```