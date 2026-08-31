# Simple Go Solution

**Author:** kamdar
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/3014400/](https://leetcode.com/problems/k-empty-slots/solutions/3014400/)

---

# Code
```
func kEmptySlots(bulbs []int, k int) int {
	stack, result := []int{}, math.MaxInt32
	bulbOnDays := make([]int, len(bulbs))
	for day, bulb := range bulbs {
		bulbOnDays[bulb-1] = day + 1
	}
	for i := range bulbOnDays {
		for len(stack) > 0 && bulbOnDays[stack[len(stack)-1]] > bulbOnDays[i] {
			previousIdx:= stack[len(stack)-1]
            stack=stack[:len(stack)-1]
			if i-previousIdx-1 == k {
				result = min(result, bulbOnDays[previousIdx])
			}
		}
		if len(stack) > 0 && i-stack[len(stack)-1]-1 == k {
			result = min(result, bulbOnDays[i])
		}
		stack = append(stack, i)
	}
	if result != math.MaxInt32 {
		return result
	}
	return -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```