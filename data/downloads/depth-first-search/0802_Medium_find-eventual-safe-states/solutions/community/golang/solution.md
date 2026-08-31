# easiest neetcode go & cpp solution

**Author:** damirsharip
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/4505519/](https://leetcode.com/problems/find-eventual-safe-states/solutions/4505519/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
# Cpp
```
class Solution {
public:
    unordered_map<int,bool>m;
    bool dfs(vector<vector<int>>& graph, int i){
        if(m.find(i) != m.end()){
            return m[i];
        }

        m[i] = false;

        for(int j = 0; j < graph[i].size(); j++){
            if(!dfs(graph, graph[i][j])) {
                return false;
            }
        }

        m[i] = true;
        return  true;   
    }
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        vector<int> ans;
        for(int i = 0; i < graph.size(); i++){            
            if(dfs(graph, i)){
                ans.push_back(i);
            }
        }

        return ans;
    }
};

```

# Go
```
func DFS(destination int, graph [][]int, status []int) bool {
    if status[destination] == 1 {
        return false
    }

    if status[destination] == 2 {
        return true
    }

    status[destination] = 1

    for _, neighbor := range graph[destination] {
        if !DFS(neighbor, graph, status) {
            return false
        }
    }

    status[destination] = 2

    return true
}

func eventualSafeNodes(graph [][]int) []int {
    n := len(graph)
    status := make([]int, n)
    var res []int

    for i := 0; i < n; i++ {
        if DFS(i, graph, status) {
            res = append(res, i)
        }
    }

    return res
}


```