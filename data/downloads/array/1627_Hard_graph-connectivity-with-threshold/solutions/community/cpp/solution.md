# C++ O(nlogn + querries) || Union Find

**Author:** abhay5349singh
**Votes:** 5
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/1500941/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/1500941/)

---

**Connect with me on LinkedIn**: https://www.linkedin.com/in/abhay5349singh/

**Approach:**

let threshold=3
1. Direct Connection : gcd(6,24)=4
2. Indirect Connection: gcd(16,9)=1, gcd(16,24)=4, gcd(9,18)=9, gcd(18,24)=6 , so we can say (16,9) have an indirect path

```
class Solution {
public:

    vector<int> graph[10001];
    int parent[10001], rank[10001];
    
	// path compression
    int find(int n){
        if(parent[n]<0) return n;
        return parent[n]=find(parent[n]);
    }
    
	// union by rank
    void merge(int pu, int pv){
        if(rank[pu]>rank[pv]){
            parent[pv]=pu;
            rank[pu]+=rank[pv];
        }else{
            parent[pu]=pv;
            rank[pv]+=rank[pu];
        }
    }
    
    vector<bool> areConnected(int n, int threshold, vector<vector<int>>& queries) {
        for(int i=0;i<=n;i++) parent[i]=-1;
        
        for(int u=threshold+1;u<n+1;u++){ // considering all possible nodes > threshold
            for(int v=2*u;v<n+1;v+=u){  // since we need gcd at least u (avoiding poor connections)
                int pu=find(u), pv=find(v);
                
                if(pu!=pv){
                    merge(pu,pv);
                }
            }
        }
        vector<bool> ans;
        for(int i=0;i<queries.size();i++){
            int u=queries[i][0], v=queries[i][1];
            int pu=find(u), pv=find(v);
            
            ans.push_back(pu==pv);
        }
        return ans;
    }
};
```