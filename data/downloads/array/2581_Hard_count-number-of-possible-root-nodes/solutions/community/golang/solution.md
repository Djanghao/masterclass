# Golang solution

**Author:** sabeniacar
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3257412/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3257412/)

---

# Approach
Let's fix the root to 0. First find how many guesses are correct when the root is fixed to 0. This will be our initial correct guesses count. 
After that we need to traverse the tree again, while we traverse the tree second time, we consider every node for a possible root. If the tree was 0->1->2, when we are at 1 notice that the edge between parent(0) and child(1) needs to be reversed for 1 to be the root. We had the initial count of correct guesses, if the edge 0->1 was a correct guess we have to decrease the correct guess count by 1 and if the reverse edge is in the guesses we need to increment correct guess count by 1 and compare it with k to check if the node can be a root. Used two variables count,reverse to make this more intuitive.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
var res int
func rootCount(edges [][]int, guesses [][]int, k int) int {
    res = 0
    adjList := make([][]int, len(edges)+1)
    // Make the adjancency list
    for _, edge := range edges {
        adjList[edge[0]] = append(adjList[edge[0]], edge[1])
        adjList[edge[1]] = append(adjList[edge[1]], edge[0])
    }
    
    visited := map[int]bool{0 : true}
    guessSet := make(map[pair]bool)
    // Add the guesses to the guess set
    for _, guess := range guesses {
        guessSet[pair{first: guess[0], second: guess[1]}] = true
    }
    
    // Assume 0 is the root, find how many guesses are correct.
    count := findCount(0, adjList, visited, guessSet)
    visited = map[int]bool{0 : true}
    // Starting from 0 traverse the tree and check if the guess for reverted edge exists.
    traverse(0, count, 0, k, adjList, visited, guessSet)
    return res
}

func findCount(node int, adjList [][]int, visited map[int]bool, guesses map[pair]bool) int {
    var count int
    for _, nei := range adjList[node] {
        if !visited[nei] {
            visited[nei] = true
            if guesses[pair{first: node, second: nei}] {
                count++
            }
            count += findCount(nei, adjList, visited, guesses)
        }
    }
    return count
}

func traverse(node, count, reverse, k int, adjList [][]int, visited map[int]bool, guesses map[pair]bool) {
    for _, nei := range adjList[node] {
        if !visited[nei] {
            visited[nei] = true
            rev, c := reverse, count
            if guesses[pair{first: nei, second: node}] {
                rev++
            }
            if guesses[pair{first: node, second: nei}] {
                c--
            }
            traverse(nei, c, rev, k, adjList, visited, guesses)
        }
    }
    if count + reverse >= k {
        res++
    }
}

type pair struct {
    first int
    second int
}
```