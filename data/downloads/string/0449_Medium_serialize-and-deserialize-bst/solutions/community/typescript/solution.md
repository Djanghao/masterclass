# Pre-order Post-order serialization

**Author:** tal0012
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5496438/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5496438/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const preOrderArr: (number | null)[] = [];
    const postOrderArr: (number | null)[] = [];
    preOrder(root, preOrderArr);
    postOrder(root, postOrderArr);
    const res = [preOrderArr, postOrderArr];
    return JSON.stringify(res);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const [preOrderArr, postOrderArr] = JSON.parse(data);
    return constructFromPrePost(preOrderArr, postOrderArr);
}

function preOrder(root: TreeNode | null, res: (number | null)[]): void {
    if (!root) {
        res.push(null);
        return;
    }
    res.push(root.val);
    preOrder(root.left, res);
    preOrder(root.right, res);
}

function postOrder(root: TreeNode | null, res: (number | null)[]): void {
    if (!root) {
        res.push(null);
        return;
    }
    postOrder(root.left, res);
    postOrder(root.right, res);
    res.push(root.val);
}

function constructFromPrePost(preorder: (number | null)[], postorder: (number | null)[]): TreeNode | null {
    let preIndex = 0;
    let postIndex = 0;

    const helper = (): TreeNode | null => {
        if (preIndex >= preorder.length || postIndex >= postorder.length) {
            return null;
        }

        if (preorder[preIndex] === null) {
            preIndex++;
            return null;
        }

        const root = new TreeNode(preorder[preIndex]);
        preIndex++;

        if (root.val !== postorder[postIndex]) {
            root.left = helper();
        }

        if (root.val !== postorder[postIndex]) {
            root.right = helper();
        }

        postIndex++;
        return root;
    };

    return helper();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```