# [Python3] freq table

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/1429655/](https://leetcode.com/problems/lonely-pixel-ii/solutions/1429655/)

---


```
class Solution:
    def findBlackPixel(self, picture: List[List[str]], target: int) -> int:
        m, n = len(picture), len(picture[0])
        freq = defaultdict(int)
        rows = [0] * m
        cols = [0] * n
        for i in range(m): 
            for j in range(n): 
                if picture[i][j] == "B": 
                    rows[i] += 1
                    cols[j] += 1
            freq["".join(picture[i])] += 1
        
        ans = 0
        for i in range(m):
            key = "".join(picture[i])
            if freq[key] == target: 
                for j in range(n): 
                    if picture[i][j] == "B" and rows[i] == cols[j] == target: ans += 1
        return ans 
```

**Implemented in C++**
```
class Solution {
public:
    int findBlackPixel(vector<vector<char>>& picture, int target) {
        int m = picture.size(), n = picture[0].size(); 
        vector<string> keys; 
        unordered_map<string, int> freq; 
        vector<int> rows(m, 0), cols(n, 0); 
        for (int i = 0; i < m; ++i) {
            string key; 
            for (int j = 0; j < n; ++j) {
                key.push_back(picture[i][j]); 
                if (picture[i][j] == 'B') {
                    ++rows[i]; 
                    ++cols[j]; 
                }
            }
            keys.push_back(key); 
            ++freq[key]; 
        }
        
        int ans = 0; 
        for (int i = 0; i < m; ++i) {
            string key = keys[i]; 
            if (freq[key] == target) 
                for (int j = 0; j < n; ++j) 
                    if (picture[i][j] == 'B' && rows[i] == target && cols[j] == target) 
                        ++ans; 
        }
        return ans; 
    }
};
```