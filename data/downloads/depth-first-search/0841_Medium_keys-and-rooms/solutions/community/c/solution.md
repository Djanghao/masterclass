# [C++] Simple DFS solution.

**Author:** vinaykashyap
**Votes:** 51
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/664904/](https://leetcode.com/problems/keys-and-rooms/solutions/664904/)

---

```
class Solution {
public:

    void dfs(vector<vector<int>> &graph, int s, vector<bool> &vis){
        vis[s] = true;
        for(int i = 0; i < graph[s].size(); i++){
            if(!vis[graph[s][i]]){
                dfs(graph, graph[s][i], vis);
            }
        }
    }

    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int i, n=rooms.size();
        vector<bool> vis(n, false);
        dfs(rooms, 0, vis);
        for(i = 0; i < n; i++){
            if(!vis[i]){
                return false;
            }
        }
        return true;
    }
};
```