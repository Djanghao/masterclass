# recursive & iterative Postorder No memory leaking||6ms Beats 93.66%

**Author:** anwendeng
**Votes:** 36
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5167828/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5167828/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It's again a question on binary tree.
Use recursive DFS(post-order) to solve.

Later try other approach. an iterative version is done which is much more complex than recursive one.

Thanks to @Dhruv__parmar mentioning the problem for memory leakages, the presenting codes are remade to deal with the problem for memory leakages.
# Approach
<!-- Describe your approach to solving the problem. -->
The leaf node with value=target should be removed.
But after removing such leaf node, its parent node may become a leaf node with value=target.
Post-order transverse can do such job in 1 pass, & no need to construct a new tree.

To solve the memory leak problem, the C++ solution adds an extra parameter `parent=NULL` instead of using a helper function, while the C code does not require such an extra parameter.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ for stack
# Code without memory leaks|| C++ 6ms Beats 93.66% ||C code 4ms Beats 91.67%
```C++ []
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    static TreeNode* removeLeafNodes(TreeNode* root, int target, TreeNode* parent=NULL) {
        if (!root) return NULL;

        // Recursively remove leaf nodes from left and right subtrees
        root->left = removeLeafNodes(root->left, target, root);
        root->right = removeLeafNodes(root->right, target, root);

        // If current node is a leaf(not root) and its value==target, delete it
        if (!root->left && !root->right && root->val==target) {
            if (parent)  delete root; //the root cannot be deleted
            return NULL;
        }

        return root;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();

```
```C []
#pragma GCC optimize("O3", "unroll-loops")
struct TreeNode* removeLeafNodes(struct TreeNode* root, int target) {
    if (!root) return NULL;
    root->left = removeLeafNodes(root->left, target);
    root->right = removeLeafNodes(root->right, target);
    if (root->left==root->right && root->val==target) {//quick trick for leaf
        free(root);
        return NULL;
    }
    return root;
}
```
```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:
        def postorder(root, target):
            if root==None: return None
            
            root.left=postorder(root.left, target)
            root.right=postorder(root.right, target)

            if root.left==root.right and root.val==target:
                return None
            return root
            
        return postorder(root, target)
        
```
# C++ using iterative version
Using `vector<pair<tuple<TreeNode*, TreeNode*, bool>>> stack` as the stack which contains the info about `(Node, parent, visited)`

As long as the node on top of the `stack` is not visited. Mark this node as visited & repush it onto the stack, & push its children nodes with `visited=0` onto the stack.

When the node is visited, it should be checked whether it is a leaf &  `value==target`; if yes, dealing with its parent & remove it from the tree.

Let's see how the stack behaves (output`(node->val, visited)`) for testcase=`[1,2,2,3,null,null,3,4,null,null,4,5,null,null,5,5,null,null,5,5,null,null,5,5,null,null,5] 5`
```
(1,0)
(1,1)(2,0)(2,0)
(1,1)(2,0)(2,1)(3,0)
(1,1)(2,0)(2,1)(3,1)(4,0)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,0)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,0)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,1)(5,0)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)(5,0)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)(5,1)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)(5,1)
(1,1)(2,0)(2,1)(3,1)(4,1)(5,1)
(1,1)(2,0)(2,1)(3,1)(4,1)
(1,1)(2,0)(2,1)(3,1)
(1,1)(2,0)(2,1)
(1,1)(2,0)
(1,1)(2,1)(3,0)
(1,1)(2,1)(3,1)(4,0)
(1,1)(2,1)(3,1)(4,1)(5,0)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,0)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,1)(5,0)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)(5,0)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)(5,1)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,1)(5,1)
(1,1)(2,1)(3,1)(4,1)(5,1)(5,1)
(1,1)(2,1)(3,1)(4,1)(5,1)
(1,1)(2,1)(3,1)(4,1)
(1,1)(2,1)(3,1)
(1,1)(2,1)
(1,1)
```
This iterative version is not efficent, each node is visited twice, but easy for implementation; some improvement may be made.
# Interative Post-order Code||7ms 
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    using node2 = tuple<TreeNode*, TreeNode*, bool>; // Node, parent & visited flag
    TreeNode* removeLeafNodes(TreeNode* root, int target) {
        vector<node2> stack = {{root, NULL, 0}};

        while (!stack.empty()) {
            auto [node, parent, visited] = stack.back();
            stack.pop_back();

            if (!visited) {
                // Mark the node as visited & repush
                stack.emplace_back(node, parent, 1);

                // Push right and left children onto the stack
                if (node->right) 
                    stack.emplace_back(node->right, node, 0);
                if (node->left) 
                    stack.emplace_back(node->left, node, 0);
            } 
            else {
                // node is a leaf and its value==target, remove it
                if (!node->left && !node->right && node->val==target) {
                    if (parent) {
                        if (parent->left == node) 
                            parent->left = NULL;
                        else if (parent->right == node) 
                            parent->right = NULL; 
                        delete node; //no memory leaking 
                    }
                    else 
                        root=NULL;//no parent must be root, cannot be deleted
                }
            }
        }

        return root;
    }
};

```