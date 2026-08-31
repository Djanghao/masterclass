# [JS] Map | 100%

**Author:** iamtherealgd
**Votes:** 4
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/970567/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/970567/)

---

```
var lenLongestFibSubseq = function(A) {
    var map = new Map();
    
    for(var a of A){
        map.set(a, true);
    }
    
    A.sort((a,b)=>a-b);
    
    var len = 0;
    
    for(var i=0; i<A.length; i++){
        for(var j=i+1; j<A.length; j++){
            var left = A[i];
            var right = A[j];
            var tempLen = 0;
            while(map.has(left+right)){
                tempLen++;
                var temp = left+right;
                left = right;
                right = temp;
            }
            len = Math.max(len, tempLen+2);
        }
    }
    
    return len>2?len:0;
};
```