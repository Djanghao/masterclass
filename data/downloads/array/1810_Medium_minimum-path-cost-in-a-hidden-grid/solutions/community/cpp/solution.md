# C++ DFS Backtrack and then Dijkstra

**Author:** nightrider1
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/6098118/](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/6098118/)

---

# Intuition
Traverse the grid by backtracking algorithm and populate the nodes which are accessible as well as their cost

Then perform dijkstra on the grid that we just created.

# Code
```cpp []
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *   public:
 *     bool canMove(char direction);
 *     int move(char direction);
 *     boolean isTarget();
 * };
 */

class Solution {
public:
    unordered_map<int, unordered_set<int>> x;
    unordered_map<int, unordered_map<int,int>> cost;
    int targetx, targety;
    bool targetReached = false;

    int findShortestPath(GridMaster &master) {
        traverse(0,0,master);
        if (targetReached == false)
            return -1;

        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> q;
        q.push({0,0,0});

        int dirx[] = {0,1,0,-1};
        int diry[] = {1,0,-1,0};

        unordered_map<int,unordered_set<int>> visited;
        unordered_map<int, unordered_map<int,int>> dist;

        while(!q.empty())
        {
            auto ele = q.top();
            q.pop();

            int cur_dist = ele[0], curx = ele[1], cury = ele[2];
            if (curx == targetx && cury == targety)
                return cur_dist;
            
            if (dist.find(curx) != dist.end() && dist[curx].find(cury) != dist[curx].end() && 
                dist[curx][cury] < cur_dist )
                continue;
            
            for(int k=0; k<4; ++k)
            {
                int nextx = curx + dirx[k];
                int nexty = cury + diry[k];

                if (x[nextx].find(nexty) == x[nextx].end())
                    continue;
                if (visited[nextx].find(nexty) != visited[nextx].end())
                    continue;
                visited[nextx].insert(nexty);
                int next_dist = cost[nextx][nexty];
                q.push({cur_dist + next_dist , nextx, nexty});
            }

        }

        return INT_MAX;
    }

    void traverse(int i, int j, GridMaster &bot)
    {
        if (bot.isTarget())
            targetx = i, targety = j, targetReached = true;
        
        x[i].insert(j);
        
        int dirx[] = {0,1,0,-1};
        int diry[] = {1,0,-1,0};
        char dir[] = {'U','R','D','L'};

        unordered_map<char,char> reverse;
        reverse['U'] = 'D';
        reverse['D'] = 'U';
        reverse['L'] = 'R';
        reverse['R'] = 'L';

        for(int k=0; k<4; ++k)
        {
            int nextx = i + dirx[k];
            int nexty = j + diry[k];

            if (bot.canMove(dir[k]) && x[nextx].find(nexty) == x[nextx].end())
            {
                cost[nextx][nexty] = bot.move(dir[k]);
                traverse(nextx, nexty, bot);
                bot.move(reverse[dir[k]]);          //backtrack
            }
        }
    }
};
```