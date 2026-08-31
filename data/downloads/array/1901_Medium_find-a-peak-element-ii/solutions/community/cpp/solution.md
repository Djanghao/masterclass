# ✅☑️ Best C++ 2 Solution Ever || Binary Search || Brute Force->Optimize || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 66
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/3190868/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/3190868/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Multiple Approaches. (Here I have explained all the possible solutions of this problem).

1. Solved using Matrix(Two nested loop). Brute Force Approach.
2. Solved using Matrix + Binary Search. Optimized Approach.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the All the approaches by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity is given in code comment.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is given in code comment.

# Code
```
/*

    Time Complexity : O(N*M), where N is the number of row and M is number of column of matrix(mat). Here two
    nested loops create time complexity because in worst case we will visit all the cells of the matrix(mat).

    Space Complexity : O(1), Constant space.

    Solved using Matrix.

*/


/***************************************** Approach 1 *****************************************/

class Solution {
private: 
    bool isPeakElement(vector<vector<int>>& mat, int row, int col){
        int n = mat.size();
        int m = mat[0].size();
        int dxdy[][2] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
        for(int i=0; i<4; i++){
            int newrow = row + dxdy[i][0];
            int newcol = col + dxdy[i][1];
            if(newrow >= 0 && newcol >= 0 && newrow < n && newcol < m && mat[newrow][newcol] > mat[row][col]){
                return false;
            }
        }
        return true;
    }
public:
    vector<int> findPeakGrid(vector<vector<int>>& mat) {
        int n = mat.size();
        int m = mat[0].size();
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(isPeakElement(mat, i, j)){
                    return {i, j};
                }
            }
        }
        return {-1, -1};
    }
};






/*

    Time Complexity : O(NlogM), where N is the number of row and M is number of column of matrix(mat). Here we
    are doing N work logM times which creates the time complexity.

    Space Complexity : O(1), Constant space.

    Solved using Matrix + Binary Search.

*/


/***************************************** Approach 2 *****************************************/

class Solution {
public:
    vector<int> findPeakGrid(vector<vector<int>>& mat) {
        int n = mat.size();
        int m = mat[0].size();
        int low = 0, high = m-1;
        while(low <= high){
            int maxRow = 0;
            int midCol = (low+high) >> 1;
            for(int row=0; row<n; row++){
                if(mat[row][midCol] > mat[maxRow][midCol]){
                    maxRow = row;
                }
            }
            int currElement =  mat[maxRow][midCol];
            int leftElement = midCol == 0 ? -1 : mat[maxRow][midCol-1];
            int rightElement = midCol == m-1 ? -1 : mat[maxRow][midCol+1];
            if(currElement > leftElement && currElement > rightElement){
                return {maxRow, midCol};
            }
            else if(currElement < leftElement){
                high = midCol - 1;
            }
            else{
                low = midCol + 1;
            }
        }
        return {-1, -1};
    }
};
```

***For Better clearity watch it from 35:00.***

https://youtu.be/HtSuA80QTyo

#### ***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)