# JavaScript with explanation

**Author:** jialihan
**Votes:** 8
**Link:** [https://leetcode.com/problems/nth-digit/solutions/1432270/](https://leetcode.com/problems/nth-digit/solutions/1432270/)

---

```text
1 - 9 : 9 digits
10 - 99 : 90 * 2 digits
100 - 999: 900 * 3 digits
...
```

 1. find the range and length
 2. find the which starting number by len
 3. find the digit in that number

```js
var findNthDigit = function(n) {
    var len = 1;
    var range = 9;
    var base = 1;
    while(n>len*range)
    {
        n -= len *range;
        range *= 10;
        base *= 10;
        len++;
    }
    // [100, 101, 102,...]
    // 100 should have offset 0, use (n-1) to make the counting index from 0-based.
    var num = base + Math.floor((n-1)/len);
    var s = num.toString();
    return parseInt(s[(n-1)%len]);
};
```