# C++ | two line | XOR

**Author:** akshatmittal61
**Votes:** 30
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2680216/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2680216/)

---

This is a two liner solution for the problem.

Time Complexity: O(1)
Space Complexity: O(1)

## Explaination

Let's take n=21

Now in bit format, n=10101
On right shifting the bits by 1, n becomes 1010

Now, if we take the XOR of both the above numbers, 
`x = 10101 ^ 1010`
`x = 11111`

This number will have all bits as 1 only if, we had alternating bits in question.

To check if all bits are 1, we will add 1 to x,
`x = 11111`
`x+1 = 100000`

On using AND (&) operation on both these, the result should be 0, and hence the answer is true.

## Solution: 

```
class Solution {
public:
    bool hasAlternatingBits( int n ) {
        long x = ( n^( n >> 1) );
        return !( x & ( x+1 ) );
    }
};
```

Please upvote if helped, \uD83D\uDE0A