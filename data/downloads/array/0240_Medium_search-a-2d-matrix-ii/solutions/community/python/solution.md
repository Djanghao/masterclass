# Python O(m+n) Linear Search from Top-Right Corner

**Author:** WangQiuc
**Votes:** 101
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/332356/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/332356/)

---

Starting from Top-Right corner:
If current grid ```M[r][c]``` is smaller than target ```x```, there is no need to consider ```M[r][ :c] ``` since all the grids on the left must be smaller as well. So, ```x``` must be in the rows below and we can safely make ``` r += 1```.
We keep moving ```M[r][c]``` downwards until it's larger ```x```, then we can safely move leftwards and make ```c -= 1``` since all the grids in ```M[ :r][c ]``` would be larger than ```x```.
During the search, if ```x``` is found, we return ```True```. Otherwise, we can either move downwards or leftwards safely.
If we reach left-bottom corner without hitting ```x```, then target is not in the matrix.
```
def searchMatrix(matrix, target):
	m, n = len(matrix), len(matrix) and len(matrix[0])
	r, c = 0, n-1
	while r < m and c >= 0:
		if target > matrix[r][c]:
			r += 1
		elif target < matrix[r][c]:
			c -= 1
		else: return True
	return False
```