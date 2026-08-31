# ✅C++ | ✅DFS | ✅BFS | ✅Intuitive Approach

**Author:** Yash2arma
**Votes:** 11
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/2930947/](https://leetcode.com/problems/keys-and-rooms/solutions/2930947/)

---

# Intuition
We need to use BFS/DFS traversal technique to visit all rooms.

# Approach
We define visited array and while visiting all rooms we mark visited rooms. At last we check whether all rooms are visited or not. 

# DFS
```
class Solution 
{
public:
    
    void dfs(int i, vector<vector<int>> & rooms, vector<int> &vis)
    {
        vis[i]=1;
        for(auto key: rooms[i])
            if(!vis[key])
                dfs(key, rooms, vis);
    }
    
    bool canVisitAllRooms(vector<vector<int>>& rooms) 
    {
        vector<int> vis(rooms.size(), 0);
        
        dfs(0, rooms, vis);
        
        for(auto it:vis)
            if(!it) return false;
        
        return true;
        
    }
};
```
## Complexity
- Time complexity:
O(n)

- Space complexity:
O(2n) ~ O(n)

# BFS
```
class Solution 
{
public:
    
    bool canVisitAllRooms(vector<vector<int>>& rooms) 
    {
        int n=rooms.size();
        vector<int> vis(n, 0);
        queue<int> q;
        q.push(0);
        while(!q.empty())
        {
            int curr_room = q.front(); q.pop();
            vis[curr_room] = 1;
            for(auto key:rooms[curr_room])
                if(!vis[key])
                    q.push(key);
        }

        for(int i=0; i<n; i++)
            if(!vis[i]) return false;
           
        return true;
    }
};
```
## Complexity
- Time complexity:
O(n)

- Space complexity:
O(2n) ~ O(n)

