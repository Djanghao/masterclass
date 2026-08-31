# JavaScript  solution

**Author:** Enyoyating
**Votes:** 13
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/532065/](https://leetcode.com/problems/increasing-decreasing-string/solutions/532065/)

---

``` javascript
var sortString = function(s) {
    let temp = new Array(26).fill(0);
    let ans = [];
    
    for (let i=0; i<s.length; i++) {
        temp[s.charCodeAt(i) - 97] += 1;   
    }
   
    let flag = true;
    while(ans.length < s.length) {
       for (let i=0; i<temp.length; i++) {
           var pos = i;
           if (!flag) {
               pos = 25-i;
           }
           if (temp[pos] !==0) {
               ans.push(String.fromCharCode(pos+97));
               temp[pos] -= 1;
           }
       }
        
       flag = !flag; 
    }
    ans = ans.join('');
    
    return ans;
};
```