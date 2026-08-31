# C++ DISJOINT SET UNION

**Author:** Abhishek6487209
**Votes:** 2
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3703253/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3703253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
class DisjointSet {
public:
    vector<int> parent, size;

    DisjointSet(int n) {
        parent.resize(n + 1);
        size.resize(n + 1);
        for (int i = 0; i <= n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }
    int findUPar(int node) {
        if (node == parent[node])
            return node;
        return parent[node] = findUPar(parent[node]);
    }
   
    void unionBySize(int u, int v) {
        int ulp_u = findUPar(u);
        int ulp_v = findUPar(v);
        if (ulp_u == ulp_v) return;
        if (size[ulp_u] < size[ulp_v]) {
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        }
        else {
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
    }
};  
vector<vector<int>> matrixRankTransform(vector<vector<int>>& matrix) {
     long long n=matrix.size(),m=matrix[0].size();
     if(n==0 and m==0) return {{}};
     map<int,vector<pair<int,int>>>mp;
     for(int i=0;i<n;i++){
         for(int j=0;j<m;j++){
             mp[matrix[i][j]].push_back({i,j});
         }
     }  
     vector<vector<int>> ans(n,vector<int>(m));
     vector<int> row(n,0),col(m,0);
     vector<int> rank(m+n);
     for(auto it:mp){
         DisjointSet ds(10005); 
         vector<pair<int,int>> v=it.second;
        for(int i=0;i<v.size();i++){
            ds.unionBySize(v[i].first,v[i].second+n);
        } 
        for(int i=0;i<v.size();i++){
rank[ds.findUPar(v[i].first)]=max(rank[ds.findUPar(v[i].first)],max(row[v[i].first],col[v[i].second])); 
        }
        for(int i=0;i<v.size();i++){
ans[v[i].first][v[i].second]=row[v[i].first]=col[v[i].second]=rank[ds.findUPar(v[i].first)]+1;
        }
     }
     return ans;
    }
};
```