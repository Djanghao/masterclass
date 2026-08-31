# [94.62%] JavaScript Clean Backtracking With Short Circuit Optimization

**Author:** control_the_narrative
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/824095/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/824095/)

---

```javascript
var largestTimeFromDigits = function(A) {
    let res = '';
    
    function permute(arr, str) {
        if(str.length === 4) {
            if(+str >= +res) res = str;
            return;
        }
        
        for(let i = 0; i < arr.length; i++) {
            if(!str.length && arr[i] > 2) continue;
            if(str.length == 1 && str[0] == '2' && arr[i] > 3) continue;
            if(str.length == 2 && arr[i] > 5) continue;
            permute([...arr.slice(0, i), ...arr.slice(i+1)], str+arr[i]);
        }
    }
    permute(A, '');
    return res.slice(0, 2) + (res.length ? ':' : '') + res.slice(2);
};
```