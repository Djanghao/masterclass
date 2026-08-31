# Go || My solution

**Author:** Wild-Boar
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3469082/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3469082/)

---

# Complexity
- Time complexity: $$O(n.m)$$ 
- Space complexity: $$O(n.m)$$ 

# Code
```
func firstCompleteIndex(arr []int, mat [][]int) int {
	n, m := len(mat), len(mat[0])
	row := make([]int, n)
	col := make([]int, m)
	hm := make(map[int][2]int)

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			hm[mat[i][j]] = [2]int{i, j}
		}
	}

	for i := 0; i < len(arr); i++ {
		k := hm[arr[i]]
		row[k[0]]++
		if row[k[0]] == m {
			return i
		}

		col[k[1]]++
		if col[k[1]] == n {
			return i
		}
	}
	return 0
}
```