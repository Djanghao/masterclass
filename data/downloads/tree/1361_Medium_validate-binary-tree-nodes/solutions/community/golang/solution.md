# Golang | BFS

**Author:** anikin_aa
**Votes:** 2
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177396/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177396/)

---

# Intuition

We have to validate whether it is a binary tree or not, first thing first, need to find the root, and then we can start traversing from the root checking with visited nodes already.

# Approach

* Find root first. By iterating over all the left and right children mark them as visited. Return not visited node.
* If the root is found, great, proceed with traversal, otherwise return false.
* Start traversing in a BFS manner, getting left and right children from the input slices. Keep updating the visited map. If already visited, return false.
* At the end, check that all nodes were visited during BFS.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
func validateBinaryTreeNodes(n int, leftChild []int, rightChild []int) bool {
    root := getRoot(n, leftChild, rightChild)
    if root == -1 {return false}

    visited := map[int]bool{root: true}
    q := []int{root}

    for len(q) != 0 {
        cur := q[0]
        q = q[1:]

        nei := [2]int{
            leftChild[cur], rightChild[cur], 
        }

        for _, node := range nei {
            if node == -1 {continue}
            if _, ok := visited[node]; ok {return false}

            q = append(q, node)
            visited[node] = true
        }

    }

    return len(visited) == n
}


func getRoot(n int, left []int, right []int) int {
    seenMap := map[int]bool{}

    for _, node := range left {
        seenMap[node] = true
    }

    for _, node := range right {
        seenMap[node] = true
    }

    for i := 0; i < n; i++ {
        if !seenMap[i] {return i}
    }

    return -1
}
```