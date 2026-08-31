# Straight-forward C++ Union Find Solution

**Author:** vwo50
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/1005741/](https://leetcode.com/problems/number-of-islands-ii/solutions/1005741/)

---

```
class Solution {
private:
    unordered_map<int, int> fathers; 
    
    int dirs[4][2] = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };
    
    int count = 0;
    
    int find(int a) {
        if (fathers[a] == a) return a;
        
        fathers[a] = find(fathers[a]);
        
        return fathers[a];
    }
    
    void merge(int a, int b) {
        int f_a = find(a), f_b = find(b);
        
        if (f_a == f_b) return;
        
        count--; fathers[f_a] = f_b;
        
        return;
    }
public:
    vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
        vector<int> res;
        
        for (int i = 0; i < positions.size(); i++) {
            int x = positions[i][0], y = positions[i][1]; 
            
            int cor = x * n + y; 
            
            if (fathers.find(cor) != fathers.end()) {
                res.push_back(count); continue;
            }
            
            count++; 
            fathers[cor] = cor;
            
            for (int k = 0; k < 4; k++) {
                int nextX = x + dirs[k][0], nextY = y + dirs[k][1]; 
                
                if (0 <= nextX && nextX < m && 0 <= nextY && nextY < n) {
                    int corNext = nextX * n + nextY; 
                
                    if (fathers.find(corNext) != fathers.end()) {
                        merge(cor, corNext); 
                    }
                }
            }
            
            res.push_back(count);
        }
        
        return res;
    }
};
```