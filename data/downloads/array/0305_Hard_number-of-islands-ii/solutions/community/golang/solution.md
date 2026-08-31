# Golang solution

**Author:** SergeyParamoshkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/3197660/](https://leetcode.com/problems/number-of-islands-ii/solutions/3197660/)

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
func numIslands2(m int, n int, positions [][]int) []int {
    var res []int
    parent := make([]int, m*n)
    rank := make([]int, m*n)
    count := 0
    
    for i := range parent {
        parent[i] = -1
        rank[i] = 1
    }
    
    dirs := [][]int{{1,0}, {-1,0}, {0,1}, {0,-1}}
    
    for _, pos := range positions {
        row, col := pos[0], pos[1]
        index := row*n + col
        
        if parent[index] != -1 {
            res = append(res, count)
            continue
        }
        
        parent[index] = index
        count++
        
        for _, dir := range dirs {
            newRow, newCol := row+dir[0], col+dir[1]
            newIndex := newRow*n + newCol
            
            if newRow < 0 || newRow >= m || newCol < 0 || newCol >= n || parent[newIndex] == -1 {
                continue
            }
            
            if union(index, newIndex, parent, rank) {
                count--
            }
        }
        res = append(res, count)
    }
    return res
}

func find(x int, parent []int) int {
    if parent[x] != x {
        parent[x] = find(parent[x], parent)
    }
    return parent[x]
}

func union(x int, y int, parent []int, rank []int) bool {
    px, py := find(x, parent), find(y, parent)
    if px == py {
        return false
    }
    if rank[px] < rank[py] {
        px, py = py, px
    }
    parent[py] = px
    rank[px] += rank[py]
    return true
}

```