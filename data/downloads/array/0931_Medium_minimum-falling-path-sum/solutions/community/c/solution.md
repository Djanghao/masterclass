# [C++] Simple,easy solution using DP  {BEGINNERS FRIENDLY}

**Author:** shubhambhatt__
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/645283/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/645283/)

---

Pls upvote if you find this helpful  :)

Basic idea is to divide this problem into subproblems i.e get minimum value corresponding to each grid cell.For the first row the value remains unchanged,while from second row onwards we need to add minimum of the three elements from the previous row.Deal with corner cases separately .Once all this is done we scan the last row and get the minimum.
```
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& A) {
        int row=A.size();
        int column=A[0].size();
        for(int i=1;i<row;i++){
            for(int j=0;j<column;j++){
                if(j==0)                                                    //Leftmost or first column
                A[i][j]+=min(A[i-1][j],A[i-1][j+1]);
                else if(j==column-1)A[i][j]+=min(A[i-1][j],A[i-1][j-1]);     //Rightmost or last column
                else A[i][j]+=std::min({A[i-1][j],A[i-1][j+1],A[i-1][j-1]}); //Remaining cases
            }
        }
        int sum=INT_MAX;
        for(int i=0;i<column;i++){
            sum=min(sum,A[row-1][i]);                                      //Last row scan
        }
        return sum;
    }
};
```