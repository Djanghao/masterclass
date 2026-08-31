# Solving LeetCode Problem: Binary Gap

**Author:** seba1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-gap/solutions/4711391/](https://leetcode.com/problems/binary-gap/solutions/4711391/)

---

# Intuition
The problem involves finding the maximum binary gap in the binary representation of a given number n. A binary gap is defined as the maximum sequence of consecutive zeros between two ones in the binary representation. To solve this problem, we can iterate through the binary representation of the number and keep track of the starting index of each binary gap. The maximum binary gap is the difference between the current index and the starting index when encountering a '1'.

# Approach
1. Initialize a variable result to 0, which will store the maximum binary gap.
2. Convert the given number n to its binary representation using toString(2).
3. Initialize variables start and end to 0 and 1, respectively. These will be used to track the starting index and length of the current binary gap.
4. Iterate through the binary representation, and for each digit:
    - If it is '1', update the result by taking the maximum of the current result and the difference between the current index and start. Update start to the current index and reset end to 0.
    - If it is '0', increment end.
5. After the loop, return the final result.

# Complexity
- Time complexity: O(n), where n is the number of bits in the binary representation of n. The algorithm iterates through each bit once.
- Space complexity: O(1), as the algorithm uses a constant amount of extra space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function binaryGap(n: number): number {
    let result = 0;
    
    const nBinary = n.toString(2);

    let start = 0,
        end = 1;

    for (let i = 0; i < nBinary.length; i++) {
        if(nBinary[i] === '1') {
            result = Math.max(result, i - start)
            start = i;

            end = 0;
        } else {
            end += 1;
        }
    }

    return result
};
```