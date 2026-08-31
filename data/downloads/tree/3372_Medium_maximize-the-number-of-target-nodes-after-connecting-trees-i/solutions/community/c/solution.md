# BFS traversal for every node to maintain count with K dist

**Author:** Sahil1107
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6103047/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6103047/)

---

```
int bfs(int node,int k,vector<vector<int>>&adj,int n){ 
        vector<int> vis(n,0);
        queue<int> q;
        q.push(node);
        vis[node]=1;
        int cnt=0;
        int tot=0;
        while(!q.empty()){
            int l=q.size();
            if(cnt<=k){
               tot+=l;
            }
            if(cnt>k){
                return tot;
            }
            for(int i=0;i<l;i++){
                int node=q.front();
                q.pop();
                for(auto it:adj[node]){
                    if(vis[it]==0){
                        vis[it]=1;
                        q.push(it);
                    }
                }
            }
            cnt++;
        }
        return tot;

    }
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2, int k) {
       int n=edges1.size();
        int m=edges2.size();
        vector<int> bfs1(n+1,0);
        vector<int> ans(n+1);
        int maxi=INT_MIN;
        vector<vector<int>> adj1(n+1);
        for(int i=0;i<n;i++){
            int u=edges1[i][0];
            int v=edges1[i][1];
            adj1[u].push_back(v);
            adj1[v].push_back(u);
        }
        vector<vector<int>> adj2(m+1);
        for(int i=0;i<m;i++){
            int u=edges2[i][0];
            int v=edges2[i][1];
            adj2[u].push_back(v);
            adj2[v].push_back(u);
        }
        for(int i=0;i<n+1;i++){
            bfs1[i]=bfs(i,k,adj1,n+1);
        }


        for(int i=0;i<m+1;i++){
            maxi=max(maxi,bfs(i,k-1,adj2,m+1));
            
        }
        for(int i=0;i<n+1;i++){
            ans[i]=bfs1[i]+maxi;
        }
        
        return ans;
    }
	```