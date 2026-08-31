# ✨✅Beats 100%, Well Explained, Best Solution in all Languages

**Author:** donquixote-doflamingo
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/5958730/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/5958730/)

---

# Problem: Cousins in Binary Tree

Given the root of a binary tree with unique values and the values of two different nodes `x` and `y`, return true if the nodes corresponding to the values `x` and `y` in the tree are cousins, or false otherwise.

### Definition of Cousins:
- **Cousins** are nodes that:
  - Have the same depth.
  - Have different parents.

### Approach

The solution uses **level-order traversal** (BFS) to check if two nodes `x` and `y` are cousins:

1. Traverse the tree level by level.
2. For each node:
   - Check if its children contain both `x` and `y`. If so, return false since they share the same parent.
   - Mark `x` and `y` as found in the current level.
3. If both `x` and `y` are found in the same level but not as siblings, return true.

### Time Complexity
- The time complexity is $$O(n)$$ where `n` is the number of nodes in the tree since we traverse each node once.

### Space Complexity
- The space complexity is $$O(w)$$ where `w` is the width of the binary tree, as this is the maximum number of nodes stored in the queue at any given time.

### Solution

```c []
// Queue implementation for level-order traversal
struct QueueNode {
    struct TreeNode* node;
    struct QueueNode* next;
};

struct Queue {
    struct QueueNode* front;
    struct QueueNode* rear;
};

void initQueue(struct Queue* q) {
    q->front = q->rear = NULL;
}

void enqueue(struct Queue* q, struct TreeNode* node) {
    struct QueueNode* temp = (struct QueueNode*)malloc(sizeof(struct QueueNode));
    temp->node = node;
    temp->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = temp;
        return;
    }
    q->rear->next = temp;
    q->rear = temp;
}

struct TreeNode* dequeue(struct Queue* q) {
    if (q->front == NULL) return NULL;
    struct QueueNode* temp = q->front;
    struct TreeNode* node = temp->node;
    q->front = q->front->next;
    if (q->front == NULL) q->rear = NULL;
    free(temp);
    return node;
}

bool isQueueEmpty(struct Queue* q) {
    return q->front == NULL;
}

bool isCousins(struct TreeNode* root, int x, int y) {
    struct Queue q;
    initQueue(&q);
    enqueue(&q, root);

    while (!isQueueEmpty(&q)) {
        int size = 0;
        struct QueueNode* temp = q.front;
        while (temp != NULL) {
            size++;
            temp = temp->next;
        }

        bool FX = false, FY = false;

        // Traverse all nodes at the current level
        while (size-- > 0) {
            struct TreeNode* cur = dequeue(&q);
            int val = cur->val;

            // Mark if we find x or y at the current level
            if (val == x) FX = true;
            if (val == y) FY = true;

            bool fx = false, fy = false;

            // Check left child
            if (cur->left != NULL) {
                val = cur->left->val;
                if (val == x) fx = true;
                if (val == y) fy = true;
                enqueue(&q, cur->left);
            }
            // Check right child
            if (cur->right != NULL) {
                val = cur->right->val;
                if (val == x) fx = true;
                if (val == y) fy = true;
                enqueue(&q, cur->right);
            }
            // If both x and y are found as siblings (same parent), return false
            if (fx && fy) return false;
        }
        // If both x and y are found at the same level, return true
        if (FX && FY) return true;
    }

    // If we exit the loop, they are not cousins
    return false;
}
```
```cpp []
class Solution {
public:
    bool isCousins(TreeNode* root, int x, int y) {
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int size = q.size();
            bool FX = false, FY = false;

            // Traverse all nodes at the current level
            while (size-- > 0) {
                TreeNode* cur = q.front();
                q.pop();
                int val = cur->val;

                // Mark if we find x or y at the current level
                if (val == x) FX = true;
                if (val == y) FY = true;

                bool fx = false, fy = false;
                // Check left child
                if (cur->left != nullptr) {
                    val = cur->left->val;
                    if (val == x) fx = true;
                    if (val == y) fy = true;
                    q.push(cur->left);
                }
                // Check right child
                if (cur->right != nullptr) {
                    val = cur->right->val;
                    if (val == x) fx = true;
                    if (val == y) fy = true;
                    q.push(cur->right);
                }
                // If both x and y are found as siblings (same parent), return false
                if (fx && fy) return false;
            }
            // If both x and y are found at the same level, return true
            if (FX && FY) return true;
        }
        // If we exit the loop, they are not cousins
        return false;
    }
};
```
```java []
class Solution { 
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while (!q.isEmpty()) {
            int size = q.size();
            boolean FX = false, FY = false;
            
            // Traverse all nodes at the current level
            while (size-- > 0) {
                TreeNode cur = q.poll();
                int val = cur.val;
                
                // Mark if we find x or y at the current level
                if (val == x) FX = true;
                if (val == y) FY = true;
                
                boolean fx = false, fy = false;

                // Check left child
                if (cur.left != null) {
                    val = cur.left.val;
                    if (val == x) fx = true;
                    if (val == y) fy = true;
                    q.offer(cur.left); 
                }

                // Check right child
                if (cur.right != null) {
                    val = cur.right.val;
                    if (val == x) fx = true;
                    if (val == y) fy = true;
                    q.offer(cur.right);
                }

                // If both x and y are found as siblings (same parent), return false
                if (fx && fy) return false;
            }

            // If both x and y are found at the same level, return true
            if (FX && FY) return true;
        }
        
        // If we exit the loop, they are not cousins
        return false;
    }
}
```
```python []
class Solution(object):
    def isCousins(self, root, x, y):
        q = [root]

        while q:
            size = len(q)
            FX, FY = False, False

            for _ in range(size):
                cur = q.pop(0)

                if cur.val == x:
                    FX = True
                if cur.val == y:
                    FY = True

                fx, fy = False, False
                if cur.left:
                    if cur.left.val == x:
                        fx = True
                    if cur.left.val == y:
                        fy = True
                    q.append(cur.left)
                if cur.right:
                    if cur.right.val == x:
                        fx = True
                    if cur.right.val == y:
                        fy = True
                    q.append(cur.right)

                if fx and fy:
                    return False
            
            if FX and FY:
                return True

        return False
```
```python3 []
class Solution:
    def isCousins(self, root, x: int, y: int) -> bool:
        q = [root]

        while q:
            size = len(q)
            FX, FY = False, False

            for _ in range(size):
                cur = q.pop(0)

                if cur.val == x:
                    FX = True
                if cur.val == y:
                    FY = True

                fx, fy = False, False
                if cur.left:
                    if cur.left.val == x:
                        fx = True
                    if cur.left.val == y:
                        fy = True
                    q.append(cur.left)
                if cur.right:
                    if cur.right.val == x:
                        fx = True
                    if cur.right.val == y:
                        fy = True
                    q.append(cur.right)

                if fx and fy:
                    return False
            
            if FX and FY:
                return True

        return False
```
```javascript []
var isCousins = function(root, x, y) {
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        let foundX = false, foundY = false;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (node.val === x) foundX = true;
            if (node.val === y) foundY = true;

            let hasX = false, hasY = false;

            if (node.left) {
                if (node.left.val === x) hasX = true;
                if (node.left.val === y) hasY = true;
                queue.push(node.left);
            }
            if (node.right) {
                if (node.right.val === x) hasX = true;
                if (node.right.val === y) hasY = true;
                queue.push(node.right);
            }

            if (hasX && hasY) return false;
        }

        if (foundX && foundY) return true;
    }

    return false;
};
```
```typescript []
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    const queue: (TreeNode | null)[] = [root];

    while (queue.length) {
        const size = queue.length;
        let foundX = false, foundY = false;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (node === null) continue;

            if (node.val === x) foundX = true;
            if (node.val === y) foundY = true;

            let hasX = false, hasY = false;

            if (node.left) {
                if (node.left.val === x) hasX = true;
                if (node.left.val === y) hasY = true;
                queue.push(node.left);
            }
            if (node.right) {
                if (node.right.val === x) hasX = true;
                if (node.right.val === y) hasY = true;
                queue.push(node.right);
            }

            if (hasX && hasY) return false;
        }

        if (foundX && foundY) return true;
    }

    return false;
}
```
## Happy Coding !!!
![please upvote.jpg](./images/0.jpeg)



