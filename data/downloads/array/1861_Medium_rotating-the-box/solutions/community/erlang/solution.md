# Rotate and Simulate Gravity in a 2D Box Matrix

**Author:** RiB6tVaHCH
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotating-the-box/solutions/6073835/](https://leetcode.com/problems/rotating-the-box/solutions/6073835/)

---

This Java code provides a solution to the problem of **rotating a 2D "box" array 90 degrees clockwise**, while ensuring that the '#' (stones) fall to the bottom under the influence of gravity, constrained by obstacles ('*'). The resulting box is returned in the form of a rotated matrix.

### Key Steps in the Code:
1. **Initialize a Result Matrix**:
   - A new 2D array (`res`) of dimensions `COLS x ROWS` is created to store the rotated and adjusted box. All elements are initially filled with '.'.

2. **Simulate Gravity and Rotation**:
   - Iterating through each row of the input `box`:
     - **Gravity Simulation**:
       - Stones (`'#'`) are moved to the lowest valid position in their column until blocked by either the boundary or an obstacle (`'*'`).
       - Obstacles (`'*'`) retain their positions in the rotated matrix.
     - **Rotation**:
       - Stones and obstacles are placed in the rotated result array such that they correspond to a 90-degree clockwise rotation.

3. **Return the Rotated Box**:
   - After processing all rows, the rotated box (`res`) is returned.

### Example Explanation:
Input:
```
box = [
  ['#', '#', '*', '.', '.'],
  ['#', '.', '#', '*', '.']
]
```

Intermediate simulation:
- Stones in each row fall to the lowest possible position, given obstacles (`'*'`).

Output (after rotation):
```
res = [
  ['.', '#'],
  ['.', '#'],
  ['*', '#'],
  ['.', '*'],
  ['.', '.']
]
```

### Conclusion:
This code effectively combines **gravity simulation** with **matrix rotation**, ensuring that stones fall under the influence of gravity and obstacles remain in place after the box is rotated. It is a clean and efficient approach for solving such matrix transformation problems, commonly encountered in competitive programming and game simulations.

# Code
```java []
class Solution {
    public char[][] rotateTheBox(char[][] box) {
        int ROWS = box.length;
        int COLS = box[0].length;
        
        char[][] res = new char[COLS][ROWS];
        for(char[] row : res) {
            Arrays.fill(row, '.');
        }
        
        for (int r = 0; r < ROWS; r++) {
            int i = COLS - 1;
            for (int c = COLS - 1; c >= 0; c--) {
                if (box[r][c] == '#') {
                    res[i][ROWS - r - 1] = '#';
                    i--;
                } else if (box[r][c] == '*') {
                    res[c][ROWS - r - 1] = '*';
                    i = c - 1;
                }
            }
        }
        return res;
    }
}
```