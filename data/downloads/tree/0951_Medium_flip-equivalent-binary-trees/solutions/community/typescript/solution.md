# easy peasy dfs, 0ms runtime, beats 100%  in typescript/java/c++/php/go/python

**Author:** salisbury-espinosa
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5959889/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5959889/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(H)$$

# Code
```typescript []
function flipEquiv(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) {
        return true;
    }
    else if (node1 && node2) {
        if (node1.val === node2.val) {
            if (flipEquiv(node1.left, node2.left) === true && flipEquiv(node1.right, node2.right) === true) {
                return true;
            }
            else if (flipEquiv(node1.left, node2.right) === true && flipEquiv(node1.right, node2.left) === true) {
                return true;
            }
        }
    }
    return false;
};
```
```JAVA []
class Solution {
    public boolean flipEquiv(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) {
            return true;
        } else if (node1 != null && node2 != null) {
            if (node1.val == node2.val) {
                if (flipEquiv(node1.left, node2.left) && flipEquiv(node1.right, node2.right)) {
                    return true;
                } else if (flipEquiv(node1.left, node2.right) && flipEquiv(node1.right, node2.left)) {
                    return true;
                }
            }
        }
        return false;
    }
}
```
```PHP []
class Solution {
    public function flipEquiv($node1, $node2) {
        if ($node1 === null && $node2 === null) {
            return true;
        } elseif ($node1 !== null && $node2 !== null) {
            if ($node1->val === $node2->val) {
                if ($this->flipEquiv($node1->left, $node2->left) && $this->flipEquiv($node1->right, $node2->right)) {
                    return true;
                } elseif ($this->flipEquiv($node1->left, $node2->right) && $this->flipEquiv($node1->right, $node2->left)) {
                    return true;
                }
            }
        }
        return false;
    }
}
```
```C++ []
class Solution {
public:
    bool flipEquiv(TreeNode* node1, TreeNode* node2) {
        if (node1 == nullptr && node2 == nullptr) {
            return true;
        } else if (node1 != nullptr && node2 != nullptr) {
            if (node1->val == node2->val) {
                if (flipEquiv(node1->left, node2->left) && flipEquiv(node1->right, node2->right)) {
                    return true;
                } else if (flipEquiv(node1->left, node2->right) && flipEquiv(node1->right, node2->left)) {
                    return true;
                }
            }
        }
        return false;
    }
};
```
```golang []
func flipEquiv(node1 *TreeNode, node2 *TreeNode) bool {
    if node1 == nil && node2 == nil {
        return true
    } else if node1 != nil && node2 != nil {
        if node1.Val == node2.Val {
            if flipEquiv(node1.Left, node2.Left) && flipEquiv(node1.Right, node2.Right) {
                return true
            } else if flipEquiv(node1.Left, node2.Right) && flipEquiv(node1.Right, node2.Left) {
                return true
            }
        }
    }
    return false
}
```
```python []
class Solution:
    def flipEquiv(self, node1, node2):
        if node1 is None and node2 is None:
            return True
        elif node1 is not None and node2 is not None:
            if node1.val == node2.val:
                if self.flipEquiv(node1.left, node2.left) and self.flipEquiv(node1.right, node2.right):
                    return True
                elif self.flipEquiv(node1.left, node2.right) and self.flipEquiv(node1.right, node2.left):
                    return True
        return False
```
![typescript.png](./images/0.png)

![java.png](./images/1.png)

![php.png](./images/2.png)

![c++.png](./images/3.png)

![2024-10-24_00-33.png](./images/4.png)

![python.png](./images/5.png)

