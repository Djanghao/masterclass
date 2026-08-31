# Simple Tree traversal O(n) time, O(n) space. No sorting, no hashing! c++

**Author:** OverTheSea
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1887500/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1887500/)

---

Approach
Pre-order traversal
1) Do a pre-order traversal of the tree, once we get to any leaf node add it to the curLeaves[]. Update the leaf as NULL.
2) Do above step till root becomes NULL.

Note: We are updating the TreeNode structure, at the end the Tree is NULL
    
Time complexity
O(N), N total number of nodes, 
At each level we remove the leaf nodes, this reduces the number of nodes in the tree by half. In a binary Tree, TotalNodes = leaf + non-leaf Nodes = 2x-1, leaf nodes = x, non-leaf nodes = x-1. And at each level since we remove the leaf nodes the number of nodes gets reduced from 2x to x.

Thus O(N + N/2 + N/4 ...1) = O(N) 

Space complexity
O(N)
The stack space of recursion changes with each iteration on the Tree (Similar to Time complexity calculation)

'''


    vector<vector<int>> findLeaves(TreeNode* root) {
        vector<int> curLeaves; //get current level leaves
        vector<vector<int>> allLeaves;
        while(root != NULL){
            curLeaves.clear();
            root = getLeaves(root, curLeaves);
            allLeaves.push_back(curLeaves);
        }
        return allLeaves;
    }
	
    TreeNode* getLeaves(TreeNode* root, vector<int>& curLeaves){
        if(root == NULL)
            return NULL;
        //Check if current node is a leaf
        if(root->left == NULL && root->right == NULL){
            curLeaves.push_back(root->val);
            return NULL; //Making leaf node as NULL
        }
        root->left = getLeaves(root->left, curLeaves);
        root->right = getLeaves(root->right, curLeaves);
        
        return root;
    }
