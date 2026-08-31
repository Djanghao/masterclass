# [C++ with explanation] Simple Topological Sort Implementation

**Author:** Code-O-Maniac
**Votes:** 85
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/2492728/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/2492728/)

---

**Overview**
This problem was a standard **Topological Sort** problem. THANKYOU Leetcode for covering such concept after a long time! 

**How I figured it out as Topological Sort?**
* Ordering of numbers were required column wise and row wise.
* Ordering were given in pairs `a -> b`, which means `a` should come before `b`. Looks like Directed Graph.

**Pre-requisite:**
* Knowledge of Topological Sort in Directed Acyclic Graph (DAG).
* The resources I used were:
	* 	[First Video](https://www.youtube.com/watch?v=qQvylVxCgB4&list=PL5DyztRVgtRVLwNWS7Rpp4qzVVHJalt22&index=26)
	* 	[Second Video](https://www.youtube.com/watch?v=eJEpWBieUy4&list=PL5DyztRVgtRVLwNWS7Rpp4qzVVHJalt22&index=27)
	* 	The above video is from [CodeNCode](https://www.youtube.com/channel/UCrR5BJxc1vZ0fmn0MOpuXQQ) Youtube Channel. You can look out his channel for the legendary Graph series (The best I could find).
	
**Algorithm**
1. Form Directed Graphs out of the orderings in `rowConditions` and `colConditions`
2. Check these graphs for Acyclicity.  If any of the graphs is cyclic, ordering is not possible. Hence, return `[]`.
3. Now, we are confirmed that the graphs are DAG. Form topological sorts for the  `rowConditions` and `colConditions`
4. Let the topological sort from `rowConditions` be `rowSort` and that from `colConditions` be `colSort`.
5. `rowSort` will determine the position of the element row-wise. 
6. `colSort` will determine the position of the element col-wise. 

**Code**
```
class Solution {
    
    /* 1. Checking if cycle is present - If YES, Topological Sort is not possible */
    vector<char> color;
    bool dfs(int v, vector<vector<int>>& graph) {
        color[v] = 1;
        for (int u : graph[v]) {
            if (color[u] == 0) {
                if (dfs(u, graph))
                    return true;
            } else if (color[u] == 1) {
                return true;
            }
        }
        color[v] = 2;
        return false;
    }
    bool find_cycle(vector<vector<int>>& graph, int n) {
        color.assign(n, 0);

        for (int v = 0; v < n; v++) {
            if (color[v] == 0 && dfs(v, graph))
                return true;
        }
        return false;
    }

    /* 2. Forming the Topological Sort for DAG */
    vector<bool> visited;
    void dfs2(int v, vector<vector<int>>& graph, vector<int>& ans) {
        visited[v] = true;
        for (int u : graph[v]) {
            if (!visited[u])
                dfs2(u, graph, ans);
        }
        ans.push_back(v);
    }

    void topological_sort(vector<vector<int>>& graph, int n, vector<int>& ans) {
        visited.assign(n, false);
        ans.clear();
        for (int i = 0; i < n; ++i) {
            if (!visited[i])
                dfs2(i, graph, ans);
        }
        reverse(ans.begin(), ans.end());
    }
    
public:
    vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, vector<vector<int>>& colConditions) {
        vector<vector<int>> graph1(k);
        vector<vector<int>> graph2(k);
        
        for(auto x:rowConditions) {
            graph1[x[0] - 1].push_back(x[1] - 1);
        }
        for(auto x:colConditions) {
            graph2[x[0] - 1].push_back(x[1] - 1);
        }
        
        /* 3. Check if CYCLE present in any of the graphs */
        if(find_cycle(graph1, k) || find_cycle(graph2, k)) return vector<vector<int>>();
        
        /* 4. Forming Topological Sort for the DAGs */
        vector<int> ans1; vector<int> ans2;
        
        topological_sort(graph1, k, ans1);
        topological_sort(graph2, k, ans2);
        
        /* 5. Forming the answer from the rowPosition and colPosition for each element */
        vector<vector<int>> ans(k, vector<int>(k));
        
        map<int, int> m;
        for(int i = 0; i < k; i++) {
            m[ans2[i]] = i;
        }
        
        for(int i = 0; i < k; i++) {
            ans[i][m[ans1[i]]] = ans1[i] + 1;
        }
        
        return ans;
    }
};
```
**Comments:**
1. For faster implementation, I used the codes available from https://cp-algorithms.com/
2. Codes are as follows: [Checking cycle in Directed Graph](https://cp-algorithms.com/graph/finding-cycle.html) and [Topological Sort](https://cp-algorithms.com/graph/topological-sort.html)