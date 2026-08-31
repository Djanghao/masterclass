# C++ || Kruskal's Algorithm || FASTER THAN 99% || Similar to LC: 1168

**Author:** hg3994
**Votes:** 2
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1378417/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1378417/)

---

```
/*

Harshit Gupta | 2nd August, 2021
---------------------------------

Problem Statement:

There are n cities numbered from 1 to n.
You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect 
city1 and city2 together.  (A connection is bidirectional: connecting city1 and city2 is the same as 
connecting city2 and city1.)

Return the minimum cost so that for every pair of cities, there exists a path of connections 
(possibly of length 1) that connects those two cities together.  The cost is the sum of the connection 
costs used. If the task is impossible, return -1.

Example 1:
    Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
    Output: 6
    Explanation: 
    Choosing any 2 edges will connect all cities so we choose the minimum 2.

Example 2:
    Input: n = 4, connections = [[1,2,3],[3,4,4]]
    Output: -1
    Explanation: 
    There is no way to connect all cities even if all edges are used.

https://leetcode.com/problems/connecting-cities-with-minimum-cost/
------

Solution: Kruskal's and Prim's Straightforward IMplementation. Implemented using Kruskal's here.

Time complexity: O(MlogM+M)
    Assuming N to be the total number of nodes (cities) and M to be the total number of edges 
    (connections). Sorting all the M connections will take O(MlogM). Performing union find each time will 
    take logN (Iterated logarithm). Hence for M edges, it's O(M\u22C5logN) which is practically O(M) as the 
    value of iterated logarithm, logN never exceeds 5.

Space complexity: O(N), space required by parents and weights.

Paradigm:
---
    NOTE: 

    Similar Questions:
        1.

*/

class DSU {
public:
    vector<int> parent, rank;
    
    DSU(int n) {
        parent.resize(n);
        rank.resize(n);
        // initializes each node's parent to be itself - fills as [0,1,2,3,...,n], now each node is a parent of itself (self loop)
        iota(begin(parent), end(parent), 0);
    }
    
    int find(int x){
        if (x != parent[x])
            parent[x] = find(parent[x]);
        return parent[x];
    }
    
    bool Union (int x, int y){
        int xp = find(x);
        int yp = find(y);
        
        if(xp != yp){
            if(rank[xp] > rank[yp]){
                parent[yp] = xp;
            }
            else if (rank[yp] > rank[xp]){
                parent[xp] = yp;
            }
            else {
                parent[yp] = xp;
                rank[xp]++;
            }
            return true;
        }
        else {
            return false;
        }
    }
};


class Solution {
public:
    int minimumCost(int n, vector<vector<int>>& connections) {
        if( connections.size() < n-1)
            return -1;
        
        // Since nodes are named from 1, we need to have parent and rank for 
        // size n+1 so that we can seamlessly access parent[i] and not parent[i-1]
        DSU uf(n+1);
        int totalCost = 0;
        sort(connections.begin(), connections.end(), [](auto& a, auto& b){ return a[2] < b[2]; });
        
        for(int i=0; i<connections.size(); i++){
            int city1 = connections[i][0];
            int city2 = connections[i][1];
            int cost = connections[i][2];

            if (uf.Union(city1, city2)){
                totalCost += cost;
            }
        }
        return totalCost;
    }
};

```