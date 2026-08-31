# 【Video】Swap left child and right child

**Author:** niits
**Votes:** 317
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/5513149/](https://leetcode.com/problems/invert-binary-tree/solutions/5513149/)

---

# Intuition

Swap left child and right child if current node is not null

# Solution Video

https://youtu.be/0Fy-Lz231UE

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,710
Thank you for your support!

---

# Approach
```
       4
     /   \\
    2     7
   / \\   / \\
  1   3 6   9

```
We start from root node(= 4). First of all, check if current node is null or not.

If not, Swap left child and right child. Now the tree should be
```
       4
     /   \\
    7     2
   / \\   / \\
  6   9 1   3
```
Move to left side. Now we are at `node 7`. Check if current node is null or not. It's not null, so swap left child(= `node 6`) and right child(= `node 9`)

```
       4
     /   \\
    7     2
   / \\   / \\
  9   6 1   3
```
Move to left side. Now we are at `node 9` and check if current node is null or not. It's not null, so swap left child(= null) and right child(= null). Now we have the same tree above.

Move to left side. Now we are at `null node`, so go back to `node 9` and move to right side. Now we are at `null node`, so go back to `node 9`. We already checked `node 9`, so go back to `node 7`, Move to right slide. Now we are at `node 6`.

Let me skip explantion from `node 6`, because nothing will happen.

After that, go back to `node 7` and go back to `node 4`, then go to right side. Now we are at `node 2`. Current node is not null, so swap left child(= `node 1`) and right child(= `node 3`).

```
       4
     /   \\
    7     2
   / \\   / \\
  9   6 3   1
```
Then move to left side. Now we are at `node 3`.

Let me skip rest of explanation. Nothing will happen. In the end, go back to `node 4` and finish traversing all node.

We should return 

```
       4
     /   \\
    7     2
   / \\   / \\
  9   6 3   1
```

Easy!\uD83D\uDE06
Let's see solution codes and step by step algorithm!

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
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    
        if not root:
            return
        
        temp = root.left
        root.left = root.right
        root.right = temp

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```
```javascript []
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;      
};
```
```java []
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
        
        invertTree(root.left);
        invertTree(root.right);
        
        return root;        
    }
}
```
```C++ []
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == nullptr) {
            return nullptr;
        }
        
        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;
        
        invertTree(root->left);
        invertTree(root->right);
        
        return root;        
    }
};
```

# Step by Step Algorithm

1. **Base Case**:
   ```python
   if not root:
       return
   ```
   - Check if the `root` is `None`. If it is, return `None`. This is the base case for the recursion, which handles empty subtrees.

2. **Swap Left and Right Children**:
   ```python
   temp = root.left
   root.left = root.right
   root.right = temp
   ```
   - Store the left child of the current node (`root.left`) in a temporary variable `temp`.
   - Assign the right child of the current node (`root.right`) to the left child (`root.left`).
   - Assign the value stored in `temp` (original left child) to the right child (`root.right`).
   - This effectively swaps the left and right children of the current node.

3. **Recursively Invert Left Subtree**:
   ```python
   self.invertTree(root.left)
   ```
   - Recursively call `invertTree` on the left child of the current node. Since we have swapped the children, this call will actually invert the original right subtree.

4. **Recursively Invert Right Subtree**:
   ```python
   self.invertTree(root.right)
   ```
   - Recursively call `invertTree` on the right child of the current node. Since we have swapped the children, this call will actually invert the original left subtree.

5. **Return the Root**:
   ```python
   return root
   ```
   - Finally, return the current node (`root`). This ensures that the inverted tree is correctly assembled as the recursion unwinds.

---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous video
#45 Jump Game II

https://youtu.be/KHtghQD0vII
