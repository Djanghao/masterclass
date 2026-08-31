# [C++] Solution with steps explained beats 100%

**Author:** jinTaeJin
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/769651/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/769651/)

---

**Approach :** **In the grid in 1st row we need n-1 0s at the end, 2nd row n-2 0s, 3rd row n-3 0s and so on.**
Problem reduces to finding the zeroes at the end of each row and sorting it in decreasing order by **using operation :- swapping any two adjacent elements**
so we first find the number of 0s at the end of each row.
1. let's say the grid is ```[[0,0,1],[1,1,0],[1,0,0]]```.
2. so the number of zeroes at the end in each row comes out to be ```[0,1,2]``` let's call it array a.
3. now first row should have n-1 i.e 2 0s at the end so we have to bring 2 from 3rd position to 1st position in array a.
4. this can be done in 2 swaps and the array becomes ```[2,0,1]```. now first index is done since we have got the answer here.
5. repeat these steps for all the index and update the swaps count which will be the answer.

Pls Upvote if you like it.

```
class Solution {
public:
    int minSwaps(vector<vector<int>>& grid) {
        int n=grid.size(),res=0;
        vector<int>a(n);
        for(int i=0 ; i<n ; i++)              //finding the zeroes at the end of each row.
        {
            int j=n-1,cnt=0;
            while(j>=0 and grid[i][j]==0) {cnt++;j--;}
            a[i]=cnt;
        }
        for(int i=0 ; i<n ; i++)               //for calculating the swaps count or sorting the array decreasing.
        {
            if(a[i]<n-1-i)
            {
                int j=i;
                while(j<n and a[j]<n-1-i) j++;
                if(j==n) return -1;
                while(i<j)
                {
                    swap(a[j],a[j-1]);
                    res++;
                    j--;
                }
            }
        }
        return res;
    }
};
```