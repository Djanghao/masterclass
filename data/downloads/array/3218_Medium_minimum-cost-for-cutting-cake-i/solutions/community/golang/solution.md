# Runtime 0 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5576902/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5576902/)

---

# Code
```
func minimumCost(m int, n int, a []int, b []int) int {
	arr := make([][]int, m)
	for i := range arr {
		arr[i] = make([]int, n)
	}

	c := make([]int, m+n)
	for i := 0; i < m-1; i++ {
		c[i] = a[i]
	}
	for i := 0; i < n-1; i++ {
		c[i+m] = b[i]
	}

	h, v, ans, f := 1, 1, 0, 1

	for f == 1 {
		max, idx := 0, 0
		f = 0
		for i := 0; i < m+n; i++ {
			if c[i] > max {
				max = c[i]
				idx = i
				f = 1
			}
		}
		if idx < m {
			ans += v * max
			h++
		} else {
			ans += h * max
			v++
		}
		c[idx] = 0
	}

	return ans
}
```