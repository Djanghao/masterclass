# 12ms 11-lines C++ Solution

**Author:** jianchao-li
**Votes:** 399
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/36685/](https://leetcode.com/problems/path-sum-ii/solutions/36685/)

---

Well, a typical backtracking problem. The code is as follows. You may walk through it using the example in the problem statement to see how it works.

    class Solution {
    public:
        vector<vector<int>> pathSum(TreeNode* root, int sum) {
            vector<vector<int> > paths;
            vector<int> path;
            findPaths(root, sum, path, paths);
            return paths;  
        }
    private:
        void findPaths(TreeNode* node, int sum, vector<int>& path, vector<vector<int> >& paths) {
            if (!node) return;
            path.push_back(node -> val);
            if (!(node -> left) && !(node -> right) && sum == node -> val)
                paths.push_back(path);
            findPaths(node -> left, sum - node -> val, path, paths);
            findPaths(node -> right, sum - node -> val, path, paths);
            path.pop_back();
        }
    };