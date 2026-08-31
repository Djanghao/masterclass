# Simple [JS, TS] Solution with inline explanation

**Author:** rumakesh
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/4688583/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/4688583/)

---

# Code
```typescript []
function averageOfLevels(root: TreeNode | null): number[] {
    // BFS traversal
    if(!root) return [];
    let resAverages = new Array<number>();
    let queue = new Array<TreeNode>(); // required for tree traversal
    queue.push(root);

    while(queue.length) {
        const next = []; // keeps track of nodes from each level
        let sum: number = 0;
        // iterate nodes from each level
        for(const node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        // sum of nodes divided by no. of non-null nodes present in each level
        const avg = sum / queue.length;
        resAverages.push(avg);
        // queue has nodes from the next level
        queue = next;
    }
    return resAverages;
};
```
```javascript []
function averageOfLevels(root) {
    // BFS traversal
    if(!root) return [];
    let resAverages = new Array();
    let queue = new Array(); // required for tree traversal
    queue.push(root);

    while(queue.length) {
        const next = []; // keeps track of nodes from each level
        let sum = 0;
        // iterate nodes from each level
        for(const node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        // sum of nodes divided by no. of non-null nodes present in each level
        const avg = sum / queue.length;
        resAverages.push(avg);
        // queue has nodes from the next level
        queue = next;
    }
    return resAverages;
};
```

###### Please upvote if you find the solution helpful. Thanks.