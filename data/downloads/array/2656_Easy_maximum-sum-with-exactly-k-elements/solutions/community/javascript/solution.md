# Using Arithmatic series formulae

**Author:** Kabilan_C
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5157563/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5157563/)

---



# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    // The formula for the sum of an arithmetic series is:
    // sum= (n/2)*(2*a + (n-1)*d)
    // n is the number of terms in the series
    // a is the first term of the series
    // d is the common difference between consecutive terms.
    let a= Math.max(...nums)
    return (k/2)*(2*a + (k-1))
};



```