# Ruby - O(n)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/1788670/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/1788670/)

---

```
def subtree_with_all_deepest(root)
    fun(root).last   
end
def fun(root)
    return 0, nil unless root
    h1, lca1 = fun(root.left)
    h2, lca2 = fun(root.right)
    return h1+1, lca1 if h1>h2
    return h2+1, lca2 if h1<h2
    return h1+1, root
end
```