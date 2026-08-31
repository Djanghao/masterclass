# Bottom-up DP python

**Author:** lywc
**Votes:** 15
**Link:** [https://leetcode.com/problems/nim-game/solutions/1141120/](https://leetcode.com/problems/nim-game/solutions/1141120/)

---

Using bottom-up programming: 
We define function F(x): The capability of  you winning the game with x stones on your first turn.
If you go first and n <= 3: you win.
else F(x) > 3 after your turn, it's your opponents turn

Which means if you go first and each of your three possible moves all land on F(X) => True for you, then it applies to your opponent as well. So F(X) = !F(x-1) and !F(x-2) and !F(x-3)

T:O(N) S:O(N) Memory limit exceeded

We can reduce the space complexity by just updating an array of size 3, but an O(N) time is also unacceptable.

```
class Solution:
    def canWinNim(self, n: int) -> bool:        
        if n <= 3:
            return True
        new_size = n + 1
        memo = [False] * (new_size)
        
        for i in range(4): 
            memo[i] = True
        
        for i in range(4,new_size):
            for j in range(1,4):
                if memo[i] == True:
                    break
                if memo[i-j] == True:
                    memo[i] = False
                else:
                    memo[i] = True
        
        return memo[n]
```