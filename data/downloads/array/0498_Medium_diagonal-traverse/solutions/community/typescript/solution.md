# Easiest Soln

**Author:** shubhangi5
**Votes:** 2
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/4678931/](https://leetcode.com/problems/diagonal-traverse/solutions/4678931/)

---



# Code
```
function findDiagonalOrder(mat: number[][]): number[] {
    let i = 0;
    let j = 0;
    let result:number[] = [];

    while(i < mat.length && j < mat[0].length){
        result.push(mat[i][j]);
        mat[i][j] = null;
        //check if we can go upward
        if(mat[i-1]?.[j+1] != null){
            i--;
            j++;
            //check if we can go Downward
        } else if(mat[i+1]?.[j-1] != null){
            i++;
            j--;
            //check if we can go right
        } else if(mat[i]?.[j+1] != null && (i==0 || i==mat.length-1)){
            j++;
        } else {
            i++;
        }
    }
    return result;
};


```