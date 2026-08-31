# ✅Easy and Clean Code (C++ / Java / C#) Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6075670/](https://leetcode.com/problems/stone-removal-game/solutions/6075670/)

---

# Intuition
Control the number that is subtracted, each player tries to leave their opponent in a losing position (where they cannot make a valid move).

# Approach
- Initial Check: If n is less than 10, the function returns false immediately, as the player cannot make a valid move (the minimum subtractable amount is 10).
- Reduce n: Subtract 10 from n, as the first move is mandatory.
- Looping through possible moves: A loop runs  while n is non-negative. In each iteration:
    - If the current target value (starting from 9 and decreasing) is greater than n, the current player cannot make a move, meaning the opponent wins, and thus we return the current player's win status.
    - Subtract the current target from n.
    - Toggle the turn to switch players.
    - Decrease the target for the next move.
- If the loop exits without returning, it implies a forced end state where no moves are left. The function defaults to returning false.

# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**


```java []
class Solution {
    public boolean canAliceWin(int n) {
        var turn = false;
        if(n < 10) return false;

        n -= 10;
        var target = 9;

        while(n >= 0) {

            if (target > n) return !turn;
            n -= target;
            turn = !turn;
            target--;            
        }
        return false; 
    }
}
```
```C++ []
class Solution {
public:
    bool canAliceWin(int n) {
        bool turn = false;
        if(n < 10) return false;

        n -= 10;
        int target = 9;

        while(n >= 0) {

            if (target > n) return !turn;
            n -= target;
            turn = !turn;
            target--;            
        }
        return false;   
    }
};
```
```C# []
public class Solution {
    public bool CanAliceWin(int n) {
        var turn = false;
        if(n < 10) return false;

        n -= 10;
        var target = 9;

        while(n >= 0) {

            if (target > n) return !turn;
            n -= target;
            turn = !turn;
            target--;            
        }
        return default;
    }
}
```
