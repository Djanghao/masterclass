# Easy Solution

**Author:** Movsar
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202581/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202581/)

---

# Complexity
- Time complexity: On

- Space complexity: On

# Code
```
/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = function(num) {
    // tc - On, sc - On
    // EXAMPLE: 11891
    const nums = num.toString().split('') 

    let nonZero
    let nonNine
    
    // tc - On
    // After this for loop nonZero = 1
    for (const num of nums) {
        if (num !== '0') {
            nonZero = num
            break
        }
    }

    // tc - On
    // After this for loop nonNine = 1
    for (const num of nums) {
        if (num !== '9') {
            nonNine = num
            break
        }
    }

    // tc - On, sc - On
    // After this for loop all 1-s will be changed to 9
    // and nums = 99899
    const max = Number(nums.map(num => {
        if (num === nonNine) return '9'
        return num
    }).join(''))

    // tc - On, sc - On
    // After this for loop all 1-s will be changed to 0
    // and nums = 00890. parse int and get 890
    const min = Number.parseInt(nums.map(num => {
        if (num === nonZero) return '0'
        return num
    }).join(''))

    return max - min
};
```