# JavaScript solution - key/subtle difference from other languages

**Author:** karlr42
**Votes:** 45
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/71344/](https://leetcode.com/problems/first-bad-version/solutions/71344/)

---

This is the standard binary search solution, but what's crucial is that in JS you need to use Math.floor on mid. That caught me out for a little bit. Otherwise you get a float mid which will cause wrong answers.
```
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n;
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2);
           if(isBadVersion(mid)){
                end = mid; // look on left side of mid
           }else{
               start = mid+1; // look on the right side of mid
           }
       }
       return start;
    };
};
```