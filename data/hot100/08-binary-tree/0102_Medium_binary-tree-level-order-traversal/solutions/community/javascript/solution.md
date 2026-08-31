# JS, Python, Java, C++ | Easy BFS Queue Solution w/ Explanation

**Author:** sgallivan
**Votes:** 114
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1219328/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1219328/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

A binary tree level order traversal generally recommends a **breadth first search** (**BFS**) approach with the use of a **queue** data structure. When we process a node (**curr**), we'll push the node's children onto the end of the **queue** in the order in which we want to traverse (in this case, left to right). In this way, we'll have finished putting the next row in the **queue** at the same time we finish iterating through this row.

To help us keep track of the rows, we just nest the main loop inside another loop. At the beginning of the outer loop, we capture the **queue** length, which will tell us how long the row is. Then we can iterate through that many nodes, popping them off the **queue**'s front one at a time, then process any end-of-row instructions. In the case of this problem, that will mean pushing the current row array (**row**) onto our answer array (**ans**).

We'll continue this process until the **queue** is empty, at which point we will have reached the end of the binary tree, and can **return ans**.

 - _**Time Complexity: O(N)** where **N** is the number of nodes in the binary tree_
 - _**Space Complexity: O(N)** for our answer array_

---

#### ***Javascript Code:***
```javascript
var levelOrder = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)            
    }
    return ans
};
```

---

#### ***Python Code:***
```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        queue, ans = deque([root] if root else []), []
        while len(queue):
            qlen, row = len(queue), []
            for _ in range(qlen):
                curr = queue.popleft()
                row.append(curr.val)
                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
            ans.append(row)
        return ans
```

---

#### ***Java Code:***
```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if (root == null) return ans;
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int qlen = queue.size();
            List<Integer> row = new ArrayList<>();
            for (int i = 0; i < qlen; i++) {
                TreeNode curr = queue.poll();
                row.add(curr.val);
                if (curr.left != null) queue.add(curr.left);
                if (curr.right != null) queue.add(curr.right);
            }
            ans.add(row);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        if (!root) return ans;
        deque<TreeNode*> queue;
        queue.push_back(root);
        while (!queue.empty()) {
            int qlen = queue.size();
            vector<int> row;
            for (int i = 0; i < qlen; i++) {
                TreeNode* curr = queue.front();
                queue.pop_front();
                row.push_back(curr->val);
                if (curr->left) queue.push_back(curr->left);
                if (curr->right) queue.push_back(curr->right);
            }
            ans.push_back(row);
        }
        return ans;
    }
};
```