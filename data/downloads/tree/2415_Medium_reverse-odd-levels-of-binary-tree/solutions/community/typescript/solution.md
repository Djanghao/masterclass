# Simple Solution || BFS || TC = O(n) || SC = O(n) ✔

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3043601/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3043601/)

---

# Code
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
    if(!root) return root;

    let level = 0;
    let queue = [root];

    while(queue.length){
        let size = queue.length;
        if(level % 2 !== 0) {
            for(let i = 0; i < size/2; i++) {
                let left = queue[i];
                let right = queue[size-1-i];

                let temp = left.val;
                left.val = right.val;
                right.val = temp;
            }
        }
        level++;
        for(let i = 0; i < size; i++) {
            let curr = queue.shift();
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }

    return root;
};

```