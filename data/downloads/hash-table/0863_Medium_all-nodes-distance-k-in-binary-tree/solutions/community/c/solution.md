# [C++] Easy to understand Solution, Beats 95% submissions

**Author:** hunarbatra
**Votes:** 225
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/526611/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/526611/)

---

```
vector<int> distanceK(TreeNode* root, TreeNode* target, int K) {
        unordered_map<TreeNode*, TreeNode*> parent_track; // node -> parent
        unordered_map<TreeNode*, bool> visited;
        queue<TreeNode*> queue;
        queue.push(root);
        while(!queue.empty()) { /*First BFS to get a track of parent nodes*/
            TreeNode* current = queue.front(); queue.pop();
            if(current->left) {
                parent_track[current->left] = current;
                queue.push(current->left);
            }
            if(current->right) {
                parent_track[current->right] = current;
                queue.push(current->right);
            }
        }
        queue.push(target);
        visited[target] = true;
        int curr_level = 0;
        while(!queue.empty()) { /*Second BFS to go upto K level from target node and using our hashtable info*/
            int size = queue.size();
            if(curr_level++ == K) break;
            for(int i=0; i<size; i++) {
                TreeNode* current = queue.front(); queue.pop();
                if(current->left && !visited[current->left]) {
                    queue.push(current->left);
                    visited[current->left] = true;
                }
                if(current->right && !visited[current->right]) {
                    queue.push(current->right);
                    visited[current->right] = true;
                }
                if(parent_track[current] && !visited[parent_track[current]]) {
                    queue.push(parent_track[current]);
                    visited[parent_track[current]] = true;
                }
            }
        }
        vector<int> result;
        while(!queue.empty()) {
            TreeNode* current = queue.front(); queue.pop();
            result.push_back(current->val);
        }
        return result;
    }
```