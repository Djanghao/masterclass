# Golang binary search with explanation

**Author:** user2418K
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2648280/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2648280/)

---

The naive solution is as follows:
```go
func numberOfPairs(nums1 []int, nums2 []int, diff int) int64 {
        var result int64
        for i := 0; i < len(nums1); i++ {
                for j := i + 1; j < len(nums1); j++ {
                        if nums1[i]-nums1[j] <= nums2[i]-nums2[j]+diff {
                                result++
                        }
                }
        }
        return result
}
```

But this gives TLE which is expected since it's `O(N^2)`. Need to optimize it.

First of all the initial expression needs to be rearranged:
1. Initial expression
`nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`
2. Move the `nums2[i]` to the left and `nums1[j]` to the right.
`nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff`
3. This means that in fact we are working with only single array which is calculated by substructing one from another:
`(nums1[i] - nums2[i]) <= (nums1[j] - nums2[j]) + diff`
`nums1[i] - nums2[i] = nums[i]`
`nums1[j] - nums2[j] = nums[j]`
`nums[i] <= nums[j] + diff`
4. Once we realized that there is only single array we have to find the number of times when each element is less or equal than the right elements with a `diff`:
`0 <= i < j <= n - 1`
`nums[i] <= nums[j] + diff`
5. For sure this can be done by nested loop but it returns us to the same state when we were in the beginning when wanted to avoid O(N^2) solution.
6. We want to iterate over each element and find how many elements to the right of it with `diff` less or equal to the element itself. Basically it's the same when we say for the next element that `how many elements I've beat when incremented by diff`, i.e. the algorightm will look like the following:
- take the both elements from `nums1` and `nums2` and substruct them from each other
- check what position will be for the `nums1[i] - nums2[i] + diff` in the sorted array. This position will be added to the results as it exactly shows how many elements to the left less or equal to the current `nums1[i] - nums2[i] + diff`
- insert the number itself to the sorted array `nums1[i] - nums2[i]` so that on the next iteration with the following element we could do the same operations

```go
func numberOfPairs(nums1 []int, nums2 []int, diff int) int64 {
	var result int64
	n := len(nums1)

	sortedDiffs := make([]int, 0)
	for i := 0; i < n; i++ {
		num := nums1[i] - nums2[i]
		// check what position will be for the `num+diff` in the
		// sorted array. It will be the number of the values to be added to the result
		result += int64(getInsertPos(sortedDiffs, num+diff))
		pos := getInsertPos(sortedDiffs, num)

		// insert the value to the position
		sortedDiffs = append(sortedDiffs, 0)
		copy(sortedDiffs[pos+1:], sortedDiffs[pos:])
		sortedDiffs[pos] = nums1[i] - nums2[i]
	}

	return result
}

// Find the proper position to insert the value
func getInsertPos(slice []int, x int) int {
	l, r := 0, len(slice)
	for l < r {
		mid := l + (r-l)/2
		if x < slice[mid] {
			r = mid
		} else {
			l = mid + 1
		}
	}
	return l
}
```