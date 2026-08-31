# C++ solution Using Recursion and Map with Explanation(90.33% faster)

**Author:** markkais129
**Votes:** 51
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/1389630/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/1389630/)

---

**Explanation:**
We Using Unorder map to know the index of the ROOT element in INORDER element. that's why,we have to iterate all over the INORDER element and save their value and index in our **UNORDERED_MAP**; 
It makes the solution **O(n)** instead of O(n^2).


We know that, the last element of **POSTORDER** array contains main **ROOT** Node. and In **INORDER** array we see that the left side of the **ROOT** element contains the **LEFT** side element and **Right** side contains all the **RIGHT** side element.
So, we have to find out the index of **ROOT** element in **INORDER** Element. 
So, 
```int inorderIndex = m[postorder[postIndex]];```
and Make ROOT =
```TreeNode *root =new TreeNode(inorder[inorderIndex]);```
and postIndex decreament by 1 for the next purpose.
And then we go to the **Right side** first and make the **Right side** of the **ROOT**. Here the start index is inorderIndex+1 cause all Right Part is in the Right Side of the inorder Array.
```root->right=solve(inorder,postorder,inorderIndex+1,end,postIndex);```

And then we go to the **Left Side** and make the Left side of the **ROOT**. Here the end index is inorderIndex-1 cause all left Part is in the left Side of the inorder Array.
```root->left=solve(inorder,postorder,start,inorderIndex-1,postIndex);```

And Now the **base case**, when we stop our Recursion:
We all know when, start> end, we return NULL;
``` if(start>end) return NULL;```

And Last we return ROOT;

**N:B: If you recurse Left Side first , it cause Runtime Error, cursed the code**
Cause,when you call left first the postindex got decreased in every call until left part finishes off but we are comparing from the last so need to get the last indexes for right part too that we will not be able to get it if we called for left part first.
If we call right part eventually postindex should decrease till left part so that we will be able to access parent node for every left tree element.
Hope this helps:)

**Code:**

```
class Solution {
public:
 unordered_map<int,int>m;
    TreeNode* solve(vector<int>& inorder,vector<int>& postorder,int start,int end,int &postIndex){
        if(start>end) return NULL;
         int inorderIndex = m[postorder[postIndex]];

        TreeNode* root = new TreeNode(inorder[inorderIndex]);    
        
        (postIndex)--;
      root->right=solve(inorder,postorder,inorderIndex+1,end,postIndex);
        root->left=solve(inorder,postorder,start,inorderIndex-1,postIndex);
        
        return root;
    }
    
    
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {

        for(int i=0;i<inorder.size();i++){
           m[inorder[i]] = i;
            
        }
        int postIndex=postorder.size()-1;
        return solve(inorder,postorder,0,postorder.size()-1,postIndex);
    }
};
```
**If you helped by this Explanation or Code or learn something from this, PLEASE UPVOTE**
if I make any mistake , please comment and If you have better Idea please Comment. Thank you for Reading.