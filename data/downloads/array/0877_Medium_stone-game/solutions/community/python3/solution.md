# [RZ] Top down and bottom up solutions in Python

**Author:** ASaltyFish
**Votes:** 11
**Link:** [https://leetcode.com/problems/stone-game/solutions/485238/](https://leetcode.com/problems/stone-game/solutions/485238/)

---

In this problem there are two players picking up stones from piles, each player can pick one pile from the left end or right end and the goal is to get the most stones.

One important info is that both players will play optimally, so after one player makes the best move, the other player will again make his best move out of the rest piles, then the problem player two faces is a sub-problem of the one player one faces (as it has one less pile to deal with).

Since the final winner is the one with more stones, either we compare both players stones in the end to decide who wins, this way we need to keep two numbers, one for each player, or we can just record the max difference of stones between 'current' player and 'the other' player, if finally the difference is greater than 0, it means player 1 can win.

**1. Top down solution with memoization ---> O(n ^ 2) time, O(n ^ 2) space**
```
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        return self.helper(piles, 0, len(piles) - 1, {}) > 0
    
	# returns the maximum number of stones current player can get more than the other player out of piles[i] ... piles[j]
    def helper(self, piles, l, r, cache):
        if (l, r) in cache:
            return cache[(l, r)]
        if l > r:
            return 0
        if l == r:
            return piles[l]
        
		""" 
		assume current player is player 1, then if player 1 chooses piles[l], 
		self.helper(piles, l + 1, r, cache) will return the maximum stones player 2 
		can get more than player 1 from the rest (piles[l + 1] ... piles[r]), then
		by subtracting it from piles[l], we get how many stones player 1 can get
		more than player 2. Since we want to maximize final result, we choose the
		max of both options player 1 can make (pick piles[l] or piles[r])
		"""
        res = max(piles[l] - self.helper(piles, l + 1, r, cache), piles[r] - self.helper(piles, l, r - 1, cache))
        cache[(l, r)] = res
        return res
```

**2. Bottom up solution ---> O(n ^ 2) time, O(n ^ 2) space**
```
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        n = len(piles)
        f = [[0 for _ in range(n)] for _ in range(n)]
        
        for i in range(n):
            f[i][i] = piles[i]
        
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                f[i][j] = max(piles[i] - f[i + 1][j], piles[j] - f[i][j - 1])
        
        return f[0][n - 1] > 0
```
**3. Bottom up solution ---> O(n ^ 2) time, O(n) space**
```
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        n = len(piles)
        f = [0] * n
        
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                f[j] = max(piles[i] - f[j], piles[j] - f[j - 1])
        
        return f[n - 1] > 0
```