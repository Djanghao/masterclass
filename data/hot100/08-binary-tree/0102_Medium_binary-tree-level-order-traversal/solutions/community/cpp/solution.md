# Solution

**Author:** deleted_user
**Votes:** 528
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3169565/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3169565/)

---

```C++ []
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>>ans;
        if(root==NULL)return ans;
        queue<TreeNode*>q;
        q.push(root);
        while(!q.empty()){
            int s=q.size();
            vector<int>v;
            for(int i=0;i<s;i++){
                TreeNode *node=q.front();
                q.pop();
                if(node->left!=NULL)q.push(node->left);
                if(node->right!=NULL)q.push(node->right);
                v.push_back(node->val);
            }
            ans.push_back(v);
        }
        return ans;
    }
};
```

```Python3 []
from collections import deque
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        Q = deque([root])
        levels = [[root.val]]
        temp = deque()

        while Q:
            node = Q.popleft()
            if node.left: temp.append(node.left)
            if node.right: temp.append(node.right)
            
            if not Q:
                if temp:
                    levels.append([n.val for n in temp])
                Q = temp
                temp = deque()

        return levels
```

```Java []
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) 
    {
        List<List<Integer>>al=new ArrayList<>();
        pre(root,0,al);
        return al;
    }
    public static void pre(TreeNode root,int l,List<List<Integer>>al)
    {
        if(root==null)
            return;
        if(al.size()==l)
        {
            List<Integer>li=new ArrayList<>();
            li.add(root.val);
            al.add(li);
        }
        else
            al.get(l).add(root.val);
        pre(root.left,l+1,al);
        pre(root.right,l+1,al);
    } 
}
```
