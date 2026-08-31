# My amazing solution (can be optimized by taking into consideration sorted arrays)

**Author:** Kirill_JSDEV
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4300296/](https://leetcode.com/problems/two-sum-bsts/solutions/4300296/)

---

```
var twoSumBSTs = function(root1, root2, target) {

    const arr1 = []
    const arr2 = []

    function dfs(node, arr) {
        if (!node) return

        if (node.left) dfs(node.left, arr)
        arr.push(node.val)
        if (node.right) dfs(node.right, arr)
    }

    dfs(root1, arr1)
    dfs(root2, arr2)
    for (const item of arr1) {

        if (arr2.includes(target - item)) {
            return true
        } 
    }

    return false
    
}
```