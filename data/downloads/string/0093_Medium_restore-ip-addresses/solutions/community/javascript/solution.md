# JavaScript The Most Clean Backtracking Solution

**Author:** control_the_narrative
**Votes:** 21
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/672543/](https://leetcode.com/problems/restore-ip-addresses/solutions/672543/)

---

```javascript
var restoreIpAddresses = function(s) {
    const result = []
    
    function permute(arr, str) {
        if(arr.length === 3) {
            if(isValid(str)) result.push([...arr, str]);
            return;
        }
        
        for(let i = 1; i < 4; i++) {
            let subStr = str.slice(0, i);
            if(!isValid(subStr)) continue;
            permute([...arr, subStr], str.slice(i));
        }
    }
    
    function isValid(str) {
        if(+str > 255 || !str.length) return false;
        if(str.length >= 2 && str[0] === '0') return false;
        return true;
    }
    
    permute([], s);
    return result.map(x => x.join('.'))
};
```