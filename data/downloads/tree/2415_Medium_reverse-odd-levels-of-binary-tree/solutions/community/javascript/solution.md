# JavaScript ✅ BFS | Queue | TC O(n) | SC O(w)

**Author:** ThakurBallary
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/2590203/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/2590203/)

---

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        const next = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }
        
        if (level % 2) {
            for (let i = 0, j = queue.length - 1; i < j; i++, j--) {
                const temp = queue[i].val;
                queue[i].val = queue[j].val;
                queue[j].val = temp;
            }
        }
        
        queue = next;
        level++;
    }
    
    return root;
};
```