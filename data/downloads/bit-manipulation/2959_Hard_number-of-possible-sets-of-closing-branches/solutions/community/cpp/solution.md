# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4382709/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4382709/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Subset Generation:** The code utilizes bitmasking to generate all possible subsets of nodes.

1. **Graph Creation:** For each subset, it constructs a graph (`g`) based on the selected nodes and updates it according to the roads provided.

1. **Floyd-Warshall Algorithm:** Uses the Floyd-Warshall algorithm to find the shortest paths between nodes in the constructed graph.

1. **Validation:** Checks if the selected nodes in the subset form a valid set by verifying if all pairs of nodes have a distance less than or equal to `maxDistance`.


# Complexity
- *Time complexity:*
   $$O(2^n . N^3)$$
    

- *Space complexity:*
   $$O(N^2)$$
    


# Code
```C++ []
class Solution {
public:
    int numberOfSets(int n, int maxDistance, vector<vector<int>>& roads) {
        int ans = 0;
        // Iterate through all subsets of nodes (1 << n) using bitmasking
        for(int i = 0; i < 1 << n; i++) {
            // Create an adjacency matrix to represent the graph
            vector<vector<int>> g(n, vector<int>(n, 1e9));

            // Update the graph based on the selected nodes in the subset
            for(auto &it : roads) {
                int x = it[0], y = it[1], w = it[2];
                if((i >> x & 1) && (i >> y & 1)) {
                    g[x][y] = min(g[x][y], w);
                    g[y][x] = min(g[y][x], w);
                }
            }

            // Set diagonal elements to 0
            for(int j = 0; j < n; j++)
                g[j][j] = 0;

            // Floyd-Warshall algorithm for finding the shortest paths
            for(int p = 0; p < n; p++) {
                for(int q = 0; q < n; q++) {
                    for(int k = 0; k < n; k++) {
                        g[q][k] = min(g[q][k], g[q][p] + g[p][k]);
                    }
                }
            }

            // Check if the selected nodes in the subset form a valid set
            int ok = 1;
            for(int j = 0; j < n; j++) {
                for(int k = 0; k < n; k++) {
                    if((i >> j & 1) && (i >> k & 1)) {
                        ok &= (g[j][k] <= maxDistance);
                    }
                }
            }

            // Increment the answer if the subset forms a valid set
            ans += ok;
        }
        return ans;
    }
};



```
```C []

int numberOfSets(int n, int maxDistance, int roads[][3], int roadsSize, int* roadsColSize) {
    int ans = 0;
    int i, j, p, q, k;

    for(i = 0; i < (1 << n); i++) {
        int g[n][n];
        for(j = 0; j < n; j++) {
            for(k = 0; k < n; k++) {
                g[j][k] = 1e9;
            }
        }

        for(j = 0; j < roadsSize; j++) {
            int x = roads[j][0], y = roads[j][1], w = roads[j][2];
            if((i >> x & 1) && (i >> y & 1)) {
                g[x][y] = g[y][x] = (g[x][y] < w) ? g[x][y] : w;
            }
        }

        for(j = 0; j < n; j++) {
            g[j][j] = 0;
        }

        for(p = 0; p < n; p++) {
            for(q = 0; q < n; q++) {
                for(k = 0; k < n; k++) {
                    g[q][k] = (g[q][k] < g[q][p] + g[p][k]) ? g[q][k] : g[q][p] + g[p][k];
                }
            }
        }

        int ok = 1;
        for(j = 0; j < n; j++) {
            for(k = 0; k < n; k++) {
                if((i >> j & 1) && (i >> k & 1)) {
                    ok &= (g[j][k] <= maxDistance);
                }
            }
        }
        ans += ok;
    }

    return ans;
}


```
```Java []

class Solution {
    public int numberOfSets(int n, int maxDistance, int[][] roads) {
        int ans = 0;
        for (int i = 0; i < (1 << n); i++) {
            int[][] g = new int[n][n];
            for (int[] row : g) {
                Arrays.fill(row, (int) 1e9);
            }

            for (int[] it : roads) {
                int x = it[0], y = it[1], w = it[2];
                if (((i >> x) & 1) == 1 && ((i >> y) & 1) == 1) {
                    g[x][y] = Math.min(g[x][y], w);
                    g[y][x] = Math.min(g[y][x], w);
                }
            }

            for (int j = 0; j < n; j++) {
                g[j][j] = 0;
            }

            for (int p = 0; p < n; p++) {
                for (int q = 0; q < n; q++) {
                    for (int k = 0; k < n; k++) {
                        g[q][k] = Math.min(g[q][k], g[q][p] + g[p][k]);
                    }
                }
            }

            int ok = 1;
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (((i >> j) & 1) == 1 && ((i >> k) & 1) == 1) {
                        ok &= (g[j][k] <= maxDistance) ? 1 : 0;
                    }
                }
            }

            ans += ok;
        }
        return ans;
    }
}


```
```python3 []

class Solution:
    def numberOfSets(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:
        ans = 0
        for i in range(1 << n):
            g = [[float('inf')] * n for _ in range(n)]

            for x, y, w in roads:
                if ((i >> x) & 1) and ((i >> y) & 1):
                    g[x][y] = min(g[x][y], w)
                    g[y][x] = min(g[y][x], w)

            for j in range(n):
                g[j][j] = 0

            for p in range(n):
                for q in range(n):
                    for k in range(n):
                        g[q][k] = min(g[q][k], g[q][p] + g[p][k])

            ok = 1
            for j in range(n):
                for k in range(n):
                    if ((i >> j) & 1) and ((i >> k) & 1):
                        ok &= 1 if g[j][k] <= maxDistance else 0

            ans += ok
        return ans


```
```javascript []
var numberOfSets = function(n, maxDistance, roads) {
    let ans = 0;

    for(let i = 0; i < 1 << n; i++) {
        let g = Array.from({ length: n }, () => Array.from({ length: n }, () => 1e9));

        for(let j = 0; j < roads.length; j++) {
            let [x, y, w] = roads[j];
            if((i >> x & 1) && (i >> y & 1)) {
                g[x][y] = g[y][x] = Math.min(g[x][y], w);
            }
        }

        for(let j = 0; j < n; j++) {
            g[j][j] = 0;
        }

        for(let p = 0; p < n; p++) {
            for(let q = 0; q < n; q++) {
                for(let k = 0; k < n; k++) {
                    g[q][k] = Math.min(g[q][k], g[q][p] + g[p][k]);
                }
            }
        }

        let ok = 1;
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                if((i >> j & 1) && (i >> k & 1)) {
                    ok &= (g[j][k] <= maxDistance);
                }
            }
        }
        ans += ok;
    }

    return ans;
};

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---