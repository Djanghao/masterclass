# Go - DFS + Backtracking

**Author:** unknown773
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3703637/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3703637/)

---

# Intuition
This seems like a decision-based problem. We have multiple ways to distribute cookies (decisions) and we need to find the one with the least unfairness.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
To solve this, we will use a method known as Depth-First Search (DFS) with Backtracking. This means we will try out all possible ways to distribute the cookies amongst the children and keep track of the minimum unfairness we come across.


1. We sort the bags of cookies in descending order. This allows us to start with the bags having more cookies first.
2. Next, we distribute the bags of cookies one by one to each child. For each bag, we have k options (where k is the number of children).
3. If the unfairness after giving a bag to a child is less than the current minimum unfairness, we proceed with this option. If not, we skip it.
4. We keep repeating this process until we've tried all possible distributions and found the one with the least unfairness.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nk))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func dfs(cookies []int, k int, index int, children []int, unfairness int) int {
	if index < 0 {
		return unfairness
	}
	minUnfairness := 1<<31 - 1
	for i := 0; i < k; i++ {
		if max(children[i]+cookies[index], unfairness) >= minUnfairness {
			continue
		}
		children[i] += cookies[index]
		minUnfairness = min(minUnfairness, dfs(cookies, k, index-1, children, max(children[i], unfairness)))
		children[i] -= cookies[index]
	}
	return minUnfairness
}

func distributeCookies(cookies []int, k int) int {
	sort.Slice(cookies, func(i, j int) bool {
		return cookies[i] > cookies[j]
	})
	children := make([]int, k)
	return dfs(cookies, k, len(cookies)-1, children, 0)
}


```