# 🔥 Go Solution | Greedy | Beat 100% | With Explanation🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/5304758/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/5304758/)

---

# Intuition
Greedy with regret.

# Approach
Sort the `items` by profit in descending order and initially select the first `k` projects. Then, scan through the remaining `items` linearly and assess whether selecting `items[i]` can increase the value of `ans`. During the process, we need to deselect a previously selected item. The optimal strategy is to deselect the item from a category that contains more than one item, as this action will increase the count of `len(categories)` even though it may reduce the `totalProfit`.

# Complexity
- Time complexity: $$O(n\	ext{log}n)$$

- Space complexity: $$O(n)$$

# Code
```
func findMaximumElegance(items [][]int, k int) int64 {
	slices.SortFunc(items, func(a, b []int) int { return b[0] - a[0] })
	var totalProfit int
	visited := make(map[int]bool)
	var duplicate []int
	for _, item := range items[:k] {
		profit, category := item[0], item[1]
		totalProfit += profit
		if !visited[category] {
			visited[category] = true
		} else {
			duplicate = append(duplicate, profit)
		}
	}
	ans := totalProfit + len(visited)*len(visited)
	for _, item := range items[k:] {
		profit, category := item[0], item[1]
		if len(duplicate) > 0 && !visited[category] {
			visited[category] = true
			totalProfit += profit - duplicate[(len(duplicate)-1)]
			duplicate = duplicate[:(len(duplicate) - 1)]
		}
		ans = max(ans, totalProfit+len(visited)*len(visited))
	}
	return int64(ans)
}
```