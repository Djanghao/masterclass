# C# | DFS with dictionary

**Author:** icyrainz
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3309671/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3309671/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use DFS to construct the tree and use a dictionary to keep track the mapping between Node->NodeCopy.

# Complexity
- Time complexity: $$O(V+E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for Node.
 * public class Node {
 *     public int val;
 *     public Node left;
 *     public Node right;
 *     public Node random;
 *     public Node(int val=0, Node left=null, Node right=null, Node random=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.random = random;
 *     }
 * }
 */

public class Solution {
    public NodeCopy CopyRandomBinaryTree(Node root)
    {
        return Build(root, new Dictionary<Node, NodeCopy>());
    }

    private NodeCopy Build(Node root, IDictionary<Node, NodeCopy> visit)
    {
        if (root == null) { return null; }
        if (visit.ContainsKey(root))
        {
            return visit[root];
        }

        var copy = new NodeCopy(root.val);
        visit[root] = copy;

        copy.left = Build(root.left, visit);
        copy.right = Build(root.right, visit);
        copy.random = Build(root.random, visit);

        return copy;
    }
}
```