# Python by top-down DP [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 26
**Link:** [https://leetcode.com/problems/can-i-win/solutions/1625573/](https://leetcode.com/problems/can-i-win/solutions/1625573/)

---

**Hint**:

When it comes to **game theory** problem with **optimal choice**, think of **DP** with **min-max strategy** (maximize the advantage of current player, and minimize the advantage of others).

---

There are two common types of DP implementation.

One is **iteration** with array or list, also known as **tabulation method**, usually solve in bottom-up direction.

After setting **initial condition** (i.e., boundary condition), then compute solution with **state transfer function** from solved subproblems one by one.

---

The other is **recursion with memoization**, looks like DFS with look-up table, usually solve in top-down direction.

After setting **base case** (i.e., stop condition), then go down to solve next level with smaller problem size. When DFS is completed, derive solution of current level from solved subproblems with **recurrence formula**.

---


**Implementation** by by top-down DP

```
class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        
        has_used = lambda flag, x: flag & (1<<x)
        is_odd = lambda x: x % 2 == 1
        
        # use python built-in cache as memoization to speed-up
        @cache
        def can_player_win_on(target, bitflag):
            
            # Input: target number, current state of available call numbers for current player
            
            # Ouput: Return True if current player can win with given parameter.
            #        Otherwise, return False.
            
            
            if target <= 0:
				## Base case:
                # Opponent has reach target and won the game on previous round.
                return False
            
            
			## General cases:
            # Current player use all available call number, and try to make a optimal choice
            for call_number in range(1, maxChoosableInteger+1):
                
            
                if has_used( bitflag, call_number ):
                    # Players cannot reuse the same call number, defined by game rule
                    continue
                
            
                # opponent makes next optimal move after current player
                # update target and bitflag for opponent
                if not can_player_win_on(target - call_number, bitflag | (1<<call_number) ):
                    
                    # current player can win if opponent lose
                    return True

                
            # current player lose, failed to find a optimal choice to win
            return False
        
        # ------------------------------------------------------
        
		## Quick response on special cases:
        
        # total number sum = 1 + 2 + ... + max call number = n * (1 + n) // 2
        S = maxChoosableInteger * (maxChoosableInteger+1) // 2
        
        if S < desiredTotal:
            # max call number is too small, can not reach desired final value
            return False
        
        elif desiredTotal <= 0:
            # first player already win on game opening
            return True
        
        elif S == desiredTotal and is_odd(maxChoosableInteger):
            # first player always win, because she/he can choose last remaining number from 1 ~ maxChoosableInteger on final round
            return True
        
        return can_player_win_on(desiredTotal, bitflag=0 )
```

---

Reference:

[1] [Python official docs about @cache as function memoization](https://docs.python.org/3/library/functools.html)

[2] [Python official docs about bit manipulation](https://wiki.python.org/moin/BitManipulation)

[3] [Python official docs about lambda expression](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

[4] [Wiki: min max in game theory](https://en.wikipedia.org/wiki/Minimax#Game_theory)

---

Related leetcode challenge:

[Leetcode #486 Predict winner](https://leetcode.com/problems/predict-the-winner/)

[Leetcode #877 Stone game](https://leetcode.com/problems/stone-game/)

[Other challenges related to game theory](https://leetcode.com/tag/game-theory/)
