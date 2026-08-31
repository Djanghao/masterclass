# [Python] DP O(N^2) (Precision  Handling | Concise | Explained)

**Author:** gourav2001k
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1239872/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1239872/)

---

Sometimes division leads to precision error in programming languages: **Eg: 2/3+1/3=1.0000000000001**
So, we need to ignore such cases. Happened with me during contest.  This can be achieved by subtracting value like ```10^-9``` before taking it's ceil. 
Last few test cases were initentionally designed in such a way to restrict solutions without precision handling.

Rest the DP logic is we are trying to maitain a dp matrix in which we store that at current dist location ```K``` what are the arrival times if we skip ```0,1,...k-1``` checkpoints. 
We have to initialize the matrix in the first column which denotes the value where 0 skips are considered.
And in the end we iterate the last row of the matrix to find out what is the minimum number of required skips.

**Time Complexity: O(N^2)
Space Complexity: O(N^2)**

```
from math import *
class Solution:
    def minSkips(self, dist: List[int], speed: int, hoursBefore: int) -> int:
        n=len(dist)
		# Error Range 10^-9 can be ignored in ceil, so we will subtract this value before taking ceil 
        e=1e-9
        mat=[[0 for i in range(n)]for j in range(n)]
        mat[0][0]=dist[0]/speed
		# Initialization 
		# Values where 0 skips are considered
        for i in range(1,n):
            mat[i][0]=ceil(mat[i-1][0]-e)+dist[i]/speed
        for i in range(1,n):
            for j in range(1,i):
                mat[i][j]=min(ceil(mat[i-1][j]-e),mat[i-1][j-1])+dist[i]/speed
            mat[i][i]=mat[i-1][i-1]+dist[i]/speed
        for i in range(n):
            if mat[-1][i]<=hoursBefore:
                return i
        return -1
```
**PS: This the first time I have posted. If you liked please UPVOTE**