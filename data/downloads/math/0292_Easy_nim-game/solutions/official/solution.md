# Official Solution

**Link:** [https://leetcode.com/problems/nim-game/solution/](https://leetcode.com/problems/nim-game/solution/)

---

## Solution

You can *always* win a Nim game if the number of stones $$n$$ in the pile is not divisible by $$4$$.

**Reasoning**

Let us think of the small cases. It is clear that if there are only one, two, or three stones in the pile, and it is your turn, you can win the game by taking all of them. Like the problem description says, if there are exactly four stones in the pile, you will lose. Because no matter how many you take, you will leave some stones behind for your opponent to take and win the game. So in order to win, you have to ensure that you never reach the situation where there are exactly four stones on the pile on your turn.

Similarly, if there are five, six, or seven stones you can win by taking just enough to leave four stones for your opponent so that they lose. But if there are eight stones on the pile, you will inevitably lose, because regardless whether you pick one, two or three stones from the pile, your opponent can pick three, two or one stone to ensure that, again, four stones will be left to you on your turn.

It is obvious that the same pattern repeats itself for $$n=4,8,12,16,\dots$$, basically all multiples of $$4$$.

<iframe src="https://leetcode.com/playground/3zh4UpMp/shared" frameBorder="0" width="100%" height="140" name="3zh4UpMp"></iframe>

**Complexity Analysis**

Time complexity: $$O(1)$$

  - Only one check is performed. 
  
Space complexity: $$O(1)$$

  - No additional space is used, so space complexity is also $$O(1)$$.

**References**

[Lecture on Nim Games](https://web.archive.org/web/20150528155700/https://www.cs.umd.edu/~gordon/ysp/nim.pdf) from University of Maryland: MATH 199: Math, Game Theory and the Theory of Games, Summer 2006.