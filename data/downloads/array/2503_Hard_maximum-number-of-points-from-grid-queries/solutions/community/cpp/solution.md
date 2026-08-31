# Simple solution with Intuition | C++ | O(n*m*log(n*m)) Time and O(n*m) Space

**Author:** IamVaibhave53
**Votes:** 51
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899354/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Assume that there is just a single query, how would you solve this problem?
2. Thats easy, you would start a dfs/bfs from the top left cell and keep exploring the neighbours until the value is strictly lesser than the given query value.
3. The above task is achievable in linear time with respect to the number of cells because we visit each cell exactly once, how can you maintain this when we have multiple queries?
4. We sort the queries! If we visit a group of cells for a query value Q, we can visit the same set of cells perhaps more for any query value Q' which is greater than Q

# Approach
<!-- Describe your approach to solving the problem. -->
1. Process the queries from small to large. Add nodes to the graph such that their value is less than the current query.
2. Whenever a new node is added, add the corresponding edges in the graph.
*Note: each cell is represented in a 1-D format (Row major order)*
3. Rest of it must be clear if you know Union find.
# Complexity
- Time complexity: $$O(n*m*log(n*m))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*m)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Similar problems
- https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/description/
# Code
```
class Solution {
public:
    //UNION FIND
    vector<int> par,rank;
    int find(int a){
        if(par[a]==-1) return a;
        return par[a]=find(par[a]);
    }
    void uni(int a,int b){
        a=find(a),b=find(b);
        if(a==b) return;
        par[b]=a;
        rank[a]+=rank[b];
    }
    vector<int> maxPoints(vector<vector<int>>& grid, vector<int>& queries) {
        int n=grid.size(),m=grid[0].size();
        par=vector<int>(n*m+m,-1);
        rank=vector<int>(n*m+m,1);
        vector<vector<int>> nodes;
        //sort the nodes
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                nodes.push_back({grid[i][j],i,j});
            }
        }
        sort(nodes.begin(),nodes.end());
        //sort the queries
        vector<vector<int>> sortedQueries;
        for(int i=0;i<queries.size();i++){
            sortedQueries.push_back({queries[i],i});
        }
        sort(sortedQueries.begin(),sortedQueries.end());
        vector<int> ans(queries.size()), visited(n*m+m);
        int index = 0;
        vector<int> dx{0,1,0,-1}, dy{1,0,-1,0};
        for(auto &q:sortedQueries){
            //add nodes to graph
            while(index < n*m and nodes[index][0]<q[0]){
                int x = nodes[index][1], y = nodes[index][2];
                visited[x*m+y]=1;
                //add edges
                for(int z=0;z<4;z++){
                    int X = x+dx[z], Y = y+dy[z];
                    if(X>=0 and Y>=0 and X<n and Y<m and visited[X*m+Y]){
                        uni(X*m+Y, x*m+y);
                    }
                }
                index++;
            }
            if(visited[0])
                ans[q[1]]=rank[find(0)];
        }
        return ans;
    }
};
```