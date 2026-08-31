# 100 % || 0MS || SIMPLE || EXPLANED || CONCISE CODE || MEME

**Author:** ManojKumarPatnaik
**Votes:** 7
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/2039759/](https://leetcode.com/problems/deepest-leaves-sum/solutions/2039759/)

---

**PLEASE UPVOTE**
```
Explanation
pre are nodes in the previous level.
q are node in the current level.

When current level are empty,
the previous level are the deepest leaves.



```
    def deepestLeavesSum(self, root):
        q = [root]
        while q:
            pre, q = q, [child for p in q for child in [p.left, p.right] if child]
        return sum(node.val for node in pre)
```

This is a Java method that takes a binary tree root as input and returns the sum of the values of its deepest leaves. Here's a step-by-step explanation of how the method works:

Initialize the result res to 0 and create a new LinkedList q to store the nodes of the tree. Add the root node to the queue.
int res = 0, i;
LinkedList<TreeNode> q = new LinkedList<TreeNode>();
q.add(root);
While the queue is not empty, iterate over the nodes at the current level of the tree. For each node, add its value to the result res, and add its child nodes to the queue in reverse order (i.e., right child first, then left child).
while (!q.isEmpty()) {
    for (i = q.size() - 1, res = 0; i >= 0; --i) {
        TreeNode node = q.poll();
        res += node.val;
        if (node.right != null) q.add(node.right);
        if (node.left  != null) q.add(node.left);
    }
}
At the end of each iteration, the nodes in the queue are the child nodes of the nodes at the next level of the tree. Repeat step 2 until the queue is empty.

Finally, return the result res, which should contain the sum of the values of the deepest leaves of the tree.

In summary, this method uses a breadth-first search (BFS) algorithm to traverse the tree level by level, starting from the root node. At each level, it computes the sum of the values of the nodes and adds their child nodes to the queue for the next level. When the algorithm reaches the deepest level of the tree, the result res should contain the sum of the values of its leaf nodes.

Java

    public int deepestLeavesSum(TreeNode root) {
        int res = 0, i;
        LinkedList<TreeNode> q = new LinkedList<TreeNode>();
        q.add(root);
        while (!q.isEmpty()) {
            for (i = q.size() - 1, res = 0; i >= 0; --i) {
                TreeNode node = q.poll();
                res += node.val;
                if (node.right != null) q.add(node.right);
                if (node.left  != null) q.add(node.left);
            }
        }
        return res;
    }
C++

    int deepestLeavesSum(TreeNode* root) {
        int res = 0, i;
        queue<TreeNode*> q;
        q.push(root);
        while (q.size()) {
            for (i = q.size() - 1, res = 0; i >= 0; --i) {
                TreeNode* node = q.front(); q.pop();
                res += node->val;
                if (node->right) q.push(node->right);
                if (node->left)  q.push(node->left);
            }
        }
        return res;
    }
```
```javascript []
function deepestLeavesSum(root) {
    let res = 0;
    let q = [root];
    while (q.length) {
        let size = q.length;
        res = 0;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            res += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return res;
}
```
```php []
function deepestLeavesSum($root) {
    $res = 0;
    $q = array($root);
    while (count($q)) {
        $size = count($q);
        $res = 0;
        for ($i = 0; $i < $size; $i++) {
            $node = array_shift($q);
            $res += $node->val;
            if ($node->left) array_push($q, $node->left);
            if ($node->right) array_push($q, $node->right);
        }
    }
    return $res;
}
```
This is a Python method that takes a binary tree root as input and returns the sum of the values of its deepest leaves. Here's a step-by-step explanation of how the method works:

Initialize a list q with the root node root. This list will be used to store the nodes of the tree.
q = [root]
While the list q is not empty, repeat the following steps: a. Set pre to the current value of q. This will be used to keep track of the nodes at the previous level of the tree. b. Set q to a new list that contains the child nodes of all the nodes in pre that are not None. This is done using a list comprehension that iterates over each node p in pre, and for each non-None child child of p, adds child to the new list.
while q:
    pre, q = q, [child for p in q for child in [p.left, p.right] if child]
At the end of each iteration, the nodes in the list pre are the nodes at the previous level of the tree, and the nodes in the list q are the child nodes of the nodes at the next level of the tree. Repeat step 2 until the list q is empty.

Finally, compute the sum of the values of the nodes in the list pre, and return this value as the result.

return sum(node.val for node in pre)
In summary, this method uses a breadth-first search (BFS) algorithm to traverse the tree level by level, starting from the root node. At each level, it computes the child nodes of the nodes at the current level, and uses these child nodes to update the list of nodes for the next level. When the algorithm reaches the deepest level of the tree, the sum of the values of the nodes at the previous level should contain the sum of the values of its leaf nodes.



Complexity
Time O(N)
Space O(N)

![image](./images/0.jpeg)
