# [Javascript] Easy solution | Explain

**Author:** nhutu
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1800135/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1800135/)

---

Sum the number
If the sum is even => `number / 2 `else `(number - 1) / 2`
```
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let sum = 0;
    let temp = num;
    
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10)
    }

    return sum % 2 ? Math.floor((temp - 1) / 2) : Math.floor(temp / 2)
};

```