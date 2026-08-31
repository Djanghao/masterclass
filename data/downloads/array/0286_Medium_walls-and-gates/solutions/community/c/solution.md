# A clean C++ DFS solution 136ms

**Author:** Mad_air
**Votes:** 7
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/72787/](https://leetcode.com/problems/walls-and-gates/solutions/72787/)

---

This is a DFS solution:
```c++
class Solution 
{
    // date: 2016-08-05     location: Santa Clara City Library
public:
    void wallsAndGates(vector<vector<int>>& rooms) 
    {
        for (int i = 0; i < rooms.size(); i ++)
            for (int j = 0; j < rooms[0].size(); j ++)
                if (rooms[i][j] == 0)
                    helper(i, j, 1, rooms);
    }
    
    void helper(int i, int j, int step, vector<vector<int>>& rooms)
    {
        if (i > 0 && rooms[i - 1][j] > step)
        {
            rooms[i - 1][j] = step;
            helper(i - 1, j, step + 1, rooms);
        }
        if (j > 0 && rooms[i][j - 1] > step)
        {
            rooms[i][j - 1] = step;
            helper(i, j - 1, step + 1, rooms);
        }
        if (i < rooms.size() - 1 && rooms[i + 1][j] > step)
        {
            rooms[i + 1][j] = step;
            helper(i + 1, j, step + 1, rooms);
        }
        if (j < rooms[0].size() - 1 && rooms[i][j + 1] > step)
        {
            rooms[i][j + 1] = step;
            helper(i, j + 1, step + 1, rooms);
        }
    }
};
```