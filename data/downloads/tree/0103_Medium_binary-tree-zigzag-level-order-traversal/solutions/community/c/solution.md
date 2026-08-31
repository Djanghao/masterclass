# [c++] Easy to understand, one approach to solve Zigzag & Level order traversal

**Author:** mnumtw7
**Votes:** 237
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/174644/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/174644/)

---

This approch can be used to solve both level order traversal & zig zag traversal.
It's easy to start with the level order traversal. I hope the comments are clear.

```
vector<vector<int>> levelOrder(TreeNode* root) {
        if (!root) return {}; // return if root is null
        queue<TreeNode*> q;
        q.push(root); //push the root node.
        vector<vector<int>> out; //result vector
      
		 /*
		 * Idea is to create a vector for every level based on the queue size.
		 * eg: if a level has four elements say 1, 2, 3, 4 -> Then create a vector of size 4.
		 * 
		 * note: size of the queue is computed before the loop, so that we don't consider 
		 * newly pushed elements.
		 */
		 
        while (!q.empty()) {
            
            int sz = q.size(); /* current queue size */
            vector<int> curr(sz); /* vector of size sz */
						
            for (int i = 0; i < sz; i++) {
                TreeNode* tmp = q.front();
                q.pop();
                curr[i] = tmp->val; /* insert to the correct index */
				
				/* Add the left & right nodes to the queue in the loop. */
                if (tmp->left) q.push(tmp->left);
                if (tmp->right) q.push(tmp->right);
            }
            out.push_back(curr); /* once the level is done, push the vector to output vector. */
        }
        return out;
    }
```

The same idea can be extended to zig-zag traversal. The only difference would be, if we are on an even level (say second level)** insert into the vector from end. Odd levels insert from beginning.**
```

vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        
        if (!root) return {};
        
        queue<TreeNode*> q;
        vector<vector<int>> out;
            
        q.push(root);  
        int level = 0; /* to alternate levels, or a bool variable */
        
        while (!q.empty()) {
            
            int sz = q.size();  
            vector<int> curr(sz); 
            
            for (int i = 0; i < sz; i++) {
                
                TreeNode* tmp = q.front();
                q.pop();
                
                if (level == 0) {
                    curr[i] = tmp->val; // odd level, insert like 0, 1, 2, 3 etc. 
                } else {
                    curr[sz - i - 1] = tmp->val; /* even level insert from end. 3, 2, 1, 0. (sz - i - 1) to get the index from end */
                }
                
                if (tmp->left) q.push(tmp->left);
                if (tmp->right) q.push(tmp->right);
            }
            out.push_back(curr); // now push the level traversed to output vector
            level = !level; // toggle the level using negation. or level == 0 ? level = 1 : level = 0;
        }
        return out;
```

Thank you for reading. Please let me your comments/feedback.