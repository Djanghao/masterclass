# C++ dfs with xor

**Author:** EugeneBalykov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/4344813/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/4344813/)

---

# Intuition
DFS flipping with xor

# Complexity
T = O(n)
S = O(n)

# Code

```
class Solution {
private:
    static int dfs(int n, const vector<int>& ns, int val) {
        if (n >= ns.size()) {
            return 0;
        }

        val = ns[n] ^ val;
        int l = dfs(n * 2 + 1, ns, val);
        int r = dfs(n * 2 + 2, ns, val);

        return l + r + val;
    }
public:
    int numberOfNodes(int n, vector<int>& queries) {
        vector<int> nodes(n, 0);
        for (auto q : queries) {
            nodes[q-1] = 1 - nodes[q-1];
        }

        return dfs(0, nodes, 0);
    }
};
```