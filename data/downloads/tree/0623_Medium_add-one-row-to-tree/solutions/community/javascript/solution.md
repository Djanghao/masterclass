# JS, Python, Java, C++ | Simple Recursive Solution w/ Explanation

**Author:** sgallivan
**Votes:** 50
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/1101083/](https://leetcode.com/problems/add-one-row-to-tree/solutions/1101083/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

We could definitely solve this a number of ways, but I'm always partial to **recursion** when possible, especially when you can simply recurse the main function rather than having to define a separate recursive helper function. The recursive route is a **depth-first search** (**DFS**) **solution**.

We can use the depth variable (**d**) as a countdown of sorts, decrementing it as we traverse downward through the tree until we get to our destination row. Since we're going to need to attach the new nodes at **d** to their parents, we should actually perform our operations when **d = 2**, rather than **d = 1**, so that we have access to the parent node.

This also allows us to deal with the sticky edge case of when the original value of **d** is **1**. Since no parent exists for the original **root**, we'll have to just create our new node and attach the **root** to it before **returning**. This can only ever happen on the initial function call, as otherwise we will never reach **d = 1** in any later recursion.

The function will **return** the node each recursion, but since we're not doing anything with the return value when the the function is called internally, it will only really be meaningful on the original function call.

This works because we're passing **node references** through the recursion, so the tree object is being modified regardless of return values.

---

#### ***Implementation:***

The code is almost identical between all four languages.

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 44.5MB** (beats 100% / 80%).
```javascript
var addOneRow = function(root, v, d) {
    if (d === 1) return new TreeNode(v, root, null)
    if (d === 2) {
        root.left = new TreeNode(v, root.left, null)
        root.right = new TreeNode(v, null, root.right)
    } else {
        if (root.left) addOneRow(root.left, v, d-1)
        if (root.right) addOneRow(root.right, v, d-1)
    }
    return root
};
```

---

#### ***Python Code:***

The best result for the code below is **40ms / 16.8MB** (beats 99% / 50%).
```python
class Solution:
    def addOneRow(self, root: TreeNode, v: int, d: int) -> TreeNode:
        if d == 1: return TreeNode(v, root, None)
        elif d == 2:
            root.left = TreeNode(v, root.left, None)
            root.right = TreeNode(v, None, root.right)
        else:
            if root.left: self.addOneRow(root.left, v, d-1)
            if root.right: self.addOneRow(root.right, v, d-1)
        return root
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 38.6MB** (beats 100% / 92%).
```java
class Solution {
    public TreeNode addOneRow(TreeNode root, int v, int d) {
        if (d == 1) return new TreeNode(v, root, null);
        else if (d == 2) {
            root.left = new TreeNode(v, root.left, null);
            root.right = new TreeNode(v, null, root.right);
        } else {
            if (root.left != null) addOneRow(root.left, v, d-1);
            if (root.right != null) addOneRow(root.right, v, d-1);
        }
        return root;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **12ms / 24.8MB** (beats 99% / 89%).
```c++
class Solution {
public:
    TreeNode* addOneRow(TreeNode* root, int v, int d) {
        if (d == 1) return new TreeNode(v, root, NULL);
        else if (d == 2) {
            root->left = new TreeNode(v, root->left, NULL);
            root->right = new TreeNode(v, NULL, root->right);
        } else {
            if (root->left) addOneRow(root->left, v, d-1);
            if (root->right) addOneRow(root->right, v, d-1);
        }
        return root;
    }
};
```