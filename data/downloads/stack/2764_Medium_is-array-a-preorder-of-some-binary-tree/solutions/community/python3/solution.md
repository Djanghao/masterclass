# Simple DFS in C++, Java & Python

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3724414/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3724414/)

---

# Intuition
Build a adjacent list. Do DFS as pre-order, check whether each node is expected.

# Approach
Do DFS directly, compare each node with the one in the list/vector.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    bool dfs(int& ind, int x, const vector<vector<int>>& nodes, const unordered_map<int, vector<int>>& con) {
        if (ind >= nodes.size()) {
            return false;
        }
        if (nodes[ind++][0] != x) {
            return false;
        }
        const auto t = con.find(x);
        if (t == con.end()) {
            return true;
        }
        for (const int y : t->second) {
            if (!dfs(ind, y, nodes, con)) {
                return false;
            }
        }
        return true;
    }
public:
    bool isPreorder(vector<vector<int>>& nodes) {
        if (nodes[0][1] >= 0) {
            return false;
        }
        unordered_map<int, vector<int>> con;
        const int root = nodes[0][0];
        for (const auto& v : nodes) {
            con[v[1]].push_back(v[0]);
        }
        int i = 0;
        return dfs(i, root, nodes, con);
    }
};
```

Java
```

class Solution {
    private boolean dfs(int[] ind, int x, List<List<Integer>> nodes, Map<Integer, List<Integer>> con) {
        if (ind[0] >= nodes.size()) {
            return false;
        }
        if (!nodes.get(ind[0]).get(0).equals(x)) {
            return false;
        }
        List<Integer> t = con.get(x);
        if (t == null) {
            return true;
        }
        for (int y : t) {
            ind[0]++;
            if (!dfs(ind, y, nodes, con)) {
                return false;
            }
        }
        return true;
    }

    public boolean isPreorder(List<List<Integer>> nodes) {
        if (nodes.get(0).get(1) >= 0) {
            return false;
        }
        Map<Integer, List<Integer>> con = new HashMap<>();
        int root = nodes.get(0).get(0);
        for (List<Integer> v : nodes) {
            con.computeIfAbsent(v.get(1), k -> new ArrayList<>()).add(v.get(0));
        }
        int[] i = {0};
        return dfs(i, root, nodes, con);
    }
}
```

Python:
```
class Solution:
    def dfs(self, ind: List[int], x: int, nodes: List[List[int]], con: dict) -> bool:
        if ind[0] >= len(nodes):
            return False
        if nodes[ind[0]][0] != x:
            return False
        t = con.get(x)
        if t is None:
            return True
        for y in t:
            ind[0] += 1
            if not self.dfs(ind, y, nodes, con):
                return False
        return True

    def isPreorder(self, nodes: List[List[int]]) -> bool:
        if nodes[0][1] >= 0:
            return False
        con = {}
        root = nodes[0][0]
        for v in nodes:
            con.setdefault(v[1], []).append(v[0])
        i = [0]
        return self.dfs(i, root, nodes, con)
```