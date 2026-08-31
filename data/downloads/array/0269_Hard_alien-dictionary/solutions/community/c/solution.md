# [C++] Clean Topological Sort sol [Detailed Explanation]

**Author:** cryptx_
**Votes:** 21
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/1116803/](https://leetcode.com/problems/alien-dictionary/solutions/1116803/)

---

```
/*
    https://leetcode.com/problems/alien-dictionary/submissions/
    
    This problem can be modelled to topological sort. The order of chars
    can be found using topological sort.
    
    Main things to note:
    1. In a dictionary of words, for any two consecutive words, the order is decided
    by looking at the first uncommon char.
    2. The chars following the uncommon char can't be relied upon to conclude on any order.
    The reason being the order between the words was decided purely based on the first mismatching char, so
    any char after that is only there to constitute the complete word. 
    3. The consecutive chars appearing in any word has nothing to do with order but they are there just
    to form the complete word.
    
    Approach:
    1. Create Graph: Using the above points, we iterate through consecutive word pairs and
                    try to create edges.
    2. Topological Sort: This can be done using DFS or BFS. I decided to go with BFS here
    
    TC: O(V + E)
    SC: O(V + E) // graph creation
*/
class Solution {
public:
    // Finds the topological order of a directed Acyclic graph
    string topologicalSortBFS(unordered_map<char, unordered_set<char>> &g) {
        unordered_map<char, int> indegree;
        queue<char> q;
        // topological order
        string order;
        
        // Compute the indegree of each node
        for(auto u: g) {
            char src = u.first;
            for(auto neighbor: g[src]) 
                ++indegree[neighbor];
        }
        
        // if current has no dependency, add and mark as visited
        for(auto u: g) {
            char src = u.first;
            if(!indegree[src]) {
                q.emplace(src);
            }
        }
        // BFS traversal wrt to indegree of each node
        while(!q.empty()) {
            auto curr = q.front();
            q.pop();
            order += curr;
            
            // reduce the indegree of its neighbors
            for(auto neighbor: g[curr]) {
                --indegree[neighbor];
                if(!indegree[neighbor]) 
                    q.emplace(neighbor);
            }
        }
        return order.size() < g.size() ? "" : order;
    }
    
    string alienOrder(vector<string>& words) {
        // create a graph
        // To create a graph using the lexographic order,
        // we need to look at the consecutive word pairs and 
        // within the common length check for diff chars at the same
        // index position, each unequal pair is a directed edge coming
        // from words[i][j] to words[i+1][j]
        unordered_map<char, unordered_set<char>> g;
        // initialize the graph with nodes req
        for(auto &word: words)
            for(char &ch: word)
                if(!g.count(ch))
                    g[ch] = unordered_set<char>();
        
        // Imp: Add all the seen chars to graph even with 0 edges
        for(int w = 0; w + 1 < words.size(); w++) {
            int common_len = min(words[w].size(), words[w+1].size());
            // check if the lexographic order is being followed or not
            // P.S I dont think this case is even valid acc to problem description
            // Eg: ["abc", "ab"] -> Invalid
            if(words[w+1].size() < words[w].size() 
               && words[w].substr(0, common_len) == words[w+1])
                return "";
            
            for(int i = 0; i < common_len; i++) {
                // prevent self loop
                char src = words[w][i], dst = words[w+1][i];
                // If current pos has diff chars, then make an edge and
                // break since, the current word ordering was due this positional char
                // change and anything beyond this might not follow actual order.
                if(src != dst) {
                    g[src].emplace(dst);
                    break;
                }
            }
        }
        
        string order = topologicalSortBFS(g);
        return order;
    }
};
```