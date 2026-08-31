# Simple solution with Breadth-First Search in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 4
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/4257691/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/4257691/)

---

# Intuition
Let's briefly explain what the problem is:
- there a **Perfect Binary Tree** `root`
- our goal is to link all nodes at each level, as it was a **Linked List**.

The algorithm is simple - use **Breadth-First Search** to traverse at each level and establish **Linked List** link with `next` pointer to the next node.

# Approach
1. declare `q` as queue or **deque** for O(1) operations
2. iterate over `root` and create links to the next node
3. return **modified** `root`

# Complexity
- Time complexity: **O(N)**

- Space complexity: **O(W)**, as maximum tree width.

# Code in Python3
```
class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        q = deque([root])

        while q:
            n = len(q)

            for i in range(n):
                node = q.popleft()

                if i < n - 1: node.next = q[0]
                if node and node.left: q.append(node.left)
                if node and node.right: q.append(node.right)

        return root
```
# Code in TypeScript
```
function connect(root: Node | null): Node | null {
    const q = [root]

    while (q.length) {
        const n = q.length;

        for (let i = 0; i < n; i++) {
            const node = q.shift()

            if (i < n - 1) node.next = q[0]
            if (node?.left) q.push(node.left)
            if (node?.right) q.push(node.right)
        }
    }

    return root
};
```