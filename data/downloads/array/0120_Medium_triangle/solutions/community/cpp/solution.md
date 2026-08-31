# Bottom Up 5 line C++ Solution

**Author:** rishav2
**Votes:** 93
**Link:** [https://leetcode.com/problems/triangle/solutions/38737/](https://leetcode.com/problems/triangle/solutions/38737/)

---

    class Solution {
    public:
        int minimumTotal(vector<vector<int> > &triangle) 
        {
            vector<int> mini = triangle[triangle.size()-1];
            for ( int i = triangle.size() - 2; i>= 0 ; --i )
                for ( int j = 0; j < triangle[i].size() ; ++ j )
                    mini[j] = triangle[i][j] + min(mini[j],mini[j+1]);
            return mini[0];
        }
    };