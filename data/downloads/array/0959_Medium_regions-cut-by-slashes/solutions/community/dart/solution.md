# the fastest in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614757/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614757/)

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
  List<int> parent=[];
  List<int> rank=[];
  int count = 0;

  int regionsBySlashes(List<String> grid) {
    int rows = grid.length;
    int dots = rows + 1;
    parent = List<int>.generate(dots * dots, (i) => i);
    rank = List<int>.filled(dots * dots, 1);

    for (int i = 0; i < dots; i++) {
      for (int j = 0; j < dots; j++) {
        if (i == 0 || j == 0 || i == rows || j == rows) {
          int cells = i * dots + j;
          union(0, cells);
        }
      }
    }

    for (int i = 0; i < rows; i++) {
      List<int> ch = grid[i].codeUnits;
      for (int j = 0; j < ch.length; j++) {
        if (ch[j] == '\\\\'.codeUnitAt(0)) {
          int cell1 = i * dots + j;
          int cell2 = (i + 1) * dots + (j + 1);
          union(cell1, cell2);
        } else if (ch[j] == '/'.codeUnitAt(0)) {
          int cell1 = (i + 1) * dots + j;
          int cell2 = i * dots + (j + 1);
          union(cell1, cell2);
        }
      }
    }

    return count;
  }

  void union(int a, int b) {
    int parentA = find(a);
    int parentB = find(b);
    if (parentA == parentB) {
      count++;
    } else {
      if (rank[parentA] > rank[parentB]) {
        parent[parentB] = parentA;
      } else if (rank[parentA] < rank[parentB]) {
        parent[parentA] = parentB;
      } else {
        parent[parentB] = parentA;
        rank[parentA]++;
      }
    }
  }

  int find(int a) {
    if (parent[a] == a) return a;
    int temp = find(parent[a]);
    parent[a] = temp;
    return temp;
  }
}

```