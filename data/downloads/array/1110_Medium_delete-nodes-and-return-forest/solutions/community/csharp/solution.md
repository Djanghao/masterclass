# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 5
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5489122/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/5489122/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-07-17 112457.png](./images/1.png)
```C++ []

// Start Of Anuj Bhati aka Edward Scott310's Template...
#pragma GCC optimize("O2")
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace std;
#define umsi unordered_map<string, int>
// end of Anuj Bhati's aka Edward Scott310's Template
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
private:
    vector<TreeNode*> res;
    TreeNode* postorder(TreeNode* root, bool is_true, usi& del) {
        if (!root)
            return nullptr;
        bool is_delete = false;
        if (del.find(root->val) != del.end())
            is_delete = true;
        if (is_true and !is_delete)
            res.pb(root);
        root->left = postorder(root->left, is_delete, del);
        root->right = postorder(root->right, is_delete, del);
        return is_delete ? nullptr : root;
    }

public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        usi del(ALL(to_delete));
        postorder(root, true, del);
        return res;
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
    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
        to_delete = set(to_delete)
        res = []
        def postorder(root, is_true):
            if not root:
                return None
            is_delete = root.val in to_delete
            if is_true and not is_delete:
                res.append(root)
            root.left = postorder(root.left, is_delete)
            root.right = postorder(root.right, is_delete)
            return None if is_delete else root

        postorder(root, True)
        return res
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
    public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
        Set<Integer> valsToDelete = new HashSet<>();
        List<TreeNode> result = new ArrayList<>();

        for (int number : to_delete)
            valsToDelete.add(number);

        if (!valsToDelete.contains(root.val))
            result.add(root);
        shouldDelete(result, valsToDelete, root);
        return result;
    }
    public TreeNode shouldDelete(List<TreeNode> result, Set<Integer> valsToDelete, TreeNode root) {
        if (root == null)
            return null;

        root.left = shouldDelete(result, valsToDelete, root.left);
        root.right = shouldDelete(result, valsToDelete, root.right);

        if (valsToDelete.contains(root.val)) {
            if (root.left != null) 
                result.add(root.left);
            if (root.right != null)
                result.add(root.right);
            return null;
        }

        return root;
    }
}
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
public class Solution{
    public IList<TreeNode> DelNodes(TreeNode root, int[] to_delete){
        var toDelete = to_delete.ToHashSet();
        var result = new List<TreeNode>();
        DelNodesDfs(ref root, true);
        return result;

        void DelNodesDfs(ref TreeNode node, bool isRoot){
            if (node != null){
                var deleted = toDelete.Contains(node.val);
                DelNodesDfs(ref node.left, deleted);
                DelNodesDfs(ref node.right, deleted);

                if (deleted){
                    node = null;                
                }
                else if (isRoot){
                    result.Add(node);
                }
            }
        }
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
    def delNodes(self, root, to_delete):
        """
        :type root: TreeNode
        :type to_delete: List[int]
        :rtype: List[TreeNode]
        """
        to_delete = set(to_delete)
        res = []
        def postorder(root, is_true):
            if not root:
                return None
            is_delete = root.val in to_delete
            if is_true and not is_delete:
                res.append(root)
            root.left = postorder(root.left, is_delete)
            root.right = postorder(root.right, is_delete)
            return None if is_delete else root

        postorder(root, True)
        return res
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
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int idx;
struct TreeNode** ret;
struct TreeNode* mark(struct TreeNode* root, bool* hash, bool is_root) {
    if (root == NULL)
        return NULL;
    if (is_root && !hash[root->val])
        ret[idx++] = root;
    root->left = mark(root->left, hash, hash[root->val]);
    root->right = mark(root->right, hash, hash[root->val]);
    return (hash[root->val]) ? NULL : (root);
}

struct TreeNode** delNodes(struct TreeNode* root, int* to_delete, int to_deleteSize, int* returnSize) {
    bool* hash = calloc(1001, sizeof(bool));
    for (int i = 0; i < to_deleteSize; i++)
        hash[to_delete[i]] = true;
    ret = calloc(1000, sizeof(struct TreeNode*));
    idx = 0;
    mark(root, hash, true);
    *returnSize = idx;
    return ret;
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
# Code
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int idx;
struct TreeNode** ret;
struct TreeNode* mark(struct TreeNode* root, bool* hash, bool is_root) {
    if (root == NULL)
        return NULL;
    if (is_root && !hash[root->val])
        ret[idx++] = root;
    root->left = mark(root->left, hash, hash[root->val]);
    root->right = mark(root->right, hash, hash[root->val]);
    return (hash[root->val]) ? NULL : (root);
}

struct TreeNode** delNodes(struct TreeNode* root, int* to_delete, int to_deleteSize, int* returnSize) {
    bool* hash = calloc(1001, sizeof(bool));
    for (int i = 0; i < to_deleteSize; i++)
        hash[to_delete[i]] = true;
    ret = calloc(1000, sizeof(struct TreeNode*));
    idx = 0;
    mark(root, hash, true);
    *returnSize = idx;
    return ret;
}
```
![th.jpeg](./images/2.jpeg)

