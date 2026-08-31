# C# | Rolling Hash

**Author:** ConnectedPuddle
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940764/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940764/)

---

# Intuition

This problem is a straightforward application of Rolling Hash data structure.

Here are two similar problems:
- [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
- [1147. Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)

Here is the idea. Consider a string $s = s_0 s_1 s_2 s_3 s_4$.

Each character can be mapped to an integer as $a_i = s_i - `a` + 1$.

The forward hash of $s$ is $a_0 + a_1 b + a_2 b^2 + a_3 b^3 + a_4 b^4$ and the backward hash is $a_0 b^4 + a_1 b^3 + a_2 b^2 + a_3 b + a_4$.

When $s$ is a palindrome, its forward and backward hashes are equal.

Conversely, when the two hashes are equal, $s$ is likely to be a palindrome. "likely" does not mean 100% but it's sufficient to solve this question.

The insight to this question is that children hashes are sufficient to construct the backward and forward hashes of the parent.


# Approach

- Step 1: precompute $b^0, b^1, b^2, \\dots$ in the array $powers$
- Step 2: initialise the array of nodes
- Step 3: populate the children of each node
- Step 4: process all nodes in depth first order

# Complexity
- Time complexity: $O(n)$, each node is processed once. Hashing arithmetic takes constant time.

- Space complexity: $O(n)$, due to storing arrays of nodes and powers.

# Code
```csharp []
public class Solution {
    public bool[] FindAnswer(int[] parent, string s) {
        long p = 1_000_000_007;
        long b = 101;
        int n = parent.Length;
        long[] powers = new long[n];
        powers[0] = 1;
        for (int i = 1; i < n; i++)
        {
            powers[i] = (powers[i-1] * b) % p;
        }
        var nodes = new Node[n];
        for (int i = 0; i < n; i++)
        {
            nodes[i] = new();
        }
        for (int i = 1; i < n; i++)
        {
            nodes[parent[i]].children.Add(i);
        }
        var result = new bool[n];
        Process(0);
        return result;

        void Process(int i)
        {
            Node node = nodes[i];
            if (node.children.Count == 0)
            {
                node.size = 1;
                node.forward_hash = s[i] - 'a' + 1;
                node.backward_hash = s[i] - 'a' + 1;
                result[i] = true;
                return;
            }
            long forward_hash = 0;
            long backward_hash = 0;
            int size = 0;
            foreach(int j in node.children)
            {
                Process(j);
                Node child = nodes[j];
                forward_hash = (forward_hash + ((child.forward_hash * powers[size]) % p)) % p;
                backward_hash = (((backward_hash * powers[child.size]) % p) + child.backward_hash) % p;
                size += child.size;
            }
            node.forward_hash = (forward_hash + powers[size] * (s[i] - 'a' + 1)) % p;
            node.backward_hash = (backward_hash * b + s[i] - 'a' + 1) % p;
            node.size = size + 1;
            result[i] = node.forward_hash == node.backward_hash;
        }
    }

    public class Node
    {
        public List<int> children = new();
        public int size;
        public long forward_hash;
        public long backward_hash;
    }
}
```