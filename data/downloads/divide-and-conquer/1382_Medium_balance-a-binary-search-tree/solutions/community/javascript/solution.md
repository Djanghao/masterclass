# JavaScript Simple Solution Using Tree Reconstruction

**Author:** control_the_narrative
**Votes:** 14
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/621291/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/621291/)

---

Steps:
1. Use inorder traversal to create a sorted array
2. Construct a balance tree using the sorted array
```javascript
var balanceBST = function(root) {
    function inOrder(myRoot) {
        if(!myRoot) return [];
        return [...inOrder(myRoot.left), myRoot.val, ...inOrder(myRoot.right)]
    }
    const sortedArr = inOrder(root)
    
    function constructTree(arr) {
        if(!arr.length) return null;
        
        const mid = Math.floor(arr.length / 2);
        const node = new TreeNode(arr[mid])
        node.left = constructTree(arr.slice(0, mid));
        node.right = constructTree(arr.slice(mid+1));
        
        return node;
    }
    return constructTree(sortedArr);
};
```