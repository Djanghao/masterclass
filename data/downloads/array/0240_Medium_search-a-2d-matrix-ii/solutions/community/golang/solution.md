# GoLang. True binary search. Two pointers

**Author:** sobik
**Votes:** 7
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/2327323/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/2327323/)

---



**1.Diagonal binary search. Complexity O(ln(n) + ln(m))**

```
func searchMatrix(matrix [][]int, target int) bool {

	n, m := len(matrix), len(matrix[0])

	min := func(i1 int, i2 int) int {
		if i1 < i2 {
			return i1
		}
		return i2
	}
	
	var binarysearch func(x1 int, x2 int, y1 int, y2 int) bool
	binarysearch = func(x1 int, x2 int, y1 int, y2 int) bool {
		if x1 > x2 || y1 > y2 {
			return false
		}	
		delta := min(x2 - x1,  y2 - y1);
		lo1, lo2, hi1, hi2 := x1, y1, x1 + delta, y1 + delta

		for lo1 <= hi1 && lo2 <= hi2 {
			m1 := lo1 + (hi1 - lo1) / 2
			m2 := lo2 + (hi2 - lo2) / 2
			v := matrix[m1][m2]
			if v == target {
				return true
			} else if matrix[m1][m2] > target {
				hi1 = m1 - 1
				hi2 = m2 - 1
			} else {
				lo1 = m1 + 1
				lo2 = m2 + 1
			}
		}
		return binarysearch(lo1, x2, y1, hi2) || binarysearch(x1, hi1, lo2, y2)	
	}

	return binarysearch(0, n-1, 0, m-1)
}
```

**2. Two pointer approach. Complexity O(n + m)**
```
func searchMatrix(matrix [][]int, target int) bool {

	n, m := len(matrix), len(matrix[0])
	i, j := 0, m-1
	
	for i < n && j >= 0 {
		v := matrix[i][j]
		if v == target {
			return true
		} else if v > target {
			j -= 1
		} else { 
			i += 1
		}
		
	}
	return false
}
```