# [C++] Simple recursive Zig-Zag solution

**Author:** Costello1329
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/6124175/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/6124175/)

---

# Intuition

# Approach
Let's encode the tree in zig-zag manner. First we append the children nodes to the left side, than to the right side and so on.

Example:

           1
         / | \\
        2  3  4
      / |  |  | \\
     5  6  7  8 10
              |
              9

          1
         /
        2
       / \\
      3   5
     / \\   \\
    4   7   6
     \\
      8
     / \\
    9  10

Keep your eyes on the `1-2-3-4`, `2-5-6`, `3-7`, `4-8-10` and `8-9` chains. In them, parent comes first followed by its children in the left-to-right order.

We eill use recursive approach in both `encode` and `decode` methods in order to achieve simplicity of our implementation.

# Complexity
- Time complexity:
Simple `O(n)` with recursion

- Space complexity:
`O(n)` as well because of the recursion stack

# Code
```cpp []
class Codec {
public:
    // Encodes an n-ary tree to a binary tree.
    TreeNode* encode(Node* const root, const bool direction = true) {
        if (!root) return nullptr;
        TreeNode* cur = new TreeNode(root->val);
        TreeNode* res = cur;
        TreeNode* TreeNode::*child = direction ? &TreeNode::left : &TreeNode::right;
        for (Node* c : root->children)
            cur = cur->*child = encode(c, !direction);
        return res;
    }
	
    // Decodes your binary tree to an n-ary tree.
    Node* decode(TreeNode* const root, const bool direction = true) {
        if (!root) return nullptr;
        else {
            Node* res = new Node(root->val);
            TreeNode* TreeNode::*child = direction ? &TreeNode::left : &TreeNode::right;
            for (TreeNode* cur = root->*child; cur != nullptr; cur = cur->*child)
                res->children.push_back(decode(cur, !direction));
            return res;
        }
    }
};
```