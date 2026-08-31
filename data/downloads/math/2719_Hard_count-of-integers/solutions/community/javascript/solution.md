# 🔥 JavaScript, code explained, DP solution 🔥

**Author:** m12s44
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/3602934/](https://leetcode.com/problems/count-of-integers/solutions/3602934/)

---

# Code
```
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function(num1, num2, min_sum, max_sum) {
    const modulo = 10**9 + 7

    // dp - 2D array
    // dp[i][j] - count of numbers of length i with digits sum equals j
    // so dp[0] - is empty
    // dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] - for a number with 1 digit 
    // there 10 possible sums of its digits - from 0 to 9, each sum can be acheaved in a single way
    //
    // dp[2] - count of numbers of length 2, can be calculated using dp[1] and digits 0 to 9

    const dp = [[], Array(10).fill(1)]
    const l2 = num2.length
    for (let i = 2; i <= l2; i++) {
        let tmp = Array(9 + dp.at(-1).length).fill(0)
        for (let n = 0; n <= 9; n++) {
            // n + k <= 400 based on the task constains 
            // 1 <= min_sum <= max_sum <= 400
            for (let k = 0; k < dp.at(-1).length && n + k <= 400; k++) {
                tmp[n + k] += dp.at(-1)[k] % modulo
            }
        }
        dp.push(tmp)
    }
    

    // using dp array we can calculate a count of numbers of length len
    // with their digits sum in the range [min : max]
    const getCountByNumberLength = (min, max, len) => {
        if (max < 0) return 0
        let sum = 0
        for (let i = 0; i <= max && i < dp[len].length; i++) {
            if (i >= min) {
                sum += dp[len][i]
                sum = sum % modulo                    
            }
        }
        return sum
    }

    // recursively calculate count of integers in the range 1 to nums
    // with the digits sum in the range minS and maxS
    const rec = (nums, minS, maxS) => {

        // get the top most digit
        const firstDigit = nums.shift()
        let count = 0

        // if the number had only 1 digit
        if (nums.length == 0) {
            for (let i = 0; i <= firstDigit; i++) {
                if (i >= minS && i <= maxS) count++
            }
        } else {
            for (let i = 0; i < firstDigit; i++) {
                count += getCountByNumberLength(minS - i, maxS - i, nums.length)
                count = count % modulo
            }
            count += rec(nums, minS - firstDigit, maxS - firstDigit)
            count = count % modulo            
        }
        return count
    }
    

    // convert num1 and num2 strings into arrays 
    // e.g. "1234" => [1, 2, 3, 4]
    const nums1 = num1.split("").map(i => +i)
    const nums2 = num2.split("").map(i => +i)
    let t = nums1.length - 1

    // decrease num1 by 1, e.g. if num1 = "1234" => [1, 2, 3, 3]
    while (true) {
        if (nums1[t] > 0) {
            nums1[t]--
            break
        } else {
            t--
        }
    }
    for (let i = t + 1; i < nums1.length; i++) {
        nums1[i] = 9
    }

    // get count of numbers with their sum in the range [min_sum : max_sum]
    // get it for nums1 - from 1 to (nums1 - 1)
    // and for nums2 - from 1 to nums2
    const count1 = rec(nums1, min_sum, max_sum)
    const count2 = rec(nums2, min_sum, max_sum)
    
    // the answer we are looking for will be 
    // count2 - count1, as we need the count in the range num1 <= x <= num2
    const res = (count2 - count1) % modulo

    // as we use modulo in out calculations, in some cases we can end up
    // with count2 < count1, so add modulo in this case
    return res < 0 ? res + modulo : res
};
```