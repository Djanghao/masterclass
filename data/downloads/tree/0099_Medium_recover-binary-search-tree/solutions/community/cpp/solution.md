# [C++] Clear Solution (with Explanation)

**Author:** leetcodegrindtt
**Votes:** 75
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/423225/](https://leetcode.com/problems/recover-binary-search-tree/solutions/423225/)

---

In an inorder traversal, nodes should go from smallest to largest, if not we know there is an issue.
For instance, if we have nodes 10 11 1 6 7 20 27, the inorder traversal should be
1 6 7 10 11 20 27. If it is anything else, you know two numbers are swapped. For instance, you could have:
1 7 6 10 11 20 27 (SITUATION 1), where two nodes sie by side are swapped, or 1 6  20 10 11 7 27 (SITUATION 2), where two nodes somewhere in the tree are flipped. We need to maintain a pointer to four locations:

1. The previous node.  (prev)
2. The current node (root)
3. Our first flipped node (start)
4. Our second flipped node (end)

As we hit the first node in the inorder traversal, we mark it with prev (point prev to it). We then move onto the next node. This is when we want to start makiing the comparison. We then compare the previous node's value to the current node's value. So we'd compare 1 to 6. Since 6 is greater than 1, we continue. We compare 6 to 20. Since 20 is greater than 6, we continue. Then we get to 10, and 10 is less than 20, so we move our pointer to point to 20 as our first target. We set our second pointer (end) to the current node, since it may be the situation where the two flipped nodes are side by side (SITUATION 1). If that is NOT the case, our loop will be triggered again, and since our first pointer (start) is already occupied, our second pointer will now change to the second poorly placed node (SITUATION 2's 7)

```
class Solution {
private:
    
    void markTree(TreeNode* root, TreeNode*& prev, TreeNode*& first, TreeNode*& end) {
        if (!root) return;
        markTree(root->left, prev, first, end);
        if (prev) {
            if (root->val < prev->val) {
                if (!first) {
                    first = prev;
                }
                end = root;
            }
        }
        prev = root;
        markTree(root->right, prev, first, end);
    }
    
    
public:
    void recoverTree(TreeNode* root) {
        TreeNode *prev = nullptr, *first = nullptr, *end = nullptr;
        markTree(root, prev, first, end);
        swap(first->val, end->val);
        return;
    }
};