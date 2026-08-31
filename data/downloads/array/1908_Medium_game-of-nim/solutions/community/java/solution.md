# Java 3 line || With Explanation

**Author:** cooper--
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3114352/](https://leetcode.com/problems/game-of-nim/solutions/3114352/)

---

# Intuition

Let's see from similar cases:

+ Case 1:   `[0]`. So player who need to take action now lose

+ Case 2: `[x, 0]`. Current player remove `x` from first pile. Next player lose.

+ Case 3: `[1, 2]`. Current player (A) remove `1` from 2nd pile ==> `[1, 1]`. Then, whatever next player(B) do, B cannot win. 

> Note: We assume each player takes the best action.

Generalize Case 3: `[x, y]` if `x > 0` and `y > 0` and `x > y`. Then A just need remove `x - y` from `x` ====> `[y, y]`. A will win.

---

So we can find a fact. If we can find a way to seperate any `plies[i]` with any parts to make each parts are same values in each pair. Then current play will lose.

`[1, 2, 3]` ===> `[1, 2, 1, 2]` (each element are balanced)

If not, current player will win.

`[1, 2]` ===> `[1, 1, 1]`  (with one `1` left. So Current player remove `1` to win). 

---

The way to balance the elements is `XOR`, think about `[1, 2, 3]`
+ `1` ==> `01` 
+ `2` ==> `10` 
+ `3` ==> `11`

Each digit are balanced out.

---



If interested, here is a post about [general idea of the Nim Game thoery](https://leetcode.com/discuss/interview-question/2989607/New-Nim-Games-Learning-Note-oror-Game-Theory) including follow up if the number you can take is limited to a set.

# Code
```
class Solution {
    public boolean nimGame(int[] piles) {
        int res = 0;
        for (int x : piles)  res ^= x;
        return res != 0;
    }
}
```