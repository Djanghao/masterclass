# ✔✔✔ 2 DFS || 1 DFS || Simple Approach || C++

**Author:** BrehamPie
**Votes:** 97
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2807150/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2807150/)

---

<h5>Main Idea</h5>
Alice can travel to any leaf from 0 but there is only one path for Bob. So we will find the path Bob will follow and update the contribution of each node in the path first.

With the first dfs we will find the time to travel to each node <b>'u'</b> from 0 and previous node  of <b>'u'</b> in the path.
Now we can follow the path from Bob's node to 0 using the previous node we found earlier. In each node 'u' we will check if Alice will reach it first or Bob will. If Bob reaches it faster than Alice, we will make amount[u] = 0 and if both of them reaches at the same time we make amount[u] =amount[u]/2.

Finally we will run our second dfs to find the cumulative sum of amount in the path to each leaf and return the maximum.
<h5>Sample Code</h5>

```
class Solution {
public:
    vector<vector<int>>adj;
    vector<int>par,dis;
	//Find the parent and distance from node 0
    void dfs(int u,int p = 0,int d = 0){
        dis[u] = d;
        par[u] = p;
        for(int v:adj[u]){
            if(v==p)continue;
            dfs(v,u,d+1);
        }
    }
	// Find total sum to each node
    int dfs2(int u,vector<int>&amount,int p= 0){
        int ret = amount[u];
        int mxc = -INT_MAX;
        for(int v:adj[u]){
            if(v!=p){
                mxc= max(mxc,dfs2(v,amount,u));
            }
        }
		//if the node is leaf we just return its amount
        if(mxc==-INT_MAX)return ret;
        else return ret+mxc;
    }
    int mostProfitablePath(vector<vector<int>>& edges, int bob, vector<int>& amount) {
        int n = amount.size();
        adj.resize(n,vector<int>());
        for(auto&e:edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }
        par.resize(n);
        dis.resize(n);
        dfs(0);
        int cur = bob;
        int bob_dis = 0;
		//update the path of from Bob to 0
        while(cur!=0){
            if(dis[cur]>bob_dis){
                amount[cur] = 0;
            }else if(dis[cur]==bob_dis){
                amount[cur]/=2;
            }
            cur = par[cur];
            bob_dis++;
        }
        return dfs2(0,amount);
    }
    
};
```
<h5>Single DFS </h5>
The idea was taken from <a href="https://leetcode.com/problems/most-profitable-path-in-a-tree/discuss/2807411/Python-One-DFS">this</a> solution.

The first dfs we ran earlier is only used to calculate the path and depth. We can merge this first dfs with the second one by taking additional vector that stores the distance from Bob's node.Then we can update the amount array and calculate path some at the same time. 

Sample Code
```
class Solution {
public:
    vector<vector<int>>adj;
    vector<int>disFromBob;
    int bobNode;
    int dfs(int u,int par,int depth,vector<int>&amount){
        int ret = 0;
        if(u==bobNode) disFromBob[u] = 0;
        else disFromBob[u] = amount.size();
        int maxChild = -INT_MAX;
        for(int v:adj[u]){
            if(v==par)continue;
            maxChild = max(maxChild,dfs(v,u,depth+1,amount));
            disFromBob[u] = min(disFromBob[u],disFromBob[v]+1);
        }
        if(disFromBob[u]>depth)ret+=amount[u];
        else if(disFromBob[u]==depth)ret+=amount[u]/2;
        if(maxChild==-INT_MAX) return ret;
        else return ret+maxChild;
    }
    int mostProfitablePath(vector<vector<int>>& edges, int bob, vector<int>& amount) {
        int n = amount.size();
        bobNode = bob;
        adj.resize(n,vector<int>());
        for(auto&e:edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }
        disFromBob.resize(n);
        return dfs(0,0,0,amount);
    }
    
};
```