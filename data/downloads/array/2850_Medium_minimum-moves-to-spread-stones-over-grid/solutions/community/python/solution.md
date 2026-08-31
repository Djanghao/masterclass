# Simple Recursion || Brute Force ||  Memoization || C++ || JAVA || Python

**Author:** amannimcet2021
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4025359/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4025359/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I am mapping every 0 with every possible index. Will fail for 8^8, for handled it separately. Else to avoid the 8^8 condition Memoize it.


# Complexity
- Time complexity: n^n (n<=7)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Recursion || 983 ms
```C++ []
class Solution {
    
    int f(vector<pair<int,int>>&z,vector<pair<int,int>>&o, int ind ){
        int n = z.size();
        if(ind==n) {            
            return 0;
        } 
        
        int ans = 1e8;        
            for(int j=0 ; j<o.size() ; j++){
                int cur = abs(z[ind].first - o[j].first) + abs(z[ind].second - o[j].second);
                auto it = o[j];
                o[j] = {-1e8,-1e8};
                
                ans = min(ans , cur += f(z,o,ind+1));
                o[j]=it;
            }
        
        return ans;
    }
public:
    int minimumMoves(vector<vector<int>>& grid) {
        
            if(grid[0][0]==9||grid[0][2]==9||grid[2][0]==9||grid[2][2]==9) return 18;
        
            if(grid[0][1]==9||grid[1][0]==9||grid[1][2]==9||grid[2][1]==9) return 15;
        if(grid[1][1]==9) return 12;
        
        vector<pair<int,int>>z,o;
          for(int i=0 ; i<3 ; i++){
            for(int j=0 ; j<3 ; j++){
                if(grid[i][j] == 0) z.push_back({i,j});
               
                while(grid[i][j]>1) grid[i][j]-- , o.push_back({i,j});
            }
        }
       
        // cout<<z.size()<<o.size()<<" | ";
        return f(z,o,0);
    }
};
```
Memoization || 353ms
```C++ Memoization []
class Solution {
    map<pair<vector<pair<int,int>>,int>,int>mp;
    int f(vector<pair<int,int>>&z,vector<pair<int,int>>&o, int ind ){
        int n = z.size();
        if(ind==n) {            
            return 0;
        } 
        if(mp[{o,ind}]) return mp[{o,ind}];
        int ans = 1e8;        
            for(int j=0 ; j<o.size() ; j++){
                int cur = abs(z[ind].first - o[j].first) + abs(z[ind].second - o[j].second);
                auto it = o[j];
                o[j] = {-1e8,-1e8};
                
                ans = min(ans , cur += f(z,o,ind+1));
                o[j]=it;
            }
        return mp[{o,ind}]=ans;
    }
public:
    int minimumMoves(vector<vector<int>>& grid) {
        
            
        vector<pair<int,int>>z,o;
          for(int i=0 ; i<3 ; i++){
            for(int j=0 ; j<3 ; j++){
                if(grid[i][j] == 0) z.push_back({i,j});
               
                while(grid[i][j]>1) grid[i][j]-- , o.push_back({i,j});
            }
        }
       
        return f(z,o,0);
    }
};

```
```python []
class Solution(object):
    def minimumMoves(self, grid):
        def f(z, o, ind):
            n = len(z)
            if ind == n:
                return 0

            ans = float('inf')
            for j in range(len(o)):
                curZ = z[ind]
                curO = o[j]

                cur = abs(curZ[0] - curO[0]) + abs(curZ[1] - curO[1])
                o[j] = (-1, -1)

                ans = min(ans, cur + f(z, o, ind + 1))
                o[j] = curO

            return ans

        if grid[0][0] == 9 or grid[0][2] == 9 or grid[2][0] == 9 or grid[2][2] == 9:
            return 18
        if grid[0][1] == 9 or grid[1][0] == 9 or grid[1][2] == 9 or grid[2][1] == 9:
            return 15
        if grid[1][1] == 9:
            return 12

        z = []
        o = []

        for i in range(3):
            for j in range(3):
                if grid[i][j] == 0:
                    z.append((i, j))
                while grid[i][j] > 1:
                    grid[i][j] -= 1
                    o.append((i, j))

        return f(z, o, 0)
py
```
```java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    private int minimumMoves(int[][] grid) {
        if (grid[0][0] == 9 || grid[0][2] == 9 || grid[2][0] == 9 || grid[2][2] == 9)
            return 18;
        if (grid[0][1] == 9 || grid[1][0] == 9 || grid[1][2] == 9 || grid[2][1] == 9)
            return 15;
        if (grid[1][1] == 9)
            return 12;

        List<int[]> z = new ArrayList<>();
        List<int[]> o = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (grid[i][j] == 0) {
                    z.add(new int[]{i, j});
                }
                while (grid[i][j] > 1) {
                    grid[i][j]--;
                    o.add(new int[]{i, j});
                }
            }
        }

        return f(z, o, 0);
    }

    private int f(List<int[]> z, List<int[]> o, int ind) {
        int n = z.size();
        if (ind == n) {
            return 0;
        }

        int ans = Integer.MAX_VALUE;
        for (int j = 0; j < o.size(); j++) {
            int[] curZ = z.get(ind);
            int[] curO = o.get(j);

            int cur = Math.abs(curZ[0] - curO[0]) + Math.abs(curZ[1] - curO[1]);
            o.set(j, new int[]{-1, -1});

            ans = Math.min(ans, cur + f(z, o, ind + 1));
            o.set(j, curO);
        }

        return ans;
    }
}

```


