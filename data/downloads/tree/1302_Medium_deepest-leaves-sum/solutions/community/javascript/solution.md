# JS, Python, Java, C++ | Easy BFS or Recursive DFS Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 71
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/1152922/](https://leetcode.com/problems/deepest-leaves-sum/solutions/1152922/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

When asked to find information about a particular row of a **binary tree**, the normal thought is to use a **breadth-first search** (**BFS**) approach. A BFS approach usually involves the use of a **queue** data structure (**q**) so that we deal with the nodes of the tree in the proper order.

The trick is to deal with a single row at a time by making note of the length of the queue (**qlen**) when we start the row. Once we've processed that many nodes, we know we've just finished the current row and any remaining entries in **q** are from the next row. This can be accomplished easily with a nested loop. 

In this case, processing a node simply means accumulating the running total (**ans**) for the row and then moving any children of the node onto the end of the queue.

When we start a new row, we can reset **ans** back to **0**, and then just keep processing rows until **q** is empty. The last value of **ans** should be our final answer, so we should **return ans**.

***Alternately***, we can use a **depth-first search** (**DFS**) approach with **recursion** to traverse the binary tree. If we pass the row depth (**lvl**) as an argument to our recursive function (**dfs**), we can use it to update the values in an array of row sums (**sums**) by using **lvl** as an index (**sums[lvl]**). Then we can simply **return** the last value of **sums** as our answer.

---

#### ***Javascript Code w/ BFS:***
```javascript
var deepestLeavesSum = function(root) {
    let q = [root], ans, qlen, curr
    while (q.length) {
        qlen = q.length, ans = 0
        for (let i = 0; i < qlen; i++) {
            curr = q.shift(), ans += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
    }
    return ans
};
```

---

#### ***Javascript Code w/ Recursive DFS:***
```javascript
var deepestLeavesSum = function(root) {
    let sums = []
    const dfs = (node, lvl) => {
        if (lvl === sums.length) sums[lvl] = node.val
        else sums[lvl] += node.val
        if (node.left) dfs(node.left, lvl+1)
        if (node.right) dfs(node.right, lvl+1)
    }
    dfs(root, 0)
    return sums[sums.length-1]
};
```

---

#### ***Python Code w/ BFS:***
```python
class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        q, ans, qlen, curr = [root], 0, 0, 0
        while len(q):
            qlen, ans = len(q), 0
            for _ in range(qlen):
                curr = q.pop(0)
                ans += curr.val
                if curr.left: q.append(curr.left)
                if curr.right: q.append(curr.right)
        return ans
```

---

#### ***Python Code w/ Recursive DFS:***
```python
class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        sums = []
        def dfs(node: TreeNode, lvl: int):
            if lvl == len(sums): sums.append(node.val)
            else: sums[lvl] += node.val
            if node.left: dfs(node.left, lvl+1)
            if node.right: dfs(node.right, lvl+1)
        dfs(root, 0)
        return sums[-1]
```

---

#### ***Java Code w/ BFS:***
```java
class Solution {
    public int deepestLeavesSum(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        int ans = 0, qlen = 0;
        while (q.size() > 0) {
            qlen = q.size();
            ans = 0;
            for (int i = 0; i < qlen; i++) {
                TreeNode curr = q.poll();
                ans += curr.val;
                if (curr.left != null) q.add(curr.left);
                if (curr.right != null) q.add(curr.right);
            }
        }
        return ans;
    }
}
```

---

#### ***Java Code w/ Recursive DFS:***
```java
class Solution {
    List<Integer> sums = new ArrayList<>();
    public int deepestLeavesSum(TreeNode root) {
        dfs(root, 0);
        return sums.get(sums.size()-1);
    }
    public void dfs(TreeNode node, int lvl) {
        if (lvl == sums.size()) sums.add(node.val);
        else sums.set(lvl, sums.get(lvl) + node.val);
        if (node.left != null) dfs(node.left, lvl+1);
        if (node.right != null) dfs(node.right, lvl+1);
    }
}
```

---

#### ***C++ Code w/ BFS:***
```c++
class Solution {
public:
    int deepestLeavesSum(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int ans = 0, qlen = 0;
        while (q.size() > 0) {
            qlen = q.size(), ans = 0;
            for (int i = 0; i < qlen; i++) {
                TreeNode* curr = q.front(); q.pop();
                ans += curr->val;
                if (curr->left) q.push(curr->left);
                if (curr->right) q.push(curr->right);
            }
        }
        return ans;
    }
};
```

---

#### ***C++ Code w/ Recursive DFS:***
```c++
class Solution {
public:
    vector<int> sums;
    int deepestLeavesSum(TreeNode* root) {
        dfs(root, 0);
        return sums.back();
    }
    void dfs(TreeNode* node, int lvl) {
        if (lvl == sums.size()) sums.push_back(node->val);
        else sums[lvl] += node->val;
        if (node->left) dfs(node->left, lvl+1);
        if (node->right) dfs(node->right, lvl+1);
    }
};
```