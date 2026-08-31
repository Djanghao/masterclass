# [Golang] Construct sorted array using binary search

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3707356/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3707356/)

---

# Complexity
- Time complexity: O(N^2 Log N)
- Space complexity: O(N)

# Code
```
func sumImbalanceNumbers(nums []int) int {
  n := len(nums)
	result := 0

	for i := 0; i < n; i++ {
    var subarr []int
    var imbalance int
		for j := i; j < n; j++ {
      pos := searchInsert(subarr, nums[j])
      // We have two options
      if pos == len(subarr) {
        subarr = append(subarr, nums[j])
        if len(subarr) > 1 && subarr[len(subarr)-1] - subarr[len(subarr)-2] > 1 {
          imbalance++
        }
      } else {
        // In the middle; affects the imbalance
        if pos == 0 {
          if len(subarr) > 0 && subarr[0] - nums[j] > 1 {
            imbalance++
          }
        } else {
          if subarr[pos] - subarr[pos-1] > 1 {
            imbalance--
          }
          if nums[j] - subarr[pos-1] > 1 {
            imbalance++
          }
          if subarr[pos] - nums[j] > 1 {
            imbalance++
          }
        }
        subarr = append(subarr, 0)
        copy(subarr[pos+1:], subarr[pos:])
        subarr[pos] = nums[j]
      }
      result += imbalance
		}
	}

	return result
}

func searchInsert(nums []int, target int) int {
    l, r := 0, len(nums) - 1
    for l <= r {
        mid := l + (r - l) / 2
        if nums[mid] < target {
            l = mid + 1
        } else if nums[mid] > target {
            r = mid - 1
        } else {
            return mid
        }
    }
    return l
}
```