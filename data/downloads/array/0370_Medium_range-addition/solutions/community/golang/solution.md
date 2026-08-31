# go diff array solution

**Author:** xyx530538772
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/2554744/](https://leetcode.com/problems/range-addition/solutions/2554744/)

---

```go
func getModifiedArray(length int, updates [][]int) []int {
	result := make([]int, length)
	for _, data := range updates {
		i, j, value := data[0], data[1], data[2]
		result[i] += value
		if j < length-1 {
			result[j+1] -= value
		}
	}
	// convert diff array to result 
	for i := 1; i < length; i++ {
		result[i] = result[i-1] + result[i]
	}
	return result
}
```