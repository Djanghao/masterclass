# move coins to parent DFS||0ms beats 100%

**Author:** anwendeng
**Votes:** 76
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172544/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172544/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use DFS (post-order) to distribute coins.

The coding is easy, but thinking is not.

Later try other approaches; an iterative post-order version is made.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn English subtitles if necessary]
[https://youtu.be/bna7aw7dkPY?si=0y4GgMQOTWkA9yDr](https://youtu.be/bna7aw7dkPY?si=0y4GgMQOTWkA9yDr)
1. The idea is that the child give x=(y-1) coins to parent, if he has y  coins. (if y=0=> x=-1 then parent should give the child 1 coin)
2. Add an extra parameter `TreeNode* parent= NULL` instead of a helper function.
3. The number of moves comes from its left & right subtrees &
4. When x>0 is to give, when x<0 is to obtain. So moves+=abs(x)

# Why not Pre-Order? Why Post-order?
As the root of a subtree, it's unkown how many descendants it has before performing any kind of transversal. The thinking of parent-gives-coins-to-children will not work.

Use post-order transverals, because every node has a parent except for the root. It works that children give coins to parents.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code ||C++ 0ms beats 100%
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
        static int distributeCoins(TreeNode* root, TreeNode* parent= NULL) {
        if (!root) return 0;
        int  moves=distributeCoins(root->left, root)+distributeCoins(root->right, root);
        int x=root->val-1;// give x coins to parent node
        if (parent) parent->val += x; // now parent's coins
        moves+=abs(x);
        return moves;
    }
};


auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# Python code in video
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        #move coins to parent DFS
        def f(root, parent):
            if root==None: return 0
            moves=f(root.left, root)+f(root.right, root)
            x=root.val-1
            if parent!=None: parent.val+=x
            moves+=abs(x)
            return moves
        return f(root, None)
```
# C++ iterative Version using vector as stack

The similar method is appiled to solve [Leetcode 1325. Delete Leaves With a Given Value](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5167828/recursive-iterative-postorder-no-memory-leaking6ms-beats-9366/)

Using `vector<pair<tuple<TreeNode*, TreeNode*, bool>>> stack` as the stack which contains the info about `(Node, parent, visited)`

As long as the node on top of the `stack` is not visited. Mark this node as visited & repush it onto the stack, & push its children nodes with `visited=0` onto the stack.

When the node is visited, proceed the same in the recursive version:
```
int x=root->val-1;// give x coins to parent node
if (parent) parent->val += x; // now parent's coins
moves+=abs(x);
```
# C++ iteration
```
class Solution {
public:
    using node2 = tuple<TreeNode*, TreeNode*, bool>; // Node, parent & visited flag
    static int distributeCoins(TreeNode* root) {
        if (!root) return 0;
        vector<node2> stack = {{root, NULL, 0}};
        int moves=0;
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
                int x=node->val-1;// give x coins to parent node
                if (parent) parent->val += x; // now parent's coins
                moves+=abs(x);
            }
        }

        return moves;
    }
};

```