# Simple 4 step || Prefix Sum || C++ Solution || Optimized approach

**Author:** u-day
**Votes:** 2
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3054414/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3054414/)

---

# Intuition
Apply prefix sum on 2D Matrix. 

Step 1 : arr[x1][y1]++
Step 2 : arr[x2+1][y2+1]++
step 3 : arr[x2+1][y1]--
step 4 : arr[x1][y2+1]--

After performing all the queries

arr[i][j] += arr[i - 1][j] + arr[i][j - 1] - arr[i - 1][j - 1];

# Complexity
- Time complexity: O(NXN)

- Space complexity: O(NXN)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<vector<int>> rangeAddQueries(int n, vector<vector<int>>& q) 
    {
        vector<vector<int>>arr(n, vector<int>(n, 0));
        
        for(int i=0; i<q.size(); i++)
        {
            int x1 = q[i][0];
            int y1 = q[i][1];
            int x2 = q[i][2];
            int y2 = q[i][3];
            
            arr[x1][y1]++;
            if(y2+1<n && x2+1<n) arr[x2 + 1][y2 + 1]++;
            if(y2+1 < n) arr[x1][y2 + 1]--;
            if(x2+1 < n) arr[x2 + 1][y1]--;
            
        }
        
		for(int i=0;i<n;i++)
        {
            for (int j = 0; j < n; j++) {
                
                if(i-1 >= 0) arr[i][j] += arr[i-1][j];
                if(j-1 >= 0) arr[i][j] += arr[i][j-1];
                if(i-1>=0 && j-1>=0) arr[i][j] -= arr[i-1][j-1];
            }
        }
		
        
        return arr;
    }
};
```