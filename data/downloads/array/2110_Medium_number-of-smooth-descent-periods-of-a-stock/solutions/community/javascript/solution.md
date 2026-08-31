# Easy Javascript solution beats 92% with O(n) TC

**Author:** harshit_03
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/3325634/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/3325634/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let count = 0
    let res = 0
    for (let i=0;i<prices.length-1;i++){
        if(prices[i]-prices[i+1] === 1){
            count += 1
            res += count
        } else {
            count = 0
        }
    }
    return res + prices.length
};
```