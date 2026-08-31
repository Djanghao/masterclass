# C++ 100% Fast  8ms

**Author:** rg_1
**Votes:** 6
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/1191195/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/1191195/)

---

**Idea :** As mentioned in the description of the ques **'-'** represents depth of the node succeeding the **'-'**. This means if string is **1-2--3** This means 1 is root and 2 is let child of 1 and 3 is left child of 2  as mentioned in the description if there is only one  node at a level it is **left child**. So here I have made a **recursive solution** in line of preorder dfs traversal with the string and starting index being global variables. The idea of the function is to only pass the depth of the required node and then the function checks the required no. of dashes equal to depth , if yes then it creates a node and updates starting index and if no it returns NULL.
**Why starting index global?**
You might come up with a question that why starting index is global as in the question it is mentioned that if there is a only child of a node it is compulsory to be left child so if a function discovers a node at a depth it is marked as left child of the parent first and then the starting index is updated as then when right child function is called it checks at the updated index and if found then mark the right child otherwise NULL so Starting index has to be global for correct marking.

**Code**
```
class Solution {
public:
    int ind=0;
    string s;
    TreeNode* solve(int depth)
    {
        if(s.length()<depth)
        {
            return NULL;
        }
        for(int i=ind;i<ind+depth;i++)
        {
                  if(s[i]!='-')
                  {
                      return NULL;
                  }
        }
		//This string is basically to store numeric value of the node ( as it can be any digit no.)
        string temp;
        int st=ind+depth;
        while(s[st]!='-' && st<s.length())
        {
            temp+=s[st];
            st++;
        }
        int j= stoi(temp);
        TreeNode*root= new TreeNode(j);
        ind=st;
        root->left=solve(depth+1);
        root->right=solve(depth+1);
        return root;      
        
    }
    TreeNode* recoverFromPreorder(string S) {
        s=S;
        TreeNode*root=solve(0);
        return root;
    }
};

```
**I hope you liked my solution , Please Upvote!**
![image](./images/0.png)
