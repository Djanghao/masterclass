# 95% || Recursion with 2 helper functions || C++

**Author:** jordarj
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/5540828/](https://leetcode.com/problems/two-sum-bsts/solutions/5540828/)

---

# Intuition
-->To find the sum, we need to check for the value in both trees
--> For one tree, we will need to check every single value
-->The other tree can make use of the BST property, choosing the left or right nodes as needed
-->To recursively search each tree, we need to make 2 seperate functions: One that searches every value, and the other that can use the BST property to search for the needed value in log(n) (assuming balanced).

# Approach
-->DFS for tree one will traverse the entire tree
-->For each node, we will use this value to search for a value in tree 2 that will reach the target, searching for target - value
--> If no solution is found using the current node, we call this function on each of the two children, returning true if either is true

-->DFS for tree two will complete the search in LogN time
-->This function already has the search value, so we can search the left tree if the current node is too high, or the right if the current node is too low.
-->If the current val is equal to the search, return true


# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(logn) average, o(n) worst
Space needed for recursive calls

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
    TreeNode* Tree2;
    int Target;
public:
    bool twoSumBSTs(TreeNode* root1, TreeNode* root2, int target) {
        Tree2 = root2;
        Target = target;
        return dfsTreeOne(root1);
    }
    
    bool dfsTreeOne(TreeNode* root){
        if(!root){
            return false;
        }
        //search the second BST for the val needed to reach the target using the current node
        if(dfsTreeTwo(Target - root->val, Tree2)){return true;}

        else{
            //search either of child nodes if the current node has no solutions
            return dfsTreeOne(root->left) || dfsTreeOne(root->right);
        }
    }

    bool dfsTreeTwo(int sum, TreeNode* root){
        if(!root){
            return false;
        }
        if(root->val == sum){
            return true;
        }
        //go right in the second BST if the sum is too small
        if(root->val < sum){
            return dfsTreeTwo(sum, root->right);
        }
        //go left in the second BST if the sum is too large
        else{
            return dfsTreeTwo(sum, root->left);
        }
    }
};
```