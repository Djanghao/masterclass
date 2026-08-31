# [JavaScript] Simple, Clean NlogN Sorting Solution

**Author:** YogiPaturu
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1933392/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1933392/)

---

```
/*
1. Seperate even and odd values into seperate arrays
2. Sort both in ascending order (that way popping from the end will give max even or add number in O(1) time)
3. Loop through nums
    - If it's an even number, pop from the even array (i.e., the largest even number)
    - Otherwise, it's an odd number, pop from the odd array (i.e., the largest odd number)
4. Return the largestNum array joined

Time: n + nlogn + nlogn + n = 2n + 2nlogn = nlogn
Space: 4n = n
*/
var largestInteger = function(num) {
    const odd = [];
    const even = [];
    const nums = String(num).split('')
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0) even.push(parseInt(nums[i]))
        else odd.push(parseInt(nums[i]))
    }
    
    odd.sort((a,b) => a-b)
    even.sort((a,b) => a-b)
    
    const largestNum = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0) largestNum.push(even.pop())
        else largestNum.push(odd.pop())
    }

    return largestNum.join('')
};
```