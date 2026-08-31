# 💥💥C# | Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 4
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/5801686/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/5801686/)

---

# Intuition
Imagine you need to find the 10th ancestor of a node in a tree, but tracing back one step at a time would be too slow if the tree is very large. Instead of walking back through each ancestor sequentially, we can use a shortcut approach called binary lifting. This technique helps us jump back in larger steps, making the process much faster.

# Approach
Binary Lifting Precomputation:

- Initialization:

First, create a table (ancestor) where ancestor[i][j] represents the 2^j-th ancestor of node i. Here, 2^j means the distance we want to jump back.

Filling the Table (Immediate Parent):

Set up the immediate parent (2^0-th ancestor) for each node using the given parent array.

Higher-Order Ancestors:

Use the immediate parent information to compute the 2^1-th ancestor, then use that to compute the 2^2-th ancestor, and so forth.

For example, if you know the 2^j-th ancestor, you can find the 2^(j+1)-th ancestor by jumping twice: from i to ancestor[i][j] and then from ancestor[i][j] to ancestor[ancestor[i][j]][j].


Breaking Down K:

To find the Kth ancestor of a node, convert K into binary. Each bit in the binary representation tells you how many steps of size 2^j you need to take.

Jumping Efficiently:

Start from the given node and use the precomputed table to jump backwards according to the bits of K. For each bit set in the binary representation of K, move back by 2^j steps.

- Example:

Suppose we have a node node and we need to find its K-th ancestor:

Binary Representation:

If K is 13, its binary representation is 1101. This means we need to make jumps of sizes 2^3 (8), 2^2 (4), and 2^0 (1).

Jumping Process:

- Start at node.
- For the most significant bit (2^3), move to the ancestor stored in ancestor[node][3].
- For the next bit (2^2), move to ancestor[current][2].
- For the least significant bit (2^0), move to ancestor[current][0].
- By doing these jumps, you efficiently find the Kth ancestor without needing to traverse each step individually.

# Complexity
- Time complexity:

Precomputation: O(n * log(n))
You compute the table by processing each node and filling each entry for all powers of two up to log(n).

Query: O(log(n))
Each query is resolved by examining the binary representation of K, which involves at most log(n) steps.

- Space complexity:

O(n * log(n)).
The space is required for the ancestor table, which stores the 2^j-th ancestors for each node.

# Code
```csharp []
public class TreeAncestor {
    private int[,] ancestor;
    private int maxLog;

    public TreeAncestor(int n, int[] parent) {
        maxLog = (int)Math.Log2(n) + 1;
        ancestor = new int[n, maxLog];
        
        // Initialize the first column of ancestor matrix
        for (int i = 0; i < n; i++) {
            ancestor[i, 0] = parent[i];
        }
        
        // Compute all ancestors for powers of 2
        for (int j = 1; j < maxLog; j++) {
            for (int i = 0; i < n; i++) {
                if (ancestor[i, j - 1] != -1) {
                    ancestor[i, j] = ancestor[ancestor[i, j - 1], j - 1];
                } else {
                    ancestor[i, j] = -1;
                }
            }
        }
    }
    
    public int GetKthAncestor(int node, int k) {
        for (int i = 0; i < maxLog; i++) {
            if ((k & (1 << i)) != 0) {
                node = ancestor[node, i];
                if (node == -1) {
                    return -1;
                }
            }
        }
        return node;
    }
}

```