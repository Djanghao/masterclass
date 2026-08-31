# 💥 Runtime and memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/5742078/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/5742078/)

---

# Intuition

Encoding: Convert N-ary tree nodes to binary tree nodes with the first child as the left child and siblings as right children.

Decoding: Convert binary tree nodes back to N-ary nodes, using left for the first child and right for siblings.

# Approach
Encoding: Recursively map N-ary nodes to binary nodes.

Decoding: Recursively map binary nodes back to N-ary nodes.

# Complexity
- Time complexity:
O(n) \u2014 each node is processed once.

- Space complexity:
 O(h) \u2014 recursion depth is the tree height.

# Code
```typescript []
class NaryTreeNode {
    val: number;
    children: NaryTreeNode[];

    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}

class BinaryTreeNode {
    val: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(val?: number, left?: BinaryTreeNode | null, right?: BinaryTreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class Codec {
    // Serialize an N-ary tree to a binary tree
    encode(root: NaryTreeNode | null): BinaryTreeNode | null {
        if (!root) return null;

        const binaryRoot = new BinaryTreeNode(root.val);
        if (root.children.length === 0) return binaryRoot;

        binaryRoot.left = this.encode(root.children[0]);

        let current = binaryRoot.left;
        for (let i = 1; i < root.children.length; i++) {
            current!.right = this.encode(root.children[i]);
            current = current!.right;
        }

        return binaryRoot;
    }

    // Deserialize a binary tree back to an N-ary tree
    decode(root: BinaryTreeNode | null): NaryTreeNode | null {
        if (!root) return null;

        const naryRoot = new NaryTreeNode(root.val);
        let current = root.left;

        while (current) {
            naryRoot.children.push(this.decode(current));
            current = current.right;
        }

        return naryRoot;
    }

    // Additional serialize and deserialize methods for testability
    serialize(root: NaryTreeNode | null): string {
        const binaryRoot = this.encode(root);
        return JSON.stringify(binaryRoot);
    }

    deserialize(data: string): NaryTreeNode | null {
        const binaryRoot: BinaryTreeNode | null = JSON.parse(data);
        return this.decode(binaryRoot);
    }
}



```