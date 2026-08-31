# Clear & Concise Solution || JavaScript

**Author:** astiksarathe
**Votes:** 3
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3084164/](https://leetcode.com/problems/alternating-digit-sum/solutions/3084164/)

---

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const str = n.toString()
    let sum = 0
    for(let i =0; i<str.length; i++){
        if(i%2 ==0){
            sum += +str[i]
        }else{
            sum -= +str[i]
        }
    }
    return sum
};
```