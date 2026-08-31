# Ruby simple as is

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2617446/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2617446/)

---

```
def preorder(root)
    res = []
    !root ? res : goin(root,res)
    res
end

def goin(root,res)
    res << root.val
    root.children.each { |child| goin(child,res)}
end
```