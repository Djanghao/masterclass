# ✅ [Java] Simple & Clean solution w/ Explanation | Beats 100% - 0ms | TC: O(M), SC: O(H)

**Author:** NarutoBaryonMode
**Votes:** 21
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1578828/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1578828/)

---

*<ins>Note:</ins> Kindly upvote if you find this article helpful. Thanks for reading!*

**Explanation:**

In this solution, we are exploring all nodes of the input `N-Ary Tree` using `Depth-First Search`. 

Length of the longest path passing through a node = `1st Max Height among N children` + `2nd Max Height among N children` + `2`

Thus, Diameter of the entire tree = `Max(Length of the longest path passing through each node)`

---

**Complexity Analysis:**

For complexity calculation, let us assume:
`N` = Maximum number of children of a node. Each node can have `0` to `N` nodes.
`M` = Total number of nodes in the input `N-Ary Tree`.

**Time Complexity:**
1. In a Tree, if there are `M` nodes, then there will be `M-1` edges.
1. In this solution, each node and each edge will be visited once.
1. Thus, Total Time Complexity = `O(V + E)` = `O(M + M-1)` = `O(M)`

**Space Complexity:** `O(Height of the input tree)`
1. In worst case, for a `skewed tree`, height can be equal to the total number of nodes. Thus, `worst case space complexity = O(M)`
2. In best / average case, for a `balanced N-ary tree`, height = `O(log M / log N)` = `O(logN M)`.

---

**Solution:**

```java
class Solution {
    public int diameter(Node root) {
        if (root == null || root.children.size() == 0) {
            return 0;
        }

        int[] maxDiameter = new int[1];
        diameterHelper(root, maxDiameter);
        return maxDiameter[0];
    }

    private int diameterHelper(Node root, int[] maxDiameter) {
        if (root.children.size() == 0) {
            return 0;
        }

        // Setting below maximums to -1 helps in the case if there is only one child
        // node of this root node.
        int maxHeight1 = -1;
        int maxHeight2 = -1;

        for (Node child : root.children) {
            int childHeight = diameterHelper(child, maxDiameter);
            if (childHeight > maxHeight1) {
                maxHeight2 = maxHeight1;
                maxHeight1 = childHeight;
            } else if (childHeight > maxHeight2) {
                maxHeight2 = childHeight;
            }
        }

        maxDiameter[0] = Math.max(maxDiameter[0], maxHeight1 + maxHeight2 + 2);
        return maxHeight1 + 1;
    }
}
```

---

**<ins>Similar questions on LeetCode:</ins>**

- [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [298. Binary Tree Longest Consecutive Sequence](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/)
- [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
- [654. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)
- [998. Maximum Binary Tree II](https://leetcode.com/problems/maximum-binary-tree-ii/)
- [1245. Tree Diameter](https://leetcode.com/problems/tree-diameter/)
