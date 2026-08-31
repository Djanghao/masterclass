# Easy Video Solution 🔥 || Just Implement the question 🙋 || C++ JAVA PYTHON

**Author:** ayushnemmaniwar12
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813941/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813941/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Draw the 'Y'. calculate 0's,1's and 2's for 'Y' and the remaining Grid


# ***Easy Video Explanation***

https://youtu.be/CYAKZp6b-Oc



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

# Code


```C++ []
class Solution {
public:
    void fill(vector<vector<int>>&vis,vector<vector<int>>& v) {
        int n=v.size();
        int i=0,j=0;
        while(i<=n/2) {
            vis[i][j]=1;
            i++;
            j++;
        }
        i=0,j=n-1;
        while(i<n/2) {
            vis[i][j]=1;
            i++;
            j--;
        }
        i=n/2+1;j=n/2;
        while(i<n) {
            vis[i][j]=1;
            i++;
        }
    }
    int minimumOperationsToWriteY(vector<vector<int>>& v) {
        int n=v.size();
        vector<vector<int>>vis(n,vector<int>(n,0));
        fill(vis,v);
        int c0=0,c1=0,c2=0;
        vector<int>v1(3,0);
        vector<int>v2(3,0);
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(vis[i][j]==1) {
                    if(v[i][j]==0)
                        v1[0]++;
                    else if(v[i][j]==1)
                        v1[1]++;
                    else
                        v1[2]++;
                }
            }
        }
        int a=0,b=0,c=0;
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(vis[i][j]==0) {
                    if(v[i][j]==0)
                        v2[0]++;
                    else if(v[i][j]==1)
                        v2[1]++;
                    else
                        v2[2]++;
                }
            }
        }
        int ans=INT_MAX;
        for(int i=0;i<=2;i++) {
            int costY = v1[0]+v1[1]+v1[2]-v1[i];
            int costRem=INT_MAX;
            for(int j=0;j<=2;j++) {
                if(i==j)
                    continue;
                int t = v2[0]+v2[1]+v2[2]-v2[j];
                costRem = min(costRem,t);
            }
            ans=min(ans,costY+costRem);
        }
        return ans;
    }
};
```
```python []
class Solution:
    def fill(self, vis, v):
        n = len(v)
        i, j = 0, 0
        while i <= n // 2:
            vis[i][j] = 1
            i += 1
            j += 1
        i, j = 0, n - 1
        while i < n // 2:
            vis[i][j] = 1
            i += 1
            j -= 1
        i, j = n // 2 + 1, n // 2
        while i < n:
            vis[i][j] = 1
            i += 1

    def minimumOperationsToWriteY(self, v):
        n = len(v)
        vis = [[0] * n for _ in range(n)]
        self.fill(vis, v)
        v1 = [0, 0, 0]
        v2 = [0, 0, 0]

        for i in range(n):
            for j in range(n):
                if vis[i][j] == 1:
                    if v[i][j] == 0:
                        v1[0] += 1
                    elif v[i][j] == 1:
                        v1[1] += 1
                    else:
                        v1[2] += 1

        for i in range(n):
            for j in range(n):
                if vis[i][j] == 0:
                    if v[i][j] == 0:
                        v2[0] += 1
                    elif v[i][j] == 1:
                        v2[1] += 1
                    else:
                        v2[2] += 1

        ans = float('inf')
        for i in range(3):
            costY = v1[0] + v1[1] + v1[2] - v1[i]
            costRem = float('inf')
            for j in range(3):
                if i == j:
                    continue
                t = v2[0] + v2[1] + v2[2] - v2[j]
                costRem = min(costRem, t)
            ans = min(ans, costY + costRem)
        return ans

```
```Java []

import java.util.Arrays;

class Solution {
    void fill(int[][] vis, int[][] v) {
        int n = v.length;
        int i = 0, j = 0;
        while (i <= n / 2) {
            vis[i][j] = 1;
            i++;
            j++;
        }
        i = 0;
        j = n - 1;
        while (i < n / 2) {
            vis[i][j] = 1;
            i++;
            j--;
        }
        i = n / 2 + 1;
        j = n / 2;
        while (i < n) {
            vis[i][j] = 1;
            i++;
        }
    }

    public int minimumOperationsToWriteY(int[][] v) {
        int n = v.length;
        int[][] vis = new int[n][n];
        fill(vis, v);
        int[] v1 = new int[3];
        int[] v2 = new int[3];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (vis[i][j] == 1) {
                    if (v[i][j] == 0)
                        v1[0]++;
                    else if (v[i][j] == 1)
                        v1[1]++;
                    else
                        v1[2]++;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (vis[i][j] == 0) {
                    if (v[i][j] == 0)
                        v2[0]++;
                    else if (v[i][j] == 1)
                        v2[1]++;
                    else
                        v2[2]++;
                }
            }
        }

        int ans = Integer.MAX_VALUE;
        for (int i = 0; i <= 2; i++) {
            int costY = v1[0] + v1[1] + v1[2] - v1[i];
            int costRem = Integer.MAX_VALUE;
            for (int j = 0; j <= 2; j++) {
                if (i == j)
                    continue;
                int t = v2[0] + v2[1] + v2[2] - v2[j];
                costRem = Math.min(costRem, t);
            }
            ans = Math.min(ans, costY + costRem);
        }
        return ans;
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00