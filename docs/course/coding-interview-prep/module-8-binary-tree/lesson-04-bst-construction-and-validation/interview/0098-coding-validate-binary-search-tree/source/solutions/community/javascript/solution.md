# 【Video】Check range of each node.

**Author:** niits
**Votes:** 201
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/5622933/](https://leetcode.com/problems/validate-binary-search-tree/solutions/5622933/)

---

# Intuition
Check range of each node.

# Solution Video

https://youtu.be/PITUkhnuWHQ

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,384
Thank you for your support!

---

# Approach

```
        10
       /  \\
      8    15
          /  \\
         12  18
```

Let's think about possible range of root value. It's easy right?

```
8 < root(= 10) < 15
```
But problem is we don't konw what number is minimum and maximum in algorithm, so my strategy is to put infinity numbers.

```
negative infinity < root < infinity
```
In that case, we can put any number at root node.

Let's think about range of each node.

```
10 \u2192 -i < 10 < i
 8 \u2192 -i <  8 < 10
15 \u2192 10 < 15 < i
12 \u2192 10 < 12 < 15
18 \u2192 15 < 18 < i

i is infinity
```
If we meet all condition, we can say this is valid binary search tree.

Let's separate like this.

```
Go Left
 8 \u2192 -i <  8 < 10
12 \u2192 10 < 12 < 15

Go Right
15 \u2192 10 < 15 < i
18 \u2192 15 < 18 < i

```

---

\u2B50\uFE0F Points

When we go left, update maxinum value only. A minimum number will be the same number from parent.

On the other hand, when we go right, update minimum number only. A maxinum number will be the same number from parent.

---

At each node, we check the range and if we reach `null`, that path is valid binary serach tree.

Easy!\uD83D\uDE04
Let's see solution codes!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node, minimum, maximum):
            if not node:
                return True
            
            if not (node.val > minimum and node.val < maximum):
                return False
            
            return valid(node.left, minimum, node.val) and valid(node.right, node.val, maximum)
        
        return valid(root, float("-inf"), float("inf"))
```
```javascript []
var isValidBST = function(root) {
    function valid(node, minimum, maximum) {
        if (!node) return true;

        if (!(node.val > minimum && node.val < maximum)) return false;

        return valid(node.left, minimum, node.val) && valid(node.right, node.val, maximum);
    }

    return valid(root, -Infinity, Infinity);    
};
```
```java []
class Solution {
    public boolean isValidBST(TreeNode root) {
        return valid(root, Long.MIN_VALUE, Long.MAX_VALUE);        
    }

    private boolean valid(TreeNode node, long minimum, long maximum) {
        if (node == null) return true;

        if (!(node.val > minimum && node.val < maximum)) return false;

        return valid(node.left, minimum, node.val) && valid(node.right, node.val, maximum);
    }    
}
```
```C++ []
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return valid(root, LONG_MIN, LONG_MAX);        
    }

private:
    bool valid(TreeNode* node, long minimum, long maximum) {
        if (!node) return true;

        if (!(node->val > minimum && node->val < maximum)) return false;

        return valid(node->left, minimum, node->val) && valid(node->right, node->val, maximum);
    }    
};
```

# Step by Step Algorithm

### 1. Helper Function Definition
```python
def valid(node, minimum, maximum):
```
- The `valid` function is a helper function used to validate the Binary Search Tree (BST).
- It takes three arguments:
  - `node`: The current node being checked.
  - `minimum`: The minimum allowable value for the current node.
  - `maximum`: The maximum allowable value for the current node.

### 2. Base Case: Check for Null Node
```python
if not node:
    return True
```
- This base case checks if the current `node` is `None` (i.e., we've reached a leaf's child or the tree is empty).
- If `node` is `None`, the function returns `True`, indicating that this part of the tree is valid (a null tree is considered a valid BST).

### 3. Value Range Check
```python
if not (node.val > minimum and node.val < maximum):
    return False
```
- This condition checks if the current node's value is within the valid range (`minimum < node.val < maximum`).
- If `node.val` is not within the range, the function returns `False`, indicating that the tree is not a valid BST.
- This ensures that all nodes in the left subtree are less than the current node and all nodes in the right subtree are greater.

### 4. Recursive Calls for Subtrees
```python
return valid(node.left, minimum, node.val) and valid(node.right, node.val, maximum)
```
- This line makes two recursive calls to check the left and right subtrees of the current node:
  - `valid(node.left, minimum, node.val)`: This checks the left subtree, ensuring that all nodes in the left subtree are less than the current node's value (`node.val`).
  - `valid(node.right, node.val, maximum)`: This checks the right subtree, ensuring that all nodes in the right subtree are greater than the current node's value (`node.val`).
- The `and` operator ensures that both the left and right subtrees must be valid for the current subtree to be considered valid.

### 5. Initial Call to `valid`
```python
return valid(root, float("-inf"), float("inf"))
```
- The `valid` function is initially called with the root node of the tree and the initial range of values (`float("-inf")` to `float("inf")`).
- This means the root node has no restrictions on its value other than being within the range of negative infinity to positive infinity.

### Summary
The algorithm checks whether each node in the tree adheres to the BST property by ensuring that the node's value is within a specific range, and then recursively validates the left and right subtrees within updated ranges. If all nodes satisfy the BST conditions, the tree is considered a valid BST, and the function returns `True`; otherwise, it returns `False`.


---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F Other binary search tree problem - #700 Search in a Binary Search Tree

https://youtu.be/kPcYYCbUUEA
