# Simple C++ Solution [Very Easy to Understand] (DFS Recursive)

**Author:** not_a_cp_coder
**Votes:** 50
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/723210/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/723210/)

---

```
// DFS Recursive
class Solution {
public:
    int maxDepth(Node* root) {
        if(root==NULL)
            return 0;
        int max_depth = 1;
        for(int i=0;i<root->children.size();i++){
            max_depth = max(max_depth, 1 + maxDepth(root->children[i]));
        }
        return max_depth;
    }
};
```
Feel free to ask any question in the **comment** section.
If you like this solution, do **UPVOTE**.
Happy Coding :)