# Beats 100% runtime, 89% memory

**Author:** Soxib
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/6013967/](https://leetcode.com/problems/zigzag-conversion/solutions/6013967/)

---


![Screenshot 2024-11-06 at 10.31.06.png](./images/0.png)
# Approach
Very simple just create variable that van be only -1 or 1 and will be added to rowIndex every iteration and add coming value to list[rowIndex];

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String convert(String s, int numRows) {
    if (numRows == 1) return s;
    
    List<List<String>> matrix = [];

    int currentRow = 0;
    int currentRowAddition = 1;
    
    for (var i = 0; i < numRows; i++) matrix.add([]);

    for (var i = 0; i < s.length; i++) {
      matrix[currentRow].add(s[i]);
      if (currentRow >= numRows - 1) currentRowAddition = -1;
      else if (currentRow == 0) currentRowAddition = 1;
      currentRow += currentRowAddition;
    }
    
    return matrix.map((e) => e.join('')).join('');
  }
}
```