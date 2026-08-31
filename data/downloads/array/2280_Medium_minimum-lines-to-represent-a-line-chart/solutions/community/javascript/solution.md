# Javascript solution

**Author:** theesoteric
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062275/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062275/)

---

```
/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    if(stockPrices.length===1){//its a dot (.) or point, so no line required
        return 0;
    }
    stockPrices.sort(function(a,b){return a[0]-b[0]});//Sorting is important becuase there can be 2 overlaping lines
    let count = 1;
    for(let i=2;i<stockPrices.length;i++){
        let x1 = BigInt(stockPrices[i-2][0]);
        let x2 = BigInt(stockPrices[i-1][0]);
        let x3 = BigInt(stockPrices[i][0]);
        let y1 = BigInt(stockPrices[i-2][1]);
        let y2 = BigInt(stockPrices[i-1][1]);
        let y3 = BigInt(stockPrices[i][1]);
        if((y2-y1)*(x3-x2)!==(y3-y2)*(x2-x1)){//as  (y3-y2)/(x3-x2) = (y2-y1)/(x2-x1) for same slope 
            count ++;
        }
        
    }
    return count;
};
```