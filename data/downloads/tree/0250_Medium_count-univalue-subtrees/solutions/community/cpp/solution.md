# C++ one-pass recursive solution

**Author:** xlingcc
**Votes:** 28
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/67612/](https://leetcode.com/problems/count-univalue-subtrees/solutions/67612/)

---

It was important for me to realize that: (a) when determining whether a subtree is univalue or not, we don't have to store the value it might be univalue with, since it's already stored at its root, so just the bool indicator is enough; (b) the counter has better to be stored separately from the recursion stack, and used as an accumulator rather than a return value we'd later sum between left and right subtrees.

So the considerations above led to the following transparent solution:


       class Solution {
        public:
            int countUnivalSubtrees(TreeNode* root) {
                int count = 0;
                countUnivalSubtreesRecursive(root, count);
                return count;
            }
            
            bool countUnivalSubtreesRecursive(TreeNode* root, int& count)
            {
                if(root == NULL) return true;
                
                auto isLeftUnival = countUnivalSubtreesRecursive(root->left, count);
                auto isRightUnival = countUnivalSubtreesRecursive(root->right, count);
                
                if(isLeftUnival && isRightUnival
                    && ((root->left == NULL) || root->left->val == root->val)
                    && ((root->right == NULL) || root->right->val == root->val)
                )
                {
                    ++count;
                    return true;
                }
                return false;
            }
        };