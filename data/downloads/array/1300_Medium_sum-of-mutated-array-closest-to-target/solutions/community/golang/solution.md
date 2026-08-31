# Go sort solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/569269/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/569269/)

---

```go
func abs(v int) int {
	if v > 0 {
		return v
	}
	return v * -1
}

func findBestValue(arr []int, target int) int {
	sort.Ints(arr)
	prefix := 0
	for i, v := range arr {
		// current: replace arr[i:] value by v
		current := prefix + (len(arr) - i) * v
		if current == target {
			return v
		}
		if current < target {
			prefix += v
		}
		if current > target {
			length := len(arr) - i
			value := (target - prefix) / length
			if abs(value*length+prefix-target) <= abs((value+1)*length+prefix-target) {
				return value
			}
			return value + 1
		}
	}
	return arr[len(arr)-1]
}
```