# Go binary operations solution

**Author:** JavAntik
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5338618/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5338618/)

---

# Intuition
We can use binary operations to get the answer without looping over each digit

# Approach
when number is alternating 0 and 1, then if we binary shift it right and xor it - then all last digits will be 1. Example:
given: 0101
shifted: 0101 > 1 = 0010 
xor: 0101 ^ 0010 = 0111
now if we add 1 and and it with the xored value it will be 0:
+1: 0111 + 1 = 1000
and: 0111 & 1000 = 0000
when values have repeated 1s or 0s we will end up with 0 between 1s and adding 1 will not result in all zeroes at the end, example:
given 01101
shifted: 01101 >> 1 = 00110
xor: 01101 ^ 00110 = 01011
+1: 01011 + 1 = 01100
and: 01011 & 01100 = 01000
One more example:
given 01001
shifted: 01001 >> 1 = 00100
xor: 01001 ^ 00100 = 01101
+1: 01101 + 1 = 01110
and: 01101 & 01110 = 01100

# Complexity
- Time complexity:
O(1) - we doing constant number of operations

- Space complexity:
O(1) - we do not require any additional space.

# Code
```
func hasAlternatingBits(n int) bool {
    n = n ^ (n >> 1)
    return n & (n + 1) == 0
}
```