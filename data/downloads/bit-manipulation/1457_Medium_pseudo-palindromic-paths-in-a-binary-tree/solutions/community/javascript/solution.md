# ✅☑Beats 99.02% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 92
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4616403/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4616403/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-24 053349.png](./images/0.png)

---
# Approaches
(Also explained in the code)

#### ***Appproach 1***

1. Use a depth-first search (DFS) with a stack to traverse the binary tree.
1. Maintain a `path` variable to keep track of the occurrences of each digit using bitwise XOR.
1. If a leaf node is reached, check if the current path is pseudo-palindromic.
1. Pseudo-palindromic path condition: At most one digit should have an odd frequency.
1. Use bitwise operations to efficiently handle digit occurrences.
1. Increment the count if the pseudo-palindromic condition is satisfied.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []



class Solution {
public:
    int pseudoPalindromicPaths(TreeNode* root) {
        int count = 0, path = 0;

        stack<pair<TreeNode*, int>> stk;
        stk.push({root, 0});

        while (!stk.empty()) {
            auto [node, path] = stk.top();
            stk.pop();

            if (node != nullptr) {
                
                path = path ^ (1 << node->val);

                
                if (node->left == nullptr && node->right == nullptr) {
                    
                    if ((path & (path - 1)) == 0) {
                        ++count;
                    }
                } else {
                    stk.push({node->right, path});
                    stk.push({node->left, path});
                }
            }
        }

        return count;
    }
};





```
```Java []

import java.util.Stack;

class Solution {
    public int pseudoPalindromicPaths(TreeNode root) {
        int count = 0, path = 0;

        Stack<Pair<TreeNode, Integer>> stack = new Stack<>();
        stack.push(new Pair<>(root, 0));

        while (!stack.isEmpty()) {
            Pair<TreeNode, Integer> p = stack.pop();
            TreeNode node = p.getKey();
            path = p.getValue();

            if (node != null) {
                path = path ^ (1 << node.val);

                if (node.left == null && node.right == null) {
                    if ((path & (path - 1)) == 0) {
                        ++count;
                    }
                } else {
                    stack.push(new Pair<>(node.right, path));
                    stack.push(new Pair<>(node.left, path));
                }
            }
        }

        return count;
    }
}


```
```python3 []
class Solution:
    def pseudoPalindromicPaths(self, root):
        count = 0
        stack = [(root, 0)]

        while stack:
            node, path = stack.pop()

            if node:
                path ^= 1 << node.val

                if not node.left and not node.right:
                    if path & (path - 1) == 0:
                        count += 1
                else:
                    stack.append((node.right, path))
                    stack.append((node.left, path))

        return count



```
```javascript []
var pseudoPalindromicPaths = function(root) {
    let count = 0;
    let stack = [[root, 0]];

    while (stack.length > 0) {
        let [node, path] = stack.pop();

        if (node !== null) {
            path ^= 1 << node.val;

            if (node.left === null && node.right === null) {
                if ((path & (path - 1)) === 0) {
                    count += 1;
                }
            } else {
                stack.push([node.right, path]);
                stack.push([node.left, path]);
            }
        }
    }

    return count;
};


```
---


#### ***Appproach 2***

1. The function `pseudoPalindromicPaths` is the main entry point. It initializes the count of pseudo-palindromic paths and starts the recursive traversal.

1. The recursive helper function `countPseudoPalindromicPaths` is called with the current node and the XOR path value.

1. The XOR path is used to keep track of the occurrences of each digit in the current path.

1. If the current node is null, return 0 as there are no paths to consider.

1. XOR the current path with the value of the current node using `path ^= (1 << node->val)`.

1. If the current node is a leaf (both left and right are null), check if the path is pseudo-palindromic. If yes, return 1, otherwise return 0.

1. Recursively calculate the count for the left and right subtrees by calling `countPseudoPalindromicPaths` with updated path values.

1. Return the sum of counts from the left and right subtrees.

# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    int pseudoPalindromicPaths(TreeNode* root) {
        return countPseudoPalindromicPaths(root, 0);
    }

private:
    int countPseudoPalindromicPaths(TreeNode* node, int path) {
        if (!node) {
            return 0;
        }

        path ^= (1 << node->val);

        if (!node->left && !node->right) {
            return (path & (path - 1)) == 0 ? 1 : 0;
        }

        return countPseudoPalindromicPaths(node->left, path) + countPseudoPalindromicPaths(node->right, path);
    }
};



```
```Java []


class Solution {
    public int pseudoPalindromicPaths(TreeNode root) {
        return countPseudoPalindromicPaths(root, 0);
    }

    private int countPseudoPalindromicPaths(TreeNode node, int path) {
        if (node == null) {
            return 0;
        }

        path ^= (1 << node.val);

        if (node.left == null && node.right == null) {
            return (path & (path - 1)) == 0 ? 1 : 0;
        }

        return countPseudoPalindromicPaths(node.left, path) + countPseudoPalindromicPaths(node.right, path);
    }
}


```
```python3 []
class Solution:
    def pseudoPalindromicPaths(self, root):
        return self.countPseudoPalindromicPaths(root, 0)

    def countPseudoPalindromicPaths(self, node, path):
        if not node:
            return 0

        path ^= 1 << node.val

        if not node.left and not node.right:
            return 1 if path & (path - 1) == 0 else 0

        return self.countPseudoPalindromicPaths(node.left, path) + self.countPseudoPalindromicPaths(node.right, path)



```
```javascript []
var pseudoPalindromicPaths = function(root) {
    return countPseudoPalindromicPaths(root, 0);
};

var countPseudoPalindromicPaths = function(node, path) {
    if (!node) {
        return 0;
    }

    path ^= 1 << node.val;

    if (!node.left && !node.right) {
        return (path & (path - 1)) == 0 ? 1 : 0;
    }

    return countPseudoPalindromicPaths(node.left, path) + countPseudoPalindromicPaths(node.right, path);
};


```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---