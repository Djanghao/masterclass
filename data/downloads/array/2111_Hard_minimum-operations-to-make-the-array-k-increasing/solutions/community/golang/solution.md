# [go] LIS || longest increasing subsequence

**Author:** JonahYe
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1636063/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1636063/)

---

For every sequence `i,i+k,i+2k,i+3k,...,i+nk`, we can find the longest increasing subsequence, marked as `m`, then the min times to make this sequence increasing is `len-m`. So this problem is converted to LIS problem.
```go
func kIncreasing(arr []int, k int) int {
	ans := 0
	for i := 0; i < k; i++ {
		subarray := make([]int, 0)
		for j := i; j < len(arr); j += k {
			subarray = append(subarray, arr[j])
		}
		ans += len(subarray) - maxNonDecreaseSubarray(subarray)
	}
	return ans
}

func maxNonDecreaseSubarray(subarray []int) int {
	dp := make([]int, len(subarray))
	dp[0] = subarray[0]
	index := 0
	for i := 1; i < len(subarray); i++ {
		if subarray[i] >= dp[index] {
			index++
			dp[index] = subarray[i]
		} else {
			dp[binarySearch(dp, 0, index, subarray[i])] = subarray[i]
		}
	}
	return index + 1
}

func binarySearch(a []int, l, r int, t int) int {
	for l <= r {
		mid := l + (r-l)>>1
		if a[mid] <= t {
			l = mid + 1
		} else if a[mid] > t {
			r = mid - 1
		}
	}
	return l
}
```