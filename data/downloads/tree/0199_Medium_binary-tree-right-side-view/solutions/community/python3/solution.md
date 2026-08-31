# Solution

**Author:** deleted_user
**Votes:** 226
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/3176211/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/3176211/)

---

```C++ []
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int>ans;
        queue<TreeNode*> q;
        if(root==NULL)
        return ans;
        q.push(root);
        while(1)
        {
            int size=q.size();
            if(size==0)
            return ans;
            vector<int> data;
            while(size--)
            {
                TreeNode* temp=q.front();
                q.pop();
                data.push_back(temp->val);
                if(temp->left!=NULL)
                q.push(temp->left);
                if(temp->right!=NULL)
                q.push(temp->right);
            }
            ans.push_back(data.back());
        }
    }
};
```

```Python3 []
from collections import deque
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        queue = deque()
        if root is None:
            return []
        
        if root.left is None and root.right is None:
            return [root.val]
        
        result = []
        queue.append(root)
        while queue:
            child_queue = deque()
            prev = -1
            while queue:
                curr = queue.popleft()

                if curr.left is not None:
                    child_queue.append(curr.left)

                if curr.right is not None:
                    child_queue.append(curr.right)
                
                prev = curr
            
            result.append(prev.val)
            queue = child_queue
        
        return result
```

```Java []
class Solution {
    int maxlevel = 0;
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> list  = new ArrayList<>();
        right(root,1,list);
        return list ;
    }
    void right(TreeNode root,int level,List<Integer> list){
        if(root==null){
            return ;
        }
        if(maxlevel<level){
            list.add(root.val);
            maxlevel=level;
        }
        right(root.right,level+1,list);
        right(root.left,level+1,list);
        
    }
}
```
