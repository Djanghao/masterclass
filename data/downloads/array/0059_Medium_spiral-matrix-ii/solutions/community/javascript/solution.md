# javascript simple

**Author:** cauld
**Votes:** 15
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/1471809/](https://leetcode.com/problems/spiral-matrix-ii/solutions/1471809/)

---

Runtime: 68 ms, faster than 90.62% of JavaScript online submissions for Spiral Matrix II.
Memory Usage: 38.7 MB, less than 83.38% of JavaScript online submissions for Spiral Matrix II.

```
var generateMatrix = function(n) {
    
    let output = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
    let count = 0;
    
    let size = n * n;
    
    let left = 0;
    
    let right = n - 1;
    
    let top = 0;
    
    let bottom = n -1;
    
    while(count < size){
        
        //going left
        for(let i = left; i <= right; i++){
            count++;
            output[top][i] = count;
        }
        top++;
                
        // going down
        for(let i = top; i <= bottom; i++){
            count++;
            output[i][right] = count;
        }
        right--;
        
        //going left
        for(let i = right; i >= left; i--){
            count++;
            output[bottom][i] = count;
        }
        bottom--;
        
        //going up
        for(let i = bottom; i >= top; i--){
            count++;
            output[i][left] = count;
        }
        left++;
    }
    
    return output;
    
};
    
};
```