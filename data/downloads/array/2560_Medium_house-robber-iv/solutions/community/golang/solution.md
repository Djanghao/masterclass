# [Go] Binary search with DP

**Author:** YUFENGWANG0
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3149046/](https://leetcode.com/problems/house-robber-iv/solutions/3149046/)

---

Use binary search to find what the answer is. Min and max of nums are the boundaries. We need to check, given a number `m`, if we can find a uncontiguous subsequence that yields a capacity <= `m`. We can use a simple dynamic programming method to implement `check(int) bool` in O(n):

`dp1[i]` denotes the length of the satisfying sebsequence that starts from i-th number (taking the i-th number).
`dp2[i]` denotes the length of the satisfying sebsequence that starts from (i+1)-th number (not taking the i-th number).

We have
```
dp1[i] = nums[i] <= m ? 1 + dp2[i+1]  : 0
dp2[i] = max(dp1[i+1], dp2[i+1])
```

We can use a simple optimzation to avoid using two whole dp arrays by just keeping two ints that denote `dp1[i+1]` and `dp2[i+1]`.

Here's a solution in Go:
```go
func minCapability(nums []int, k int) int {
	left, right := min(nums...)-1, max(nums...)

	check := func(m int) bool {
		l := len(nums)
		take, notTake := 0, 0
		for i := l - 1; i >= 0; i-- {
			if nums[i] > m {
				notTake = max(take, notTake)
				take = 0
			} else {
				take, notTake = 1+notTake, max(take, notTake)
			}
			if take == k || notTake == k {
				return true
			}
		}
		return false
	}

	for left+1 < right {
		m := (left + right) / 2
		if check(m) {
			right = m
		} else {
			left = m
		}
	}
	return right
}

func max(a ...int) int {
	ret := a[0]
	for i := 1; i < len(a); i++ {
		if a[i] > ret {
			ret = a[i]
		}
	}
	return ret
}

func min(a ...int) int {
	ret := a[0]
	for i := 1; i < len(a); i++ {
		if a[i] < ret {
			ret = a[i]
		}
	}
	return ret
}
```
