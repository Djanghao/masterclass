# ✅[C++] Disjoin Set Union

**Author:** biT_Legion
**Votes:** 13
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/2234460/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/2234460/)

---

This question is so far one of the best problem of DSU. 

**How to identify DSU?** 
Well, in questions where we are asked to reach one node from another, or where we need to attach nodes or form components of similiar types, we go with DSU. In DSU questions, most of the time, we are not given any extra conditions on the path, like shortest, longest, etc. We just need to find if we could reach from one node to another. 

**What to do after identifying?**
The only two functions in DSU are `join(Node1, Node2)`, to join two nodes, and `find(Node)` to find the godfather of the component to which `Node` belongs.
Now we can use `Rank` to optimize the join function and `path-compression` to optimize the find function. I've use path-compression only. 

**How to approach this question?**
In this question, we are given queries and edges. Now, in questions where we have to use DSU, we dont actually need to form the graph, we just have to join two nodes whose parents are not same. 
In this problem, if we sort the queries and edges array based limits, then we would be able to use the precomputed answer. 
**How?** After sorting both of the arrays based on limits, for each query, we can loop in the edges vector and for each pair of node whose dist < limit, we can join them together. Joining them signifies that for the given limit, there exists a path between those two nodes which has all the edges < curr_limit.


```
vector <int> parent(100005,-1);
class Solution {
public:
    vector<bool> distanceLimitedPathsExist(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
        for(int i = 0; i<=n; i++) parent[i] = i;
        
		// Sorting the edges array based on dist of each pair of node. 
        sort(edges.begin(),edges.end(),[](vector<int>&a, vector<int>&b){
            if(a[2]<b[2]) return true;
            return false;
        });

		// We will need the indices of query elements coz after sorting, the order will change. 
		// So we push the index in the same element vector of query.
        for(int i = 0; i<queries.size(); i++) queries[i].push_back(i);
			
		// Sorting queries based on limits. 
        sort(queries.begin(),queries.end(),[](vector<int>&a,vector<int>&b){
            if(a[2]<b[2]) return true;
            return false;
        });
        
        vector <bool> ans(queries.size(),false);
        int idx = 0;
        for(int i = 0; i<queries.size(); i++){
            // Here we loop on edges vector and join the two nodes having dist < curr_limit.
			while(idx<edges.size() and edges[idx][2]<queries[i][2]){
                join(edges[idx][0],edges[idx][1]);
                idx++;
            }
			// If the two nodes of current query has same godfather, we set this queries ans as true
            if(find(parent[queries[i][0]]) == find(parent[queries[i][1]])) ans[queries[i][3]] = true;
        }
        return ans;
    }
protected:
    int find(int x){
        if(parent[x]==x) return x;
        return parent[x] = find(parent[x]);
    }
    void join(int a, int b){
        a = find(a);
        b = find(b);
        
        if(a!=b) parent[b] = a;
    }
};
```