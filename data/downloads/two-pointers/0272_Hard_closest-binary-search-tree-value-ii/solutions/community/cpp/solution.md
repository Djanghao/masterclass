# C++ simple Inorder solution with O(n) runtime and O(k) memory

**Author:** rlzth
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/70582/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/70582/)

---

share my AC solution below without using queue. Basically, it is a inorder traverse and update the value in result vector. 

There are two situations.

1) if the vector is not reach k. then simple push the node value to res.

2) if it reach the size k. since it is inorder traverse. the res vector is a sorted vector.
there are three situation. 

 - (1)if the target value is less then min value in res.
 - (2) the target value is between the min and max in res.
 - (3) the target value is large then max value in res.

in case (1), the next value will have diff large then the res[0]. in case (2)(3), we just compare diff of res[0] and target and diff of node->val and target. since res[1] is closer to target than res[0]. now if res[0] is replaced. the next possible to replace is res[1]. so we just increase the index.
Once it found that could not update anymore. It will stop, so the runtime is less that O(n).

    class Solution {
    public:
        vector<int> closestKValues(TreeNode* root, double target, int k) {
            vector<int> res;
            inorder(root, target, res, 0, k);
            return res;
        }
        void inorder(TreeNode *node, double target, vector<int> &res, int index, int k) {
            if (!node) {
                return;
            }
            inorder(node->left, target, res, index, k);
            if (res.size() < k) {
                res.push_back(node->val);
            } else {
                if(abs(node->val - target) < abs(res[index] - target)) {
                    res[index] = node->val;
                    index++;
                    if(index==k) index = 0;
                } else {
                    return;
                }
            }
            inorder(node->right, target, res, index, k);
        }
    };