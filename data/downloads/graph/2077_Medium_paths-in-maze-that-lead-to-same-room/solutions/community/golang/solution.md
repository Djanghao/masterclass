# Working Solution in Go

**Author:** b0undl3ss
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/5285657/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/5285657/)

---

# Approach
Since we know that the length of a cycle needs to be 3, we can use this to our advantage by populating an adjacency matrix and using it to check whether or not 2 nodes have a path to the same neighbor. 

# Complexity
- Time complexity: $$O(n*m)$$

- Space complexity: $$O(n^2)$$

# Code
```
func numberOfPaths(n int, corridors [][]int) int {
    // create nabes adjency matrix 
    nabes := map[int]map[int]bool{}
    cycles := 0

    // loop through each edge in the graph
    for _, corridor := range corridors {
        // room1 = src node
        // room2 = dest node
        room1, room2 := corridor[0], corridor[1]

        // populate empty map for room1 if not already populated
        if _, ok := nabes[room1]; !ok {
            nabes[room1] = map[int]bool{}
        }

        // populate empty map for room2 if not already populated
        if _, ok := nabes[room2]; !ok {
            nabes[room2] = map[int]bool{}
        }

        // populate the matrix to indicate an edge in both directions
        nabes[room1][room2] = true
        nabes[room2][room1] = true

        // increase cycles by the number of intersections
        cycles += intersections(nabes[room1], nabes[room2])
    }
    return cycles
}

func intersections(room1, room2 map[int]bool) int {
    count := 0
    for path := range room1 {
        if _, ok := room2[path]; ok {
            count++
        }
    }
    return count
}
```