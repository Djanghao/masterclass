# JAVA SOLUTION || DETAILED EXPLANATION || EASY APPROCH || 100% Efficent

**Author:** sarrthac
**Votes:** 136
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/1727031/](https://leetcode.com/problems/reshape-the-matrix/solutions/1727031/)

---

# Approch -``

***1st condition** to be checked -*
Firstly will have to check if the product of dimension of the given array matrix(**mat**) and the product of dimensions of the new array matrix are eqaul. If they are not equal this means we cannot fill all the elements perfectly in one of the matrix hence in this condition, will have to return the original array.

***Secondly***, we will traverse through the first matrix and add the elements in our newly created **output matrix**, but here we have to keep in mind to add elements column wise and not row wise. i.e we will maintain two seperate pointers for rows and colums and firstly we will go through colums & if (**column == c**) then we will move to next row & also set the column pointer to zero again.

***For Better unnderstnading let's look at the code***

```
class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        
        //Storing the values of mat matrix
        //i.e m = rows & n = cols
        int rows = mat.length;
        int cols = mat[0].length;
        
        //if the product of rows & cols of mat matrix and the new matrix are not same then return original matrix
        if((rows * cols) != (r * c)) return mat;
        
        //Creating the new matrix
        int[][] output = new int[r][c];
        int output_rows = 0;
        int output_cols = 0;
        
        
        //Traversing the mat matrix and storing the its values in new matrix output cols wise
        for(int i = 0; i < rows; i++)
        {
            for(int j = 0; j < cols; j++)
            {
                output[output_rows][output_cols] = mat[i][j];
                output_cols++;
                
                //if the cols value reached then change the row and set the cols value to 0.
                if(output_cols == c)
                {
                    output_cols = 0;
                    output_rows++;
                }
            }
        }
        
        return output;
    }
}
```


**If found helpful, please upvote.
Thank You !!**