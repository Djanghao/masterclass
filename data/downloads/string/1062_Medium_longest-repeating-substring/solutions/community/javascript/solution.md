# JavaScript Binary Search + Set

**Author:** slkuo230
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/517405/](https://leetcode.com/problems/longest-repeating-substring/solutions/517405/)

---

The goal is to cut the search length in half in every iteration vs the "naive way" is to decrement the search length by 1 everytime.
```
var longestRepeatingSubstring = function(S) {
    
    let left = 0;
    let right = S.length-1;
    
    // true means increase our search length
    function search(len) {
        const seen = new Set();
        for(let i = 0; i + len < S.length; i++) {
            const str = S.substring(i, i+len+1);
            if(seen.has(str)) {
                return true;
            }
            seen.add(str);
        }
        return false;
    }
    
    while(left <= right) {
        const mid = Math.floor((right + left)/2);
        if(search(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
    
};
```