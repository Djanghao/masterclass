# No Bit Manipulation || No DP

**Author:** Rock3933
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/3732061/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/3732061/)

---


# Code
```
class Solution {
public:
    void dfs(vector<vector<int>>&adj, int nod, vector<int> &par){
        for(auto it: adj[nod]){
            if(par[it]==-1){
                par[it]=nod;
                dfs(adj,it,par);
            }
        }
    }
    int minimumScore(vector<int>& nums, vector<vector<int>>& edges) {
        vector<vector<int>> adj(nums.size());
        vector<int> deg(nums.size());

        for(int i=0;i<edges.size();i++){
            adj[edges[i][0]].push_back(edges[i][1]);
            adj[edges[i][1]].push_back(edges[i][0]);
            deg[edges[i][0]]++;
            deg[edges[i][1]]++;
        }

        int root=0;
        queue<int> q;
        for(int i=0;i<deg.size();i++){
            if(deg[i]==1&&i!=root){
                q.push(i);
            }
        }

        vector<int> vis(nums.size(),0);
        vector<int> val(nums.size(),0);
        vector<vector<int>> lvled;
        while(!q.empty()){
            int nod=q.front();
            val[nod]=val[nod]^nums[nod];
            vis[nod]=1;
            q.pop();
            for(auto it: adj[nod]){
                if(!vis[it]){
                    vector<int> tem={nod,it};
                    lvled.push_back(tem);
                    deg[it]--;
                    val[it]=val[it]^val[nod];
                    if(deg[it]==1&&it!=root){
                        q.push(it);
                    }
                }
            }
            //cout<<nod<<" "<<val[nod]<<'\
';
        }
        val[0]=nums[0]^val[0];


        vector<int> par(nums.size(),-1);
        par[0]=-2;
        dfs(adj,0,par);

        // for(int i=0;i<lvled.size();i++){
        //     cout<<lvled[i][0]<<" "<<lvled[i][1]<<'\
';
        // }

        int mini=INT_MAX;
        for(int i=0;i<lvled.size();i++){
            vector<int> tval=val;
            int tn=lvled[i][0];
            while(tn!=0){
                tval[par[tn]]=tval[par[tn]]^tval[lvled[i][0]];
                tn=par[tn];
            }
            // if(lvled[i][0]==2){
            //     cout<<tval[2]<<" "<<tval[1]<<" "<<tval[0]<<" ";
            // }
            
            int v1=tval[lvled[i][0]];
            for(int j=i+1;j<lvled.size();j++){
                int v2=tval[lvled[j][0]];
                int v3=tval[0]^v2;
                mini=min(mini,max({v1,v2,v3})-min({v1,v2,v3}));
                // if(lvled[i][0]==2){
                //     cout<<v1<<" "<<v2<<" "<<v3<<'\
';
                // }
            }
            
        }
        
        return mini;

        //return mini;
    }
};
```