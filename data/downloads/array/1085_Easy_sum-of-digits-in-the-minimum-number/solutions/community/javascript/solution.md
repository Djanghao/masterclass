# Javascript 97%

**Author:** hrgplumer
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/422599/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/422599/)

---

```
var sumOfDigits = function(A) {
    
    const findSum = (num) => {
        let sum = 0;
        while (num > 0) {
            let remainder = num % 10;
            sum += remainder;
            num = Math.floor(num / 10);
        }
        
        return sum;
    }
    
    return findSum(Math.min(...A)) % 2 === 0? 1: 0;
};
```