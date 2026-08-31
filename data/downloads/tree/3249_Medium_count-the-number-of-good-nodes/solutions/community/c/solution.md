# DFS on the Tree | C++, Python, Java

**Author:** not_yl3
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619417/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619417/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are required to count the total number of good nodes, which are defined as nodes where their subtrees (rooted at their children) all have the same size. We can solve this by building the tree with the given `edges` and performing a dfs on the tree.
# Approach
<!-- Describe your approach to solving the problem. -->
We create an adjacency list `graph` from `edges` and we also use a hashmap `counts` that acts as a set to tell if we've visited a previous node and get the sizes of nodes we've visited and initially all counts are set to -1.

For our dfs we have our base case as if `root` is in `counts`, to which we return the previously calculated size. Otherwise we perform a dfs on all the children of `root` and total all the sizes with `total` while also keeping track to see if each subtree's size is the same.

In the end, if all the sizes were the same, we increment `res` and we return `total` since even if all the subtree sizes weren't the same for this root, it is possible for this node's parent to be a good node. We also add `root` to counts incase we visit it again.
# Complexity
- $$V$$ is the number of verticies and $$E$$ is the number of edges.
- Time complexity: $$O(V + E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V + E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int countGoodNodes(vector<vector<int>>& edges) {
        int n = edges.size() + 1, res = 0;
        for (auto& e : edges){
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
            counts.push_back(-1);
        }
        for (int i = 0; i < n; i++)
            if (counts[i] == -1)
                dfs(i, res);
        return res;
    }
private:
    unordered_map<int, vector<int>> graph;
    vector<int> counts = {-1};
    int dfs(int root, int& res){
        if (counts[root] != -1)
            return counts[root];
        int total = 0, size = -1;
        bool equal = true;
        counts[root] = 0;
        for (int child : graph[root]){
            if (counts[child] != -1)
                continue;
            int n = dfs(child, res);
            total += n;
            if (size == -1)
                size = n;
            else if (n != size)
                equal = false;
        }
        if (equal) res++;
        counts[root] = total;
        return total + 1;
    }
};
```
```python []
class Solution:
    def countGoodNodes(self, edges: List[List[int]]) -> int:
        n, self.res = len(edges) + 1, 0
        graph = defaultdict(list)
        counts = {}

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        def dfs(root):
            if root in counts:
                return counts[root]
            total, size, equal = 0, None, True
            counts[root] = 0
            for child in graph[root]:
                if child in counts:
                    continue
                n = dfs(child)
                total += n
                if size is None:
                    size = n
                elif n != size:
                    equal = False
            if equal:
                self.res += 1
            counts[root] = total
            return total + 1
        
        for i in range(n):
            if i not in counts:
                dfs(i)
        
        return self.res
```
```Java []
class Solution {
    public int countGoodNodes(int[][] edges) {
        int n = edges.length + 1;
        counts = new int[n];
        graph = new ArrayList[n];
        for (int i = 0; i < n; i++){
            graph[i] = new ArrayList<>();
            counts[i] = -1;
        }
        for (int[] e : edges){
            graph[e[0]].add(e[1]);
            graph[e[1]].add(e[0]);
        }
        for (int i = 0; i < n; i++)
            if (counts[i] == -1)
                dfs(i);
        return res;
    }
    private int res = 0, counts[];
    private List<Integer>[] graph;
    private int dfs(int root){
        if (counts[root] != -1)
            return counts[root];
        int total = 0, size = -1;
        boolean equal = true;
        counts[root] = 0;
        for (int i = 0; i < graph[root].size(); i++){
            int child = graph[root].get(i);
            if (counts[child] != -1)
                continue;
            int n = dfs(child);
            total += n;
            if (size == -1)
                size = n;
            else if (n != size)
                equal = false;
        }
        if (equal) res++;
        counts[root] = total;
        return total + 1;
    }
}
```
