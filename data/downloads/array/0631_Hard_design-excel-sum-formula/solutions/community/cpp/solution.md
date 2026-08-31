# cpp solution

**Author:** ninaiway
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/1703858/](https://leetcode.com/problems/design-excel-sum-formula/solutions/1703858/)

---

```
class Excel {
public:
    
    int table[27][27];
    map<pair<int, int>, vector<pair<int, int>>> graph;
    
    Excel(int height, char width) {
        memset(table, 0, sizeof(table));
    }
    
    void set(int row, char column, int val) {
        int x = row, y = column - 'A';

        table[x][y] = val;
        graph[{x, y}] = {}; // reset
    }
    
    int get(int row, char column) {
        int x = row, y = column - 'A';
        
        return dfs(x, y);
    }
    
    int sum(int row, char column, vector<string> numbers) {
        int x = row, y = column - 'A';
        
        graph[{x, y}] = {}; // reset
        table[x][y] = 0; // reset
        
        for (auto num : numbers) {
            vector<int> n = spilt(num); // to [A, 1, B, 2]
            
            if (n.size() == 2) {
                graph[{x, y}].push_back({n[1], n[0]});
            }
            else {
                for (int i = n[1]; i <= n[3]; i++) {
                    for (int j = n[0]; j <= n[2]; j++) {
                        graph[{x, y}].push_back({i, j});
                    }
                }
            }
        }

        return dfs(x, y);
    }
    
    int dfs(int i, int j) {
        int ans = table[i][j];
        
        for (auto& [ni, nj] : graph[{i, j}]) {
            ans += dfs(ni, nj);
        }
        
        return ans;
    }
    
    vector<int> spilt(string& s) {
        vector<int> res;
        string number = "";
        
        for (auto c : s) {
            
            if (c - 'A' <= 26 && 0 <= c - 'A' ) {
                if (number != "") {
                    res.push_back(stoi(number));
                    number = "";
                }
                res.push_back(c - 'A');
            }
            
            if (c == ':') {
                if (number != "") {
                    res.push_back(stoi(number)); 
                    number = "";
                }
            }
            
            if (c - '0' <= 9 && 0 <= c - '0' ) {
                number.push_back(c);
            }
        }
        
        if (number != "") {
            res.push_back(stoi(number));
            number = "";
        }
        
        return res;
    }
    
};
```