# [C++] Simple bottom up recursive solution

**Author:** dev1988
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/334147/](https://leetcode.com/problems/maximum-average-subtree/solutions/334147/)

---

At every node, we find the number of nodes(**num**) and total value(**val**) of right subtree and left subtree. Add 1 for current node(to num) and currentNode->val(to val) to send to parent.

In this process keep track of the maximum average at every node.
```
class Solution {
public:
    double mx;
    double maximumAverageSubtree(TreeNode* root) {
        mx = 0.0;
        int num=0, val=0;
        helper(root, num, val);
        return mx;
    }
    
    void helper(TreeNode *curr, int &num, int &val){
        if(curr == NULL) return;
        if(curr->right == NULL && curr->left == NULL){
            //Leaf node, break recursion
            num = 1;
            val = curr->val;
            mx = max(mx, (double)val/(double)num);
            return;
        }
        int rv=0, lv=0, rn=0, ln=0;
        helper(curr->right, rn, rv);
        helper(curr->left, ln, lv);
        //Calculate num, value to be returned by current node which is basically sum of left and right subtree + current node val;
        num = rn+ln+1;
        val = rv + lv + curr->val;
        mx = max(mx, (double)val/(double)num);
        return;
    }
};
```