# go 1.21, clean code

**Author:** Colix
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/6010006/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/6010006/)

---

```golang []
func findPairs(nums []int, k int) int {
	counter := make(map[int]int)
	for _, num := range nums {
		counter[num]++
	}
	var ret int
	for num := range counter {
		if k == 0 {
			if counter[num] > 1 {
				ret++
			}
		} else {
			if _, ok := counter[num+k]; ok {
				ret++
			}
		}
	}
	return ret
}
```