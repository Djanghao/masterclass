# C# clear DFS solution beats 97%

**Author:** need_what
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/2096159/](https://leetcode.com/problems/minimum-knight-moves/solutions/2096159/)

---

A few points:
1. min_moves(x, y) == min_moves(|x|, |y|)
2. min_moves(x, y) == min_moves(y, x)
3. The problem is same as moving from (x, y) to (0, 0)
4. We should always try to move inwards except when we are at (1,0) and (1,1)

```
	public int MinKnightMoves(int x, int y)
	{
		int?[,] dp = new int?[301, 301];
		dp[0, 0] = 0;
		dp[1, 1] = 2;
		dp[1, 0] = 3;
		return this.MinKnightMoves(x, y, dp);
	}

	private int MinKnightMoves(int x, int y, int?[,] dp)
	{
		x = Math.Abs(x);
		y = Math.Abs(y);
		if(x < y)
		{
			int temp = x;
			x = y;
			y = temp;
		}

		if (dp[x, y] != null) return dp[x, y].Value;
		int retval = 1 + Math.Min(this.MinKnightMoves(x - 2, y - 1, dp), this.MinKnightMoves(x - 1, y - 2, dp));
		dp[x, y] = retval;
		return retval;
	}
```