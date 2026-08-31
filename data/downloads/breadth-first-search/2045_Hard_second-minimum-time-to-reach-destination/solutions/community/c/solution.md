# [C++] Two BFS with detailed explanation

**Author:** rh137
**Votes:** 91
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1525165/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1525165/)

---

idea:
1. calculate the shortest path from node `i` to `n-1`(index starts from 0), store the results in `d`
	- do BFS starting from `n-1`
2. check whether there is a path with length `d[0] + 1`
	- do BFS starting from `0`, and find at each vertex **whether there's a neighbor with `d[nei] == d[cur]`**, if so, you have found a path with length `d[0] + 1`
3. there is always a path with length `d[0] + 2`
	- this is because you can always choose the path `0, a, ..., x, n-1,` **`x, n-1`**, where the prefix `0, a, ..., x, n-1` is a shortest path from `0` to `n-1`.
4. linear scan for each vertex and keep track of current time (after we checked the length of the second shortest path)
	- We don't need to reconstruct the path, since all path of same length is considered same in this problem. We care only the length of a path.
	- The signal is green if current time falls in one of the intervals `[0, change), [2*change, 3*change), ..., [2k*change, (2k+1)*change), ...`
	- In my code, I check the parity of `currTime/change`. If it's even, the current signal is green and we can directly go to the next vertex, if it's odd then we have to wait until the signal turns into green.

- code (C++)
```
class Solution {
public:
    int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {
        // if the shortest path from 1 to n is of length L
        // find whether there is a path of length L+1
        // there is always a path of length L+2
        
        vector<vector<int>> adj(n);
        for (auto& e : edges) {
            int u = e[0]-1, v = e[1]-1;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        
        // bfs from goal
        vector<int> d(n, 1e9);
        d[n-1] = 0;
        queue<int> q;
        q.push(n-1);
        while (!q.empty()) {
            int cur = q.front(); q.pop();
            for (auto nei : adj[cur]) {
                if (d[nei] == 1e9) {
                    d[nei] = d[cur] + 1;
                    q.push(nei);
                }
            }
        }
        
        // check the existence of a path with length = d[0]+1
        int len = d[0] + 2;
        q.push(0);
        bool done = false;
        while (!q.empty()) {
            int cur = q.front(); q.pop();
            for (auto nei : adj[cur]) {
                if (d[nei] == d[cur]) {
                    len--;
                    done = true;
                    break;
                } else if (d[nei] == d[cur] - 1) {
                    q.push(nei);
                }
            }
            if (done) break;
        }
        
        // calculate the time needed
        // light : green in [0, c),  [2c, 3c), ... 
        //          red  in [c, 2c), [3c, 4c), ...
        int currTime = 0;
        //cout << len << '\
';
        for (int i = 0; i < len; i++) {
			if ((currTime / change) % 2 == 1)  // have to wait until the signal turns into green
                currTime = ((currTime / change) + 1) * change;    
            currTime += time;
        }
        return currTime;
    }
};
```

- time complexity: `O(|V| + |E|)`, or equivalently`O(n + edges.length)`
	- 2 BFS + 1 linear scan, where `len < n+2`
- space complexity: `O(|V| + |E|)`
	- adjacency list `adj` + distance vector `d` + queue for BFS `q`