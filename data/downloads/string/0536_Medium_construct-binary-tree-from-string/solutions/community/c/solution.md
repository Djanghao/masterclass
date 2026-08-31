# C++ | Easy & unique iterative stack version (faster than 95.87%)

**Author:** mehakwaliaC
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1120549/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1120549/)

---

We push every number we see into the stack and based on the paranthesis we make the decision as to what is to be done for the curr value in the initial string.

```
class Solution {
public:
    TreeNode* str2tree(string s) {
        if (s.empty()) return nullptr;
        string curr; 
        stack<TreeNode*> stk;
        for (int i = 0; i<s.length(); ++i){
            if (isdigit(s[i]) || s[i] == '-') { curr+=s[i]; continue;}
            if (curr.empty() && s[i] == '(') {continue;}
            if (curr.empty() && s[i] == ')') {stk.pop(); continue;}
            TreeNode* node = new TreeNode(stoi(curr));
            curr.clear();
            if(stk.empty()) {stk.push(node); continue;}
            if(!stk.top()->left)
                stk.top()->left = node;
            else
                stk.top()->right = node;
            stk.push(node);
            if (s[i] == ')')
                stk.pop();
        }
        if(!curr.empty()) return new TreeNode(stoi(curr));
        return stk.top();
    }
};
```

