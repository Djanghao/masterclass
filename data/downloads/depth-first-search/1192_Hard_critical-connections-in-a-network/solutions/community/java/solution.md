# JS, Python, Java, C++ | Tarjan's Algorithm Solution w/ Explanation

**Author:** sgallivan
**Votes:** 119
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/1174196/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/1174196/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

If we think of the network and its connections like an undirected graph and its edges, then a critical connection, as defined by this problem, is the same as a bridge in the graph. To find out which edges are bridges, we can employ **Tarjan's Bridge-Finding Algorithm** (**TBFA**).

TBFA is a bit like a combination of a **depth-first search** (**DFS**) approach with **recursion** and a **union-find**. IN TBFA, we do a recursive DFS on our graph and for each node we keep track of the earliest node that we can circle back around to reach. By doing this, we can identify whether a given edge is a bridge because the far node doesn't lead back to any other earlier node.

To implement our TBFA, the first thing we have to do is to construct an **edge map** (**edgeMap**) from the **connections** list. Each key in our edge map should correspond to a specific node, and its value should be an array of each adjacent node to the key node.

We'll also need separate arrays to store the discovery time (**disc**) and the lowest future node (**low**) for each node, as well as a **time** counter to use with **disc**.

For our recursive DFS helper (**dfs**), each newly-visited node should set its initial value for both **disc** and **low** to the current value of **time** before **time** is incremented. (_Note: If we start **time** at **1** instead of **0**, we can use either **disc** or **low** as a visited array, rather than having to keep a separate array for the purpose. Any non-zero value in the chosen array will then represent a visited state for the given node._)

Then we recursively call **dfs** on each of the unvisited adjacent nodes (**next**) of the current node (**curr**). If one of the possible **next** nodes is an earlier node (**disc[next] < low[curr]**), then we've found a loop and we should update the **low** value for the current node. As each layer of the recursive function backtracks, it will propagate this value of **low** back down the chain.

If, after backtracking, the value of **low[next]** is still higher than **disc[curr]**, then there is no looped connection, meaning that the edge between **curr** and **next** is a bridge, so we should add it to our answer array (**ans**).

Once the **dfs** helper function has completed its traversal, we can **return ans**.

---

#### ***Implementation:***

Javascript strangely runs significantly faster with a regular object rather than a **Map()**.

---

#### ***Javascript Code:***

The best result for the code below is **652ms / 106.0MB** (beats 100% / 78%).
```javascript
var criticalConnections = function(n, connections) {
    let edgeMap = {}
    for (let i = 0; i < n; i++)
        edgeMap[i] = []
    for (let [a,b] of connections)
        edgeMap[a].push(b), edgeMap[b].push(a)
    let disc = new Uint32Array(n), low = new Uint32Array(n),
        time = 1, ans = []
    const dfs = (curr, prev) => {
        disc[curr] = low[curr] = time++
        for (let next of edgeMap[curr]) {
            if (!disc[next]) {
                dfs(next, curr)
                low[curr] = Math.min(low[curr], low[next])
            } else if (next !== prev)
                low[curr] = Math.min(low[curr], disc[next])
            if (low[next] > disc[curr])
                ans.push([curr, next])
        }
    }
    dfs(0, -1)
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **2248ms / 85.9MB** (beats 79% / 69%).
```python
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        edgeMap = defaultdict(list)
        for a,b in connections:
            edgeMap[a].append(b)
            edgeMap[b].append(a)
        disc, low, time, ans = [0] * n, [0] * n, [1], []
        def dfs(curr: int, prev: int):
            disc[curr] = low[curr] = time[0]
            time[0] += 1
            for next in edgeMap[curr]:
                if not disc[next]:
                    dfs(next, curr)
                    low[curr] = min(low[curr], low[next])
                elif next != prev:
                    low[curr] = min(low[curr], disc[next])
                if low[next] > disc[curr]:
                    ans.append([curr, next])
        dfs(0, -1)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **130ms / 94.2MB** (beats 57% / 98%).
```java
class Solution {
    int[] disc, low;
    int time = 1;
    List<List<Integer>> ans = new ArrayList<>();
    Map<Integer,List<Integer>> edgeMap = new HashMap<>();
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        disc = new int[n];
        low = new int[n];
        for (int i = 0; i < n; i++)
            edgeMap.put(i, new ArrayList<Integer>());
        for (List<Integer> conn : connections) {
            edgeMap.get(conn.get(0)).add(conn.get(1));
            edgeMap.get(conn.get(1)).add(conn.get(0));
        }
        dfs(0, -1);
        return ans;
    }
    public void dfs(int curr, int prev) {
        disc[curr] = low[curr] = time++;
        for (int next : edgeMap.get(curr)) {
            if (disc[next] == 0) {
                dfs(next, curr);
                low[curr] = Math.min(low[curr], low[next]);
            } else if (next != prev)
                low[curr] = Math.min(low[curr], disc[next]);
            if (low[next] > disc[curr]) 
                ans.add(Arrays.asList(curr, next));
        }
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **652ms / 210.3MB** (beats 32% / 16%).
```c++
class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        disc = vector<int>(n);
        low = vector<int>(n);
        for (auto conn : connections) {
            edgeMap[conn[0]].push_back(conn[1]);
            edgeMap[conn[1]].push_back(conn[0]);
        }
        dfs(0, -1);
        return ans;
    }
    void dfs(int curr, int prev) {
        disc[curr] = low[curr] = time++;
        for (int next : edgeMap[curr]) {
            if (disc[next] == 0) {
                dfs(next, curr);
                low[curr] = min(low[curr], low[next]);
            } else if (next != prev)
                low[curr] = min(low[curr], disc[next]);
            if (low[next] > disc[curr]) 
                ans.push_back({curr, next});
        }
    }
private:
    vector<int> disc{0}, low{0};
    int time = 1;
    vector<vector<int>> ans;
    unordered_map<int, vector<int>> edgeMap;
};
```