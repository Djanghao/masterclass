# Typescript Solution - faster than 99.85%

**Author:** inasinghal78
**Votes:** 3
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/3291497/](https://leetcode.com/problems/pascals-triangle/solutions/3291497/)

---

Runtime: 50 ms, faster than 99.85%% of Typescript online submissions for Merge Sorted Array.
Memory Usage: 44.2 MB, less than 89.71% of Typescript online submissions for Merge Sorted Array.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
function generate(numRows: number): number[][] {
    var result = new Array(numRows);
    
    for(var i=0;i<numRows;i++) {
        result[i]= new Array(i+1);
        result[i][0] = 1;
        result[i][i] = 1;
        for(var j=1;j<i;j++) {
            result[i][j] = result[i-1][j-1]+result[i-1][j];
        }
    }

    return result;
};
```