# C++ 38 ms Dijkstra solution

**Author:** aaron_cqzhang
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2822279/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2822279/)

---


```
#include <bits/stdc++.h>

using namespace std;
#define rep(i, aa, bb) for(int i = (aa); i <= (bb); i++)
#define repv(i, aa, bb) for(int i = (aa); i >= (bb); i--)
#define MAX(...) max({__VA_ARGS__})

typedef unsigned long long ULL;
typedef long long LL;
typedef pair<int, int> PII;
typedef pair<string, int> PSI;

class Solution {
public:
    vector<long long> minCost(int n, vector<vector<int>>& roads, vector<int>& appleCost, int k) {
        vector<vector<vector<int>>> edges(n+1, vector<vector<int>>());
        vector<LL> v(n, -1);
        priority_queue<pair<LL, LL>, vector<pair<LL, LL>>, greater<>> pq;
        for (int i = 0; i < roads.size(); i ++) {
            edges[roads[i][0]].push_back({roads[i][1], roads[i][2]});
            edges[roads[i][1]].push_back({roads[i][0], roads[i][2]});
        }
        rep(i, 1, n) {
            pq.push({ appleCost[i-1], i});
        }
        while (pq.size() > 0) {
            auto i = pq.top();
            pq.pop();
            if (v[i.second-1] != -1) continue;
            v[i.second-1] = i.first;
            for (auto nxt : edges[i.second]) {
                if (v[nxt[0]-1] == -1) {
                    pq.push({i.first+(k+1)*nxt[1], nxt[0]});
                }
            }
        }
        return v;
    }
};
```

![image](./images/0.png)
