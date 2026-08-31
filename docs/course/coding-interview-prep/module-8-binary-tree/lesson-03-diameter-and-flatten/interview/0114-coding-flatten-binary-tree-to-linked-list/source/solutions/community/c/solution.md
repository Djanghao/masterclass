# JS, Python, Java, C++ | Simple O(1) Space & Recursive Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 324
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/1207642/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/1207642/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

***Morris Traversal (O(1) Space, O(N) Time) Approach:***

There _is_ actually a way to traverse a binary tree with a **space complexity** of **O(1)** while staying at a **time complexity** of **O(N)**, though it does require modifying the tree's structure. In this problem that's specifically being called for, so it's a valid approach, though it won't always be appropriate to modify the source binary tree in other situations.

The approach is called the **Morris traversal**. At its heart, it takes advantage of the basic nature of ordered traversals to iterate through and unwind the tree. In a **pre-order traversal** of a binary tree, each vertex is processed in **(node, left, right)** order. This means that the entire left subtree could be placed between the node and its right subtree.

To do this, however, we'll first have to locate the last node in the left subtree. This is easy enough, since we know that the last node of a pre-order tree can be found by moving right as many times as possible from its root.

So we should be able to move through the binary tree, keeping track of the curent node (**curr**). Whenever we find a left subtree, we can dispatch a **runner** to find its last node, then stitch together both ends of the left subtree into the right path of **curr**, taking heed to sever the left connection at **curr**.

Once that's done, we can continue to move **curr** to the right, looking for the next left subtree. When **curr** can no longer move right, the tree will be successfully flattened.

![Morris Traversal Visual](https://i.imgur.com/sqnrz9m.gif)

 - _**Time Complexity: O(N)** where **N** is the number of **nodes** in the binary tree_
 - _**Space Complexity: O(1)**_

---

***O(1) Space Approach:***

In order to properly connect the **linked list**, we'll need to start at the bottom and work up. This means that we'll need to move in _reverse_ **pre-order traversal** order through the **binary tree**. Since pre-order traversal is normally **"node, left, right"**, we'll have to move in the reverse order of **"right, left, node"**.

In order to complete this solution in **O(1) space**, we won't be able to conveniently backtrack via a **stack**, so the key to this solution will be to retreat all the way back up to the **root** each time we reach a leaf. This will push the **time complexity** to **O(N^2)**.

We'll want to first set up **head** and **curr** to keep track of the head of the linked list we're building and the current node we're visiting. We'll know we're finished once **head = root**.

To follow the reverse pre-order traversal order, we'll first attempt to go right and then left. Since we're backtracking to **root**, however, we'll eventually run back into the same node that we've set as **head** doing this. To prevent this, we'll stop _before_ moving to the **head** node and sever the connection.

Now that we can't run into already-completed territory, we can be confident that any leaf we move to must be the next value for **head**, so we should connect it to the old **head**, update **head**, and reset back to the **root**.

As noted before, once **head = root**, we've finished our traversal and can exit the function.

 - _**Time Complexity: O(N^2)** where **N** is the number of **nodes** in the binary tree, due to repeated backtracking to root_
 - _**Space Complexity: O(1)**_

---

***Recursive Approach:***

In order to properly connect the **linked list**, we'll need to start at the bottom and work up. This means that we'll need to move in _reverse_ **pre-order traversal** order through the **binary tree**. Since pre-order traversal is normally **"node, left, right"**, we'll have to move in the reverse order of **"right, left, node"**.

Binary tree traversal is prime ground for a **recursive** solution, so let's define a helper (**revPreOrder**) for the purpose. We'll also keep a global variable **head** to keep track of the head of the linked list as we work our way backwards.

Per our reverse pre-order traversal approach, we want to recursively work down the right path first then the left path, if they exist. Once we've flattened the left and right paths recursively, **head** should at this point be equal to the next node after the current one, so we should set it as **node.right**. We shouldn't forget to set **node.left** to **null**, as well.

Once we're done with the current node, we can update **head** to **node** and allow the recursion to complete and move back up to the next layer. Once the recursion stack is exhausted, **head** will be equal to **root** again.

Lastly, we have to deal with an edge case of an empty **root**, so we can just make sure to only call the initial recursion on **root** if **root** actually is a node. There is no need for a **return** statement, because the test suite will evaluate **root** directly.

 - _**Time Complexity: O(N)** where **N** is the number of **nodes** in the binary tree_
 - _**Space Complexity: O(N)** for the **recursion stack**, which is as long as the maximum depth of the binary tree, which can go up to **N**_

---

#### ***Javascript Code:***

##### ***w/ Morris Traversal:***

The best result for the code below is **84ms / 40.6MB** (beats 96% / 66%).
```javascript
var flatten = function(root) {
    let curr = root
    while (curr) {
        if (curr.left) {
            let runner = curr.left
            while (runner.right) runner = runner.right
            runner.right = curr.right, curr.right = curr.left, curr.left = null
        }
        curr = curr.right
    }
};
```

##### ***w/ O(1) Space:***

The best result for the code below is **80ms / 40.6MB** (beats 98% / 66%).
```javascript
var flatten = function(root) {
    let head = null, curr = root
    while (head != root) {
        if (curr.right === head) curr.right = null
        if (curr.left === head) curr.left = null
        if (curr.right) curr = curr.right
        else if (curr.left) curr = curr.left
        else curr.right = head, head = curr, curr = root
    }
};
```

##### ***w/ Recursion:***

The best result for the code below is **84ms / 40.6MB** (beats 96% / 66%).
```javascript
var flatten = function(root) {
    let head = null
    const revPreOrder = node => {
        if (node.right) revPreOrder(node.right)
        if (node.left) revPreOrder(node.left)
        node.left = null, node.right = head, head = node
    }
    if (root) revPreOrder(root)
};
```

---

#### ***Python Code:***

##### ***w/ Morris Traversal:***

The best result for the code below is **32ms / 15.0MB** (beats 92% / 91%).
```python
class Solution:
    def flatten(self, root: TreeNode) -> None:
        curr = root
        while curr:
            if curr.left:
                runner = curr.left
                while runner.right: runner = runner.right
                runner.right, curr.right, curr.left = curr.right, curr.left, None
            curr = curr.right
```

##### ***w/ O(1) Space:***

The best result for the code below is **32ms / 15.0MB** (beats 92% / 91%).
```
class Solution:
    def flatten(self, root: TreeNode) -> None:
        head, curr = None, root
        while head != root:
            if curr.right == head: curr.right = None
            if curr.left == head: curr.left = None
            if curr.right: curr = curr.right
            elif curr.left: curr = curr.left
            else: curr.right, head, curr = head, curr, root
```

##### ***w/ Recursion:***

The best result for the code below is **28ms / 14.9MB** (beats 98% / 98%).
```python
class Solution:
    head = None
    def flatten(self, root: TreeNode) -> None:
        def revPreOrder(node: TreeNode) -> None:
            if node.right: revPreOrder(node.right)
            if node.left: revPreOrder(node.left)
            node.left, node.right, self.head = None, self.head, node
        if root: revPreOrder(root)
```

---

#### ***Java Code:***

##### ***w/ Morris Traversal:***

The best result for the code below is **0ms / 37.9MB** (beats 100% / 98%).
```java
class Solution {
    public void flatten(TreeNode root) {
        TreeNode curr = root;
        while (curr != null) {
            if (curr.left != null) {
                TreeNode runner = curr.left;
                while (runner.right != null) runner = runner.right;
                runner.right = curr.right;
                curr.right = curr.left;
                curr.left = null;
            }
            curr = curr.right;
        }
    }
}
```

##### ***w/ O(1) Space:***

The best result for the code below is **0ms / 37.9MB** (beats 100% / 98%).
```
class Solution {
    public void flatten(TreeNode root) {
        TreeNode head = null, curr = root;
        while (head != root) {
            if (curr.right == head) curr.right = null;
            if (curr.left == head) curr.left = null;
            if (curr.right != null) curr = curr.right;
            else if (curr.left != null) curr = curr.left;
            else {
                curr.right = head;
                head = curr;
                curr = root;
            }
        }
    }
}
```

##### ***w/ Recursion:***

The best result for the code below is **0ms / 38.0MB** (beats 100% / 98%).
```java
class Solution {
    TreeNode head = null;
    public void flatten(TreeNode root) {
        if (root != null) revPreOrder(root);
    }
    private void revPreOrder(TreeNode node) {
        if (node.right != null) revPreOrder(node.right);
        if (node.left != null) revPreOrder(node.left);
        node.left = null;
        node.right = head;
        head = node;
    }
}
```

---

#### ***C++ Code:***

##### ***w/ Morris Traversal:***

The best result for the code below is **0ms / 12.6MB** (beats 100% / 95%).
```c++
class Solution {
public:
    void flatten(TreeNode* root) {
        TreeNode* curr = root;
        while (curr) {
            if (curr->left) {
                TreeNode* runner = curr->left;
                while (runner->right != nullptr) runner = runner->right;
                runner->right = curr->right, curr->right = curr->left, curr->left = nullptr;
            }
            curr = curr->right;
        }
    }
};
```

##### ***w/ O(1) Space:***

The best result for the code below is **0ms / 12.6MB** (beats 100% / 95%).
```
class Solution {
public:
    void flatten(TreeNode* root) {
        TreeNode *head = nullptr, *curr = root;
        while (head != root) {
            if (curr->right == head) curr->right = nullptr;
            if (curr->left == head) curr->left = nullptr;
            if (curr->right) curr = curr->right;
            else if (curr->left) curr = curr->left;
            else curr->right = head, head = curr, curr = root;
        }
    }
};
```

##### ***w/ Recursion:***

The best result for the code below is **0ms / 12.6MB** (beats 100% / 95%).
```c++
class Solution {
public:
    void flatten(TreeNode* root) {
        if (root) revPreOrder(root);
    }
private:
    TreeNode* head = nullptr;
    void revPreOrder(TreeNode* node) {
        if (node->right) revPreOrder(node->right);
        if (node->left) revPreOrder(node->left);
        node->left = nullptr, node->right = head, head = node;
    }
};
```