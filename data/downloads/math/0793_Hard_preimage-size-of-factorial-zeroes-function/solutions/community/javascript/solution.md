# 🔥 Clean Javascript Solution

**Author:** joenix
**Votes:** 2
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2040514/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2040514/)

---

```
/**
 * @param {number} k
 * @return {number}
 */

// calculate the factorial of 5 * m
const helper = m => {
    // set result
    let r = m;
    
    while(m > 0) {
        m = Math.floor(m / 5);
        r += m;
    }
    
    return r;
}

// Depending on the meaning of the question, the answer is either 5 or 0
const preimageSizeFZF = K => {
    // set min and max for comparison
    let min = 0, max = K+1;
    // use dichotomy
    while(min < max) {
        // center of min and max
        let center = ~~((min+max)/2);
        
        // zero is factorial of center
        let zero = helper(center);
        
        // set min and max ~
        if (zero > K) {
            max = center;
        }
        else if (zero < K) {
            min = center + 1;
        }
        else {
            return 5;
        }
    }

    return 0;
};
```