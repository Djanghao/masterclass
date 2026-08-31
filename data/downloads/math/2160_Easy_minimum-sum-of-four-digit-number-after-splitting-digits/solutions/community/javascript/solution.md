# 2 lines code in JS

**Author:** harsh1923
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2366191/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2366191/)

---

```
var minimumSum = function(num) {
    const temp=num.toString().split('').sort();
return (parseInt(temp[0]+temp[2])+parseInt(temp[1]+temp[3]));
    
};
```