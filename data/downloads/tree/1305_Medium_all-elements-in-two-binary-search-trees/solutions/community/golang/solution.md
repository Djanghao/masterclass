# Golang: Concurrency soltuion O(N + M) time / O(N + M) space

**Author:** dblokhin
**Votes:** 5
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/1720322/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/1720322/)

---

```
func getAllElements(root1 *TreeNode, root2 *TreeNode) []int {
    // concurrent solution time O(n + m) space/time
    ch1, ch2 := make(chan int), make(chan int)
    
    go func() {
        trav(root1, ch1)
        close(ch1)
    }()
    go func() {
        trav(root2, ch2)
        close(ch2)
    }()
    
    result := make([]int, 0)
    cand1, ok1 := <- ch1
    cand2, ok2 := <- ch2
    
	// build result and update candidates until both channels are closed
    for ok1 || ok2 {
        if (ok1 && ok2 && cand1 <= cand2) || !ok2 {
            result = append(result, cand1)
            cand1, ok1 = <- ch1
        } else {
            result = append(result, cand2)
            cand2, ok2 = <- ch2
        }
    }
    
    return result
}

// Inorder traverse and push values into channel
func trav(root *TreeNode, ch chan int) {
    if root == nil {
        return
    }
    trav(root.Left, ch)
    ch <- root.Val
    trav(root.Right, ch)
}
```