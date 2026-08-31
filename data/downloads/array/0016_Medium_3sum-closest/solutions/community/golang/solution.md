# go two pointer solution

**Author:** xyx530538772
**Votes:** 3
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/2642334/](https://leetcode.com/problems/3sum-closest/solutions/2642334/)

---

```go
func absInt(x int) int {
	return int(math.Abs(float64(x)))
}

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	n := len(nums)
	res := nums[0] + nums[1] + nums[2]
	for i := 0; i < n-2; i++ {
		j, k := i+1, n-1
		for j < k {
			tmp := nums[i] + nums[j] + nums[k]
			if tmp == target {
				return target
			}
			if absInt(target-res) > absInt(target-tmp) {
				res = tmp
			}
			if tmp > target {
				k--
			} else {
				j++
			}
		}
	}
	return res
}
```