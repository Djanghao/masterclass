# Using DFS and bipartite approach

**Author:** Sahil1107
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6103042/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6103042/)

---

```
void dfs(int node,vector<vector<int>> &adj,vector<int> &col){
     
        for(auto it:adj[node]){
           if(col[it]==-1){
             col[it]=abs(col[node]-1);
               dfs(it,adj,col);
           }
        }
        return;
    }
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        int n=edges1.size();
        int m=edges2.size();
        vector<vector<int>> adj1(n+1),adj2(m+1);
        vector<int> col1(n+1,-1),col2(m+1,-1);
        for(int i=0;i<n;i++){
          int u=edges1[i][0];
          int v=edges1[i][1];
          adj1[u].push_back(v);
          adj1[v].push_back(u);
        }
        for(int i=0;i<m;i++){
          int u=edges2[i][0];
          int v=edges2[i][1];
          adj2[u].push_back(v);
          adj2[v].push_back(u);
        }
        col1[0]=0;
         dfs(0,adj1,col1);
        col2[0]=0;
         dfs(0,adj2,col2);

        int zero=0,one=0;
        int maxi;
        for(int i=0;i<col2.size();i++){
            if(col2[i]==0)zero++;
            else{
                one++;
            }
        } 
        maxi=max(zero,one);
        zero=0;
        one=0;
        for(int i=0;i<col1.size();i++){
            if(col1[i]==0)zero++;
            else{
                one++;
            }
        } 
        for(int i=0;i<col1.size();i++){
           if(col1[i]==0){
              col1[i]=zero+maxi;
           }
            else{
              col1[i]=one+maxi;
            }
        }
        
        return col1;
        
    }
	```