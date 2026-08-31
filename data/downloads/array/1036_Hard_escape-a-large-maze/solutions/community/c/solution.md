# C++ DFS easy solution

**Author:** ayush_tyagi_
**Votes:** 4
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/1778684/](https://leetcode.com/problems/escape-a-large-maze/solutions/1778684/)

---


    
    // hash function to create unordered_set of pairs
    struct hashFunction
    {
        size_t operator()(const pair<int,int> &x) const
        {
            return x.first ^ x.second;
        }
    };
     
    // funcion to traverse in the grid
    bool dfs(unordered_set<pair<int, int>, hashFunction> &v, unordered_set<pair<int, int>, hashFunction> &s, int i, int j, int x, int y)
    {
        // array to move right, left, up, down
        int dx[] = {1, -1, 0, 0};
        int dy[] = {0, 0, 1, -1};
        
        v.insert({i, j});
        
        if (v.size() >= 20000)
        {
            return true;
        }
        // to check if destination is reached
        if (i == x && j == y)
        {
            return true;
        }
        for (int k = 0; k < 4; k++)
        {
            int nX = i + dx[k];
            int nY = j + dy[k];
            if (nX >= 0 && nY >= 0 && nX < 1e6 && nY < 1e6 && s.find({nX, nY}) == s.end() && v.find({nX, nY}) == v.end())
            {
                if (dfs(v, s, nX, nY, x, y))
                    return true;
            }
        }
        return false;
    }
    bool isEscapePossible(vector<vector<int>> &blocked, vector<int> &source, vector<int> &target)
    {
        unordered_set<pair<int, int>, hashFunction> v;
        unordered_set<pair<int, int>, hashFunction> s;
        
        for (auto i : blocked)
        {
            s.insert({i[0], i[1]});
        }
        // moving from source to target
        int k = dfs(v, s, source[0], source[1], target[0], target[1]);
        v.clear();
        // moving from target to source
        int l = dfs(v, s, target[0], target[1], source[0], source[1]);
        return k & l;
    }
