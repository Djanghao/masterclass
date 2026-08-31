# Javascript Fast and Simple

**Author:** galberto807
**Votes:** 23
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/495421/](https://leetcode.com/problems/set-matrix-zeroes/solutions/495421/)

---

```
var setZeroes = function(matrix) {

    var track = []
    
    // find zeros
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0) track.push([i, j])                
      }
    }

    for(var i = 0; i < track.length; i++){
      var [x, y] = track[i]
      
      // update row
      for(var j = 0; j < matrix[0].length; j++){
        matrix[x][j] = 0
      }
      
      // udpate column
      for(var j = 0; j < matrix.length; j++){
        matrix[j][y] = 0
      }

    }
};
```