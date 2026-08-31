# Golang | Union Find

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/3055173/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/3055173/)

---

# Code
```
func unionSet(u, v int, parent []int) {
    var parentU int = find(u, parent)
    var parentV int = find(v, parent)
    if parentU <= parentV {
        parent[parentV] = parent[u]
    } else {
        parent[parentU] = parent[v]
    }  
}
func find(u int, parent []int) int {
    if parent[u] == u {
        return u
    }
    parent[u] = find(parent[u], parent)
    return parent[u]
}

func friendRequests(n int, restrictions [][]int, requests [][]int) []bool {
    parent := make([]int, n)
    for i:= 0; i < len(parent); i++ {
        parent[i] = i
    }
    ans := []bool{}
    for _, request := range requests {
        var valid bool = true
        var x int = find(request[0], parent)
        var y int = find(request[1], parent)
        if x != y {
            for _, banned := range restrictions {
                var u int = find(banned[0], parent)
                var v int = find(banned[1], parent)
                if (u == x && v == y) || (u == y && v == x) {
                    valid = false
                    break
                } 
            }
        }
        ans = append(ans, valid)
        if valid {
            unionSet(request[0],request[1], parent)
        }
    }
    return ans
}
```