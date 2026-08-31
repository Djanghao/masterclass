# Dart solution

**Author:** Allicolyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/4297749/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/4297749/)

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
  int longestLine(List<List<int>> mat) {
    if (mat.length == 0) return 0;
    int numOfRows = mat.length;
    int numOfCols = mat[0].length;

    // Finding a line in matrix
    // coords: r,c
    // Vertical line starting at r,c: r+1, r+2....c
    // Horizontal line starting at r,c: r, c+1, c+2....
    // Diagonal line starting at r,c: r+1, c+1, r+2, c+2.....
    int lengthOfVerticalLine(int r, int c) {
      int maxLength = 0;
      while (r < numOfRows && c < numOfCols && mat[r][c] == 1) {
        r++;
        maxLength++;
      }
      return maxLength;
    }

    int lengthOfHorizontalLine(int r, int c) {
      int maxLength = 0;
      while (r < numOfRows && c < numOfCols && mat[r][c] == 1) {
        c++;
        maxLength++;
      }
      return maxLength;
    }

    int lengthOfLTRDiagonalLine(int r, int c) {
      int maxLength = 0;
      while (r < numOfRows && c < numOfCols && mat[r][c] == 1) {
        r++;
        c++;
        maxLength++;
      }
      return maxLength;
    }

    int lengthOfRTLDiagonalLine(int r, int c) {
    int maxLength = 0;
      while (r < numOfRows && c >= 0 && mat[r][c] == 1) {
        r++;
        c--;
        maxLength++;
      }
      return maxLength;
    }


    int maxLength = 0;
    for (int r = 0; r < numOfRows; r++) {
      for (int c = 0; c < numOfCols; c++) {
        maxLength = max(maxLength, lengthOfVerticalLine(r, c));
        maxLength = max(maxLength, lengthOfHorizontalLine(r, c));
        maxLength = max(maxLength, lengthOfLTRDiagonalLine(r, c));
        maxLength = max(maxLength, lengthOfRTLDiagonalLine(r, c));
      }
    }
    return maxLength;
  }
}

```