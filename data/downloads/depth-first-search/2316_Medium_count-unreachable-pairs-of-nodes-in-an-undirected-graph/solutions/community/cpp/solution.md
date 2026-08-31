# Simple DFS ✅✅Count Number of Nodes in Connected Components✅✅C++

**Author:** deleted_user
**Votes:** 121
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337616/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337616/)

---

# Har Har Mahadev\u2764\uFE0F\uD83D\uDD49\uFE0F


# Intuition
We have total n nodes so if one component has k nodes then we will have k * (n-k-total)(where total is number of nodes we have already visited) pairs which are unreachable
 <!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Run a DFS algorithm for count number of nodes in one compoenent and store that nodes in a vector keep one variable res for storing result and one other var int total = 0 to keep track of nodes we have already visited and then count pairs as per above formula
update total count 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The above algorithm calls DFS, finds reverse of the graph and again calls DFS. DFS takes O(V+E) for a graph represented using adjacency list.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(V) as we are using a stack to store the vertices.
O(N) for making temp array


# Code
```
class Solution {
public:
    void dfs(vector<int>adj[],int src,vector<bool>&vis,int &counter){
        if(vis[src]) return;
        vis[src]=true;
        counter++;
        for(auto ele:adj[src]){
            if(!vis[ele]){
                dfs(adj,ele,vis,counter);
            }
        }

    }
    long long countPairs(int n, vector<vector<int>>& edges) {
        vector<int>adj[n];
        for(auto ele:edges){
            adj[ele[0]].push_back(ele[1]);
            adj[ele[1]].push_back(ele[0]);
        }
        long long res = 0;
        vector<bool>vis(n,false);
        vector<int>temp;
        for(int i = 0;i<n;i++){
            if(!vis[i]){
                int counter = 0;
                dfs(adj,i,vis,counter);
               temp.push_back(counter);
            }
        }
        int total = 0;
        for(int i = 0;i<temp.size();i++){
            res+=(long)((long)temp[i]*(long)(n-total-temp[i]));
            total+=temp[i];
        }
        return res;
    }
};


```
I hope you guys understand the solution , if there is any confusion or any improvements in the solution please inform me.

![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)


# Jai Shree Ram\uD83D\uDE4F\uD83D\uDEA9