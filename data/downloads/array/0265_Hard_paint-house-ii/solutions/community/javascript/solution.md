# EASY JS BOTTOM UP DP

**Author:** rohithN33
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/3439181/](https://leetcode.com/problems/paint-house-ii/solutions/3439181/)

---



# Code
```
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    var prevRow=costs[costs.length-1]; // take last row as previous Row
    var n=prevRow.length;
    for(let i=costs.length-2;i>=0;i--){
        var currentRow=[...costs[i]]; // current Row we start from n-2;
        for(let j=0;j<n;j++){
            var min=Infinity;
            for(let z=0;z<n;z++){ //this loop is to select the minimum from previous row that is not this color. can be optimized.
                if(z==j)continue;
                min=Math.min(prevRow[z],min); 
            }
            currentRow[j]+=min; // current row value is sum of this color + minimum of prev which is not this color.
        }
        prevRow=currentRow; //update prev to current row
    }
    return Math.min(...prevRow) 
};
```