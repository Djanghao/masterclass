# C++ Bottom up solution [O(N) solution]

**Author:** not_a_cp_coder
**Votes:** 158
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/774578/](https://leetcode.com/problems/balanced-binary-tree/solutions/774578/)

---

## **Bottom Up Approach**

##### Space Complexity: O(N), Time Complexity: O(N)
```
class Solution {
public:
    bool ans;
    int checkBalance(TreeNode* root){
        if(!root)
            return 0;
        if(!ans) // if Answer is already False then return it.
            return 0;
        int leftSubTree = checkBalance(root->left);
        int rightSubTree = checkBalance(root->right);
        if(abs(leftSubTree-rightSubTree) > 1){
            ans = false;
        }
        return 1 + max(leftSubTree, rightSubTree);
    }
    bool isBalanced(TreeNode* root){
        ans = true;
        int temp = checkBalance(root);
        return ans;
    }
};
```

Feel free to ask any doubts in the **comment** section. I will try to respond **ASAP**.
If you like this solution, do **UPVOTE**.
Happy Coding :)