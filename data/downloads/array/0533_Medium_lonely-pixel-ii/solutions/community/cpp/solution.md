# O(mn) concise solution, C++

**Author:** vsmnv
**Votes:** 4
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/100241/](https://leetcode.com/problems/lonely-pixel-ii/solutions/100241/)

---

```
class Solution {
public:
    int findBlackPixel(vector<vector<char>>& picture, int N) {
        int m = picture.size();
        if(!m) return 0;
        int n = picture[0].size();
        if(!n) return 0;
        vector<int> rows(m,0), cols(n,0);
        unordered_map<string,int> um;
        vector<string> srows;
        for(int i = 0; i < m; ++i){
            string s;
            for(int j = 0; j < n; ++j){
                if(picture[i][j] == 'B'){
                    rows[i]++;
                    cols[j]++;
                }
                s.push_back(picture[i][j]);
            }
            um[s]++;
            srows.push_back(s);
        }
        int res = 0;
        for(int i = 0; i < m; ++i)
            if(rows[i] == N && um[srows[i]] == N)
                for(int j = 0; j < n; ++j)
                     if(picture[i][j] == 'B' && cols[j] == N) ++res;        
        return res;
    }
};;
```