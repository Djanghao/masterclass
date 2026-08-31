# Recursive and Iterative | Faster than 96% | Easy to understand | Python

**Author:** Mrmagician
**Votes:** 48
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/544466/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/544466/)

---

### Recursive approach
```
def recursive(self, root, val):
        def rec(root):
            if root:
                if root.val == val: return root
                elif root.val < val: return rec(root.right)
                return rec(root.left)
        
        return rec(root)
```

### Iterative approach
```
def iterative(self, root, val):
        temp = root
        while temp:
            if temp.val == val: return temp
            elif temp.val < val: temp = temp.right
            else: temp = temp.left
        return None
```

**I hope that you've found them useful.**
*In that case, please do upvote. It motivates me to write more such posts*