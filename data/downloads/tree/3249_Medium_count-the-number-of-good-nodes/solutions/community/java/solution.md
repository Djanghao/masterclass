# DFS

**Author:** fahad_Mubeen
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619445/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5619445/)

---

# Approach
1. **Construct the Tree:** Build a bidirectional adjacency list from the edges array.
2. **DFS Traversal:** Perform a depth-first search to calculate the number of children for each node and store these values in the size vector.
3. **Evaluate Good Nodes:** Iterate through all the nodes from ***0** to **n -1*** to determine if all their child nodes have the same size.

    - Consider only the child nodes. If the size of a neighboring node is less than the size of the current node, it indicates that it is a child node.

    - Initialize the previous size variable to negative one. For each child, if the previous size is not negative one and the current child's size is different from the previous size, exit the loop. This means the current node is not a good node because its children do not all have the same size.
4. **Return the Result:** Finally, return the total count of good nodes.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(V + E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V + E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# code
```C++ []
class Solution {
public:
    vector<list<int>> graph;
    int dfs(int curr, int par, vector<int>& size) {
        int sz = 1;
        for(int nbr : graph[curr]){
            if(nbr != par) sz += dfs(nbr, curr, size);
        }
        size[curr] = sz;
        return sz;
    }

    int countGoodNodes(vector<vector<int>>& edges) {
        int n = edges.size() + 1;
        graph.clear();
        graph.resize(n);
        vector<int> size(n, 0);
        for(int i = 0; i < n-1; i++){
            graph[edges[i][1]].push_back(edges[i][0]);
            graph[edges[i][0]].push_back(edges[i][1]);
        }
        dfs(0, -1, size);
        int res = 0;

        for(int i = 0; i < n; i++){
            bool flag = true;
            int prev = -1;
            for(auto nbr : graph[i]) {
                if(size[nbr] < size[i]){
                    if(prev == -1) prev = size[nbr];
                    else if(prev != size[nbr]) {
                        flag = false;
                        break;
                    }
                }
            }
            if(flag) res++;
        }

        return res;
    }
};
```
```Java []
class Solution {
    private List<List<Integer>> graph;
    private int[] subtreeSize;

    private int dfs(int curr, int parent) {
        int size = 1;
        for (int nbr : graph.get(curr)) {
            if (nbr != parent) {
                size += dfs(nbr, curr);
            }
        }
        subtreeSize[curr] = size;
        return size;
    }

    public int countGoodNodes(int[][] edges) {
        int n = edges.length + 1;
        graph = new ArrayList<>(n);
        subtreeSize = new int[n];
        
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }

        dfs(0, -1);

        int result = 0;
        for (int i = 0; i < n; i++) {
            boolean isGoodNode = true;
            int previousSize = -1;
            for (int nbr : graph.get(i)) {
                if (subtreeSize[nbr] < subtreeSize[i]) {
                    if (previousSize == -1) {
                        previousSize = subtreeSize[nbr];
                    } else if (previousSize != subtreeSize[nbr]) {
                        isGoodNode = false;
                        break;
                    }
                }
            }
            if (isGoodNode) {
                result++;
            }
        }

        return result;
    }
}
```
```Python3 []
class Solution:
    def countGoodNodes(self, edges: List[List[int]]) -> int:
        def dfs(curr: int, parent: int) -> int:
            size = 1
            for nbr in graph[curr]:
                if nbr != parent:
                    size += dfs(nbr, curr)
            subtree_size[curr] = size
            return size

        n = len(edges) + 1
        graph = defaultdict(list)
        subtree_size = [0] * n

        # Build the graph
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        dfs(0, -1)

        result = 0
        for i in range(n):
            is_good_node = True
            previous_size = -1
            for nbr in graph[i]:
                if subtree_size[nbr] < subtree_size[i]:
                    if previous_size == -1:
                        previous_size = subtree_size[nbr]
                    elif previous_size != subtree_size[nbr]:
                        is_good_node = False
                        break
            if is_good_node:
                result += 1

        return result

```
