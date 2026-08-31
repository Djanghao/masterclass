# [C++] Modified Djikstra O(edges * log(n)) | Max Heap | Explanations

**Author:** uds5501
**Votes:** 87
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/731706/](https://leetcode.com/problems/path-with-maximum-probability/solutions/731706/)

---

Note : In general djikstra algorithm, you will find the shortest path from `start` to `end` and update the "minimum distance" array accordingly for each "from -> to" pair.

Here I am doing the same except the probablity array (`mx`) only stores the maximum probablity in each case and it's compared in this line of the code :

Time Complexity : `O(edges*log(n))`
Space Complexity: `O(n)`
```
if (mx[to.first] < to.second*proba) {
	mx[to.first] = to.second*proba;
    q.push({mx[to.first], to.first});
}
```

The C++ Code ->

```
class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& pro, int start, int end) {
        vector<vector<pair<int, double>>> g(n);
        for(int i=0; i<edges.size(); i++) {
            g[edges[i][0]].push_back({edges[i][1], pro[i]});
            g[edges[i][1]].push_back({edges[i][0], pro[i]});   
        }
        vector<int> seen(n, 0);
        
        priority_queue<pair<double, int>> q;
        q.push({(double)1.0, start});
        
        vector<double> mx(n, (double)0.0);
        mx[start] = 1.0;
        
        while(!q.empty()) {
            auto top = q.top();
            q.pop();
            double proba = top.first;
            int node = top.second;
            if(!seen[node]) {
                seen[node]++;
                for(auto &to: g[node]) {
                    if (mx[to.first] < to.second*proba) {
                        mx[to.first] = to.second*proba;
						q.push({mx[to.first], to.first});
                    }
                }
            }
        }
        return mx[end];
    }
};
```