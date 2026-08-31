# Golang DP solution beats 100% CPU & memory

**Author:** arenx
**Votes:** 1
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/546628/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/546628/)

---

```golang
func maxSizeSlices(slices []int) int {

	k := len(slices) / 3
	
	// (1) get max size from  slices[0:N-1]

	dp := map[int]map[int]int{}
	front := maxSum(dp, slices[0:len(slices)-1], 0, k)

	// (2) get max size from  slices[1:N]
	
	dp = map[int]map[int]int{}
	back := maxSum(dp, slices[1:len(slices)], 0, k)

	if back > front {
		return back
	} else {
		return front
	}

}

// Get maximum sum of k elements from slices[start:]
// Each element is not adjacent
func maxSum(dp map[int]map[int]int, slices []int, start int, k int) int {

	if k == 0 {
		return 0
	}

	if v1, exist1 := dp[start]; exist1 {
		if v2, exist2 := v1[k]; exist2 {
			return v2
		}
	}

	big := 0

	end := len(slices) - ((k - 1) * 2)

	for i := start; i < end; i++ {
		r := slices[i] + maxSum(dp, slices, i+2, k-1)
		if big < r {
			big = r
		}
	}

	if v, exist := dp[start]; exist {
		v[k] = big
	} else {
		dp[start] = map[int]int{
			k: big,
		}
	}

	return big
}
```