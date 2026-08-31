# Go Dfs

**Author:** hendraeffendi96
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251214/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251214/)

---

# Code
```

var path map[int][]int

func maximumScoreAfterOperations(edges [][]int, values []int) int64 {
	path = make(map[int][]int)
	// init the graph
	for i := range edges {
		if path[edges[i][0]] == nil {
			path[edges[i][0]] = make([]int, 0)
		}
		if path[edges[i][1]] == nil {
			path[edges[i][1]] = make([]int, 0)
		}
		path[edges[i][0]] = append(path[edges[i][0]], edges[i][1])
		path[edges[i][1]] = append(path[edges[i][1]], edges[i][0])
	}
	// run solver function
	result, _ := solver(0, values, -1)
	return result
}

//solve is a dfs function to determinate score and cost for each path
func solver(index int, values []int, parent int) (score int64, cost int64) {
	for i := range path[index] {
		if path[index][i] == parent {
			continue
		}
		pathScore, pathCost := solver(path[index][i], values, index)
		// sum all score and cost for each path
		score += pathScore
		cost += pathCost
	}
	// if cost is 0 that mean the node is leaf return score = 0 and the values as the cost
	if cost == 0 {
		return 0, int64(values[index])
	}

	// check if the current root is less than minCost 
	if int64(values[index]) < cost{
		// if current value less than minCost then return root as minCost
		// and return maxScore = maxScore + minCost
		return score + cost, int64(values[index])
	}
	// else add the current node value to score
	return score + int64(values[index]), cost
}

```