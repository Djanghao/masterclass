# JavaScript Solution

**Author:** Sonal0
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/2094201/](https://leetcode.com/problems/digit-count-in-range/solutions/2094201/)

---

```
/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function(d, low, high) {    
    return countDigit(high, d) - countDigit(low-1, d);
    
};


    
function countDigit(n,  d) {
      if (n < 0 || n < d) {
            return 0;
       }
        
  let count = 0;
        for(let i = 1; i <= n; i*= 10) {
            let divider = i * 10;
            count += parseInt(n / divider) * i;
            
            if (d > 0) {
                count += Math.min(Math.max(n % divider - d * i + 1, 0), i); // comment1: tailing number need to be large than d *  i to qualify.
            } else {
                if(n / divider > 0) {
                    if(i > 1) {  
                        // comment2: when d == 0, we need avoid to take numbers like 0xxxx into account.
                        count -= i;
                        count += Math.min(n % divider + 1, i);  
                    }
                }
            }
        }
        
        return count;
    }

```