# DFS and count divisible distance nodes || Very simple

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4811463/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4811463/)

---

# Intuition
- Here the key intuition is to consider an node and if there exists one node on one of its child node path and anoter node from anoter child node path which have valid distance then we got a path.
- So we need to evaluate numbres of node from each child node path which has valid distance and then compute final answer.
- - Then we will get answer for each node by considering each path fisible node count and multiply this count with total node counts from other nodes

# Approach
- Create a graph formt he given edges
- Consider each node as the root node from 0 to n.
- Iterate over each child node of the root node and then find the valid node count from each of the child's sub tree. Along with this calculate total node count as well.
- Now once we have all the child's subtree valid node count, then we can form a path from each node of one side subtree with all other subtrees nodes. So evaluate total count, by accumulating values (subtree count) * (all other subtree node count).

# Complexity :
- Time complexity : O(N * N)
- Space complexity : O(N)

# Code
```
    int dfs(int root, int par, int dist, vector<vector<pair<int, int>>>& graph, int& signalSpeed){
        int count = (dist % signalSpeed)?0:1;       // check if the current node is valid or not
        for(auto [n, w]: graph[root]){              
            if(n != par) count += dfs(n, root, dist + w, graph, signalSpeed);
        }
        return count;
    }
    
    vector<int> countPairsOfConnectableServers(vector<vector<int>>& edges, int signalSpeed) {
        vector<vector<pair<int, int>>> graph(edges.size() + 1);
        for(auto e: edges){                        // create graph from the edges
            graph[e[0]].push_back({e[1], e[2]});
            graph[e[1]].push_back({e[0], e[2]});
        }
        
        vector<int> ans;
        for(int i = 0; i <= edges.size(); ++i){    // iterate over 0 to n and consider each node as the root node
            int nodeCount = 0, res = 0;
            for(auto [n, w]: graph[i]){            // for each root node, iterate over its child subtree and find the valid node count from each sub tree
                int t = dfs(n, i, w, graph, signalSpeed);
                res += nodeCount * t;  nodeCount += t;    // keep accumulating answer by multiplying the current sub tree valid node count with the previously seen node count
            }
            ans.push_back(res);
        }
        return ans;
    }
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---