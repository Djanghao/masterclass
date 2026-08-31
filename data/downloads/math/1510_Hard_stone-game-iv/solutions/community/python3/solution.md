# ✔️ [Python3] JUST 4-LINES, (ﾉﾟ0ﾟ)ﾉ~ OMG!!!, Explained

**Author:** artod
**Votes:** 11
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/1708190/](https://leetcode.com/problems/stone-game-iv/solutions/1708190/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

In the beginning, it may seem that we would need to do a huge amount of scans, recursive calls and take lots of space doing backtracking since the input `n` is in the range `1..10e5`. But the thing is that a player can remove only **squared number** of stones from the pile. That is, if we got `100000` as an input, the number of possible moves is in the more modest range `1..floor(sqrt(100000))` = `1 .. 316`. So it's perfectly doable to recursively verify all possible moves of Alice and Bob using memoization.

We iterate over the range `floor(sqrt(n)) .. 1`, square the index, and recursively call the function asking the question: Can the next player win if he/she starts with the pile of stones `n - i^2`?. If yes that means the current player loses, and we need to check the remaining options.

Why do we scan in the reversed range? Try to answer this question yourself as an exercise in the comments (\u0E07\u30C4)\u0E27

Time: **O(N*sqrt(N))** - scan
Space: **O(N)** - memo and recursive stack

Runtime: 404 ms, faster than **82.63%** of Python3 online submissions for Stone Game IV.
Memory Usage: 22.7 MB, less than **40.72%** of Python3 online submissions for Stone Game IV.

```
    @cache
    def winnerSquareGame(self, n: int) -> bool:
        if not n: return False
		
        for i in reversed(range(1, floor(sqrt(n)) + 1)):
            if not self.winnerSquareGame(n - i**2): return True

        return False
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**