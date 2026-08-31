# Go | GPT-4 Solution

**Author:** ninehills
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3510485/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3510485/)

---



# Intuition
The problem requires finding the length of the cycle between two nodes in a binary tree. To calculate the cycle length, we first need to find the Lowest Common Ancestor (LCA) of the two nodes. Once we have the LCA, we can calculate the distance of each node to the LCA and add the contribution of the edge connecting the LCA to its parent to get the cycle length.

# Approach
The approach first involves finding the LCA of the two nodes, which can be done using a simple while loop that repeatedly divides the larger node by two until both nodes are the same or share a common ancestor. Once we have the LCA, we calculate the cycle length as the sum of the distances of each node to the LCA and add the edge's contribution to the cycle length.

We iterate through each query in the input array, calculate the cycle length for each query, and store it in an array of answers. Finally, we return the array of answers.

# Complexity
- Time complexity: 
  - The time complexity of finding the LCA of two nodes is O(log n) because we are dividing the larger node by two at each step until both nodes share a common ancestor or are the same node.
  - We have m queries to process, so the overall time complexity of the algorithm is O(m log n).
  
- Space complexity:
  - We are only storing the answers to each query in an array of size m, so the space complexity of the algorithm is O(m).

# Code
```
// Function to find the lowest common ancestor of two nodes in a binary tree
func findLCA(a, b int) int {
    for a != b {
        if a > b {
            a /= 2
        } else {
            b /= 2
        }
    }
    return a
}

func cycleLengthQueries(n int, queries [][]int) []int {
    m := len(queries)
    answer := make([]int, m)

    for i, query := range queries {
        a, b := query[0], query[1]
        lca := findLCA(a, b)

        // Calculate the length of the cycle as the sum of the distances from a and b to their LCA, plus 1
        cycleLength := 0
        for a != lca {
            a /= 2
            cycleLength++
        }
        for b != lca {
            b /= 2
            cycleLength++
        }
        cycleLength++ // Add the edge's contribution to the cycle length

        answer[i] = cycleLength
    }

    return answer
}
```