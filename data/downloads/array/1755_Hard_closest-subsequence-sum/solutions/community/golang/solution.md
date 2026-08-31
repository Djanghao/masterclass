# 👍Runtime 346 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/4988255/](https://leetcode.com/problems/closest-subsequence-sum/solutions/4988255/)

---

# Code
```
func minAbsDifference(nums []int, goal int) int {
	minPossible := math.MaxInt32

	var findAllSubsetSums func(lst *[]int, start, end, sum int)
	findAllSubsetSums = func(lst *[]int, start, end, sum int) {
		if start == end {
			*lst = append(*lst, sum)
			return
		}

		findAllSubsetSums(lst, start+1, end, sum+nums[start])
		findAllSubsetSums(lst, start+1, end, sum)
	}

	n := len(nums)
	firstHalf := make([]int, 0)
	secondHalf := make([]int, 0)

	findAllSubsetSums(&firstHalf, 0, n/2, 0)
	findAllSubsetSums(&secondHalf, n/2, n, 0)

	sort.Ints(firstHalf)

	for _, x := range secondHalf {
		diff := goal - x
		currIndex := binarySearch(diff, firstHalf)
		if currIndex < len(firstHalf) {
			minPossible = int(math.Min(float64(minPossible), math.Abs(float64(diff-firstHalf[currIndex]))))
		}
		if currIndex > 0 {
			minPossible = int(math.Min(float64(minPossible), math.Abs(float64(diff-firstHalf[currIndex-1]))))
		}
	}

	return minPossible
}

func binarySearch(x int, lst []int) int {
	low, high := 0, len(lst)-1

	for low < high {
		mid := low + (high-low)/2
		if x == lst[mid] {
			return mid
		}
		if x > lst[mid] {
			low = mid + 1
		} else {
			high = mid
		}
	}
	return low
}
```