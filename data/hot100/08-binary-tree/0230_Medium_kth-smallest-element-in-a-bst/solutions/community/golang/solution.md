# Go Solution using channels

**Author:** phea
**Votes:** 26
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/816694/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/816694/)

---

I feel this is the cleanest solution. Simple inorder traversal and we loop(k-1) over the values being passed and then return the kth element.

```go
func walk(root *TreeNode, c chan int) {
	if root == nil {
		return
	}

	walk(root.Left, c)
	c <- root.Val
	walk(root.Right, c)
}

func kthSmallest(root *TreeNode, k int) int {
	c := make(chan int)
	go walk(root, c)

	for i := 0; i < k-1; i++ {
		<-c
	}
	return <-c
}
```