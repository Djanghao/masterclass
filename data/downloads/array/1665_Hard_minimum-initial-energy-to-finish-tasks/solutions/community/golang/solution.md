# Golang 100% Solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/1058630/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/1058630/)

---

```go
func minimumEffort(tasks [][]int) int {
	effort := 0
	sort.Slice(tasks, func(i, j int) bool {
		return tasks[i][1]-tasks[i][0] > tasks[j][1]-tasks[j][0]
	})
	curEnergy := 0
	for _, task := range tasks {
		if curEnergy < task[1] {
			supplements := task[1] - curEnergy
			curEnergy += supplements
			effort += supplements
		}
		curEnergy -= task[0]
	}
	return effort
}
```