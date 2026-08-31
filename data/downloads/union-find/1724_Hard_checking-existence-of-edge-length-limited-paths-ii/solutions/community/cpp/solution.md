# Union Find C++ solution

**Author:** deeps21
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5063165/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5063165/)

---

# Intuition
Use union find to store the root node for each node, If the root node is different return false. Else check if path exists and is less than the limit.

# Approach
Create a array with parent node for each disjoint component. Check if the parent node is different (Union set), return false. Else iterate over the connected component and check if edge in the path is less than the limit. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class DistanceLimitedPathsExist {
public:
    int size;
    vector<vector<pair<int, int>>> adj;
    vector<int> parent;
    DistanceLimitedPathsExist(int n, vector<vector<int>>& edgeList) {
        size = n;
        for(int i=0;i<n;i++)
        {
            vector<pair<int, int>> temp;
            adj.push_back(temp);
            parent.push_back(-1);
        }
        for(int i=0;i<edgeList.size();i++)
        {
            adj[edgeList[i][0]].push_back({edgeList[i][1], edgeList[i][2]});
            adj[edgeList[i][1]].push_back({edgeList[i][0], edgeList[i][2]});
        }
        vector<bool> visited(n, false);
        for(int i=0;i<n;i++)
        {
            if(visited[i] == false)
            {
                rec(adj, i, i, visited);
            }
        }
    }
    void rec(vector<vector<pair<int, int>>>& adj, int i, int pr, vector<bool>& visited)
    {
        if(visited[i])
            return;
        parent[i] = pr;
        visited[i] = true;
        for(auto l: adj[i])
        {
            rec(adj, l.first, pr, visited);
        }
    }
    
    bool query(int p, int q, int limit) {
        if(parent[p] != parent[q])
            return false;

        queue<int> qu;

        qu.push(p);
        vector<bool> visited(size, false);
        visited[p] = true;
        while(qu.empty() == false)
        {
            auto node = qu.front();
            qu.pop();
            if(node == q)
                return true;
            for(auto l: adj[node])
            {
                if(visited[l.first] == false && l.second < limit)
                {
                    qu.push(l.first);
                    visited[l.first] = true;
                }
            }
        }    
        return false;    

    }
};

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * DistanceLimitedPathsExist* obj = new DistanceLimitedPathsExist(n, edgeList);
 * bool param_1 = obj->query(p,q,limit);
 */
```