# Swift DFS | 100%

**Author:** sadyojat
**Votes:** 5
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/1651778/](https://leetcode.com/problems/walls-and-gates/solutions/1651778/)

---

I used a top down approach to solving this. Instead of going from a position to a gate, this code traverses outwards from a gate. 

We cannot use a processed state like we normally do for graph problems here, because we do need the code to validate for each gate position, if there is a shorter distance. 

Start from a gate position, and span outwards by performing a dfs operation on each of its 4 directional neighbors. There is no need to process a wall or a gate, and that is done by the following guard statement
```
guard ![wall, gate].contains(rooms[i][j]) else {
	return
}
```

If a position has a smaller value than the incoming value, then there is no need to update it further and hence no furhter processing is required. This termination is performed using this guard statement

```
guard value < rooms[i][j] else {
	return
} 
```


```
class Solution {
    let gate = 0
    let wall = -1
    let emptyRoom = 2147483647
    
    func wallsAndGates(_ rooms: inout [[Int]]) {
        
        for i in 0..<rooms.count {
            for j in 0..<rooms[i].count where rooms[i][j] == gate {
                dfs(&rooms, i+1, j, gate+1)
                dfs(&rooms, i-1, j, gate+1)
                dfs(&rooms, i, j+1, gate+1)
                dfs(&rooms, i, j-1, gate+1)   
            }
        }        
    }
    
    func dfs(_ rooms: inout [[Int]], _ i: Int, _ j: Int, _ value: Int) {
        guard i >= 0, i < rooms.count, j >= 0, j < rooms[0].count else {
            return
        }
        guard ![wall, gate].contains(rooms[i][j]) else {
            return
        }
        guard value < rooms[i][j] else {
            return
        }        
        rooms[i][j] = value
        dfs(&rooms, i+1, j, value+1)
        dfs(&rooms, i-1, j, value+1)
        dfs(&rooms, i, j+1, value+1)
        dfs(&rooms, i, j-1, value+1)
    }
    
}
```