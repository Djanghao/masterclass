# Official Solution

**Link:** [https://leetcode.com/problems/leaf-similar-trees/solution/](https://leetcode.com/problems/leaf-similar-trees/solution/)

---

[TOC]

## Solution

---

### Approach 1: Depth First Search

#### Intuition

Let's find the leaf value sequence for both given trees.  Afterwards, we can compare them to see if they are equal or not.

To find the leaf value sequence of a tree, we use a depth first search.  Our `dfs` function writes the node's value if it is a leaf, and then recursively explores each child.  This is guaranteed to visit each leaf in left-to-right order, as left-children are fully explored before right-children.

<iframe src="https://leetcode.com/playground/9QQFY3Jv/shared" frameBorder="0" width="100%" height="378" name="9QQFY3Jv"></iframe>

#### Complexity Analysis**

Let $N$ be the number of nodes in `root1` and $M$ the number of nodes in `root2`.

* Time Complexity: $O(N + M)$

    The `dfs` function visits each node exactly once in both trees, resulting in a time complexity of $O(N)$ for the first call and $O(M)$ for the second call.

    After collecting all leaves in the `leaves1` and `leaves2` arrays, we compare them using the `==` operator. Comparing two arrays of size $L$ has a worst-case time complexity of $O(L)$, where $L$ is the number of leaf nodes in the larger array.

    Since $L \leq \min(N, M)$, the comparison time is $O(\min(N, M))$, but this is dominated by the time spent traversing both trees.

    Overall, the time complexity is $O(N + M)$.

* Space Complexity: $O(N + M)$

    The recursive `dfs` calls will require stack space for each node. In the worst case, if the trees are completely unbalanced (like a linked list), the recursion depth could be $O(N)$ and $O(M)$ respectively, leading to a total stack space complexity of $O(N + M)$.

    Additionally, each `dfs` call collects leaf nodes into `leaves1` and `leaves2`. The maximum number of leaves in a binary tree is $\frac{N}{2}$ (for a full binary tree), resulting in $O(N)$ and $O(M)$ space for each array.

    Therefore, the total space complexity, combining both the recursion stack and the storage for the leaves, is $O(N + M)$.

---