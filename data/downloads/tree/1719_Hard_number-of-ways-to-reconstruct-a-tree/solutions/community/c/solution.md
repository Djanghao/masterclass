# easy short efficient clean code

**Author:** maverick09
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/2797020/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/2797020/)

---

```
class Solution {
typedef long long ll;
typedef pair<ll, ll> pi;
#define vi(x) vector<x>
#define pb push_back
public:
int checkWays(vector<vector<int>>&p) {
    unordered_map<ll, unordered_set<ll>>g;
    for(const vi(int)&it:p){
        g[it[0]].insert(it[1]), g[it[1]].insert(it[0]);
    }
    unordered_set<ll>vis;
    priority_queue<pi>pq;
    bool multiple=0;
    for(const auto&it:g){
        pq.push({it.second.size(), it.first});
    }
    while(!pq.empty()){
        ll deg=pq.top().first, nd=pq.top().second;
        pq.pop();
        vis.insert(nd);
        ll par=0, parDeg=LLONG_MAX;
        for(ll child:g[nd]){
            if(vis.find(child)!=vis.end() && g[child].size()<parDeg){
                parDeg=g[child].size(), par=child;
            }
        }
        if(!par){
            if(deg==g.size()-1){
                continue;
            }
            return 0;
        }
        for(ll child:g[nd]){
            if(child!=par && g[par].find(child)==g[par].end()){
                return 0;
            }
        }
        multiple|=deg==parDeg;
    }
    return multiple+1;
}
};
```