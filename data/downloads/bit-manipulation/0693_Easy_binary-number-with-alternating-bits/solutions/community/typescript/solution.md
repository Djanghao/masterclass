# Beats 100% | Bitwise | Docs | Comments

**Author:** OmarThinks
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4424555/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4424555/)

---

# Right Shift meaning:

- `11`=> `1`
- `101`=> `10`
- `100` => `10`


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Doing BitWise operations on the binary value of the number
- Keep reading the first bit, while doing right shift operations




# Approach


- create a variable `prevBit`, initalize it with the value of `null`
- Iterate over the binaries of it (As long as `n` !== 0)
    - read the `currentBit` from the right of `n`
        - Examples: 111 => 1, 101010=>0, 1=>1, 101=>1
    - if the `currentBit` is equal to `prevBit` return `false`
        - Because we've found 2 consicutive equal bits
        - Example: `00` or `11`
    - set `currentBit` to `prevBit`
    - Right Shift `n`
        - Examples: 1010=>101, 10=>1, 1=>0, 111=>11
- if we haven't returned `false` yet, return `true`
    - Because there are no `00` or `11`







# Complexity
- Time complexity: $$O(Log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

## 1) TypeScript:

```TypeScript
function hasAlternatingBits(n: number): boolean {

    let prevBit: null|number = null
    // created and initialized `prevBit`

    while(n!==0){
        // Iterating while `n`!==0
        // Because in the end of right shift operations, `n`
        // will be consumed and equal to zero
        // Example: 1110 => 111=> 11 => 1 => 0

        const currentBit = n & 1
        // Reading first bit from the right directions
        // Example: 11(1) => 1, 11(0) => 0, (1) => 1
        // That is the first bit from the right direction
        
        if(currentBit===prevBit) return false
        // This means we found two consicutive equal bits

        prevBit = currentBit
        // Preparing for the end of the loop
        // setting `prevBit` to `currentBit`

        n >>= 1
        // Doing the Right Shift
        // Examples: 111=>11 , 10101=>1010 , 1=>0

    }
    return true
    // We did not find any two consicutive bits that are equal
};
```




## 1) JavaScript:

```JavaScript
function hasAlternatingBits(n) {

    let prevBit = null
    // created and initialized `prevBit`

    while(n!==0){
        // Iterating while `n`!==0
        // Because in the end of right shift operations, `n`
        // will be consumed and equal to zero
        // Example: 1110 => 111=> 11 => 1 => 0

        const currentBit = n & 1
        // Reading first bit from the right directions
        // Example: 11(1) => 1, 11(0) => 0, (1) => 1
        // That is the first bit from the right direction
        
        if(currentBit===prevBit) return false
        // This means we found two consicutive equal bits

        prevBit = currentBit
        // Preparing for the end of the loop
        // setting `prevBit` to `currentBit`

        n >>= 1
        // Doing the Right Shift
        // Examples: 111=>11 , 10101=>1010 , 1=>0

    }
    return true
    // We did not find any two consicutive bits that are equal
};
```