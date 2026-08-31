# javascript O(n)

**Author:** ethanneff
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/706389/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/706389/)

---

```
const getLonelyNodes = (root) => {
    let lonely = []
    let queue = [root]
    while (queue.length) {
        let node = queue.shift()
        if (node.left && !node.right) lonely.push(node.left.val)
        if (node.right && !node.left) lonely.push(node.right.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return lonely
};
```

```
const getLonelyNodes = (root) => {
    let lonely = []
    const dfs = root => {
        if (!root) return
        if (!root.left && root.right) lonely.push(root.right.val)
        if (!root.right && root.left) lonely.push(root.left.val)   
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return lonely
};
```