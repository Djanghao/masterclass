# C++ | O(n) | non-recursive | easy to understand

**Author:** saleemkhan086
**Votes:** 10
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/3117894/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/3117894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Two points to notice here:

1) In preorder traversal, parent is traversed before any node. Also lets say depth of the parent is d(p) and depth of the node is d(n).
2) During preorder traversal, if we are traversing any node at depth d(n), the last traversed node at depth d(p) will be the current node's parent.

So solutions goes like this:

Traverse the input string and keep track of last traversed nodes corresponding to depths.
We can calculate the depth of the current node by counting the '-' in the input string before the value. (lets call it d).
The current node's parent will be at depth d-1.
Assign the parent.


# Approach
<!-- Describe your approach to solving the problem. -->

A map(m) is used to store last traversed Node pointer at depth d;

Traverse the input string;
Calculate depth d of the current node;
Calculate value val of the current node;
Create node;
Get the parent of the node, which is the last processed node at depth d-1.
Assign to the left/right of the parent.
Mark the current node as last processed node at depth d. (ie. insert it into map at depth d).

return the node at depth d=0;

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
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
    bool isDigit(char c){
        return c>='0'&&c<='9';
    }
public:
    TreeNode* recoverFromPreorder(string traversal) {
        unordered_map<int,TreeNode*> m;
        
        int i = 0;
        while(i<traversal.size()){
            int d = 0;
            while(i<traversal.size() && traversal[i]=='-'){
                d++;
                i++;
            }
            string s = "";
            while(i<traversal.size() && isDigit(traversal[i])){
                s+= traversal[i];
                i++;
            }
            int val = stoi(s);
            TreeNode* node = new TreeNode(val);
            if(d>0){
                TreeNode* p = m[d-1];
                if(p->left==NULL){
                    p->left = node;
                }
                else{
                    p->right = node;
                }
            }
            m[d] = node;
        }
        
        return m[0];
    }
};
```