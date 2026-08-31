# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/gray-code/solutions/5912221/](https://leetcode.com/problems/gray-code/solutions/5912221/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(2^n)$$ because we are generating 2^n gray codes, where n is the input parameter.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2^n)$$ because we are storing all 2^n gray codes in the result array. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function grayCode(n: number): number[] {

    // generate 2^n codes for bit length n using less shift a << b ( a * (2**b));
    const codeLength: number = 1 << n;

    // initialize result as empty arry
    let result: number[] = [];

    // run for loop from 0 to codeLength
    for (let i = 0; i < codeLength; i++) {

        // generate gray code from 0 and toggle 1 bit on each iteration using right shift (i >> 1)
        let code:number = i ^ (i >> 1);

        // push the gray code in result
        result.push(code);
    }

    // return final array result
    return result;
};
```