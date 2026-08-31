# [Easy Understanding][C++]

**Author:** rajat_gupta_
**Votes:** 79
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/957281/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/957281/)

---

```
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        if (root == NULL) 
			return {};
        vector<vector<int>> res;
        queue<Node*> q;
        q.push(root); 
        while (!q.empty())
        {
            int size = q.size(); 
            vector<int> currlevel;
            for(int i=0;i<size;i++){
                Node* tmp=q.front();
                q.pop();
                currlevel.push_back(tmp->val);
                for (auto n : tmp -> children)
                     q.push(n); 
            }
            res.push_back(currlevel);
        }
        return res;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)