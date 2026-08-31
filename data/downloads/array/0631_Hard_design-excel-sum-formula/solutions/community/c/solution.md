# C++ get O(N^2*M^2) design!

**Author:** Satj
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/1970492/](https://leetcode.com/problems/design-excel-sum-formula/solutions/1970492/)

---

This code is for a discussion as I have a feeling that it's not ideal, though at first glance you probably won't find anything wrong here. Well, nothing really wrong here within the constraints of LeetCode, but in reality this code probably won't do well... Let's have a look.

The code below is a general approach similar to the one you can find in the Solution, but a bit backwards, trading off the complexity of `set` with `get`. In the approach below we can easily `set` new values if we wanted, it takes almost no time, but `getting` the values will then require traversing the graph and counting them all.

The argument against this approach is simply: the `get` call is continuous and dependant on the `set` call irl. Say a user sets a new value to a cell - do we just say 'okay' and leave it at that? No! We, then, will have to update the whole excel sheet (for all affected cells) and display it back to the user, but that would then require to `get` values for each cell, and thus we will find ourselves quite unhappy doing `get` in O(N^2 M^2) time, potentially updating all cells resulting in O(N^4 M^4) ridiculousness!
```
class Excel {
public:
    int n, m;
    vector <unordered_map <int, int>> edges;
    vector <int> grid;
    pair <int, int> getCell(int x, char y) {
        return {x - 1, y - 'A'};
    }
    Excel(int _height, char _width) { // O(N*M) time/cur_space init
        auto [height, width] = getCell(_height, _width);
        n = height + 1;
        m = width + 1;
        edges.resize(n * m);
        grid.resize(n * m, 0);
    }
    
    void set(int row, char column, int val) { // O(N*M) clear
        auto [xx, yy] = getCell(row, column);
        int x = xx * m + yy; //id
        edges[x].clear();
        grid[x] = val;
    }
    int dfs(int x) { // O(N*M)
        int ret = grid[x];
        for (auto &[y, z] : edges[x]) // O(N*M)
            ret += dfs(y) * z;
        return ret;
    }
    int get(int row, char column) { // O(N^2*M^2)
        auto [x, y] = getCell(row, column);
        return dfs(x * m + y);
    }
    void add(int row, char column, string &s) { // O(N*M)
        auto [xx, yy] = getCell(row, column);
        int x = xx * m + yy; // id of the cell
        if (s.size() < 5) // streamline
            s = s + ":" + s;
        stringstream ss(s);
        int r1, r2;
        char c1, c2, q;
        ss >> c1 >> r1 >> q >> c2 >> r2;
        auto [i1, j1] = getCell(r1, c1);
        auto [i2, j2] = getCell(r2, c2);
        for (int i = i1; i <= i2; i++) {
            for (int j = j1; j <= j2; j++) {
                int y = i * m + j; // y is prereq to x
                edges[x][y]++; // 
            }
        }
    }
    int sum(int row, char column, vector<string> numbers) { // O(N^2*M^2)
        set(row, column, 0); // O(N*M) reset the cell
        for (auto &s : numbers) // 5
            add(row, column, s); // O(N*M)
        return get(row, column); // O(N^2*M^2)
    }
};
```

