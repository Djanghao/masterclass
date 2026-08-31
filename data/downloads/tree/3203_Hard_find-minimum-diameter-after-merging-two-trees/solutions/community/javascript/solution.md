# Solution By Dare2Solve | Detailed Explanation | Clean Solution | O(n)

**Author:** Dare2Solve
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5389509/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5389509/)

---

```Explanation []
authorslog.vercel.app/blog/zXiCUBokyB
```

# Code

```cpp []
class Solution {
public:
    int minimumDiameterAfterMerge(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        int d1 = getDiameter(edges1);
        int d2 = getDiameter(edges2);
        return max(max(d1 - 1, d2 - 1), d1 / 2 + d2 / 2 + 1);
    }

private:
    int getDiameter(vector<vector<int>>& edges) {
        unordered_map<int, vector<int>> map;
        for (auto& edge : edges) {
            int i = edge[0];
            int j = edge[1];
            map[i].push_back(j);
            map[j].push_back(i);
        }

        int res = 0;
        dfs(0, -1, map, res);

        return res;
    }

    int dfs(int node, int parent, unordered_map<int, vector<int>>& map, int& res) {
        int maxDepth = 1;
        for (int neighbor : map[node]) {
            if (neighbor == parent)
                continue;
            int depth = dfs(neighbor, node, map, res);
            res = max(res, maxDepth + depth);
            maxDepth = max(maxDepth, 1 + depth);
        }
        return maxDepth;
    }
};
```

```python []
class Solution:
    def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
        def getDiameter(edges):
            map = defaultdict(list)
            for i, j in edges:
                map[i].append(j)
                map[j].append(i)
            
            res = [0]
            
            def dfs(node, parent):
                maxDepth = 1
                for neighbor in map[node]:
                    if neighbor == parent:
                        continue
                    depth = dfs(neighbor, node)
                    res[0] = max(res[0], maxDepth + depth)
                    maxDepth = max(maxDepth, 1 + depth)
                return maxDepth
            
            dfs(0, -1)
            
            return res[0]
        
        d1 = getDiameter(edges1)
        d2 = getDiameter(edges2)
        
        return max(d1 - 1, d2 - 1, d1 // 2 + d2 // 2 + 1)
```

```java []
class Solution {
    public int minimumDiameterAfterMerge(int[][] edges1, int[][] edges2) {
        int d1 = getDiameter(edges1);
        int d2 = getDiameter(edges2);
        return Math.max(Math.max(d1 - 1, d2 - 1), d1 / 2 + d2 / 2 + 1);
    }

    private int getDiameter(int[][] edges) {
        List<List<Integer>> map = new ArrayList<>();
        for (int i = 0; i < edges.length + 1; i++) {
            map.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int i = edge[0];
            int j = edge[1];
            map.get(i).add(j);
            map.get(j).add(i);
        }

        int[] res = { 0 };

        dfs(0, -1, map, res);

        return res[0];
    }

    private int dfs(int node, int parent, List<List<Integer>> map, int[] res) {
        int maxDepth = 1;
        for (int neighbor : map.get(node)) {
            if (neighbor == parent)
                continue;
            int depth = dfs(neighbor, node, map, res);
            res[0] = Math.max(res[0], maxDepth + depth);
            maxDepth = Math.max(maxDepth, 1 + depth);
        }
        return maxDepth;
    }
}
```

```javascript []
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
    var getDiameter = (edges) => {
        let map = Array(edges.length + 1).fill().map(() => []);

        for (let [i, j] of edges) {
            map[i].push(j);
            map[j].push(i);
        }

        let res = 0;

        var dfs = (node, parent) => {
            let maxDepth = 1;
            for (let neighbor of map[node]) {
                if (neighbor === parent) continue;
                let depth = dfs(neighbor, node);
                res = Math.max(res, maxDepth + depth);
                maxDepth = Math.max(maxDepth, 1 + depth);
            }
            return maxDepth;
        };

        dfs(0, -1);

        return res;
    };

    let d1 = getDiameter(edges1);
    let d2 = getDiameter(edges2);

    return Math.max(d1 - 1, d2 - 1, Math.floor(d1 / 2) + Math.floor(d2 / 2) + 1);
};
```