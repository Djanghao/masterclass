# 1644 - LCA - Parent/child & not found - Post DFS - Check for p/c or n/f nodes

**Author:** pgmreddy
**Votes:** 5
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/1242071/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/1242071/)

---

---

- LCA is to find lowest common ancestor - find the lowest parent of both `p` & `q`
- Similar
  - Simple lca - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/1238409/236-lca-dfs-return-node-if-both-left-right-find-p-and-q-else-return-p-or-q
  - lca of deepest nodes - https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/discuss/1241421/1123-DFS-Find-height-of-tree-find-LCA-using-leaves-at-height-of-tree

---

Algo
Comparision with simple lca
- Simple lca assumes that both nodes `p` & `q` are present in the tree
  - So `parent-child` node scenario & `node not present` scenarios are not checked there
  - This question differs in exactly that - to include both
- Simple lca has pre-order traversal
  - Here we do `post order check` - so that we go to the child node too
- Simple lca has not count checks
  - Here we count the nodes, we need to get `count as 2` - so that we know if both nodes are found

Hope it is simple to understand

---

    class Tree {
        lowestCommonAncestor_with_either_null(root, p, q) {
            let count = 0;
            function post(node, p, q) {
                if (!node) return null;

                let left = post(node.left, p, q);
                let right = post(node.right, p, q);

                if (node == p || node === q) {
                    count++;             // post check to count in parent-child lca
                    return node;
                }

                return left && right ? node : left || right; // return node if left & right exists, else any existing one
            }

            let lca = post(root, p, q);
            return count === 2 ? lca : null;
        }
    }

    var lowestCommonAncestor = function (root, p, q) {
        let t = new Tree();
        return t.lowestCommonAncestor_with_either_null(root, p, q);
    };

---
