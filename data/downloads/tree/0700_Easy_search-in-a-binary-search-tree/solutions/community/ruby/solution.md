# Ruby recursion solution - 100%

**Author:** DmytroVasin
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/296534/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/296534/)

---


```
def search_bst(root, val)
    return nil if root.nil?
    
    return root if root.val == val
    return search_bst(root.right, val) if root.val < val

    search_bst(root.left, val)
end
```