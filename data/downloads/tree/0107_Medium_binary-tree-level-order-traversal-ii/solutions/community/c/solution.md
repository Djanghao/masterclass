# C++ | Queue | Without Using Reverse | 8ms

**Author:** piyushagru
**Votes:** 51
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/716751/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/716751/)

---

It is actually my first post so any feedback is welcomed.

**Its well commented | Easy to Understand | 
and simple approach with all steps explained within the code itself**

Main **CATCH** of this code is that you dont need to reverse the vector in last.
We can smartly just use our depth function to save ourself few fraction of our computation energy.

Used queue and iterative method to do the level order traversal.
I calculated depth first to know the level so that we dont need to reverse the vector at the end.
Rest is a simple code starting from bottom I am inserting vector entries.

```
class Solution {
public:
    int depth(TreeNode* root){
        if(root == NULL)return 0;
		//return the maximum depth of the tree so to find the levels
        return max(depth(root->right),depth(root->left))+1;
    }
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
     if(root == NULL)return {};
        int d = depth(root);
		//initialise the empty levels inside a vector
        vector<vector<int> > level(d,vector<int>({})); 
        int i = 0;
		//use a queue to maintain the tree nodes
        queue<TreeNode*> q;
		//push the root node with one element and decrement the level
        q.push(root);
        level[d-1].push_back(root->val);
        q.push(NULL);
        d--;

		// do work while queue is not empty
        while(!q.empty()){
			// extract the node from the queue and remove it from the queue
            TreeNode* temp = q.front();
            q.pop();
            
			//if the node exist check its right and left node
            if(temp){  
				// and if the left and right node exist simply push the value to the vector
                if(temp->left){
                        q.push(temp->left);
                        level[d-1].push_back(temp->left->val);
                    }    
                if(temp->right){
                        q.push(temp->right);
                        level[d-1].push_back(temp->right->val);
                    }
            }                 
            else {
			// to handle condition if NULL found at a node
                if(q.empty()) break;
                d--;
                q.push(NULL);
            }  
        }
		// now without reversing the vector you can simply return the answer
        return level;
    }
};
```