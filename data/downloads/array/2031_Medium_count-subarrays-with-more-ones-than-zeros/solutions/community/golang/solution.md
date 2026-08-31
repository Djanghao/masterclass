# O(n) Prefix sum counting with explanation

**Author:** sebnyberg
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1514480/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1514480/)

---

Intuition:

* O(n^2) is too slow
* O(n logn) would be fine, but with mod prime => how would we divide and conquer?
* Solution likely to be O(n), and subarray => left-to-right, or right-to-left order
* Considering all subarrays is O(n^2) => too slow
* Subarray problems very often use prefix sums.
* Transform zeroes to -1 to enable use of prefix sums.

As always with prefix sums, its important to note that it's possible to calculate the range `[i, j)` by subtracting `prefixSum[j] - prefixSum[i]`.

Considering elements from left to right, when there is a 1, all subsequences ending in the previous position that used to add up to zero, now add up to 1 and become valid. The opposite reasoning goes for zeroes.

The trick is that it doesn't matter where the ranges are, only what they sum up to a certain number. Consider a position `j` that holds a 1. Let's say the total sum `[0,j]` is 3. Then any range `[i,j-1]` that is zero can be found by counting ranges `[0,i]` such that the sum is `3-1 = 2`:

```bash
|------------3-----------|
[ 0, ..., i, ..., j-1, j ]
|-----2-----|----0---|-1-|
```

So, for each position, the current sum is added to a "prefix sum counter". This counter can be used to calculate how many previously invalid sums now meet the criterion, or how many have become invalid.

### Map-based solution (~112ms / 10MB)

```go
const mod = 1e9 + 7

func subarraysWithMoreZerosThanOnes(nums []int) int {
	sumCount := make(map[int]int, len(nums))
	sumCount[0] = 1
	var validCount, totalCount, sum int
	for i := range nums {
		if nums[i] == 0 {
			validCount = (validCount - sumCount[sum-1]) % mod
			sum--
		} else {
			validCount = (validCount + sumCount[sum]) % mod
			sum++
		}
		sumCount[sum]++
		totalCount = (totalCount + validCount) % mod
	}
	return totalCount
}
```

### Optimized array-based (~88ms, 9.8MB):

```go
const (
	mod      = 1e9 + 7
	maxItems = 1e5
)

func subarraysWithMoreZerosThanOnes(nums []int) int {
	var sumCount [maxItems*2 + 1]uint32
	var offset int = maxItems
	sumCount[offset] = 1
	var validCount, totalCount int
	var sum int
	for i := range nums {
		if nums[i] == 0 {
			validCount = (validCount - int(sumCount[sum-1+offset])) % mod
			sum--
		} else {
			validCount = (validCount + int(sumCount[sum+offset])) % mod
			sum++
		}
		sumCount[int(sum)+offset]++
		totalCount = (totalCount + validCount) % mod
	}
	return int(totalCount)
}
```