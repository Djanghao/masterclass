# 🟢🔴🟢 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5710604/](https://leetcode.com/problems/snake-in-matrix/solutions/5710604/)

---

## Intuition
The problem involves moving a snake on a grid based on a series of commands. The snake moves left, right, up, or down, and we need to determine its final position after all commands have been executed.

The grid is treated as a linear array, where moving right increases the position by 1, moving left decreases the position by 1, moving down increases the position by the number of columns \\( n \\), and moving up decreases the position by \\( n \\).

## Approach
1. **Initialize the Starting Position**: 
   - Start the snake at position 0, which is treated as the origin on a 1D representation of the grid.

2. **Process Each Command**:
   - Iterate through the list of commands:
     - If the command is "RIGHT", increase the position by 1.
     - If the command is "LEFT", decrease the position by 1.
     - If the command is "DOWN", increase the position by the number of columns \\( n \\).
     - If the command is "UP", decrease the position by \\( n \\).

3. **Return the Final Position**:
   - After processing all commands, the final position of the snake is returned.

### Example Workthrough

Let's work through an example:

**Example**: 
- `n = 3` (indicating the number of columns in the grid)
- `commands = ["RIGHT", "DOWN", "LEFT", "UP"]`

1. Start at position 0.
2. Process commands:
   - "RIGHT": Move to position \\( 0 + 1 = 1 \\).
   - "DOWN": Move to position \\( 1 + 3 = 4 \\) (since there are 3 columns).
   - "LEFT": Move to position \\( 4 - 1 = 3 \\).
   - "UP": Move to position \\( 3 - 3 = 0 \\).

**Output**: The final position is 0.

## Complexity

- **Time Complexity**: \\( O(k) \\), where \\( k \\) is the number of commands. Each command is processed once.
- **Space Complexity**: \\( O(1) \\), since only a few variables are used to track the position.

## Code

```dart
class Solution {
  int finalPositionOfSnake(int n, List<String> commands) {
    int step = 0; 
    for(int i = 0; i < commands.length; i++){
        if(commands[i] == "RIGHT"){
            step++;
        }else if(commands[i] == "LEFT"){
            step--;
        }else if(commands[i] == "DOWN"){
            step += n; 
        }else {
            step -= n;
        }
    }
    return step;
  }
}
