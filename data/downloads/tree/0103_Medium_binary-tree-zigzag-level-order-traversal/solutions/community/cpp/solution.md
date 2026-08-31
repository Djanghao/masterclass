# [c++] 5ms version: one queue and without reverse operation by using size of each level

**Author:** StevenCooks
**Votes:** 490
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/33825/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/33825/)

---

  
Assuming after traversing the 1st level, nodes in queue are {9, 20, 8}, And we are going to traverse 2nd level, which is even line and should print value from right to left [8, 20, 9]. 

We know there are 3 nodes in current queue, so the vector for this level in final result should be of size 3. 
Then,     queue [i] -> goes to ->  vector[queue.size() - 1 - i]
i.e. the ith node in current queue should be placed in (queue.size() - 1 - i) position in vector for that line.
 
For example, for node(9), it's index in queue is 0, so its index in vector should be (3-1-0) = 2. 


    vector<vector<int> > zigzagLevelOrder(TreeNode* root) {
        if (root == NULL) {
            return vector<vector<int> > ();
        }
        vector<vector<int> > result;
    
        queue<TreeNode*> nodesQueue;
        nodesQueue.push(root);
        bool leftToRight = true;
    
        while ( !nodesQueue.empty()) {
            int size = nodesQueue.size();
            vector<int> row(size);
            for (int i = 0; i < size; i++) {
                TreeNode* node = nodesQueue.front();
                nodesQueue.pop();

                // find position to fill node's value
                int index = (leftToRight) ? i : (size - 1 - i);

                row[index] = node->val;
                if (node->left) {
                    nodesQueue.push(node->left);
                }
                if (node->right) {
                    nodesQueue.push(node->right);
                }
            }
            // after this level
            leftToRight = !leftToRight;
            result.push_back(row);
        }
        return result;
    }