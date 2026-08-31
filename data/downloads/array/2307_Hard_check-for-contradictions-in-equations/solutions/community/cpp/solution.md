# Clean Simple DFS

**Author:** plxelpusher
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4545269/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4545269/)

---

# Intuition
We can represent equations as nodes on a graph with edges as the result. `x / y = z` is an adjacency list `x: {y: z}}`

If we know that `a/b = x` and `b/c = y` then `a/c = xy`

Therefore for each node we can calculate it's value divided by every other node with a depth first search. If this calculated value does not match a previous calculation, we have found a contradicting equation.  

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
As we make the adjacency list, we may come across duplicate neighbours `(a, b)` and as such we should check if their values are contradicting. 

The adjacency list does not and should not be updated as we traverse, because we already contain the result of some start node and current node within the stack. 

<!-- Describe your approach to solving the problem. -->


# Code
```
class Solution {
public:
    bool checkContradictions(vector<vector<string>>& equations, vector<double>& values) {
        unordered_map<string, unordered_map<string, double>> adj;
        
        for (int i = 0; i < equations.size(); i++) { 
            string a = equations[i][0];
            string b = equations[i][1];

            if (a == b && values[i] != 1) 
                return true; 

            double c1 = values[i];
            double c2 = 1 / values[i];

            if ((adj[a].contains(b) && adj[a][b] != c1) || (adj[b].contains(a) && adj[b][a] != c2)) 
                return true;
                    
            adj[a][b] = c1;
            adj[b][a] = c2; 
        }   

        auto hasContradiction = [&adj](const string& start) { 
            unordered_set<string> visited;
            stack<pair<string, double>> dfs;
            dfs.push({start, 1});

            while (dfs.size()) { 
                pair<string, double> last = dfs.top(); 
                dfs.pop(); 

                visited.insert(last.first); 

                for (auto& [node, weight] : adj[last.first]) 
                    if (visited.contains(node))
                        continue; 
                    
                    double ans = last.second * weight;
                    if ((adj[start].contains(node)) && ((adj[start][node] - ans) >= 1e-5)) 
                        return true; 
                    
                    dfs.push({node, ans});
                }
            }

            return false; 
        };

        for (auto& [start,_] : adj) 
            if (hasContradiction(start)) 
                return true; 

        return false; 
    }
};
```
