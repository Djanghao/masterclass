# 2 Observations || Bipartite check || C++

**Author:** BrehamPie
**Votes:** 80
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2874985/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2874985/)

---

<h2>Approach</h2>
There are two crucial observations than  can help you solve the problem easily.

<h3>Observation 1</h3>
The graph must be bipartite. As the difference of group must be 1 there can't be any cycle of odd length.

<h3>Observation 2</h3>
The number of group we can create for a connected graph is the maximum of minimum distances between all nodes in that graph. Here distance equals to number of nodes in the path.

<b>Small Proof:</b>
Let the distance between two nodes (u,v) = x. Now there can be two cases:
1. There is no cycle between u,v. Then we can just start numbering from 1 to x.
2. There is a cycle between u,v. But the minimum distance is x.  So, the other paths must have length>x. We can number the nodes in these paths by just incrementing and decrementing to reach x from 1.

Then our problem becomes simple. At first calculate the minimum distances between all nodes.<b>Floyd-Warshall will give you TLE</b>
Then check if each connected component is bipartite or not. And for all bipartite graphs find the maximum of minimum distances. And add the distance with result.
```
class Solution {
public:
    vector<int>adj[505];
    int col[505];
    int dis[505][505];
    bool flag;
	//nodes in a connected graph.
    vector<int>kara;
	
	//check if graph is bipartite
    void dfs(int u,int c=1){
        col[u] = c;
        kara.push_back(u);
        for(int&v:adj[u]){
            if(!col[v]) dfs(v,3-c);
            else if(col[v]==c)flag = 0;// graph is not bipartite
        }
    }
	//calculate minimum distance between all nodes.
    void bfs(int src){
        for(int i=1;i<=500;i++)dis[src][i] = 100001;
        dis[src][src] = 1;
        queue<int>q;
        q.push(src);
        while(q.size()){
            auto u = q.front();
            q.pop();
            for(int&v:adj[u]){
                if(dis[src][v]>dis[src][u]+1){
                    dis[src][v] = dis[src][u]+1;
                    q.push(v);
                }
            }
        }
    }
    int magnificentSets(int n, vector<vector<int>>& edges) {
        for(int i=1;i<=n;i++)adj[i].clear();
        memset(col,0,sizeof col);
        for(auto&e:edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }
        
        for(int i=1;i<=n;i++)bfs(i);
        int ans = 0;
        int in = 0;
        for(int i=1;i<=n;i++){
            if(col[i]==0){
                kara.clear();
                flag = 1;
                in++;
                dfs(i);
                if(!flag) return -1;
                int mxdis = 0;
                for(int&i:kara){
                        for(int&j:kara){
                            mxdis=max(mxdis,dis[i][j]);
                        }
                }
                ans+=mxdis;
            }
        }
        return ans;
    }
};
```