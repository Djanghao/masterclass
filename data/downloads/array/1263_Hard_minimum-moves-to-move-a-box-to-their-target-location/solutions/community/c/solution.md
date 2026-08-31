# [55 Lines] [challenge me] Possible shortest C++ solution

**Author:** codedayday
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/629660/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/629660/)

---

Python is always my envy to be able to write short code.
After I picked up some more knolwedge about C++, I can also write some code comparable with python in terms of length.
If you can help me make it shorter, I will highly apprecitate. 

Actually, in terms of space cost, this solution is also competitive. But I am sure there are always lots of people can do much better than me.
So I will be waiting for the comments from you.
```
Runtime: 84 ms, faster than 59.21% of C++ online submissions for Minimum Moves to Move a Box to Their Target Location.
Memory Usage: 8.5 MB, less than 100.00% of C++ online submissions for Minimum Moves to Move a Box to Their Target Location.
```

```
struct Node{
    pair<int, int> b, p;
    int key() const {return  ( (b.first*20 + b.second) << 16 ) | (p.first*20 + p.second); };
};

class Solution {
public:
    int minPushBox(vector<vector<char>>& grid) {        
        const int m = grid.size(), n = grid[0].size();        
        Node start, end;
        for(int i = 0; i < m; i++)
            for(int j = 0; j < n; j++)
                if(grid[i][j] == 'B') start.b = {i, j};
                else if(grid[i][j] == 'S') start.p = {i, j};
                else if(grid[i][j] == 'T') end.b = {i, j};            
                         
        auto hasPath = [&](const Node& cur, int p_i, int p_j){ // hasPath: can move behind box      
            int seen[400]={};                    
            function <bool(int, int)> dfs = [&](int i, int j){
                if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == '#') return false;
                if(i== cur.b.first && j == cur.b.second ) return false;                
                if(seen[i*m+j]++) return false;                
                if(i== p_i && j == p_j ) return true;
                return dfs(i-1, j) || dfs(i+1, j) || dfs(i, j-1) || dfs(i, j+1);
            };
            
            return dfs(cur.p.first, cur.p.second);          
        };       
        //canMove is true means 2 things: front cell is valid & free; back cell is accessible from mover's current position
        auto canMove= [&](const Node& cur, int delta_i, int delta_j, Node& nxt){                              
            int i = cur.b.first + delta_i, j = cur.b.second + delta_j;
            if(i < 0 || i >= m || j <0 || j >= n || grid[i][j] == '#') return false;            
            if(!hasPath(cur, cur.b.first - delta_i,  cur.b.second - delta_j) ) return false;
            nxt.b={i,j};
            nxt.p = cur.b;
            return true;           
        };        
        
        queue<Node> q{{start}};                
        unordered_set<int> seen{start.key()}; 
        int dirs[5]={0, -1, 0, 1, 0};
        for(int step = 0; !q.empty(); ++step)
            for(int sz = q.size(); sz > 0; sz--){
                auto cur = q.front(); q.pop();
                Node nxt;
                for(int i = 0; i < 4; i++){                    
                    if(!canMove(cur, dirs[i], dirs[i+1], nxt) || seen.count(nxt.key()) ) continue;                    
                    if(nxt.b == end.b) return step+1;
                    seen.insert(nxt.key());
                    q.emplace(nxt);
                }
            }
        return -1;
    }
};
```