# My neat cpp solution(16ms)

**Author:** alak_koul
**Votes:** 131
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1028083/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1028083/)

---

```
int preInd=0;
TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder) {
    return createTree(preorder,inorder,0,inorder.size() - 1);
}
TreeNode* createTree(vector<int>& preorder, vector<int>& inorder,int start, int end){
    if(start > end){
        return NULL;
    }
    TreeNode* node=new TreeNode(preorder[preInd++]);
    int pos;
    for(int i=start;i<=end;i++){
        if(inorder[i]==node->val){
            pos=i;
            break;
        }
    }
    node->left =createTree(preorder, inorder,start,pos-1);
    node->right =createTree(preorder, inorder, pos+1,end);
    return node;
}
```