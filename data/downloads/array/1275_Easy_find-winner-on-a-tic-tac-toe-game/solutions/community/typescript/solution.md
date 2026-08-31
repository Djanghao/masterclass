# O(n) solution, without creating board, without reading all the moves

**Author:** sushiljainam
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/3569900/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/3569900/)

---

# Intuition
Initially I also thought of creating board and saving all moves, then I thought we only have to read either all even positioned moves or odd positioned and we can find winner, if no winner is available then game is draw or incomplete.

So, only 4 are possible outcomes.
1. `Draw` & `Pending` are dependent on number of moves, if game is played until end (moves are exactly 9) then only `Draw` is possible, else `Pending`.
2. If number of moves are odd, then `B` cannot win, either `A` will win or `Draw`|`Pending` will happen.
3. If number of moves are even, then `A` cannot win, either `B` will win or `Draw`|`Pending` will happen.

# Approach
8 ways to win = 3 rows + 3 columns + 2 diagnols
Simply created 8 variables to increment player moves in these 8 places by reading 4-5 moves of this one player only.
Code comments are added to explain more.

# Complexity
- Time complexity: O(n)
But **This program is not really about scaling, so Time complexity doesn't matter**, as input size is not going to become more than 9.

- Space complexity: O(1)
I think, as we are saving constant space irrespective of input size. (***help me*** if this is different!!)

# Code
```typescript []
function tictactoe(moves: number[][]): string {
    let l=moves.length
    let res = l == 9 ? 'Draw': 'Pending'
    let start = l%2 == 0 ? 1 : 0 // to decide if we will read only even positioned moves or odd
    let won = ['A','B'] // to return winner label easily using `start` variable
    let row = Array(3).fill(0)
    let col = Array(3).fill(0)
    let diff = 0
    let sum = 0
    // Note: i+=2 => we are only reading moves of one player and skippeing other's
    for(let i = start; i<l; i += 2){
        let [r,c] = moves[i]

        // increase the respective counters and as soon as any becomes 3 return winner
        row[r]++; // increase player presence counter for each row
        if(row[r]==3) return won[start]
        col[c]++; // increase player presence counter for each column
        if(col[c]==3) return won[start]
        if(r==c) diff++ // increase diag 1 counter only if cell is in diagnol
        if(diff==3) return won[start]
        if(r+c==2) sum++ // increase diag 2 counter only if cell is in diagnol
        if(sum==3) return won[start]
    }
    // if no winner, return draw or pending
    return res
}
```
```python []
# Generated from Bard with TypeScript Code - Use with caution
def tictactoe(moves):
  l = len(moves)
  res = l == 9 ? "Draw" : "Pending"
  start = l % 2 == 0 ? 1 : 0
  won = ["A", "B"]
  row = [0] * 3
  col = [0] * 3
  diff = 0
  sum = 0
  for i in range(start, l, 2):
    r, c = moves[i]

    # increase the respective counters and as soon as any becomes 3 return winner
    row[r] += 1
    if row[r] == 3:
      return won[start]
    col[c] += 1
    if col[c] == 3:
      return won[start]
    if r == c:
      diff += 1
    if diff == 3:
      return won[start]
    if r + c == 2:
      sum += 1
    if sum == 3:
      return won[start]

  # if no winner, return draw or pending
  return res

```
```cpp []
// Generated from Bard with TypeScript Code - Use with caution
#include <iostream>

using namespace std;

int main() {
  int moves[9][2] = {{0, 0}, {0, 1}, {0, 2}, {1, 0}, {1, 1}, {1, 2}, {2, 0}, {2, 1}, {2, 2}};
  int l = sizeof(moves) / sizeof(moves[0]);
  string res = l == 9 ? "Draw" : "Pending";
  int start = l % 2 == 0 ? 1 : 0;
  int won[2] = {'A', 'B'};
  int row[3] = {0, 0, 0};
  int col[3] = {0, 0, 0};
  int diff = 0;
  int sum = 0;
  for (int i = start; i < l; i += 2) {
    int r = moves[i][0];
    int c = moves[i][1];

    // increase the respective counters and as soon as any becomes 3 return winner
    row[r]++;
    if (row[r] == 3) return won[start];
    col[c]++;
    if (col[c] == 3) return won[start];
    if (r == c) diff++;
    if (diff == 3) return won[start];
    if (r + c == 2) sum++;
    if (sum == 3) return won[start];
  }

  // if no winner, return draw or pending
  return res;
}
```
```java []
// Generated from Bard with TypeScript Code - Use with caution
public class TicTacToe {

  public static String tictactoe(int[][] moves) {
    int l = moves.length;
    String res = l == 9 ? "Draw" : "Pending";
    int start = l % 2 == 0 ? 1 : 0; // to decide if we will read only even positioned moves or odd
    String[] won = {"A", "B"}; // to return winner label easily using `start` variable
    int[] row = new int[3];
    Arrays.fill(row, 0);
    int[] col = new int[3];
    Arrays.fill(col, 0);
    int diff = 0;
    int sum = 0;
    // Note: i+=2 => we are only reading moves of one player and skippeing other's
    for (int i = start; i < l; i += 2) {
      int[] move = moves[i];

      // increase the respective counters and as soon as any becomes 3 return winner
      row[move[0]]++; // increase player presence counter for each row
      if (row[move[0]] == 3) {
        return won[start];
      }
      col[move[1]]++; // increase player presence counter for each column
      if (col[move[1]] == 3) {
        return won[start];
      }
      if (move[0] == move[1]) {
        diff++; // increase diag 1 counter only if cell is in diagnol
        if (diff == 3) {
          return won[start];
        }
      }
      if (move[0] + move[1] == 2) {
        sum++; // increase diag 2 counter only if cell is in diagnol
        if (sum == 3) {
          return won[start];
        }
      }
    }
    // if no winner, return draw or pending
    return res;
  }
}
```


## PLEASE UPVOTE
if you liked this approach CLICK Upvote, this is my first time writing explained solutions. Thanks.