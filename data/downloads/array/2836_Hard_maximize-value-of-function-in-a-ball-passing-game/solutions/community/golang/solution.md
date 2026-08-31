# Golang solution

**Author:** go_
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4020477/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4020477/)

---

```
package main

import (
	_ "fmt"
	_ "math"
	_ "math/rand"
	_ "sort"
	_ "time"
)


func getMaxFunctionValue(receiver []int, k int64) int64 {
	numOfSteps, length := 50, len(receiver)
	scores := make([][]int64, numOfSteps)
	exits := make([][]int, numOfSteps)

	for i := 0; i < numOfSteps; i++ {
		scores[i] = make([]int64, length)
		exits[i] = make([]int, length)
	}

	for rIdx := 0; rIdx < length; rIdx++ {
		scores[0][rIdx] = int64(receiver[rIdx])
		exits[0][rIdx] = receiver[rIdx]
	}

	for step := 1; step < numOfSteps; step++ {
		for rIdx := 0; rIdx < length; rIdx++ {
			exit := exits[step-1][rIdx]
			exits[step][rIdx] = exits[step-1][exit]
			scores[step][rIdx] = scores[step-1][rIdx] + scores[step-1][exit]
		}
	}

	res := int64(-1)
	for rIdx := 0; rIdx < length; rIdx++ {
		score := int64(rIdx)
		exit := rIdx

		for step := 0; step <= numOfSteps; step++ {
			if (1<<step)&k == 0 {
				continue
			}

			score += scores[step][exit]
			exit = exits[step][exit]
		}
		res = max(res, score)
	}

	return res
}

func max(a, b int64) int64 {
	if a > b {
			return a
	}
	return b
}
```