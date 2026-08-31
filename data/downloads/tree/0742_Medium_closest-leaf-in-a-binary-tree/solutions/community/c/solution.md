# C++ solution faster than 100%

**Author:** caiyuxi
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/1040970/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/1040970/)

---

General idea: 
There are in general two possible kinds of path:
1. A path inside the subtree rooting at the node with value k
2. A path going through one of the ancester of node k


And therefore, a possible result is only seen when the current node is of value k, or it's an ancester of k. Now we need to think about how to know if it is the case. It is pretty easy to see if we are at node k by checking the value of the node. To see if the node is an ancester of k, I need some tricks in the return values. So I declared the recursive helper function that returns
1. {dist_to_leaf, leaf_val} if the root is not an ancester of k nor k itself
2. {dist_to_k, k} if the root is an ancester of k or k itself

So now it is much easier to code the idea! At each node, we can do the following
1. get the helper result from both the left and right sub tree
2. if the current node is node k, update the result if 1+min(l.dis_to_leaf, r.dis_to_leaf) < dist, and return {0, k}
3. if the current node is an ancester of k, update the result if child.dist_to_k+child.dis_to_leaf+2 < dist, and return {dist_to_k+1, k}
4. otherwise, return {1+min(l.dis_to_leaf, r.dis_to_leaf), min_leaf}
```
class Solution {
private:
    // updated:
    // 1. at the node with value k, so that it is the shortest path to a leaf in its subtree
    // 2. at any ancester of k, so that it is  the shortest path to a leaf going through the ancester node
    int result;
    int dis = 1000;
    
    // returns {dis_to_leaf, leaf_val} if root is not an ancester of k
    // return {dis_to_target, k} if root is k or an ancester of k
    pair<int, int> helper(TreeNode* root, int k) {
        // base case: if root is a leaf, return {0, val}
        if (root->left == nullptr && root->right == nullptr) {
            if (root->val == k) {
                result = root->val;
                dis = 0;
            }
            return {0, root->val};
        }
        
        // var to store left and right sub tree result
        pair<int, int> l = {1000, -1};
        pair<int, int> r = {1000, -1};
        if (root->left != nullptr) {
            l = helper(root->left, k);
        }
        if (root->right != nullptr) {
            r = helper(root->right, k);
        }
        int curr_dis = min(l.first, r.first) +1;
        int curr_res;
        if (curr_dis-1 == l.first) {
            curr_res = l.second;
        } else {
            curr_res = r.second;
        }
        
        // attempt to update the result if root->val == k
        if (root->val == k) {
            dis = min(dis, curr_dis);
            if (dis == curr_dis) {
                result = curr_res;
            }
            return {0, k};
        }
        
        // attempt to update the result if root is an ancester of k
        if (l.second == k || r.second == k) {
            int dis_from_k = l.second == k?l.first:r.first;
            int dis_from_leaf = l.second == k?r.first:l.first;
            int leaf = l.second == k?r.second:l.second;
            dis = min(dis, dis_from_leaf + dis_from_k + 2);
            if (dis == dis_from_leaf + dis_from_k+2) {
                result = leaf;
            }
            return {dis_from_k+1, k};
        }
        
        // pass on value if cannot update result
        return {curr_dis, curr_res};
    }
public:
    int findClosestLeaf(TreeNode* root, int k) {
        if (root == nullptr) {
            return -1;
        }
        
        pair<int, int> root_res = helper(root, k);
        if (root_res.second!= k && root_res.first < dis) {
            return root_res.second;
        } else {
            return result;
        }
    }
};
```