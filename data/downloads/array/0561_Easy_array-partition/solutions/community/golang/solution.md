# Golang Solution

**Author:** aalindg
**Votes:** 3
**Link:** [https://leetcode.com/problems/array-partition/solutions/757820/](https://leetcode.com/problems/array-partition/solutions/757820/)

---

IDK why people are creating hashMaps for this.
This simple solution works.
```
func arrayPairSum(arr []int) int {
	sort.Ints(arr)

	var sum int = 0
	for i := 0; i < len(arr); i += 2 {
		sum += arr[i]
	}
	return sum
}
```