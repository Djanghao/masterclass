# [Golang] UnionFind

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/2602487/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/2602487/)

---

```
type Cell struct {
    Row int
    Col int
}

func matrixRankTransform(matrix [][]int) [][]int {
    m := len(matrix)
    n := len(matrix[0])
    valToIndex := make(map[int][]Cell)
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            val := matrix[i][j]
            valToIndex[val] = append(valToIndex[val], Cell{i, j})
        }
    }
    
    // Unique Values
    keys := make([]int, 0)
    for key := range valToIndex {
        keys = append(keys, key)
    }
    sort.Ints(keys)
    
    rank := make([]int, m+n)
    for _, key := range keys {
        parents := make(map[int]int)
        for _, cell := range valToIndex[key] {
            union(cell.Row, cell.Col+m, parents)
        }
        
        // Get all groups for same value
        // Even with same value, there might be multiple independent joined groups
        groups := make(map[int][]int)
        for pKey := range parents {
            parent := find(pKey, parents)
            groups[parent] = append(groups[parent] , pKey)
        }
        
        for _, group := range groups {
            maxRank := 0
            
            // Get current maxRank for row and col
            for _, mIdx := range group {
                maxRank = max(maxRank, rank[mIdx])
            }
            
            // Update rank of row/col to maxRank + 1
            for _, mIdx := range group {
                rank[mIdx] = maxRank + 1
            }
        }
        
        // Now update matrix back
        for _, cell := range valToIndex[key] {
            matrix[cell.Row][cell.Col] = rank[cell.Row]
            // matrix[cell.Row][cell.Col] = rank[cell.Col] // Both will be same
        }
    }
    
    return matrix
}

func union(idx1, idx2 int, parents map[int]int) {
    if _, ok := parents[idx1]; !ok {
        parents[idx1] = idx1
    }
    
    if _, ok := parents[idx2]; !ok {
        parents[idx2] = idx2
    }
    
    p1 := find(idx1, parents)
    p2 := find(idx2, parents)
    
    if p1 != p2 {
        parents[p2] = p1
    }
}

func find(idx int, parents map[int]int) int {
    if idx != parents[idx] {
        parents[idx] = find(parents[idx], parents)
    }
    return parents[idx]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```