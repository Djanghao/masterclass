# Javascript Solution Beats 99%

**Author:** back_to_basics
**Votes:** 10
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1517295/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1517295/)

---

```
var guessNumber = function(n) {
    let l = 0, r = n-1;
    while(l  <= r ){
        let mid = Math.floor((l+r)/2);
        let res = guess(mid);
        if(res == 0) return mid;
        else if (res == 1) l = mid+1;
        else r = mid-1;
    }
    return l;    
};
```