# go 1.21, clean code

**Author:** Colix
**Votes:** 2
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/5729238/](https://leetcode.com/problems/circular-array-loop/solutions/5729238/)

---

```golang []
func circularArrayLoop(nums []int) bool {
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			continue
		}
		for slow, fast := i, i; nums[slow]*nums[next(nums, fast)] > 0 && nums[slow]*nums[next(nums, next(nums, fast))] > 0; {
			slow = next(nums, slow)
			fast = next(nums, next(nums, fast))
			if slow == fast {
				if slow == next(nums, slow) {
					break
				}
				return true
			}
		}
		for first, j := nums[i], i; first*nums[j] > 0; j, nums[j] = next(nums, j), 0 {}
	}
	return false
}

func next(nums []int, i int) int {
	n := len(nums)
    return ((i+nums[i])%n + n) % n
}
```