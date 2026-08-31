# O(1) Solution| Beats 100% | 0-ms | Java | python | C++ | JavaScript | Go Rust

**Author:** kartikdevsharma_
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507672/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507672/)

---

### Intuition
The challenge here is to determine the winner of a game where players must pick coins totaling 115 in value each turn, using coins of 75 and 10. 

To start, we need to consider what makes a winning strategy in this game. The key is to make your opponent into a position where they can't make a valid move. This means leaving them with a combination of coins that doesn't allow them to reach the target value of 115.

Now We have two types of coins: 75 and 10. To reach 115, a player must use one 75-coin and four 10-coins in each turn. This is because:

75 + (4 * 10) = 115

There's no other valid combination to reach 115 with these coin values. Understanding this is improtant because it simplifies our problem significantly. Instead of thinking about all possible combinations, we only need to consider this one valid move per turn.

Given this, what determines how long the game can last? It's the number of complete sets of coins available. A complete set consists of one 75-coin and four 10-coins. The game will continue until there aren't enough coins left to form a complete set.

So, how do we determine the number of turns? We need to look at which resource will run out first: the 75-coins or the sets of four 10-coins. This is where we will use the `Math.min(x, y / 4)` It's comparing:

1. The number of 75-coins available (x)
2. The number of sets of four 10-coins available (y / 4)

Whichever is smaller determines how many turns the game can last.

Now, let's think about who wins. In a game where players take turns and the last player to make a move loses, the number of turns becomes crucial. If there's an odd number of turns, the first player (Alice) will make the last move and lose. If there's an even number of turns, the second player (Bob) will make the last move and lose.

This is why the solution checks if the number of turns is odd or even:

- If odd, Bob wins (return "Bob")
- If even, Alice wins (return "Alice")

We don't need to simulate the game or track the state of the coins. We just need to calculate the number of turns and determine if it's odd or even.

Let's consider some potential edge cases:

1. What if there are more 75-coins than sets of four 10-coins? The `Math.min()` function handles this by always choosing the limiting factor.

2. What about fractional turns? The integer division in `y / 4` automatically rounds down, ensuring we only count complete sets of 10-coins.

3. Could there be a scenario where no valid move is possible from the start? The constraints given (1 <= x, y <= 100) ensure that there's always at least one valid move at the beginning.

This solution abstacts away the turn-by-turn gameplay and focuses on the core mathematical relationship that determines the winner. 

In short, this approach. By identifying the core pattern (one 75-coin and four 10-coins per turn) and the key factor determining the game's outcome (the number of complete sets), we've reduced game to a simple mathematical calculation.
## Approach

Based on our intuition, we can solve this problem with the following steps:

1. Calculate the number of possible turns:
   `turns = min(x, y / 4)`

2. Determine the winner based on whether the number of turns is odd or even:
   - If `turns` is odd, Alice wins
   - If `turns` is even, Bob wins

This approach allows us to solve the problem without simulating the entire game, which would be less efficient.

## Complexity Analysis

- Time Complexity: O(1)
  The solution performs a constant number of operations regardless of the input size. It only involves one comparison (min function) and one modulo operation.

- Space Complexity: O(1)
  The solution uses only a constant amount of extra space to store the `turns` variable, regardless of the input size.

##  Code 


```java []
class Solution {
    public String losingPlayer(int x, int y) {
        int turns = Math.min(x, y / 4);
        return (turns % 2 == 1) ? "Alice" : "Bob";
    }
}


```


```python []
class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        turns = min(x, y // 4)
        return "Alice" if turns % 2 else "Bob"




```




```cpp []
class Solution {
public:
    string losingPlayer(int x, int y) {
        int turns = min(x, y / 4);
        return (turns % 2) ? "Alice" : "Bob";
    }
};


```


```javascript []
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    var turns = Math.min(x, Math.floor(y / 4));
    return (turns % 2 === 1) ? "Alice" : "Bob";
};


```



```go []
func losingPlayer(x int, y int) string {
    turns := x
    if y / 4 < turns {
        turns = y / 4
    }
    return map[bool]string{true: "Alice", false: "Bob"}[turns % 2 == 1]
}


```

```Rust []
impl Solution {
    pub fn losing_player(x: i32, y: i32) -> String {
        let turns = std::cmp::min(x, y / 4);
        if turns % 2 == 1 {
            "Alice".to_string()
        } else {
            "Bob".to_string()
        }
    }
}

```




