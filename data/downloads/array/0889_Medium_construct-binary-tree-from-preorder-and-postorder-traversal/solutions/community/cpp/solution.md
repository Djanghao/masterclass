# ⚽️ C++ Easy Recursive Solution

**Author:** AlphaDecodeX
**Votes:** 8
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/2268607/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/2268607/)

---

\uD83D\uDD25 **Kindly Upvote, It is FREE From your side**

\uD83D\uDE07 Observation:-
Preorder Traversal is:- Root Left and Right
PostOrder Traversal is:- Left Right Root.

Now, we know the exact location of the Root that is the First element of the Preorder. But we donot know about the Left and Right Subtree after the root selection. For that We can select the first element of the left in preorder and can search in Postorder. So we'll find the left and right subtree after that in the Postorder.

Make sure you keep four pointers to tract start and end of pre and post order.

Rest, follow the code and dry run a case to know more about it.



```
#define Tn TreeNode*
#define um unordered_map<int, int>
#define vc vector<int>
#define dvc vector<vector<int>>
#define ll long long int
class Solution {
private:
    int findElement(vc post, int element){
        return find(post.begin(), post.end(), element) - post.begin();
    }
    
    TreeNode* helper(vc &pre, vc &post, int preStart, int preEnd, int postStart, int postEnd){
        if(preStart > preEnd){
            return nullptr;
        }
        TreeNode* root = new TreeNode(pre[preStart]);
        
        if(preStart==preEnd){
            return root;
        }
        
        int index = findElement(post, pre[preStart+1]);
        int length = index-postStart+1;
        
        root->left = helper(pre, post, preStart+1, preStart+length, postStart, index);
        root->right = helper(pre, post, preStart+length+1, preEnd, index+1, postEnd-1);
        
        return root;
    }
    
public:
    TreeNode* constructFromPrePost(vector<int>& pre, vector<int>& post) {
        return helper(pre, post, 0, pre.size()-1, 0, post.size()-1);
    }
};
```