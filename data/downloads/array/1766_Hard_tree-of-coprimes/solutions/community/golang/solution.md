# Golang simple DFS. Only thing you need to recognize to solve is the constraint on nums[i].

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/5887981/](https://leetcode.com/problems/tree-of-coprimes/solutions/5887981/)

---

# Intuition
DFS from the root.Since nums[i] is at most 50, instead of trying to find all ancestors from the current node, just loop  a depth array of length.  

# Code
```golang []
func getCoprimes(nums []int, edges [][]int) []int {
	res := make([]int, len(nums))
	adj := make(map[int][]int)

	for _, v := range edges {
		adj[v[0]] = append(adj[v[0]], v[1])
		adj[v[1]] = append(adj[v[1]], v[0])
	}

	var dfs func(curr int, parent int, depth int, path [51][2]int)
	dfs = func(curr int, parent int, depth int, path [51][2]int) {
		closestCoprime := -1
		maxDepth := -1
		for i := 1; i <= 50; i++ {
			if path[i][0] != -1 && gcd(i, nums[curr]) == 1 {
				if path[i][1] > maxDepth {
					closestCoprime = path[i][0]
					maxDepth = path[i][1]
				}
			}
		}
		res[curr] = closestCoprime
		previous := path[nums[curr]]
		path[nums[curr]] = [2]int{curr, depth} 
		for _, v := range adj[curr] {
			if v != parent {
				dfs(v, curr, depth+1, path)
			}
		}

		path[nums[curr]] = previous
	}

	initialPath := [51][2]int{}
	for i := range initialPath {
		initialPath[i] = [2]int{-1, -1}
	}

	dfs(0, -1, 0, initialPath)

	return res
}

// Function to calculate GCD using Euclid's algorithm
func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}
```