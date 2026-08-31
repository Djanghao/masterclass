# Determining Winning Strategy in Nim Game using Game Theory.

**Author:** Rare_Zawad
**Votes:** 19
**Link:** [https://leetcode.com/problems/nim-game/solutions/3206199/](https://leetcode.com/problems/nim-game/solutions/3206199/)

---

This is a classic example of a game theory problem where both players play optimally. The game's outcome depends on the number of stones in the heap. To determine whether you can win the game or not, we need to look at the number of stones in the heap and find a pattern.

Let's consider the base cases first:

- If there is only one stone, you can remove it and win the game.
- If there are two stones, you can remove one stone and win the game.
- If there are three stones, you can remove two stones and win the game.

For n=4, you cannot win the game, as you can remove at most three stones on your turn, and your friend can remove the remaining stones on their turn. Therefore, your friend will win the game.

For n=5,6,7, you can win the game. If there are 5 stones, you can remove one stone and reduce it to four stones, and your friend will be forced to remove one to three stones. In any case, you will be able to remove the last stone and win the game.

Similarly, if there are six stones, you can remove two stones, leaving four stones in the heap. Your friend will be forced to remove one to three stones, and you will be able to remove the last stone and win the game.

If there are seven stones, you can remove three stones, leaving four stones in the heap. Your friend will be forced to remove one to three stones, and you will be able to remove the last stone and win the game.

We can observe that for any n that is a multiple of four, you cannot win the game. For any other value of n, you can win the game.

Therefore, to solve this problem, we need to check if n is a multiple of four or not. If it is, return false; otherwise, return true.

# Code
```
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
```