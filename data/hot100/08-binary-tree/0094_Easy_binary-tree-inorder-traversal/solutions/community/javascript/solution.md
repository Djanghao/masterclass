# 【Video】Recursion and Stack(Bonus) solution

**Author:** niits
**Votes:** 216
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5246912/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5246912/)

---

# Intuition
We should know how to implement inorder, preorder and postorder.

# Approach

---

# Solution Video

https://youtu.be/TKMxiXRzDZ0

\u25A0 Timeline
`0:04` How to implement inorder, preorder and postorder
`1:16` Coding (Recursive)
`2:14` Time Complexity and Space Complexity
`2:37` Explain Stack solution
`7:22` Coding (Stack)
`8:45` Time Complexity and Space Complexity
`8:59` Step by step algorithm with my stack solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,039
Thank you for your support!

---

## How we think about a solution

To be honest, we should know how to implement inorder, preorder and postorder.

```
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

result = []

def inorder(root):
    if not root:
        return []

    inorder(root.left)
    result.append(root.val)
    inorder(root.right)
    return result

def preorder(root):
    if not root:
        return []

    result.append(root.val)
    preorder(root.left)
    preorder(root.right)
    return result

def postorder(root):
    if not root:
        return []

    postorder(root.left)
    postorder(root.right)
    result.append(root.val)
    return result
```

Let's focus on `result.append(root.val)`

---

\u2B50\uFE0F Points

For `Inorder`, we do something `between` left and right.
For `Preorder`, we do something `before` left and right.
For `Postorder`, we do something `after` left and right.

---

We use inorder this time, so do something between left and right.

### \u2B50\uFE0F Questions related to inorder

\u25A0 Find Mode in Binary Search Tree - LeetCode #501

post
https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4233557/give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/0i1Ze62pTuU


\u25A0 Construct Binary Tree from Preorder and Inorder Traversal - LeetCode #105

https://youtu.be/TREbF6S_5qo

---




# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
In the worst case, we have skewed tree.

```python []
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def inorder(root):
            if not root:
                return
            inorder(root.left)
            res.append(root.val)
            inorder(root.right)
        
        inorder(root)
        return res
```
```javascript []
var inorderTraversal = function(root) {
    const res = [];

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;    
};
```
```java []
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();

        inorder(root, res);
        return res;        
    }

    private void inorder(TreeNode node, List<Integer> res) {
        if (node == null) {
            return;
        }
        inorder(node.left, res);
        res.add(node.val);
        inorder(node.right, res);
    }    
}
```
```C++ []
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res;
        inorder(root, res);
        return res;        
    }

private:
    void inorder(TreeNode* node, vector<int>& res) {
        if (!node) {
            return;
        }
        inorder(node->left, res);
        res.push_back(node->val);
        inorder(node->right, res);
    }    
};
```


---



# Bonus - Stack solution

I explain stack solution with visualization in the video above.

```python []
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        stack = []
        
        while root or stack:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            res.append(root.val)
            root = root.right
        
        return res

```
```javascript []
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }

    return res;    
};

```
```java []
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();
            res.add(root.val);
            root = root.right;
        }

        return res;        
    }
}

```
```C++ []
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res;
        stack<TreeNode*> stack;

        while (root != nullptr || !stack.empty()) {
            while (root != nullptr) {
                stack.push(root);
                root = root->left;
            }

            root = stack.top();
            stack.pop();
            res.push_back(root->val);
            root = root->right;
        }

        return res;        
    }
};

```

### Step by step Algorithm of stack solution

1. **Initialization:**
   - Initialize an empty list `res` to store the result (in-order traversal).
   - Initialize an empty stack `stack` for iterative traversal.

    ```python
    res = []
    stack = []
    ```

2. **Traversal Loop:**
   - Start a loop that continues until either the current node (`root`) is not `None` or the stack is not empty.
   - This loop handles both the traversal to the leftmost node and the backtracking to the parent node.

    ```python
    while root or stack:
    ```

3. **Traverse to Leftmost Node:**
   - Within the loop, another nested loop is used to traverse to the leftmost node of the current subtree.
   - During this process, each encountered node is pushed onto the stack.
   - This ensures that we move as far left as possible in the tree.

    ```python
    while root:
        stack.append(root)
        root = root.left
    ```

4. **Pop Node from Stack:**
   - Once we reach the leftmost node (or a leaf node), we pop the last node from the stack. This node is the most recently left-visited node.
   - We assign this node to `root`.

    ```python
    root = stack.pop()
    ```

5. **Append Node Value to Result:**
   - Append the value of the popped node to the result list `res`. This is the in-order traversal order.

    ```python
    res.append(root.val)
    ```

6. **Move to Right Subtree:**
   - Move to the right subtree of the current node. This step is crucial for continuing the in-order traversal.

    ```python
    root = root.right
    ```

7. **End of Loop:**
   - Repeat the loop until all nodes are processed.

8. **Return Result List:**
   - After the traversal is complete, return the final result list `res`.

    ```python
    return res
    ```

This algorithm performs an in-order traversal of a binary tree iteratively using a stack. It mimics the recursive approach but uses a stack to manage the traversal state explicitly. The core idea is to go as left as possible, visit the nodes along the way, backtrack to the parent, and then move to the right subtree. The stack helps in tracking the backtracking process.


---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/transpose-matrix/solutions/4384180/video-give-me-5-minutes-2-solutions-how-we-think-about-a-solution/

video
https://youtu.be/lsAZepsNRPo

\u25A0 Timeline of the video

`0:04` Explain algorithm of Solution 1
`1:12` Coding of solution 1
`2:30` Time Complexity and Space Complexity of solution 1
`2:54` Explain algorithm of Solution 2
`3:49` Coding of Solution 2
`4:53` Time Complexity and Space Complexity of Solution 2
`5:12` Step by step algorithm with my stack solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4376889/video-give-me-7-minutes-recursion-and-stack-solutionbonus-how-we-think-about-a-solution/

video
https://youtu.be/gV7MkiwMDS8

\u25A0 Timeline of the video

`0:05` How we create an output string
`2:07` Coding
`4:30` Time Complexity and Space Complexity
`4:49` Step by step of recursion process
`7:27` Step by step algorithm with my solution code


