# JavaScript Intuitive Stack Solution

**Author:** gnoman
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/3830981/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/3830981/)

---


# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    const stack = []
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        // while we have indexes in the stack AND 
        //the current number is less than the number most recently pushed into the stack
        while(stack.length && nums[stack[stack.length -1]] > nums[i]) {
            //pop the previous index off the stack
            let popped = stack.pop()
            //add the distance between the current number's index and
            //the number we just popped off the stack to result
            result += i - popped
        }
        //push every index into the stack 
        //(since each number is the leftmost in its own subarray)
        stack.push(i)
    }
    //the stack still contains numbers leftmost in the subarray in which they are at index 0
    //so add nums.length - their index to result
    while (stack.length) {
        let index = stack.pop()
        result += nums.length - index
    }

    return result
};
```