# Javascript easy solution with verbose explanation, 94% faster TC

**Author:** exocloudy
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/1880773/](https://leetcode.com/problems/sum-of-two-integers/solutions/1880773/)

---

**Sum of Two Integers**
Add two numbers without using addition or subtraction operators.

Solution: Use bitwise manipulation. XOR (^) will add numbers, but will not account for binary numbers that should be carried (e.g. 1000 (ADD) 1000 != 10000). To solve this we make a carry variable - we find the number(s) to be carried with the AND (&) operator and use the Left Shift property (<<) to increment the number to it\u2019s proper placement (e.g. 10000).
We set XOR to param a, and the carry to param B and loop until param B equals zero. This allows us to account for all potential carries in the parameters.
```
/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b != 0){
        /**
         * To solve this problem, we use bitwise operations
         * and break the problem into two parts.
         * 
         * Binary operators used:
         * & (AND) - produces a digit of 1 if both numbers have a digit of 1
         * ^ (XOR) - produces a digit of 1 only if one number (not both) have a digit of one
         * << (Left Shift) - adds one binary zero onto the number; increments operand.
         * 
         * Carry - this is the binary number that is 'carried' to the new number. For example: adding 1000 + 1000 would produce 10000 after the bit manipualtion is done
         * Addition - this is the actual addition done with the XOR operator. If one 1 exists, the digit is kept. We add this to the carry.
         * 
         * This function is looped to add the carry onto the number with XOR addition - as we can't do it easily otherwise - and accounts for edge cases.
         * 
         * 
         */
        let carry = a & b;
        //a = addition function
        a = a ^ b;
        //incrementing the carry - 1000 in binary becomes 10000
        b = carry << 1;
    }
    return a;
    
    
    
};
// @lc code=end


```