# Easy to understand JavaScript solution

**Author:** besLisbeth
**Votes:** 3
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1666168/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1666168/)

---

How to find an answer without the knowledge of bitwise operators?

The hint lies here: to find the complement number, we need to find the 111..111 number of N length, where N is the length of the input number in binary representation. That's our sum of `n` and complement number. Then convert it to decimal and subtract between `sum` and input number `n`. 
That's it! It will be easier to understand if we'll go to the examples.

***Example 1:***
**Input**: n = 5
**Explanation**: 5 is "101" in binary, so we create the number "111", find it decimal representation - that's 7, and find out the subtract
**Output**: 7 - 5 = 2. The answer is **2**

***Example 2:***
**Input**: n = 6435
**Explanation**: 6435 is "'1100100100011'" in binary,  the length of the binary is 13 so we create the number "1111111111111", find it decimal representation - that's 8191, and find out the subtract
**Output**: 8191 - 6435 = 1756. The answer is **1756**

***Example 3:***
**Input**: n = 0
**Explanation**: 0 is "0" in binary,  the length of the binary is 1 so we create the number "1", find it decimal representation - that's 1, and find out the subtract
**Output**: 1 - 0 = 1. The answer is **1**


***Easy-to-read code:***
```
function bitwiseComplement(n: number): number {
	let binary = n.toString(2);                        // we find our input in binary representation
	let sum = parseInt('1'.repeat(binary.length), 2);  // we find the sum in binary and convert in to decimal 
    return sum - n;                                    //get the result in decimal 
};
```

***Good-looking oneliner:***
```
function bitwiseComplement(n: number): number {
    return parseInt('1'.repeat((n >>> 0).toString(2).length), 2) - n;
};
```

Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Complement of Base 10 Integer.