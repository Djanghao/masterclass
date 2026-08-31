# Golang | sliding window like approach

**Author:** amanpatel6991
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/832047/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/832047/)

---

```
func minCost(s string, cost []int) int {
    
    size := len(s)
	i, j := 0, 1
	res := 0
	for j < size {
		if s[i] != s[j] {
			i++
			j++
			continue
		}
		// delete here
		for j < size && s[i] == s[j] {
			j++
		}
		// delete to remove duplicates such that we dont delete the maxcost element
		res += minCostHere(i, j, cost)
		i = j
		j++
	}

	fmt.Println("rs::", res)
    return res
}

func minCostHere(a, b int, cost []int) int {
	tot, max := 0, 0
	for a < b {
		tot += cost[a]
		if cost[a] > max {
			max = cost[a]
		}
		a++
	}
	return tot - max
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```