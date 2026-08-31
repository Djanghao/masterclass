# Simple Recursive Rust Solution

**Author:** jurassicjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6095535/](https://leetcode.com/problems/stone-removal-game/solutions/6095535/)

---

# Intuition
The problem revolves around determining if Alice can win a game given the starting number n. In the game, players take turns removing a specific number of points. Alice's goal is to make the opponent unable to make a valid move. The solution uses a recursive approach to simulate the game flow and evaluate winning possibilities.

The recursive function alternates turns between Alice and her opponent. If the remaining points (n) fall below the current removal threshold, the current player loses. The function explores all possible states to deduce whether Alice can force a win.

# Approach
- Recursive Simulation:

    The game is simulated using a helper function checkpoint that alternates between Alice and her opponent.

On each call, the function:
Checks if the remaining points (n) are less than the points to be removed (removal). If so, the current player loses, and the function returns the result.
Otherwise, it reducesn by the current removal value and alternates turns by flipping the is_alice flag.
 - Base Cases:

If n < removal, the function evaluates if Alice is currently playing (is_alice == true) to determine the winner.
 - Recursive Exploration:

By iterating with decreasing removal values, the function simulates all potential game states to decide if Alice can force a win regardless of the opponent's moves.

# Complexity
- Time complexity:
    The time complexity is O(n), where n is the initial number.
 
    The recursive calls iterate decrementally over removal, starting from 10 and decreasing to 1, with the maximum depth being proportional to n.

- Space complexity:
The space complexity is O(n) due to the recursive call stack. Each recursive call decreases n by removal, and the depth of recursion depends on n.

# Code
```rust []
impl Solution {
    pub fn can_alice_win(n: i32) -> bool {
        return Self::checkpoint(10, n, true);
    }

    fn checkpoint(removal: i32, n: i32, is_alice: bool) -> bool{
        if(n < removal){
            if(is_alice){
                return false;
            }
            return true;
        }

        return Self::checkpoint(removal - 1, n - removal, !is_alice);

    }
}
```