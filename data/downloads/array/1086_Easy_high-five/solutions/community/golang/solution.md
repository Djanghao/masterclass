# Golang O(N) count sort using arrays

**Author:** flk_go
**Votes:** 1
**Link:** [https://leetcode.com/problems/high-five/solutions/1137912/](https://leetcode.com/problems/high-five/solutions/1137912/)

---

```
func highFive(items [][]int) [][]int {
	var mp [1001][101]int
	for i := 0; i < len(items); i++ {
		mp[items[i][0]][items[i][1]]++
	}
	var response [][]int
	for i := 0; i < len(mp); i++ {
		avr := sum(mp[i])
		if avr != 0 {
			response = append(response, []int{i, avr})
		}
	}
	return response
}

func sum(scores [101]int) int {
	s := 0
	k := 0
	for i := 100; i >= 0; i-- {
		for k < 5 && scores[i] > 0 {
			s += i
			scores[i]--
			k++
		}
	}
	return s / 5
}
```