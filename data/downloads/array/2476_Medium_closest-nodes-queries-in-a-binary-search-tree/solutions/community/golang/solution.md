# Binary search each query. GoLang solution !!!

**Author:** dipak__patil
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2832468/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2832468/)

---

```
func closestNodes(root *TreeNode, queries []int) [][]int {
    res := [][]int{}
    for _ , n := range queries {
        curr := []int{-1,-1}
        traverseTree(root, n, &curr)
        res = append(res, curr)
    }
    return res
}

func traverseTree(root *TreeNode, n int, r *[]int) {
    if root != nil {
        if root.Val < n {
            (*r)[0]=root.Val
            traverseTree(root.Right, n, r)
        } else if root.Val > n {
            (*r)[1]=root.Val
            traverseTree(root.Left, n, r)
        } else {
            (*r)[0]=n
            (*r)[1]=n
        }
    }
}
```