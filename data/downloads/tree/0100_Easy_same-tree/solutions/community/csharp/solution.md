# 🔥DFS,🔥Queue,🔥Stack &🔥Tree Hashing | Detail Explanation | Java | C++ | Py | Js | C# |

**Author:** Akhilesh21
**Votes:** 87
**Link:** [https://leetcode.com/problems/same-tree/solutions/4244155/](https://leetcode.com/problems/same-tree/solutions/4244155/)

---

### My aim is to explain this problem using multiple approaches because I was asked to solve it that way during an interview.

# 1st Method :- Recursive (DFS) Preorder traversal \uD83D\uDD25

## Intuition \uD83D\uDE80
The code is designed to determine if two binary trees `p` and `q` are identical or not. To consider the trees as identical, they must have the same structure, and corresponding nodes must have the same values.

## Approach \uD83D\uDE80
1. **Base Cases:**
   - The code starts with two base cases. If both `p` and `q` are `null`, this means both trees are empty, and they are considered identical. In this case, it returns `true`.
   - If one of the trees is `null` while the other is not, the trees cannot be identical, so it returns `false`.

2. **Value Comparison:**
   - After handling the base cases, the code compares the values of the current nodes of `p` and `q`. If the values do not match, it means the trees are not identical, and it returns `false`.

3. **Recursive Check of Left and Right Subtrees:**
   - If the values of the current nodes match, the code proceeds to recursively check the left and right subtrees of both trees.
   - The recursive call for the left subtree compares the left child of `p` with the left child of `q`.
   - The recursive call for the right subtree compares the right child of `p` with the right child of `q`.
   - The final result is computed by using the `&&` (logical AND) operator to ensure that both left and right subtrees are identical for the entire tree to be identical.

By following these steps, the code effectively checks the structure and values of the two trees to determine if they are identical or not. If all nodes match in terms of values and the tree structures are the same, it returns `true`, indicating that the trees are identical; otherwise, it returns `false`.

# Code
``` Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Base case: If both trees are empty, they are identical.
        if (p == null && q == null) {
            return true;
        }
        // If one of the trees is empty and the other is not, they are not identical.
        if (p == null || q == null) {
            return false;
        }
        
        // Compare the values of the current nodes.
        if (p.val != q.val) {
            return false;
        }
        
        // Recursively check the left and right subtrees.
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }    
}
```
``` C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // Base case: If both trees are empty, they are identical.
        if (p == nullptr && q == nullptr) {
            return true;
        }
        // If one of the trees is empty and the other is not, they are not identical.
        if (p == nullptr || q == nullptr) {
            return false;
        }
        
        // Compare the values of the current nodes.
        if (p->val != q->val) {
            return false;
        }
        
        // Recursively check the left and right subtrees.
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};
```
``` Python []
class Solution:
    def isSameTree(self, p, q):
        # Base case: If both trees are empty, they are identical.
        if not p and not q:
            return True
        # If one of the trees is empty and the other is not, they are not identical.
        if not p or not q:
            return False
        
        # Compare the values of the current nodes.
        if p.val != q.val:
            return False
        
        # Recursively check the left and right subtrees.
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

```
``` JavaScript []
var isSameTree = function(p, q) {
    // Base case: If both trees are empty, they are identical.
    if (p === null && q === null) {
        return true;
    }

    // If one of the trees is empty and the other is not, they are not identical.
    if (p === null || q === null) {
        return false;
    }

    // Compare the values of the current nodes.
    if (p.val !== q.val) {
        return false;
    }

    // Recursively check the left and right subtrees.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```
``` C# []
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        // Base case: If both trees are empty, they are identical.
        if (p == null && q == null) {
            return true;
        }

        // If one of the trees is empty and the other is not, they are not identical.
        if (p == null || q == null) {
            return false;
        }

        // Compare the values of the current nodes.
        if (p.val != q.val) {
            return false;
        }

        // Recursively check the left and right subtrees.
        return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
The time complexity of this code is O(n), where 'n' is the number of nodes in the larger of the two trees. In the worst case, it needs to visit every node in both trees to determine if they are identical. The function performs a preorder traversal of the trees, and each node is visited exactly once.

### \uD83C\uDFF9Space complexity: O(n)
The space complexity is O(h), where 'h' is the height of the tree, and it represents the maximum depth of the recursion stack. In the worst case, when the trees are completely unbalanced and have a height of 'n', the space complexity becomes O(n). However, for balanced trees, such as binary search trees, the space complexity is O(log n), where 'log n' is the height of the tree.

It's important to note that the space complexity depends on the height of the tree, not just the number of nodes, and it's determined by the depth of the recursive function calls on the stack.

![vote.jpg](./images/0.jpeg)

---

# 2nd Method :- level-order traversal using Queues\uD83D\uDD25
level-order traversal approach to determine if two trees are the same.

## Approach \uD83D\uDE80
1. Two queues, `queue1` and `queue2`, are used to perform a level-order traversal of both trees `p` and `q`. Level-order traversal visits the nodes level by level, starting from the root.

2. The root nodes of both trees `p` and `q` are added to their respective queues to begin the traversal.

3. The while loop continues until both queues are empty or until a mismatch is detected.

4. Inside the loop, it dequeues nodes from both queues: `node1` from `queue1` and `node2` from `queue2`.

5. It checks if the values of the current nodes are equal. If they are not, the trees are not identical, and it returns `false`.

6. If the values match and the nodes are not null, the left and right children of both nodes are enqueued in their respective queues.

7. The traversal continues level by level until all nodes have been compared.

8. After the while loop, if both queues are empty, it means that the trees are identical, and it returns `true`. If one queue is not empty while the other is, the trees are not identical, and it returns `false`.

This level-order traversal approach efficiently checks whether two trees are identical in terms of structure and values. It is based on a breadth-first search of the trees.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Create queues for both trees.
        Queue<TreeNode> queue1 = new LinkedList<>();
        Queue<TreeNode> queue2 = new LinkedList<>();

        // Start by adding the root nodes of both trees to their respective queues.
        queue1.offer(p);
        queue2.offer(q);

        while (!queue1.isEmpty() && !queue2.isEmpty()) {
            TreeNode node1 = queue1.poll();
            TreeNode node2 = queue2.poll();

            // If the values of the current nodes are not equal, the trees are not identical.
            if (node1 == null && node2 == null) {
                continue;
            }
            if (node1 == null || node2 == null || node1.val != node2.val) {
                return false;
            }

            // Add the left and right children of both nodes to their respective queues.
            queue1.offer(node1.left);
            queue1.offer(node1.right);
            queue2.offer(node2.left);
            queue2.offer(node2.right);
        }

        // If both queues are empty, the trees are identical.
        return queue1.isEmpty() && queue2.isEmpty();
    }
}
```
``` C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // Create queues for both trees.
        std::queue<TreeNode*> queue1;
        std::queue<TreeNode*> queue2;

        // Start by adding the root nodes of both trees to their respective queues.
        queue1.push(p);
        queue2.push(q);

        while (!queue1.empty() && !queue2.empty()) {
            TreeNode* node1 = queue1.front();
            TreeNode* node2 = queue2.front();
            queue1.pop();
            queue2.pop();

            // If the values of the current nodes are not equal, the trees are not identical.
            if (node1 == NULL && node2 == NULL) {
                continue;
            }
            if (node1 == NULL || node2 == NULL || node1->val != node2->val) {
                return false;
            }

            // Add the left and right children of both nodes to their respective queues.
            queue1.push(node1->left);
            queue1.push(node1->right);
            queue2.push(node2->left);
            queue2.push(node2->right);
        }

        // If both queues are empty, the trees are identical.
        return queue1.empty() && queue2.empty();
    }
};
```
``` Python []
class Solution:
    def isSameTree(self, p, q):
        # Create queues for both trees.
        queue1 = deque()
        queue2 = deque()

        # Start by adding the root nodes of both trees to their respective queues.
        queue1.append(p)
        queue2.append(q)

        while queue1 and queue2:
            node1 = queue1.popleft()
            node2 = queue2.popleft()

            # If the values of the current nodes are not equal, the trees are not identical.
            if not node1 and not node2:
                continue
            if not node1 or not node2 or node1.val != node2.val:
                return False

            # Add the left and right children of both nodes to their respective queues.
            queue1.append(node1.left)
            queue1.append(node1.right)
            queue2.append(node2.left)
            queue2.append(node2.right)

        # If both queues are empty, the trees are identical.
        return not queue1 and not queue2
```
``` JavaScript []
var isSameTree = function(p, q) {
    // Create queues for both trees.
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
        const node1 = queue1.shift();
        const node2 = queue2.shift();

        // If the values of the current nodes are not equal, the trees are not identical.
        if (!node1 && !node2) {
            continue;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        // Add the left and right children of both nodes to their respective queues.
        queue1.push(node1.left);
        queue1.push(node1.right);
        queue2.push(node2.left);
        queue2.push(node2.right);
    }

    // If both queues are empty, the trees are identical.
    return queue1.length === 0 && queue2.length === 0;
}
```
``` C# []
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        // Create queues for both trees.
        Queue<TreeNode> queue1 = new Queue<TreeNode>();
        Queue<TreeNode> queue2 = new Queue<TreeNode>();

        // Start by adding the root nodes of both trees to their respective queues.
        queue1.Enqueue(p);
        queue2.Enqueue(q);

        while (queue1.Count > 0 && queue2.Count > 0) {
            TreeNode node1 = queue1.Dequeue();
            TreeNode node2 = queue2.Dequeue();

            // If the values of the current nodes are not equal, the trees are not identical.
            if (node1 == null && node2 == null) {
                continue;
            }
            if (node1 == null || node2 == null || node1.val != node2.val) {
                return false;
            }

            // Add the left and right children of both nodes to their respective queues.
            queue1.Enqueue(node1.left);
            queue1.Enqueue(node1.right);
            queue2.Enqueue(node2.left);
            queue2.Enqueue(node2.right);
        }

        // If both queues are empty, the trees are identical.
        return queue1.Count == 0 && queue2.Count == 0;
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(N)
The code uses a level-order traversal approach, also known as a breadth-first search, to compare the two trees. In the worst case, the code visits every node once, making the time complexity O(N), where N is the total number of nodes in the larger of the two trees. This is because the code processes each node exactly once and does a constant amount of work for each node.

### \uD83C\uDFF9Space complexity: O(N)
The space complexity of the code is determined by the space used by the two queues. In the worst case, both queues can hold all nodes of the two trees at the same level. Therefore, the space complexity is O(maxWidth), where maxWidth is the maximum width of the binary trees, which can be roughly proportional to the number of nodes at the widest level. In the worst case, the space complexity can be O(N), where N is the total number of nodes in the larger tree.


![vote.jpg](./images/1.jpeg)

---
# 3rd Method :- level-order traversal using Stack\uD83D\uDD25

## Approach \uD83D\uDE80
This approach is called **iterative traversal-based approach** to determine if two trees are the same. Specifically, it is using **stacks** to perform a **level-order traversal** of the trees and compare the nodes iteratively.

Here's how the code works:

1. Two stacks, `stack1` and `stack2`, are used to perform a level-order traversal of the trees, starting with the root nodes `p` and `q`.

2. In the while loop, the code pops the top nodes from both stacks and compares their values.
   - If both nodes are `null`, they are considered identical, and the traversal continues.
   - If one of the nodes is `null` or the values are different, the trees are not identical, and the function returns `false`.

3. The code then pushes the left children of both nodes onto `stack1` and `stack2`.

4. Next, it pushes the right children of both nodes onto the stacks.

5. The loop continues until both stacks are empty or until a mismatch is found. If the loop completes without any mismatches and both stacks are empty, the trees are considered identical, and the function returns `true`.

This approach provides an alternative way to check if two trees are identical without using recursive function calls, making use of stacks for an iterative traversal of the trees.

## \u2712\uFE0FCode
``` Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();

        // Push the root nodes of both trees onto their respective stacks.
        stack1.push(p);
        stack2.push(q);

        while (!stack1.isEmpty() && !stack2.isEmpty()) {
            TreeNode node1 = stack1.pop();
            TreeNode node2 = stack2.pop();

            // Compare the values of the current nodes.
            if (node1 == null && node2 == null) {
                // Both nodes are null, so they match.
                continue;
            } else if (node1 == null || node2 == null || node1.val != node2.val) {
                // Nodes are not identical, return false.
                return false;
            }

            // Push the left children onto the stacks.
            stack1.push(node1.left);
            stack2.push(node2.left);

            // Push the right children onto the stacks.
            stack1.push(node1.right);
            stack2.push(node2.right);
        }

        // If both stacks are empty, and no mismatches have been found, the trees are identical.
        return stack1.isEmpty() && stack2.isEmpty();
    }
}
```
``` C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        std::stack<TreeNode*> stack1, stack2;

        // Push the root nodes of both trees onto their respective stacks.
        stack1.push(p);
        stack2.push(q);

        while (!stack1.empty() && !stack2.empty()) {
            TreeNode* node1 = stack1.top();
            stack1.pop();
            TreeNode* node2 = stack2.top();
            stack2.pop();

            // Compare the values of the current nodes.
            if (!node1 && !node2) {
                // Both nodes are null, so they match.
                continue;
            } else if (!node1 || !node2 || node1->val != node2->val) {
                // Nodes are not identical, return false.
                return false;
            }

            // Push the left children onto the stacks.
            stack1.push(node1->left);
            stack2.push(node2->left);

            // Push the right children onto the stacks.
            stack1.push(node1->right);
            stack2.push(node2->right);
        }

        // If both stacks are empty, and no mismatches have been found, the trees are identical.
        return stack1.empty() && stack2.empty();
    }
};
```
``` Python []
class Solution:
    def isSameTree(self, p, q):
        stack1, stack2 = [p], [q]

        while stack1 and stack2:
            node1 = stack1.pop()
            node2 = stack2.pop()

            if not node1 and not node2:
                # Both nodes are None, so they match.
                continue
            elif not node1 or not node2 or node1.val != node2.val:
                # Nodes are not identical, return False.
                return False

            # Push the left children onto the stacks.
            stack1.append(node1.left)
            stack2.append(node2.left)

            # Push the right children onto the stacks.
            stack1.append(node1.right)
            stack2.append(node2.right)

        # If both stacks are empty, and no mismatches have been found, the trees are identical.
        return not stack1 and not stack2
```
``` JavaScript []
var isSameTree = function(p, q) {
    const stack1 = [p];
    const stack2 = [q];

    while (stack1.length > 0 && stack2.length > 0) {
        const node1 = stack1.pop();
        const node2 = stack2.pop();

        if (!node1 && !node2) {
            continue;
        } else if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        stack1.push(node1.left);
        stack2.push(node2.left);
        stack1.push(node1.right);
        stack2.push(node2.right);
    }

    return stack1.length === 0 && stack2.length === 0;
}
```
``` C# []
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        Stack<TreeNode> stack1 = new Stack<TreeNode>();
        Stack<TreeNode> stack2 = new Stack<TreeNode>();

        stack1.Push(p);
        stack2.Push(q);

        while (stack1.Count > 0 && stack2.Count > 0) {
            TreeNode node1 = stack1.Pop();
            TreeNode node2 = stack2.Pop();

            if (node1 == null && node2 == null) {
                continue;
            } else if (node1 == null || node2 == null || node1.val != node2.val) {
                return false;
            }

            stack1.Push(node1.left);
            stack2.Push(node2.left);
            stack1.Push(node1.right);
            stack2.Push(node2.right);
        }

        return stack1.Count == 0 && stack2.Count == 0;
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(N)
The algorithm involves a stack-based traversal of both trees. In the worst case, it will visit each node once. The while loop iterates through the nodes, and the key operations inside the loop (pushing and popping nodes from the stacks and comparing values) have constant time complexity. Therefore, the time complexity is linear, O(n).

### \uD83C\uDFF9Space complexity: O(N)
The space complexity is determined by the space required for the two stacks. In the worst case, both stacks can contain all nodes of the trees. If the trees are completely unbalanced (e.g., skewed trees), both stacks can hold 'n' nodes, leading to a space complexity of O(n).

It's worth noting that in the best-case scenario, where the trees are identical and perfectly balanced, the space complexity could be less than O(n). However, the worst-case space complexity is O(n) to account for all possible scenarios.

![vote.jpg](./images/2.jpeg)

---
# 4th Method :- Tree Hashing\uD83D\uDD25

## Approach \uD83D\uDE80
This approach involves generating a unique hash value for each tree by recursively encoding the structure and values of its nodes. The trees are then considered identical if their hash values are the same. Here's how this approach works:

1. **Create a Hash for Each Tree:**
   - The `isSameTree` function takes two tree nodes, `p` and `q`, as input.
   - It calculates the hash value for each tree by calling the `computeTreeHash` function for both `p` and `q`.

2. **Recursively Compute Tree Hash:**
   - The `computeTreeHash` function takes a tree node as input.
   - If the node is `null`, it returns the string "null" to represent an empty node.
   - For non-null nodes, it calculates the hash value by recursively computing the hash values of the left and right subtrees and concatenating them with the current node's value inside parentheses.

3. **Compare Hash Values:**
   - After computing the hash values for both trees, the code compares these hash values using the `equals` method.
   - If the hash values are equal, the code returns `true`, indicating that the trees are identical; otherwise, it returns `false`.

This approach relies on the uniqueness and quality of the hash function to accurately determine if two trees are identical. It's important to choose a good hashing method that minimizes the risk of hash collisions. While this approach can be used to check tree identity, it may not always be as efficient as traversal-based methods for large or complex trees, as computing and comparing hash values can be time-consuming.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        String hash1 = computeTreeHash(p);
        String hash2 = computeTreeHash(q);
        return hash1.equals(hash2);
    }
    
    private String computeTreeHash(TreeNode node) {
        if (node == null) {
            return "null";
        }
        String leftHash = computeTreeHash(node.left);
        String rightHash = computeTreeHash(node.right);
        return "(" + node.val + leftHash + rightHash + ")";
    }
}
```
``` C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        std::string hash1 = computeTreeHash(p);
        std::string hash2 = computeTreeHash(q);
        return hash1 == hash2;
    }

private:
    std::string computeTreeHash(TreeNode* node) {
        if (node == nullptr) {
            return "null";
        }
        std::string leftHash = computeTreeHash(node->left);
        std::string rightHash = computeTreeHash(node->right);
        return "(" + std::to_string(node->val) + leftHash + rightHash + ")";
    }
};
```
``` Python []
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        hash1 = self.computeTreeHash(p)
        hash2 = self.computeTreeHash(q)
        return hash1 == hash2

    def computeTreeHash(self, node: TreeNode) -> str:
        if node is None:
            return "null"
        left_hash = self.computeTreeHash(node.left)
        right_hash = self.computeTreeHash(node.right)
        return f"({node.val}{left_hash}{right_hash})"
```
``` JavaScript []
var isSameTree = function(p, q) {
    const hash1 = computeTreeHash(p);
    const hash2 = computeTreeHash(q);
    return hash1 === hash2;
}

function computeTreeHash(node) {
    if (node === null) {
        return "null";
    }
    const leftHash = computeTreeHash(node.left);
    const rightHash = computeTreeHash(node.right);
    return `(${node.val}${leftHash}${rightHash})`;
}
```
``` C# []
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        string hash1 = ComputeTreeHash(p);
        string hash2 = ComputeTreeHash(q);
        return hash1.Equals(hash2);
    }

    private string ComputeTreeHash(TreeNode node) {
        if (node == null) {
            return "null";
        }
        string leftHash = ComputeTreeHash(node.left);
        string rightHash = ComputeTreeHash(node.right);
        return $"({node.val}{leftHash}{rightHash})";
    }
}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(N)
- The `computeTreeHash` function performs a recursive traversal of both trees.
- In the worst case, it visits every node of both trees.
- The time complexity is O(n), where 'n' is the total number of nodes in the trees.

### \uD83C\uDFF9Space complexity: O(N)
- The space complexity is determined by the space used by the recursive function calls and the space used for the string representations (hashes) of the trees.
- In the worst case, the maximum depth of the recursion is equal to the height of the trees, which can be O(n) in an unbalanced tree.
- Additionally, the space used for the hash strings is also O(n).
- Therefore, the space complexity is O(n) in the worst case.

---
# Same as 1st Method but in short

``` Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        if (p == null || q == null) { return p == q;}
        
        return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right); 
    }
}
```
``` C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p || !q) {
            return p == q;
        }
        return (p->val == q->val) && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};
```
``` Python []
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p or not q:
            return p == q
        return (p.val == q.val) and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```
``` JavaScript []
var isSameTree = function(p, q) {
    if (!p || !q) {
        return p === q;
    }
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```
``` C# []
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        if (p == null || q == null) {
            return p == q;
        }
        return (p.val == q.val) && IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
    }
}
```

![upvote.png](./images/3.png)

# Up Vote Guys

