# Beats 100% | Simple solution

**Author:** nguyen081002
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/4806070/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/4806070/)

---



# Code
```
func colorTheArray(n int, queries [][]int) []int {
	nums, ans := make([]int, n), make([]int, len(queries))
	x := 0
	for i, q := range queries {
		index, color := q[0], q[1]
        if nums[index] == color {
            ans[i] = x
            continue 
        }
		if index > 0 && nums[index] > 0 && nums[index-1] == nums[index] {
			x--
		}
		if index < n-1 && nums[index] > 0 && nums[index+1] == nums[index] {
			x--
		}
		if index > 0 && nums[index-1] == color {
			x++
		}
		if index < n-1 && nums[index+1] == color {
			x++
		}
		ans[i] = x
		nums[index] = color
	}
	return ans
}
```