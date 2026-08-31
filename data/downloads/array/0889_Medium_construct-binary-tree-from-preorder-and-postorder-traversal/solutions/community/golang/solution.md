# Go 0ms recursive solution

**Author:** mdfaizan7
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/640386/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/640386/)

---

```
func constructFromPrePost(pre []int, post []int) *TreeNode {
    if len(pre) == 0 {
        return nil
    }
    root := &TreeNode{Val: pre[0]}
    if len(pre) == 1 {
        return root
    }
    
    L := indexOf(pre[1], post) + 1   

    root.Left = constructFromPrePost(pre[1:L+1], post[:L])
    root.Right = constructFromPrePost(pre[L+1:], post[L:])
    
    return root
}

func indexOf(element int, data []int) (int) {
   for k, v := range data {
       if element == v {
           return k
       }
   }
   return -1    
}
```