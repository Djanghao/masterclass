# [GoLang] Disjoint Set, Time O(n), Space O(n)

**Author:** dkochetov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3340002/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3340002/)

---

# Approach
Use disjoint set data structure (https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843)

# Complexity
- Time complexity: $$O(N\u22C5a(N))$$ ~ $$O(N)$$
- Space complexity: $$O(N)$$

# Code
```
var parent []int
var rank []int

func countPairs(n int, edges [][]int) int64 {
    parent = make([]int, n)
    rank = make([]int, n)
    for i := range parent {
        parent[i] = i
        rank[i] = 1
    }
    for _, edge := range edges {
        union(edge[0], edge[1])
    }

    set := make([]int, n)
    for p := range parent {
        set[find(p)]++
    }

    var result int64 = 0
    sum := 0
    for _, size := range set {
        result += int64(size * sum)
        sum += size
    }

    return result
}

func find(x int) int {
    if parent[x] == x {
        return x
    }
    parent[x] = find(parent[x])
    return parent[x]
}

func union(x, y int) {
    rx, ry := find(x), find(y)
    if rx == ry {return}
    if rank[rx] > rank[ry] {
        parent[ry] = rx
    } else if rank[rx] < rank[ry] {
        parent[rx] = ry
    } else {
        parent[rx] = ry
        rank[ry]++
    }
}
```