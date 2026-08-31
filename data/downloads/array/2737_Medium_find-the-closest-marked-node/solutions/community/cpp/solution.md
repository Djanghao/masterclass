# Just dijkstra, C++, Java & Python

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-closest-marked-node/solutions/3638623/](https://leetcode.com/problems/find-the-closest-marked-node/solutions/3638623/)

---

# Intuition
Find shortest path starting from s.

# Approach
Using priority queue.

# Complexity
- Time complexity:
O(n + m * logn) where m is the number of edges.

- Space complexity:
O(m + n)

C++

# Code
```
class Solution {
public:
    int minimumDistance(int n, vector<vector<int>>& edges, int s, vector<int>& marked) {
        vector<vector<pair<int, int>>> con(n);
        for (const auto & e : edges) {
            con[e[0]].push_back({e[1], e[2]});
        }
        priority_queue<pair<int, int>> q;
        q.push({0, s});
        vector<int> dist(n, INT_MAX);
        vector<bool> mark(n);
        const unordered_set<int> sinks(marked.begin(), marked.end());
        dist[s] = 0;
        while (!q.empty()) {
            const int x = q.top().second;
            q.pop();
            if (mark[x]) {
                continue;
            }
            mark[x] = true;
            if (sinks.count(x)) {
                return dist[x];
            }
            for (const auto& p : con[x]) {
                if (p.second + dist[x] < dist[p.first]) {
                    dist[p.first] = p.second + dist[x];
                    q.push({-dist[p.first], p.first});
                }
            }
        }
        return -1;
    }
};
```


Java
```
class Solution {
    public int minimumDistance(int n, List<List<Integer>> edges, int s, int[] marked) {
        ArrayList<int[]>[] con = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            con[i] = new ArrayList<int[]>();
        }
        
        for (List<Integer> e : edges) {
            con[e.get(0)].add(new int[]{e.get(1), e.get(2)});
        }
        
        PriorityQueue<Pair<Integer, Integer>> q = new PriorityQueue<>(Comparator.comparingInt(Pair::getKey));
        q.add(new Pair<>(0, s));
        
        List<Integer> dist = new ArrayList<>(Collections.nCopies(n, Integer.MAX_VALUE));
        List<Boolean> mark = new ArrayList<>(Collections.nCopies(n, false));
        Set<Integer> sinks = new HashSet<>();
        for (int i : marked) {
            sinks.add(i);
        }
        
        dist.set(s, 0);
        
        while (!q.isEmpty()) {
            int x = q.poll().getValue();
            
            if (mark.get(x)) {
                continue;
            }
            
            mark.set(x, true);
            
            if (sinks.contains(x)) {
                return dist.get(x);
            }
            
            for (int[] p : con[x]) {
                int destination = p[0], weight = p[1];
                if (weight + dist.get(x) < dist.get(destination)) {
                    dist.set(destination, weight + dist.get(x));
                    q.add(new Pair<>(dist.get(destination), destination));
                }
            }
        }
        
        return -1;
    }
}

```

Python:
```
from typing import List
import heapq

class Solution:
    def minimumDistance(self, n: int, edges: List[List[int]], s: int, marked: List[int]) -> int:
        con = [[] for _ in range(n)]
        for e in edges:
            con[e[0]].append((e[1], e[2]))
        q = [(0, s)]
        dist = [float('inf')] * n
        mark = [False] * n
        sinks = set(marked)
        dist[s] = 0
        while q:
            _, x = heapq.heappop(q)
            if mark[x]:
                continue
            mark[x] = True
            if x in sinks:
                return dist[x]
            for p in con[x]:
                if p[1] + dist[x] < dist[p[0]]:
                    dist[p[0]] = p[1] + dist[x]
                    heapq.heappush(q, (dist[p[0]], p[0]))
        return -1


```