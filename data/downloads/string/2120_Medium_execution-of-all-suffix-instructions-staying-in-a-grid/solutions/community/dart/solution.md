# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4773651/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4773651/)

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
  List<int> executeInstructions(int n, List<int> startPos, String s) {
    final size = s.length;
    final List<int> res = [];

    bool checkBoundary(int row, int col) {
        if (row < 0 || row >= n || col < 0 || col >= n) {
            return false;
        }

        return true;
    }

    int move(int row, int col, String directions) {
        var score = 0;
        for (int i = 0; i < directions.length; i++) {
            if (directions[i] == 'L') {
                col -= 1;
            } else if (directions[i] == 'R') {
                col += 1;
            } else if (directions[i] == 'U') {
                row -= 1;
            } else {
                row += 1;
            }

            if (checkBoundary(row, col)) {
                score += 1;
            } else {
                break;;
            }
        }

        return score;
    }

    for (int i = 0; i < size; i++) {
        final row = startPos[0];
        final col = startPos[1];
        final total = move(row, col, s.substring(i));
        res.add(total);
    }

    return res;
  }
}
```