# EASY TO UNDERSTAND CPP CODE

**Author:** sahgalamar5
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1211457/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1211457/)

---

```
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    
    int ans = 0;
    
    int solve(Node* root){
        int max_dist = 0;
        
        for (auto child : root->children){
            int dist = solve(child);
            
            ans = max(ans,max_dist+dist);
            max_dist = max(max_dist,dist);
        }
        
        return 1+max_dist;
    }
    
    int diameter(Node* root) {
        solve(root);
        return ans;
    }
};
```