# Golang Treemap

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/5853449/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/5853449/)

---

```
package main

import (
	"github.com/emirpasic/gods/v2/maps/treemap"
	"math"
)

func minimumCost(nums []int, k int, dist int) int64 {
	k -= 1
	n := len(nums)

	primary := treemap.NewWith[int, int](func(x, y int) int {
		if nums[x] == nums[y] {
			return x - y
		}
		return nums[x] - nums[y]
	})

	reserve := treemap.NewWith[int, int](func(x, y int) int {
		if nums[x] == nums[y] {
			return x - y
		}
		return nums[x] - nums[y]
	})

	ans := int64(math.MaxInt)
	sum := int64(0)

	for right := 1; right < n; right++ {
		if right > dist {
			left := right - dist - 1
			if _, ok := primary.Get(left); ok {
				primary.Remove(left)
				sum -= int64(nums[left])
			} else {
				reserve.Remove(left)
			}
		}

		reserve.Put(right, right)
		minimum, _, _ := reserve.Min()
		reserve.Remove(minimum)

		primary.Put(minimum, minimum)
		sum += int64(nums[minimum])

		if primary.Size() > k {
			maximum, _, _ := primary.Max()
			reserve.Put(maximum, maximum)
			primary.Remove(maximum)
			sum -= int64(nums[maximum])
		}

		if primary.Size() == k {
			ans = min(ans, sum)
		}
	}

	return ans + int64(nums[0])
}

```