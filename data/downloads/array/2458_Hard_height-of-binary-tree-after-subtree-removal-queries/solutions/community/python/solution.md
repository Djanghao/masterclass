# [Tutorial From The Problem Contributor] DFS 1 time converts to a Range Removal Problem

**Author:** never_get_piped
**Votes:** 36
**Link:** [https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5968942/](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5968942/)

---

**Topic** :  DFS

As the **contributor** to this problem, I'd like to share the intended solution that I developed while working through it during my **Google** interview.

**Contributor**:
![image](./images/0.png)

___

## Solution
First, let's consider how to determine the height of a tree **without any removal operations**.
Let `mp2[i]` represent the height of a single node `i`, defined as the number of nodes along the path from the root node to node `i`. The height of the tree is simply the maximum value in the array `mp2`.

When we remove a subtree, we eliminate some values from `mp2`. Consequently, **the height of the remaining tree** will be the **maximum** value among the remaining values in `mp2`.  Is there a way to remove those values from `mp2` elegantly?

Yes, we can assign each node a unique `ID` to represent its value.  **The `ID` will be assigned according to the preorder traversal order of the tree.** Now, `mp2[i]` denotes the number of nodes along the path from the root node to the node with ID `i`.

Let's also calculate the size of each subtree. If we remove a subtree rooted at `u`, this means we remove all IDs from `ID[u]` to `ID[u] + subtreeSize[u] - 1` consecutively. By removing a consecutive range from `mp2`, we can easily compute the maximum value among the remaining elements.

We have an array `left[i]` that represents the maximum value of `mp2` from index `0` to `i`, and an array `right[i]` that represents the maximum value of `mp2` from index `i` to the end. If we remove a range `[l : r]` from `mp2`, the answer will simply be `max(left[l - 1], right[r + 1])`.


<br/><br/>

```c++
class Solution {
public:
    unordered_map<int, int> mp1, mp2, sz;
    int id = 0;
    vector<int> treeQueries(TreeNode* root, vector<int>& q) {
        vector<int> ans;
        dfs(root, 0);
        
        vector<int> left(id), right(id);
        for(int i = 0; i < left.size(); i++) {
            left[i] = mp2[i];
            if(i) left[i] = max(left[i - 1], left[i]);
        }
        
        for(int i = right.size() - 1; i >= 0; i--) {
            right[i] = mp2[i];
            if(i + 1 < right.size()) right[i] = max(right[i], right[i + 1]);
        }
        
        for(int i = 0; i < q.size(); i++) {
            int nodeid = mp1[q[i]];
            int l = nodeid, r = l + sz[nodeid] - 1;
            int h = 0;
            if(l > 0) h = max(h, left[l - 1]);
            if(r + 1 < right.size()) h = max(h, right[r + 1]);
            ans.push_back(h);
        }
        return ans;
    }
    
    int dfs(TreeNode* root, int h) { //return the size of the subtree
        if(root == NULL) {
            return 0;
        }
        mp1[root -> val] = id;
        mp2[id] = h;
        id++;
        int lz = dfs(root -> left, h + 1);
        int rz = dfs(root -> right, h + 1);
        sz[mp1[root -> val]] = (1 + lz + rz);
        return 1 + lz + rz;
    }
};
```

```java
class Solution {
    Map<Integer, Integer> mp1 = new HashMap<>(), mp2 = new HashMap<>(), sz = new HashMap<>();
    int id = 0;
    public int[] treeQueries(TreeNode root, int[] q) {
        int[] ans = new int[q.length];
        dfs(root, 0);
        
        int[] left = new int[id];
        int[] right = new int[id];
        for (int i = 0; i < id; i++) {
            left[i] = mp2.get(i);
            if (i > 0) left[i] = Math.max(left[i - 1], left[i]);
        }
        
        for (int i = id - 1; i >= 0; i--) {
            right[i] = mp2.get(i);
            if (i + 1 < id) right[i] = Math.max(right[i], right[i + 1]);
        }
        
        for (int i = 0; i < q.length; i++) {
            int nodeId = mp1.get(q[i]);
            int l = nodeId, r = l + sz.get(nodeId) - 1;
            int h = 0;
            if (l > 0) h = Math.max(h, left[l - 1]);
            if (r + 1 < id) h = Math.max(h, right[r + 1]);
            ans[i] = h;
        }
        return ans;
    }
    
    private int dfs(TreeNode root, int h) {
        if (root == null) {
            return 0;
        }
        mp1.put(root.val, id);
        mp2.put(id, h);
        id++;
        int lz = dfs(root.left, h + 1);
        int rz = dfs(root.right, h + 1);
        sz.put(mp1.get(root.val), 1 + lz + rz);
        return 1 + lz + rz;
    }
}
```

```python
class Solution:
    def __init__(self):
        self.mp1 = {}
        self.mp2 = {}
        self.sz = {}
        self.id = 0
    
    def treeQueries(self, root: Optional[TreeNode], q: List[int]) -> List[int]:
        self.dfs(root, 0)
        left = [0] * self.id
        right = [0] * self.id
        
        for i in range(self.id):
            left[i] = self.mp2[i]
            if i > 0:
                left[i] = max(left[i - 1], left[i])
        
        for i in range(self.id - 1, -1, -1):
            right[i] = self.mp2[i]
            if i + 1 < self.id:
                right[i] = max(right[i], right[i + 1])
        
        ans = []
        for node in q:
            nodeid = self.mp1[node]
            l, r = nodeid, nodeid + self.sz[nodeid] - 1
            h = 0
            if l > 0:
                h = max(h, left[l - 1])
            if r + 1 < self.id:
                h = max(h, right[r + 1])
            ans.append(h)
        
        return ans
    
    def dfs(self, root: Optional[TreeNode], h: int) -> int:
        if not root:
            return 0
        self.mp1[root.val] = self.id
        self.mp2[self.id] = h
        self.id += 1
        lz = self.dfs(root.left, h + 1)
        rz = self.dfs(root.right, h + 1)
        self.sz[self.mp1[root.val]] = 1 + lz + rz
        return 1 + lz + rz
        
```


**Complexity**:
* Time Complexity : `O(n)`.
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**