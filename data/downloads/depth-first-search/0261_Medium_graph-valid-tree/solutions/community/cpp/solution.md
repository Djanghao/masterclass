# Simple and clean c++ solution, with detailed explanation.

**Author:** xuweineo2
**Votes:** 196
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/69019/](https://leetcode.com/problems/graph-valid-tree/solutions/69019/)

---


    class Solution {
    public:
        bool validTree(int n, vector<pair<int, int>>& edges) {
            vector<int> nodes(n,0);
            for(int i=0; i<n; i++) nodes[i] = i;
            for(int i=0; i<edges.size(); i++){
                int f = edges[i].first;
                int s = edges[i].second;
                while(nodes[f]!=f) f = nodes[f];
                while(nodes[s]!=s) s = nodes[s];
                if(nodes[f] == nodes[s]) return false;
                nodes[s] = f;
            }
            return edges.size() == n-1;
        }
    };



To tell whether a graph is a valid tree, we have to:

1. Make sure there is no cycle in the graph - this has to be a none-cyclic graph;
2. Make sure every node is reached - this has to be a connected graph;

Reference: https://en.wikipedia.org/wiki/Tree_(graph_theory)

Solution: 

1. To test cyclic, we can make an array for each node (as array index), and the array will store the parent of the node (as array index). Every time we fetch a new pair of nodes, we trace the root node (the deepest parent node) of these two nodes, if it has the same root, then is will be a cycle; otherwise, we set the parent of second node to be the first node;
2. After we make sure there is node cycle in the graph, we simple test if there is enough edges to make this graph connected.