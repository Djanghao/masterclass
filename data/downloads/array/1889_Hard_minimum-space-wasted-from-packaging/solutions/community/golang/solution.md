# [Go] Binary search | Prefix sum (100%)

**Author:** anhlai-codes
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3153475/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3153475/)

---

# Code
```
func minWastedSpace(packages []int, boxes [][]int) int {
	const mod = 1e9 + 7
	sort.Ints(packages)
	n := len(packages)
	prefix := make([]int, n+1)
	for i := 1; i <= n; i++ {
		prefix[i] = prefix[i-1] + packages[i-1]
	}
	ans := math.MaxInt64
	for _, box := range boxes {
		sort.Ints(box)
		if box[len(box)-1] < packages[n-1] {
			continue
		}
		// cur is the space wasted in current box
		cur := 0
		j := 0
		for _, b := range box {
			i := binarySearch(packages, b)
			// put all packages from j to i-1 into box b
			cur += (i - j + 1) * b
			// remove the sum of packages from j to i-1
			cur -= prefix[i+1] - prefix[j]
			j = i + 1
		}
		// update the minimum space wasted
		ans = min(ans, cur)
	}
	if ans == math.MaxInt64 {
		return -1
	}
	return ans % mod
}

// binary search find the first index that is less than or equal to target
func binarySearch(nums []int, target int) int {
	l, r := 0, len(nums)-1
	for l < r {
		mid := (l + r) >> 1
		if nums[mid] <= target {
			l = mid + 1
		} else {
			r = mid
		}
	}
	if nums[l] > target {
		return l - 1
	}
	return l
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```