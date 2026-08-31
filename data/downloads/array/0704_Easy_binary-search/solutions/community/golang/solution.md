# Go Solution, with and without Standard Library

**Author:** phea
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-search/solutions/850762/](https://leetcode.com/problems/binary-search/solutions/850762/)

---

Go has **sort.SearchInts()** that returns the index where target number should be inserted into a sorted array. This means we have to check if the return index is length of array or if idx matches target.

https://github.com/phea/leetcode-go
```go
func searchB(nums []int, target int) int {
	idx := sort.SearchInts(nums, target)
	if idx >= len(nums) || nums[idx] != target {
		return -1
	}
	return idx
}
```

Here's the classic binary search algorithm:

```go

func search(nums []int, target int) int {
	low, high := 0, len(nums)-1
	var mid int
	for low <= high {
		mid = (low + high) / 2
		if nums[mid] < target {
			low = mid + 1
		} else if nums[mid] > target {
			high = mid - 1
		} else {
			return mid
		}
	}

	return -1
}
```