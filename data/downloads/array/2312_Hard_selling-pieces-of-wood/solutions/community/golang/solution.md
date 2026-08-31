# Bottom up dp Go

**Author:** user1070Qo
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/3918801/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/3918801/)

---

# Complexity
- Time complexity:
O(m\\*n\\*max(m,n))

- Space complexity:
O(m\\*n)

# Code
```

func sellingWood(m int, n int, prices [][]int) int64 {
	d := make([][]int64, m+1)

	for i := 0; i <= m; i++ {
		d[i] = make([]int64, n+1)
	}

	for _, price := range prices {
		i := price[0]
		j := price[1]
		cost := int64(price[2])
		if i <= m && j <= n {
			d[i][j] = max(d[i][j], cost)
		}
	}

	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			for k := 1; k < j; k++ {
				d[i][j] = max(d[i][j], d[i][k]+d[i][j-k])
			}

			for k := 1; k < i; k++ {
				d[i][j] = max(d[i][j], d[k][j]+d[i-k][j])
			}
		}
	}

	return d[m][n]
}

func max(a, b int64) int64 {
	if a > b {
		return a
	}

	return b
}
```