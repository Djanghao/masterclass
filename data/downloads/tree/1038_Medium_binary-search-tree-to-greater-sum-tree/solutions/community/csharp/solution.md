# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5515610/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5515610/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-07-22 123922.png](./images/1.png)
```C++ []
// Start Of Anuj Bhati aka Edwards Scoot's Template...
#include <bits/stdc++.h>
using namespace std;
typedef vector<int> vi;
#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define pb push_back
#define umii unordered_map<int, int>
// end of Anuj Bhati's aka Edwards Scott Template
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */

class Solution {
    vi help;
    umii ans;
    void inorder(TreeNode* root) {
        if (root == nullptr)
            return;
        inorder(root->left);
        help.pb(root->val);
        inorder(root->right);
        return;
    }
    void dfs(TreeNode* root, umii& ans) {
        if (root == nullptr)
            return;
        root->val = ans[root->val];
        dfs(root->left, ans);
        dfs(root->right, ans);
        return;
    }

public:
    TreeNode* bstToGst(TreeNode* root) {
        inorder(root);
        /*for (auto& x : help)
            cout << x << " ";
            */
        vi temp(help);
        for (int i = temp.size() - 2; i >= 0; --i)
            temp[i] += temp[i + 1];
        Rep(i, help.size()) ans.insert({help[i], temp[i]});
        
        dfs(root, ans);

        return root;
    }
};
```
```python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        help = []
        ans = {}
        def inorder(root):
            if not root:
                return 
            inorder(root.left)
            help.append(root.val)
            inorder(root.right)
            return
        def dfs(root, ans):
            if not root:
                return 
            root.val = ans[root.val]
            dfs(root.left, ans)
            dfs(root.right, ans)
            return
        
        inorder(root)
        temp = [x for x in help]
        for i in range(len(temp) - 2, -1, -1):
            temp[i] += temp[i + 1]
        for i in range(len(help)):
            ans[help[i]] = temp[i]
        dfs(root, ans)
        return root
```
```C# []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public TreeNode BstToGst(TreeNode root) {
        Preorder(root, 0);
        return root;
    }

    private int Preorder(TreeNode root, int pref) {
        if (root == null) 
            return pref;
        pref = Preorder(root.right, pref);
        pref += root.val;
        root.val = pref;
        pref = Preorder(root.left, pref);
        return pref;
    }
}
```
```Java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    ArrayList<Integer> help = new ArrayList<>();
    HashMap<Integer, Integer> ans = new HashMap<>();

    private void inorder(TreeNode root) {
        if (root == null)
            return;
        inorder(root.left);
        help.add(root.val);
        inorder(root.right);
        return;
    }

    private void dfs(TreeNode root, HashMap<Integer, Integer> ans) {
        if (root == null)
            return;
        root.val = ans.get(root.val);
        dfs(root.left, ans);
        dfs(root.right, ans);
        return;
    }

    public TreeNode bstToGst(TreeNode root) {
        inorder(root);
        int temp[] = new int[help.size()];
        int i = 0;
        for (int x : help)
            temp[i++] = x;
        for (int j = temp.length - 2; j >= 0; j--)
            temp[j] += temp[j + 1];
        for (int u = 0; u < help.size(); ++u)
            ans.put(help.get(u), temp[u]);
        dfs(root, ans);
        return root;

    }
}
```
```python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def bstToGst(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        help = []
        ans = {}
        def inorder(root):
            if not root:
                return 
            inorder(root.left)
            help.append(root.val)
            inorder(root.right)
            return
        def dfs(root, ans):
            if not root:
                return 
            root.val = ans[root.val]
            dfs(root.left, ans)
            dfs(root.right, ans)
            return
        
        inorder(root)
        temp = [x for x in help]
        for i in range(len(temp) - 2, -1, -1):
            temp[i] += temp[i + 1]
        for i in range(len(help)):
            ans[help[i]] = temp[i]
        dfs(root, ans)
        return root
```
```C []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int sum;
void dfs(struct TreeNode* node) {
    if (node == NULL)
        return;
    dfs(node->right);
    sum += node->val;
    node->val = sum;
    dfs(node->left);
}

struct TreeNode* bstToGst(struct TreeNode* root) {
    sum = 0;
    dfs(root);
    return root;
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)

![th.jpeg](./images/2.jpeg)
