# Easy Solution

**Author:** Sharuk01
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/5364618/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/5364618/)

---


# Complexity
- Time complexity: **O(n)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    function doesDecimalHasZero (num) {

        return num.toString().includes('0');
    }

    for(let i = 1 ; i < n ; i++) {

        let a = i;
        let b = n - i;

        let res1 = doesDecimalHasZero(a);
        let res2 = doesDecimalHasZero(b);


        if(!res1 && !res2) {
            if(a + b === n) return [a , b]
        }
    }
};
```