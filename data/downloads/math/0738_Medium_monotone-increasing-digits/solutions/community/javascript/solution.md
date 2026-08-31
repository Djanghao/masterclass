# 8 Line JS code

**Author:** YuTingKung
**Votes:** 3
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/1672111/](https://leetcode.com/problems/monotone-increasing-digits/solutions/1672111/)

---

```
var monotoneIncreasingDigits = function(n) {
    let arr = String(n).split('');
    for (let i=arr.length-2; i>=0; i--) {
        if (arr[i]>arr[i+1]) {
            arr[i]--;
            for(let j=i+1; j<arr.length; j++) arr[j]='9';
        }
    }
    return Number(arr.join(''));
};
```