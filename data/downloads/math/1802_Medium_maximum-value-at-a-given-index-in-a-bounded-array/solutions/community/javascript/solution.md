# Javascript solution using binary search and arithmetic progression

**Author:** bk7312
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620128/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620128/)

---

Here's my JS solution using binary search and the arithmetic progression. 
1. Define the `min` and `max` possible values of `nums[index]` as `Math.floor(maxSum/n)` and `maxSum` respectively. 
2. Create 2 helper functions, `findSum` and `isWithin`. 
3. `findSum` will find the sum of an arithmetic progression of length `len` starting with the largest number `num`. 
4. `isWithin` will return whether the sum is within `maxSum` or not.
5. Perform binary search and check whether the midpoint of `min` and `max` is within `maxSum` or not. If `isWithin(mid) === true` then `min = mid + 1`, else `max = mid - 1`.
6. Once the binary search is complete, return `max`.

Notes on `findSum`:
- We have to consider two scenarios. If `len < num`, we can use the arithmetic formula normally, else we have to consider the trailing `1`'s. 
- Example, `findSum(10, 3)` means we find the sum of `10 + 9 + 8` whereas `findSum(3, 5)` means finding the sum of `3 + 2 + 1 + 1 + 1`. 
- The formula for arithmetic progression is `length of series * (largest number + smallest number) / 2`
- For the case of `len < num`, we get `len * ( (num) + (num - len + 1) ) / 2`. 
- For the case of `len > num`, we get `num * ( num + 1 ) / 2 + (len - num)` where `(len - num)` accounts for the trailing `1`'s. 
- If `len === num`, either formula is fine as `(len - num)` will cancel out.

```
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let min = Math.floor(maxSum/n)
    let max = maxSum
    const findSum = (num, len) => {
        if (len < num) {
            return len * (num + num - len + 1) / 2
        } 
        return num * (num + 1) / 2 + (len - num)
    }
    const isWithin = num => {
        const leftSum = findSum(num, index + 1)
        const rightSum = findSum(num, n - index)
        return maxSum >= leftSum + rightSum - num
    }
    while (min <= max) {
        const mid = (min + max) >> 1
        isWithin(mid) ? min = mid + 1 : max = mid - 1
    }
    return max
};
```