# Javascript easy O(n) solution

**Author:** mehta_rishabh
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2491345/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2491345/)

---

```
var canBeValid = function(s, locked) {
    let flip = 0;
    let open = 0;
    let close = 0;
    if(s.length % 2) {
        return false;
    }
    for(let i = 0; i< s.length; i++) {
        if(!+locked[i]) {
            ++flip;
        } else {
            if(s[i] == "(") {
                ++open;
            } else {
                ++close;
            }
        }
        if(flip + open < close) {
            return false;
        }
    }
    flip = 0; open = 0; close = 0;
    
    for(let i = s.length-1; i>=0; i--) {
        if(!+locked[i]) {
            ++flip;
        } else {
            if(s[i] == "(") {
                ++open;
            } else {
                ++close;
            }
        }
        if(flip + close < open) {
            return false;
        }
    }
    return true;
};
```

Link: https://www.youtube.com/watch?v=-g0BXZ_EcGc