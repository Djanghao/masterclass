# Topological Sort vs. DFS vs. Dijkstra

**Author:** votrubac
**Votes:** 85
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/1200575/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/1200575/)

---

I tried to solve it first using DFS, but got TLE. Then I switched to Dijkstra, and, after a few optimizations, it got accepted. But solving it using Dijkstra was quite tricky due to many edge conditions.

> Update: you can do DFS as shown by [manuagrawal2013](https://leetcode.com/manuagrawal2013/) below if you use memoisation. I'll add DFS solution as well.

After the fact, I looked at other solutions and realized that we just can process items in a topological order and track maximum counts for each color. This solution was so much easier to implemen. I'll post my BFS solution below just for the reference and appreciation of how easier it is to solve this problem when you find the right approach.

#### Topological Sort
To process nodes in the topological order, we track the indegree - the number of incoming edges - for each node. We start with nodes with zero indegrees (sources), and then "remove" outgoing edges (in other words, reduce the indegree of connected nodes). After that, we pick a new set of nodes with zero indegree, and repeat the process.

We convert our edges to adjacency list, and count the indegree for each node. After that, nodes with zero indegrees are our sources. For each node, we track the count of each 26 character colors. 

When we process a node `i`:
- We increase the count for color `cs[i]`
- We process all adjacent nodes, and for each node `j`:
		- Set count for each color to maximum value between `i` and `j`.
		- Decrease the indegree ("remove" the edge)
		- If the node indegree becomes zero, we add it as a source for the next round.

Note that the above algorithm will never enter a cycle, as no nodes in the cycle will ever have zero indegree. Thus, we count nodes that we process, and make sure we processed all nodes (or else there is a cycle so we return `-1`).

**C++ (520 ms)**
```cpp
int largestPathValue(string cs, vector<vector<int>>& edges) {
    vector<vector<int>> al(cs.size()), cnt(cs.size(), vector<int>(26));
    vector<int> indegrees(cs.size());
    for (auto &e: edges) {
        al[e[0]].push_back(e[1]);
        ++indegrees[e[1]];
    }
    vector<int> q;
    for (int i = 0; i < cs.size(); ++i)
        if (indegrees[i] == 0)
            q.push_back(i);
    int res = 0, processed = 0;
    while (!q.empty()) {
        vector<int> q1;
        for (auto i : q) {
            ++processed;
            res = max(res, ++cnt[i][cs[i] - 'a']);
            for (auto j : al[i]) {
                for (auto k = 0; k < 26; ++k)
                    cnt[j][k] = max(cnt[j][k], cnt[i][k]);
                if (--indegrees[j] == 0)
                    q1.push_back(j);
            }
        }
        swap(q, q1);
    }
    return processed != cs.size() ? -1 : res;
}
```
#### DFS
We can use a simple DFS to reach leaf nodes, and then go back and track the maximum counts for each color. 

**C++ (496 ms)**
```cpp
int dfs(int i, string &c, vector<vector<int>> &al, vector<vector<int>> &cnt, vector<int> &visited) {
    if (!visited[i]) {
        visited[i] = 1;
        for (auto j : al[i]) {
            if (dfs(j, c, al, cnt, visited) == INT_MAX)
                return INT_MAX;
            for (auto k = 0; k < 26; ++k)
                cnt[i][k] = max(cnt[i][k], cnt[j][k]);
        }
        ++cnt[i][c[i] - 'a'];
        visited[i] = 2;
    }
    return visited[i] == 2 ? cnt[i][c[i] - 'a'] : INT_MAX;
}
int largestPathValue(string c, vector<vector<int>>& edges) {
    vector<vector<int>> al(c.size()), cnt(c.size(), vector<int>(26));
    vector<int> visited(c.size());
    for (auto &e : edges)
        al[e[0]].push_back(e[1]);
    int res = 0;
    for (auto i = 0; i < c.size() && res != INT_MAX; ++i)
        res = max(res, dfs(i, c, al, cnt, visited));
    return res == INT_MAX ? -1 : res;
}
```
#### Dijkstra
OK, the code below is quite long because of optimizations and handling edge cases. 

- We need a separate algorithm (gray-black BFS) to detect cycles.
- To make it faster, we analyze the graph independently for each of 26 colors. 
- As an additional optimization, we start with the most frequent color and prute for rare colors.

We then run Dijkstra starting from the source nodes (like in the approach above). Basically, we run BFS tracking the count of the current color in each node.

**C++ (820 ms)**
```cpp
bool dfs(vector<vector<int>> &al, vector<int> &gb, int i) {
    if (gb[i] == 0) {
        gb[i] = 1;
        for (auto j : al[i])
            if (!dfs(al, gb, j))
                return false;
        gb[i] = 2;
    }
    return gb[i] == 2;
}
int largestPathValue(string cs, vector<vector<int>>& edges) {
    int cnt[128] = {};
    for (auto ch : cs)
        ++cnt[ch];
    char st[26] = {};
    iota(begin(st), end(st), 'a');
    sort(begin(st), end(st), [&](char a, char b){ return cnt[a] > cnt[b];});    
    vector<vector<int>> al(cs.size());
    vector<bool> target(cs.size());
    for (auto &e: edges) {
        al[e[0]].push_back(e[1]);
        target[e[1]] = true;
    }
    vector<pair<int, int>> q_src;
    for (int i = 0; i < cs.size(); ++i)
        if (!target[i])
            q_src.push_back({i, -1});
    int res = 0;
    vector<int> gb(cs.size());
    for (auto [i, tmp] : q_src)
        if (!dfs(al, gb, i))
            return -1;
    if (count(begin(gb), end(gb), 2) != cs.size())
        return -1;
    for (char ch : st) {
        if (res >= cnt[ch])
            continue;
        vector<int> cnt(cs.size(), -1);
        auto q = q_src;
        while (!q.empty()) {
            vector<pair<int, int>> q1;
            for (auto [i, from] : q) {
                int count = (from == -1 ? 0 : cnt[from]) + (cs[i] == ch);
                if (count < cnt[i])
                    continue;
                cnt[i] = count;
                res = max(res, cnt[i]);
                for (auto j : al[i]) {
                    if (cnt[j] < cnt[i] + (cs[j] == ch)) {
                        cnt[j] = cnt[i] + (cs[j] == ch);
                        q1.push_back({j, i});
                    }
                }
            }
            swap(q, q1);
        }
    }
    return res;
}
```