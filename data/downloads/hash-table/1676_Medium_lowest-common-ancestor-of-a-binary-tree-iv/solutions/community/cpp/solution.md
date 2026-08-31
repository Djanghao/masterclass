# [C++] Unordered_set + post order traversal

**Author:** tinfu330
**Votes:** 3
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1874681/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1874681/)

---

Bascially and LCA has 3 case:
1. current node is not target node but leftTree and Right Tree both contains target nodes
2. current Node is target node and either left or right sub tree contains target nodes
3. current Node is the only target node 

```
class Solution {
private:
    unordered_set<TreeNode *> nodeSet;
    TreeNode *res = NULL;
    
    bool dfs(TreeNode *curr) {
        if (curr == NULL) return false;
        bool lRes = dfs(curr->left);
        bool rRes = dfs(curr->right);
        bool currRes = nodeSet.count(curr) != 0;
        if (currRes || (lRes && rRes)) res = curr;
        return currRes || lRes || rRes;
    }
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, vector<TreeNode*> &nodes) {
        for (TreeNode *eachN : nodes) {
            nodeSet.insert(eachN);
        }
        dfs(root);
        return res;
    }
};
```