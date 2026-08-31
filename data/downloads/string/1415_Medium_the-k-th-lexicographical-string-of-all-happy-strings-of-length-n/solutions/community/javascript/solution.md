# Javascript Solution construct possible strings, sort and return kth string

**Author:** Seriously_Ridhi
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/585907/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/585907/)

---

```
//contructs an array of all possible unique strings possible with 'a', 'b', 'c' of length n
var formArray = function(res, s, pre, l, n){
    if (n == 0) 
    { 
        res.push(pre);
        return; 
    } 
    for (var i = 0; i < l; i++) 
    { 
        var newPre; 
          
        // Next character of input added. check for last character of prefix 
        if(pre[pre.length-1] !== s[i])
        { 
            newPre = pre + s[i];
            formSet(res, s, newPre, l, n - 1); 
        }
        
    } 
}
var getHappyString = function(n, k) {
    var res = []
    formArray(res, ['a','b','c'], "", 3,  n);
    res.sort();
    if(res.length<k){
        return "";
    }
    return res[k-1];
};
```