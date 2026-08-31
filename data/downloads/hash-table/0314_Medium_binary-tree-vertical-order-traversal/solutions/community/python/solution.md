# Python solution

**Author:** StefanPochmann
**Votes:** 179
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/76424/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/76424/)

---

    def verticalOrder(self, root):
        cols = collections.defaultdict(list)
        queue = [(root, 0)]
        for node, i in queue:
            if node:
                cols[i].append(node.val)
                queue += (node.left, i - 1), (node.right, i + 1)
        return [cols[i] for i in sorted(cols)]