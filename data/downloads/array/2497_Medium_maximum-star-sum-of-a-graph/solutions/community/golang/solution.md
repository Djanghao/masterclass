# GO | Beats 100%

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5375519/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5375519/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxStarSum(vals []int, edges [][]int, k int) int {
	adjList := make([][]int, len(vals))
	for _, edge := range edges {
		adjList[edge[0]] = append(adjList[edge[0]], edge[1])
		adjList[edge[1]] = append(adjList[edge[1]], edge[0])
	}
	maxSum := vals[0]
	for idx, list := range adjList {
		currentSum := vals[idx]
		neighbourValues := make([]int, 0)
		for _, neighbours := range list {
			neighbourValues = append(neighbourValues, vals[neighbours])
		}
		sort.Ints(neighbourValues)
		for idx := len(neighbourValues) - 1; idx >= 0; idx-- {
			if ((len(neighbourValues) - 1) - idx) == k {
				break
			}
			if (currentSum + neighbourValues[idx]) > currentSum {
				currentSum += neighbourValues[idx]
			}
		}
		if currentSum > maxSum {
			maxSum = currentSum
		}
	}
	return maxSum
}
```