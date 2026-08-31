# ✅ Idea : Inorder Traversal || Easy to understand

**Author:** shwetankverma23
**Votes:** 333
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1962981/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1962981/)

---

I will try to explain the approach using diagrams and pseudo code : 

![image](./images/0.jpeg)
![image](./images/1.jpeg)

Now try to implement the actual problem.
Hints : Firstly write the inorder traversal and try to follow the array approach of updating the prev,first and second and you will be able to solve it. 
Here is my solution : 
```
class Solution {
    TreeNode prev=null,first=null,second=null;
    void inorder(TreeNode root){
        if(root==null)
            return ;
        inorder(root.left);
        if(prev!=null&&root.val<prev.val){
            if(first==null)
                first=prev;
            second=root;
        }
        prev=root;
        inorder(root.right);
    }
    public void recoverTree(TreeNode root) {
        if(root==null)
            return ; 
        inorder(root);
        int temp=first.val;
        first.val=second.val;
        second.val=temp;
    }
}
```

Hope you understood the approach :)

