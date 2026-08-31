# Golang 233 ms 21.2 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2815052/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2815052/)

---

```
func max(a, b int) int {
	if a >= b {
		return a
	}
	return b
}

func fillParents(parentToChildren [][]int32, parents []int32, idx int32) {
	for _, childIdx := range parentToChildren[idx] {
		if parents[childIdx] == -1 {
			parents[childIdx] = idx
			fillParents(parentToChildren, parents, childIdx)
		}
	}
}

func mostProfitablePath(edges [][]int, bob int, amount []int) int {
	parentToChildren := make([][]int32, len(amount))
	for _, edge := range edges {
		parentToChildren[edge[0]] = append(parentToChildren[edge[0]], int32(edge[1]))
		parentToChildren[edge[1]] = append(parentToChildren[edge[1]], int32(edge[0]))
	}
	parents := make([]int32, len(amount))
	parents[0] = -2
	for i := 1; i < len(amount); i++ {
		parents[i] = -1
	}
	fillParents(parentToChildren, parents, 0)

	slow, fast := int32(bob), parents[bob]
	for fast != 0 && parents[fast] != 0 {
		amount[slow] = 0
		slow = parents[slow]
		fast = parents[parents[fast]]
	}
	amount[slow] = 0
	if fast != 0 {
		amount[parents[slow]] >>= 1
	}

	result := math.MinInt
	cur := []int32{0}
	var next []int32
	for len(cur) != 0 {
		for _, parent := range cur {
			leaf := true
			for _, child := range parentToChildren[parent] {
				if parents[child] != parent {
					continue
				}
				leaf = false
				amount[child] += amount[parent]
				next = append(next, child)
			}
			if leaf {
				result = max(result, amount[parent])
			}
		}
		cur, next = next, cur[:0]
	}
	return result
}
```