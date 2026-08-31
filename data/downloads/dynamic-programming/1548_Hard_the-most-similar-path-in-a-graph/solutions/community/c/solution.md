# C++ DP with graphs solution

**Author:** Maitreya47
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1301439/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1301439/)

---

First step is to create a graph out of roads, we create it by connecting an edge between each node that are in roads, also remeber to add edge between cities in both directions.
We create a 2D dp vector that stores the minimum edit distance. So dp[i][j] = minimum edit distance if we start at city 'i' and that city is at index 'x' of the path.
We also create 2 2D vectors- path1 and path2. Two are created so that one can act as a temporary path storing vector while the minimum edit distance is being calculated. Note that in further step when we do swwap(path1, path2), we can even do path1 = path2, but that costs more time.
Now, fill in the initial value dp, if we start at city i, check if the name matches with target[0], if it does, append 1, or else append 0. Also now push in the path1[i] with i, i.e. the path1 at i index starts from city i.
Now start iterating over all the positions of targetPath and also check all the n cities that could be at previous position in targetPath. 
If city j cant be at position i-1 in path (i.e. dp[i-1][j]==INT_MAX) then no neighbour of city j can be at position i in the path, hence we do continue.
For each neighbour of city j, we check if the edit distance with city k at position i in path has distance > edit distance with city j at position i-1 + check if name of kth city matches with city at index j in target path.
If the condition satisify's, update the value of the dp. For updateing the path, copy path1 upto city j in path of city k and push_back city k in it.
At last when all the minimum is checked, swap path1 and path2, so that the updated value of path with minimum edit distance upto current index is stored in path1.
At last, check the edit distance of each path starting from city i, which city gives the minimum edit distance, return the path starting from that min_index city (i.e. path1[min_index])
```
class Solution {
public:
    vector<int> mostSimilar(int n, vector<vector<int>>& roads, vector<string>& names, vector<string>& targetPath) {
        vector<vector<int>> g(n);
        for(auto& r:roads)
        {
            g[r[0]].push_back(r[1]);
            g[r[1]].push_back(r[0]);
        }
        int len = targetPath.size();
        vector<vector<int>> dp(len, vector<int>(n, INT_MAX));
        vector<vector<int>> path1(n);
        vector<vector<int>> path2(n);
        for(int i=0; i<n; i++)
        {
            dp[0][i] = (names[i]==targetPath[0])?0:1;
            path1[i].push_back(i);
        }
        int min_dist = INT_MAX; int min_index=-1;
        for(int i=1; i<len; i++)
        {
            for(int j=0; j<n; j++)
            {
                if(dp[i-1][j]==INT_MAX)
                    continue;
                for(int k : g[j])
                {
                    if(dp[i][k]>dp[i-1][j] + (names[k]!=targetPath[i]))
                    {
                        dp[i][k] = dp[i-1][j] + (names[k]!=targetPath[i]);
                        path2[k] = path1[j];
                        path2[k].push_back(k);
                    }
                }
            }
            swap(path1, path2);
        }
        for(int i=0; i<n; i++)
        {
            if(min_dist>dp[len-1][i])
            {
                min_dist = dp[len-1][i];
                min_index = i;
            }
        }
        return path1[min_index];
    }
};
```