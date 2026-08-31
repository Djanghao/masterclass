# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447512/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447512/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)




# Complexity
- Time complexity:
   $$O(nlogk)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to calculate the maximum possible product of coins placed on nodes
    vector<long long> placedCoins(vector<vector<int>>& edges, vector<int>& cost) {
        int n = cost.size(); // Number of nodes
        vector<vector<int>> edge(n); // Adjacency list representation of edges
        
        // Creating the graph using the given edges
        for(auto i : edges){
            int u = i[0], v = i[1];
            edge[u].push_back(v);
            edge[v].push_back(u);
        }

        // Multisets to store positive and negative costs for each node
        multiset<int> pos[n];
        multiset<int, greater<int>> neg[n];

        // Vector to store the final result of coins placed on nodes
        vector<long long> coins(n);

        // Depth-first search (DFS) function to traverse the graph and calculate coins
        auto dfs = [&](auto &dfs, int x, int p) -> void {
            // Inserting costs into respective multisets based on positivity
            if(cost[x] > 0){
                pos[x].insert(cost[x]);
            } else {
                neg[x].insert(cost[x]);
            }

            // Recursive DFS traversal for each adjacent node
            for(auto y : edge[x]){
                if(y == p) continue; // Skip the parent node
                dfs(dfs, y, x); // Recursive call for the child node

                // Merging costs from child nodes into current node
                for(auto i : pos[y]){
                    pos[x].insert(i);
                }
                for(auto i : neg[y]){
                    neg[x].insert(i);
                }

                // Trimming the multisets to keep at most 3 elements
                while((int)pos[x].size() > 3) pos[x].erase(pos[x].begin());
                while((int)neg[x].size() > 3) neg[x].erase(neg[x].begin());
            }

            // Counting the number of positive and negative costs
            int ps = (int)pos[x].size(), ns = (int)neg[x].size();

            // Calculating the maximum product of coins placed on the node
            if(ps + ns < 3){
                coins[x] = 1; // Assign 1 coin if less than 3 costs exist
            } else {
                long long mx = -9e18; // Initializing the maximum product as a large negative value

                // Calculating maximum product based on different cases of positive and negative costs
                if(ps >= 3){
                    auto itr = pos[x].rbegin();
                    int lst = *itr;
                    itr++;
                    int slst = *itr;
                    itr++;
                    int tlst = *itr;
                    mx = max(mx, 1LL * lst * slst * tlst);
                }
                if(ns >= 2 && ps >= 1){
                    auto itr = neg[x].rbegin();
                    int lst = *itr;
                    itr++;
                    int slst = *itr;
                    int tlst = *pos[x].rbegin();
                    mx = max(mx, 1LL * lst * slst * tlst);
                }
                if(mx > 0){
                    coins[x] = mx; // Assign the maximum product if positive
                }
            }
        };
        
        // Starting DFS from node 0
        dfs(dfs, 0, -1); // Pass -1 as the parent node (root node)

        return coins; // Return the vector containing coins placed on each node
    }
};




```

```Java []
import java.util.*;

class Solution {
    public long[] placedCoins(int[][] edges, int[] cost) {
        int n = cost.length;
        List<List<Integer>> edge = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            edge.add(new ArrayList<>());
        }

        for (int[] i : edges) {
            int u = i[0], v = i[1];
            edge.get(u).add(v);
            edge.get(v).add(u);
        }

        TreeSet<Integer>[] pos = new TreeSet[n];
        TreeSet<Integer>[] neg = new TreeSet[n];

        for (int i = 0; i < n; i++) {
            pos[i] = new TreeSet<>();
            neg[i] = new TreeSet<>(Collections.reverseOrder());
        }

        long[] coins = new long[n];

        dfs(0, -1, edge, cost, pos, neg, coins);

        return coins;
    }

    void dfs(int x, int p, List<List<Integer>> edge, int[] cost, TreeSet<Integer>[] pos, TreeSet<Integer>[] neg, long[] coins) {
        if (cost[x] > 0) {
            pos[x].add(cost[x]);
        } else {
            neg[x].add(cost[x]);
        }

        for (int y : edge.get(x)) {
            if (y == p) continue;
            dfs(y, x, edge, cost, pos, neg, coins);

            pos[x].addAll(pos[y]);
            neg[x].addAll(neg[y]);

            while (pos[x].size() > 3) pos[x].pollFirst();
            while (neg[x].size() > 3) neg[x].pollLast();
        }

        int ps = pos[x].size(), ns = neg[x].size();

        if (ps + ns < 3) {
            coins[x] = 1;
        } else {
            long mx = Long.MIN_VALUE;

            if (ps >= 3) {
                Iterator<Integer> itr = pos[x].descendingIterator();
                int lst = itr.next();
                int slst = itr.next();
                int tlst = itr.next();
                mx = Math.max(mx, 1L * lst * slst * tlst);
            }
            if (ns >= 2 && ps >= 1) {
                Iterator<Integer> itr = neg[x].descendingIterator();
                int lst = itr.next();
                int slst = itr.next();
                int tlst = pos[x].last();
                mx = Math.max(mx, 1L * lst * slst * tlst);
            }
            if (mx > 0) {
                coins[x] = mx;
            }
        }
    }
}



```
```python3 []

class Solution:
    def placedCoins(self, edges: List[List[int]], cost: List[int]) -> List[int]:
        n = len(cost)
        edge = [[] for _ in range(n)]

        for i in edges:
            u, v = i[0], i[1]
            edge[u].append(v)
            edge[v].append(u)

        pos = [set() for _ in range(n)]
        neg = [set() for _ in range(n)]
        coins = [0] * n

        def dfs(x, p):
            if cost[x] > 0:
                pos[x].add(cost[x])
            else:
                neg[x].add(cost[x])

            for y in edge[x]:
                if y == p:
                    continue
                dfs(y, x)

                pos[x] |= pos[y]
                neg[x] |= neg[y]

                pos[x] = sorted(pos[x])[:3]
                neg[x] = sorted(neg[x], reverse=True)[:3]

            ps, ns = len(pos[x]), len(neg[x])

            if ps + ns < 3:
                coins[x] = 1
            else:
                mx = float('-inf')

                if ps >= 3:
                    lst, slst, tlst = sorted(pos[x])[-3:]
                    mx = max(mx, lst * slst * tlst)

                if ns >= 2 and ps >= 1:
                    lst, slst = sorted(neg[x])[:2]
                    tlst = max(pos[x])
                    mx = max(mx, lst * slst * tlst)

                if mx > 0:
                    coins[x] = mx

        dfs(0, -1)
        return coins


```
```javascript []
var placedCoins = function(edges, cost) {
    const n = cost.length;
    const edge = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        edge[u].push(v);
        edge[v].push(u);
    }

    const pos = Array.from({ length: n }, () => new Set());
    const neg = Array.from({ length: n }, () => new Set());
    const coins = new Array(n).fill(0);

    const dfs = (x, p) => {
        if (cost[x] > 0) {
            pos[x].add(cost[x]);
        } else {
            neg[x].add(cost[x]);
        }

        for (const y of edge[x]) {
            if (y === p) continue;
            dfs(y, x);

            pos[x] = new Set([...pos[x], ...pos[y]]);
            neg[x] = new Set([...neg[x], ...neg[y]]);

            pos[x] = Array.from(pos[x]).sort((a, b) => a - b).slice(0, 3);
            neg[x] = Array.from(neg[x]).sort((a, b) => b - a).slice(0, 3);
        }

        const ps = pos[x].size, ns = neg[x].size;

        if (ps + ns < 3) {
            coins[x] = 1;
        } else {
            let mx = Number.MIN_SAFE_INTEGER;

            if (ps >= 3) {
                const [lst, slst, tlst] = Array.from(pos[x]).slice(-3);
                mx = Math.max(mx, lst * slst * tlst);
            }
            if (ns >= 2 && ps >= 1) {
                const [lst, slst] = Array.from(neg[x]).slice(0, 2);
                const tlst = Math.max(...Array.from(pos[x]));
                mx = Math.max(mx, lst * slst * tlst);
            }
            if (mx > 0) {
                coins[x] = mx;
            }
        }
    };

    dfs(0, -1);
    return coins;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---