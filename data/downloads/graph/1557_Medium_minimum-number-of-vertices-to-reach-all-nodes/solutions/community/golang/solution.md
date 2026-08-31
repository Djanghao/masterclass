# Keep It Simple | GoLang | Python 🔥🔥

**Author:** codeart7
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3538908/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3538908/)

---

# Code
```Go []
func findSmallestSetOfVertices(n int, edges [][]int) []int {
    visited := make([]bool, n)

	for _, edge := range edges {
		visited[edge[1]] = true
	}

	var ans []int
	for vertex := 0; vertex < n; vertex++ {
		if !visited[vertex] {
			ans = append(ans, vertex)
		}
	}

	return ans
}
```
```Python []
class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        visited = [False] * n

        for edge in edges:
            visited[edge[1]] = True

        ans = []
        for vertex in range(n):
            if visited[vertex] == False:
                ans.append(vertex)

        return ans
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N + E)$$
where N is number of vertices and E is the number of edges.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(N)$$
where N is space required to store bool array of size N.

