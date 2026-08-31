# Javascript | ES6

**Author:** ryuker
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/2140353/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/2140353/)

---

```javascript
const findRoot = tree => {
    const set = new Set()
    
    for (const node of tree) {
        for (const child of node.children) {
            set.add(child.val)
        }
    }
    
    let root = null
    
    for (const node of tree) {
        if (!set.has(node.val)) root = node
    }
    
    return root
}
```