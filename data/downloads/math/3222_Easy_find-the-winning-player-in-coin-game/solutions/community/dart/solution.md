# Simple But Detailed Explanation 100% beats

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5506774/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5506774/)

---

# Summary
- The game is about picking coins totaling 115 in each turn.
- The player who cannot pick coins to reach 115 loses.
- We need to determine who will be unable to make a valid move first.

# Approach
1. Check if there are enough coins for each player to form the sum of 115 at every turn.
2. Each player tries to pick 1 coin of 75 and 4 coins of 10 (or another valid combination).
3. Track whose turn it is and reduce the count of coins accordingly.
4. Determine the winner based on whether a player can make the required move.

# Complexity
- Time complexity: O(1) - The calculation of the total value and number of turns is done in constant time.

- Space complexity: O(1) - Only a few variables are used for the calculations.

# Code

```Java []
class Solution {
    public String losingPlayer(int x, int y) {
        for (int turn = 0; ; turn++) {
            if (x >= 1 && y >= 4) {
                x -= 1;
                y -= 4;
            } else {
                return (turn % 2 == 0) ? "Bob" : "Alice";
            }
        }
    }
}
```
```C++ []
class Solution {
public:
    string losingPlayer(int x, int y) {
        for (int turn = 0; ; turn++) {
            if (x >= 1 && y >= 4) {
                x -= 1;
                y -= 4;
            } else {
                return (turn % 2 == 0) ? "Bob" : "Alice";
            }
        }
    }
};
```
```Python []
class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        turn = 0
        while True:
            if x >= 1 and y >= 4:
                x -= 1
                y -= 4
            else:
                return "Bob" if turn % 2 == 0 else "Alice"
            turn += 1
```
```Javascript []
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    let turn = 0;
    while (true) {
        if (x >= 1 && y >= 4) {
            x -= 1;
            y -= 4;
        } else {
            return turn % 2 === 0 ? "Bob" : "Alice";
        }
        turn += 1;
    }
};
```
```Dart []
class Solution {
  String losingPlayer(int x, int y) {
    int turn = 0;
    while (true) {
      if (x >= 1 && y >= 4) {
        x -= 1;
        y -= 4;
      } else {
        return turn % 2 == 0 ? "Bob" : "Alice";
      }
      turn += 1;
    }
  }
}
```
```Golang []
func losingPlayer(x int, y int) string {
    turn := 0
    for {
        if x >= 1 && y >= 4 {
            x -= 1
            y -= 4
        } else {
            if turn % 2 == 0 {
                return "Bob"
            } else {
                return "Alice"
            }
        }
        turn++
    }
}
```