# ✅Simple DP Solution | Go | C#✅

**Author:** shukhratutaboev
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3417918/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3417918/)

---

Go
```
func maxValueOfCoins(piles [][]int, k int) int {
	memo := make([][]int, len(piles)+1)
	for i := range memo {
		memo[i] = make([]int, k+1)
	}

	return dp(piles, memo, 0, k)
}

func dp(piles [][]int, memo [][]int, i int, k int) int {
	if k == 0 || i == len(piles) {
		return 0
	}
	if memo[i][k] != 0 {
		return memo[i][k]
	}

	res := dp(piles, memo, i+1, k)
	cur := 0

	for j := 0; j < min(len(piles[i]), k); j++ {
		cur += piles[i][j]
		res = max(res, cur+dp(piles, memo, i+1, k-j-1))
	}

	memo[i][k] = res
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
C#
```
public class Solution {
    public int MaxValueOfCoins(IList<IList<int>> piles, int k) {
        int n = piles.Count;
        int[][] memo = new int[n + 1][];
        for (int i = 0; i <= n; i++) {
            memo[i] = new int[k + 1];
            Array.Fill(memo[i], -1);
        }

        return DP(piles, memo, 0, k);
    }

    public int DP(IList<IList<int>> piles, int[][] memo, int i, int k) {
        if (k == 0 || i == piles.Count) return 0;
        if (memo[i][k] != -1) return memo[i][k];

        int res = DP(piles, memo, i + 1, k);
        int cur = 0;

        for (int j = 0; j < Math.Min(piles[i].Count, k); ++j) {
            cur += piles[i][j];
            res = Math.Max(res, cur + DP(piles, memo, i + 1, k - j - 1));
        }
        return memo[i][k] = res;
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)