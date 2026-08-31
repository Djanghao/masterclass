# 🥇 C++ | PYTHON  ||  EXPLAINED  ||  ; ]

**Author:** karan_8082
**Votes:** 90
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/2511520/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/2511520/)

---

**UPVOTE IF HELPFuuL**

**APPROACH**

Any sort of traversal would work here.
While traversing the tree, keep a variable that stores the maximum value till now in the path.
Compare it with node value to decide whether it is a ood node or not.


**BASE CASE**
* Return ```0```, whenever ```root == NULL```

**RECURSIVE CALL**
* Call the funtion for both ```root->left``` and ```root->right``` and changing the max value to ```max(max_till_now,root->val)```

**SELF-WORK**
* Get answer recursively for next nodes.
* If ```root->val > max_value_till_now``` increment the answer by one.

**UPVOTE IF HELPFuuL**

**C++**
```
class Solution {
public:
    
    int solve(TreeNode* root,int hi){
        if (root){
            int k=solve(root->left, max(hi,root->val)) + solve(root->right, max(hi,root->val));
            if (root->val>=hi){
                k++;
            }
            return k;
        }
        return 0;
    }
    int goodNodes(TreeNode* root) {
        return solve(root,-10001);
    }
};
```
**PYTHON**
```
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def solve(root,val):
            if root:
                k = solve(root.left, max(val,root.val)) + solve(root.right, max(val,root.val))
                if root.val >= val:
                    k+=1
                return k
            return 0
        return solve(root,root.val)
```
![image](./images/0.webp)
