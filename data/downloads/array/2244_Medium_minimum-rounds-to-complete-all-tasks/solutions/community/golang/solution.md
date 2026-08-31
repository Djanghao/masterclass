# Go | simple solution

**Author:** andy4s
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2998958/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2998958/)

---

# Code
```
func minimumRounds(tasks []int) int {
	ans := 0
	mp := map[int]int{}
	for _, v := range tasks {mp[v]++}
	for _, v := range mp {
		if v == 1 {return -1}
		ans += int(math.Ceil(float64(v)/3.0))
	}
	return ans
}

```