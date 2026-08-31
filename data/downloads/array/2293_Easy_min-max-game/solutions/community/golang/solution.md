# A straightforward solution by recursion

**Author:** FlymeDllVa
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-max-game/solutions/3630598/](https://leetcode.com/problems/min-max-game/solutions/3630598/)

---

# Code
```
func minMaxGame(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}

	var mode bool
	newNums := make([]int, 0, len(nums)/2)
	for i := 0; i < n; i += 2 {
		o := nums[i]
		t := nums[i+1]

		if mode {
			newNums = append(newNums, max(o, t))
		} else {
			newNums = append(newNums, min(o, t))
		}

		mode = !mode
	}

	return minMaxGame(newNums)
}

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

func min(x, y int) int {
	if x > y {
		return y
	}
	return x
}

```