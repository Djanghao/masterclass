# Typescript/javascript dfs recursive clean

**Author:** daee
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2512729/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/2512729/)

---

```
function longestConsecutive(root: TreeNode | null): number {
    let maxConsecutive = 0;
    
    const dfs = (node: TreeNode | null, prevValue: number, count: number): void => {
        if(count > maxConsecutive) maxConsecutive = count;
        
        if(!node) return;
        
        dfs(node.left, node.val, node.val === prevValue + 1 ? count + 1 : 1);
        dfs(node.right, node.val, node.val === prevValue + 1 ? count + 1 : 1);
    }
    
    if(root) dfs(root, root.val - 1, 0);
    
    return maxConsecutive;
};
```