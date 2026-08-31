# C Simple Solution

**Author:** akibr5
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-bst/solutions/5231567/](https://leetcode.com/problems/split-bst/solutions/5231567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to modify nodes such that all the nodes less than or equal to target is in the left subtree and all the nodes greater than target is in the right subtree.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Since its a BST, we can utilize the BST properties to skip traversing all the nodes.
2. If the node->val <= target => All the nodes in the left subtree would also be less than target, so we can skip traversing the left subtree and traverse in the right subtree.
3. If the node->val > target => All the nodes in the right subtree would also be greater than target, so we can skip traversing the right subtree and traverse in the left subtree.
4. Once we reach NULL, we hit the base case and start modifying the nodes, we return both subtrees as NULL.
5. When we traverse bottom-up i.e. unwinding phase => If root->val <= target, we know that current node is the part of the left subtree of answer. But we may already have an answer in ret_val.left_subtree so that node becomes the right child of the current node and we modify the ret_val.left_subtree with current node.
6. When we traverse bottom-up i.e. unwinding phase => If root->val > target, we know that current node is the part of the right subtree of answer. But we may already have an answer in ret_val.right_subtree so that node becomes the left child of the current node and we modify the ret_val.right_subtree with current node.


# Complexity
- Time complexity: O(h)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
typedef struct
{
    struct TreeNode * left_subtree; //Contains root of subtree which has values less than or equal to target
    struct TreeNode * right_subtree; //Contains root of subtree which has values greater than target
}ret_node;

ret_node traversal(struct TreeNode * root, int target)
{
    ret_node ret_val;
    //Base Case
    if(root == NULL)
    {
        ret_val.left_subtree = NULL;
        ret_val.right_subtree = NULL;
        return ret_val;
    }
    else
    {
        //This means that left subtree values would always be less than target. So find the split point in the right subtree.
        if(root->val <= target)
        {
            ret_val = traversal(root->right, target);
            
            //Current node is a part of left subtree
            root->right = ret_val.left_subtree;
            ret_val.left_subtree = root;
        }
        else    //This means that right subtree values would always be greater than target. So find the split point in the left subtree.
        {
            ret_val = traversal(root->left, target);

            //Current Node is a part of right subtree
            root->left = ret_val.right_subtree;
            ret_val.right_subtree = root;
        }
    }
    return ret_val;
}

struct TreeNode** splitBST(struct TreeNode* root, int target, int* returnSize) 
{
    struct TreeNode ** ret_arr = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 2);

    ret_node ret_val = traversal(root, target);
    ret_arr[0] = ret_val.left_subtree;
    ret_arr[1] = ret_val.right_subtree;

    *returnSize = 2;
    return ret_arr;
}
```