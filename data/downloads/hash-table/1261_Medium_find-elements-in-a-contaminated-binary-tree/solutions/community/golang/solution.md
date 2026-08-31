# Go with map

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/2290791/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/2290791/)

---

```
type FindElements struct {
    m map[int]struct{}
}

func Constructor(root *TreeNode) FindElements {
    m := make(map[int]struct{})
    
    var recoverTree func(*TreeNode, int)
    recoverTree = func(root *TreeNode, val int)  {
        if root == nil {
            return
        }
        
        m[val] = struct{}{}
        
        recoverTree(root.Left, 2*val+1)
        recoverTree(root.Right, 2*val+2)
    }
    
    recoverTree(root, 0)
    
    return FindElements {
        m: m,
    }
}


func (this *FindElements) Find(target int) bool {
    if _, ok := this.m[target]; ok {
        return true
    }
    
    return false
}

```