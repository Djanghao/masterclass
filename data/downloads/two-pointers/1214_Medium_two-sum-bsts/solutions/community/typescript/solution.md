# PreOrder Traversal

**Author:** bajinatu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4134092/](https://leetcode.com/problems/two-sum-bsts/solutions/4134092/)

---

# Intuition
The approach leverages on the preorder traversal technique to move across each node in the tree and storing each node value in a hash set and then leveraging a two pointer approach in finding the sum

# Approach
- Traverse the first tree and store value in an hash set
- Traverse the second tree and store value in an hash set
- loop through the first hash set and find if the complement of this value (target - val) exists in the second hash set
- If it occurs return true else return false
- 
# Complexity
- Time complexity:
O(m + n)

- Space complexity:
O(m + n)

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function twoSumBSTs(root1: TreeNode | null, root2: TreeNode | null, target: number): boolean {

    const nodeList1:Set<number> = new Set();
    const nodeList2:Set<number> = new Set();

    function preOrder(root: TreeNode | null,list:Set<number>) {
        if(root !== null) {
            list.add(root.val);
            preOrder(root.left,list);
            preOrder(root.right,list);
        }
    }

    preOrder(root1,nodeList1);
    preOrder(root2,nodeList2);

    let result = false;

    nodeList1.forEach(val => {
        if(nodeList2.has(target - val)) {
            result = true;
        }
        })

    return result;
};
```