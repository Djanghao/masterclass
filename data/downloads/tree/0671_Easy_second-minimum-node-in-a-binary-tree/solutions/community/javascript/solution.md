# 🏆Without SET🔥DFS🔥C++🔥O(N)

**Author:** Manohar_001
**Votes:** 13
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3391310/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3391310/)

---

###### Definition of the tree: `root.val = min(root.left.val, root.right.val)`
###### Observation: 
1. The primary root is the smallest one (or one of the ...);
1. If a child is larger than the parent, then the child might be the second-smallest one, and the whole sub-tree starting from this child can be skipped.

###### It's easy to use `set` and solve this problem. What if interviewer disagrees to use `set` ? (Scroll down to see the solution)
### Explained below inside the code for better Understanding.
# \uD83D\uDE09Don't just watch & move away, also give an Upvote.\uD83D\uDE09
# Complexity
- Time complexity: $$O(n)$$ `Traversal`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(h)$$ `height of tree`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# \uD83D\uDE09Really took a lot of time to come up with this, Pls {UPVOTE}\uD83D\uDE09
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
public:

    /*Take 2 variables: firstMin & secondMin*/
    long long secondMin=LONG_MAX,firstMin;

    void findSecMin(TreeNode* root)
    {
        if(!root)
            return;

        /*  1)Second min is always greater than first min.
            2) So find a value in a tree which is greater than firstMin.
            3) If we find a value smaller than or equal to secondMin,
            we then update our secondMin.*/
        if(root->val > firstMin){
            if(root->val <= secondMin)
                secondMin = root->val;
        }

        find(root->left);
        find(root->right);
    }
    int findSecondMinimumValue(TreeNode* root) {
        //Set root's value as first min.
        firstMin = root->val;

        //Function call
        findSecMin(root);

        //In case secondMin was not found
        if(secondMin == LONG_MAX)
            return -1;

<!-- \u2705Well before returning answer don't forget to UPVOTE.\u2705 -->
        return secondMin;
    }
};
```