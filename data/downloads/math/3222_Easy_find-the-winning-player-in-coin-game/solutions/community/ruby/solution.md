# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5524746/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5524746/)

---


# Code
```
# @param {Integer} x
# @param {Integer} y
# @return {String}
def losing_player(x, y)
    turns = 1
    while x > 0 and y > 3
        x -= 1
        y -= 4
        turns += 1
    end

    if (turns - 1).odd?
        return "Alice"
    else
        return "Bob"
    end
    
end
```