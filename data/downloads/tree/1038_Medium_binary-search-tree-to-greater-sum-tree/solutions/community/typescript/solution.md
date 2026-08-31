# EASY SOLUTION || FOR BEGINNERS || C || C++ || JAVA || JAVASCRIPT || TYPESCRIPT || DAILY STREAK

**Author:** anshul_1299
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5365227/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5365227/)

---

**Implementation**

Just apply Inorder Traversal on this Tree in the following ways :
1. Initialize global value` sum` which is initialy be `0`.
2. Call Recursion function for `Right Node`.
3. Add the value of root to the `sum` and update the value of root equals to the `sum`.
4. Call Recursion function for `Left Node`.

**Complexity**
* **Space Complexity**
	* O(1)
* **Space Complexity*** 
	* O(n)

**Code**
C Code
```
int sum;
void recursion(struct TreeNode* root){
    if(root == NULL)
        return;
    
    recursion(root->right);
    sum+=root->val;
    root->val=sum;
    recursion(root->left);
}

struct TreeNode* bstToGst(struct TreeNode* root) {
    sum=0;
    recursion(root);
    return root;
}
```
C++ Code
```
class Solution {
public:
    int sum;
    void recursion(struct TreeNode* root){
        if(root == NULL)
            return;

        recursion(root->right);
        sum+=root->val;
        root->val=sum;
        recursion(root->left);
    }

    
    TreeNode* bstToGst(TreeNode* root) {
        sum=0;
        recursion(root);
        return root;
    }
};
```
Java Code
```
class Solution {
    public int sum;
    
    public void recursion(TreeNode root){
        if(root == null)
            return;
        
        recursion(root.right);
        sum+=root.val;
        root.val = sum;
        recursion(root.left);
        
    }
    
    public TreeNode bstToGst(TreeNode root) {
        sum=0;
        recursion(root);
        return root;
    }
}
```
JavaScript Code
```
var bstToGst = function(root) {
    var sum=0;
    recursion = function(root){
        if(root == null)
            return;
        
        recursion(root.right);
        sum+=root.val;
        root.val=sum;
        recursion(root.left);
    };
    
    recursion(root);

    return root;
};
```
TypeScript Code
```
function bstToGst(root: TreeNode | null): TreeNode | null {
    var sum=0;
    function recursion(root: TreeNode){
        if(root == null)
            return;
        
        recursion(root.right);
        sum+=root.val;
        root.val=sum;
        recursion(root.left);
    };
    
    recursion(root);

    return root;
};
```