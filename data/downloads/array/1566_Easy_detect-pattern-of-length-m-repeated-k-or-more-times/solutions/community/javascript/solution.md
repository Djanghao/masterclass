# Javascript | O(n) one loop

**Author:** shkvorets
**Votes:** 10
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/836548/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/836548/)

---

```
var containsPattern = function(arr, m, k) {
    for(let i=m, cnt=0; i<arr.length; i++){
        if(arr[i]!=arr[i-m]) cnt=0;
        else if(++cnt==m*(k-1)) return true;
    }
    return false;
};
```