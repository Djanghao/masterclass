# 🥇 C++ | PYTHON | JAVA || EXPLAINED || ; ] ✅

**Author:** karan_8082
**Votes:** 99
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344637/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344637/)

---

**UPVOTE IF HELPFuuL**

# Intuition
Assume a number `1101001`
Starting from left to right to save number of operations
`1000000->0` takes 2^7-1 = 127 steps  
`0100000->0` takes 2^6-1 = 63 steps  
`0001000->0` takes 2^4-1 = 15 steps  
`0000001->0` takes 2^1-1 = 1 step  

Hence Can be said
`1 -> 0` needs `1` operation,
`2 -> 0` needs `3` operations,
`4 -> 0` needs `7` operations,
`2^k` needs `2^(k+1)-1` operations.

# Approach

`1101001` : Required steps  = 127-63+15-1 = 78

- Let steps `x` to convert `000000` to `100000`.
- But, since `1101001` already has 1 in the 5th bit from right, some steps will be saved. 
- Saved steps `y = Number of steps needed to convert 000000 to 100000`
- Hence not all the `2^(6+1) - 1` steps to convert `1000000 -> 0` as `0100000` can be obtained in less number of steps.

For `0100000 -> 0`, we need to add its `2^6-1` steps
For `0001000 -> 0`, we need to add its `2^4-1` steps
For `0000001 -> 0`, we need to add its `2^1-1` steps

Result = `2^(7)-1` - `2^6-1` + `2^4-1` - `2^1-1`

# Complexity
- Time complexity: O ( log N )
- Space complexity: O ( 1 )

``` Python []
class Solution:
    def minimumOneBitOperations(self, n: int) -> int:
        res = 0
        while n:
            res = -res - (n ^ (n - 1))
            n &= n - 1
        return abs(res)
```
``` C++ []
class Solution {
public:
    int minimumOneBitOperations(int n) {
        int res;
        for (res = 0; n > 0; n &= n - 1)
            res = -(res + (n ^ (n - 1)));
        return abs(res);
    }
};
```

``` JAVA []
class Solution {
    public int minimumOneBitOperations(int n) {
        int multiplier = 1;
        int res = 0;
        while (n > 0) {
            res += n ^ (n - 1) * multiplier;
            multiplier = -1 * multiplier;
            n &= n - 1;
        }
        return Math.abs(res);
    }
}
```

**UPVOTE IF HELPFuuL**


![IMG_3740.JPG](./images/0.jpeg)
