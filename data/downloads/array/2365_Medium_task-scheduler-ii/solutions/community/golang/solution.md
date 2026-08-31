# Golang O(n) Solution

**Author:** huzhx
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/6021060/](https://leetcode.com/problems/task-scheduler-ii/solutions/6021060/)

---

# Intuition
To ensure each task type respects the required spacing (`space`) between its occurrences, we can track the last completion day of each task type. This allows us to determine if a "break" is needed before completing a task again.

# Approach
1. Use a hashmap (`taskToDay`) to store the last day each task type was completed.
2. Iterate through the `tasks` array, incrementing the current day for each task.
   - If a task violates the `space` constraint (i.e., was completed too recently), add "break" days to `curDay` to satisfy the spacing.
3. Update `taskToDay` with the new completion day for each task.
4. Return `curDay` as the total days required.

# Complexity
- Time complexity:
\\(O(n)\\), where \\(n\\) is the number of tasks, as we process each task once.

- Space complexity:
\\(O(n)\\), due to storing the last completion day for each unique task in `taskToDay`.

# Code
```golang []
func taskSchedulerII(tasks []int, space int) int64 {
	curDay := 0
    // Tracks the last day each task type was completed
	taskToDay := make(map[int]int, len(tasks))

	for _, task := range tasks {
        curDay++

		lastDay, exists := taskToDay[task]
        if exists && curDay - lastDay - 1 < space {
            curDay += space - (curDay - lastDay - 1)
        }

        taskToDay[task] = curDay
	}

	return int64(curDay)
}
```