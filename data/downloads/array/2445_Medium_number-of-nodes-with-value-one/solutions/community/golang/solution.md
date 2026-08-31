# Go, dfs

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/4129832/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/4129832/)

---

# Code
```
func numberOfNodes(n int, queries []int) int {
    nodes := make([]int, n)
    for _, query := range queries {
        nodes[query-1]++
    }

    return countEventVals(nodes, 1, 0)
}


func countEventVals(nodes []int, idx int, fromParent int) int {
    if idx > len(nodes) {
        return 0
    }

    val := nodes[idx-1] + fromParent
    out := 0
    if val % 2 != 0 {
        out++
    }

    return out + countEventVals(nodes, idx*2, val) + countEventVals(nodes, idx*2+1,val)
}

```