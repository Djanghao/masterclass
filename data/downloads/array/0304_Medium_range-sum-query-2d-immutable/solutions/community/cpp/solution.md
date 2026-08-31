# Clean C++ Solution and Explaination - O(mn) space with O(1) time

**Author:** haoel
**Votes:** 738
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/75350/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/75350/)

---

Construct a 2D array `sums[row+1][col+1]`

(**notice**: we add additional blank row `sums[0][col+1]={0}` and blank column `sums[row+1][0]={0}` to remove the edge case checking), so, we can have the following definition 

`sums[i+1][j+1]` represents the sum of area from `matrix[0][0]` to `matrix[i][j]`

To calculate sums, the ideas as below

    +-----+-+-------+     +--------+-----+     +-----+---------+     +-----+--------+
    |     | |       |     |        |     |     |     |         |     |     |        |
    |     | |       |     |        |     |     |     |         |     |     |        |
    +-----+-+       |     +--------+     |     |     |         |     +-----+        |
    |     | |       |  =  |              |  +  |     |         |  -  |              |
    +-----+-+       |     |              |     +-----+         |     |              |
    |               |     |              |     |               |     |              |
    |               |     |              |     |               |     |              |
    +---------------+     +--------------+     +---------------+     +--------------+
    
       sums[i][j]      =    sums[i-1][j]    +     sums[i][j-1]    -   sums[i-1][j-1]   +  

                            matrix[i-1][j-1]

So, we use the same idea to find the specific area's sum.



    +---------------+   +---------+----+   +---+-----------+   +---------+----+   +---+----------+
    |               |   |         |    |   |   |           |   |         |    |   |   |          |
    |   (r1,c1)     |   |         |    |   |   |           |   |         |    |   |   |          |
    |   +------+    |   |         |    |   |   |           |   +---------+    |   +---+          |
    |   |      |    | = |         |    | - |   |           | - |      (r1,c2) | + |   (r1,c1)    |
    |   |      |    |   |         |    |   |   |           |   |              |   |              |
    |   +------+    |   +---------+    |   +---+           |   |              |   |              |
    |        (r2,c2)|   |       (r2,c2)|   |   (r2,c1)     |   |              |   |              |
    +---------------+   +--------------+   +---------------+   +--------------+   +--------------+

And we can have the following code

   
    class NumMatrix {
    private:
        int row, col;
        vector<vector<int>> sums;
    public:
        NumMatrix(vector<vector<int>> &matrix) {
            row = matrix.size();
            col = row>0 ? matrix[0].size() : 0;
            sums = vector<vector<int>>(row+1, vector<int>(col+1, 0));
            for(int i=1; i<=row; i++) {
                for(int j=1; j<=col; j++) {
                    sums[i][j] = matrix[i-1][j-1] + 
                                 sums[i-1][j] + sums[i][j-1] - sums[i-1][j-1] ;
                }
            }
        }
    
        int sumRegion(int row1, int col1, int row2, int col2) {
            return sums[row2+1][col2+1] - sums[row2+1][col1] - sums[row1][col2+1] + sums[row1][col1];
        }
    };