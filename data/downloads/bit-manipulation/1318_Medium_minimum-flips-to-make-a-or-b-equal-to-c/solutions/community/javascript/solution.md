# Check Least Significant Bit | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606768/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606768/)

---

Hello **Tenno Leetcoders**, 

For this problem, given 3 positives numbers `a`, `b` and `c`. Return the minimum flips required in some bits of `a` and `b` to make `( a OR b == c )`. (bitwise OR operation).

Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

### Explanation 

We want to find the minimum required flips needed to make `( a OR b == c )`. To do that, we can use bitwise operations. 

Create a variable to keep track of minimum number of flips required.

We want to iterate through the bits of `a`, `b` and `c` simultaneously and check for the `least significant bit` using bitwise `AND` operation with `1`. The number `1` in binary is represented as `00000001`, and performing the `& 1` operation will extracts the rightmost bit of each number, resulting in `1` if bit is set to `1` and `0` if bit is unset `0`

Using the least significant bit, we will perform a few checks:

1)  If a & 1 or b & 1 is not equal to c & 1, this means either bit a or bit b is 1 (at least one bit is 1) but c is 0. Thus, we need to perform flips to make `a or b == c`

    - If bit c is equal to 1, this means the current bit in c is 1, and the OR operation will result in 1. So increment tracker variable by 1 to represent the need to flip `a` and `b` to match `c`
    
    - If bit c is equal to 0, this means that the current bit in c is 0, and the OR operation will result in 0. If at least one of bit a or bit b is 1, we need to flip the corresponding bit to 0, so increment the tracker variable by the number of bits needed to be flipped, which is ` (bit_a == 1) + (bit_b == 1)`
    
2) To move onto the next bit after processing the current bit, we right-shift `a`, `b` and `c` by 1 to discard the rightmost bit and shit all other bits towards the right

3) Loop will continue until a, b and c becomes `0`. Thus, we will return the minimum flips needed 


# Code

**Python**
```
class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        min_flip = 0

        while a or b or c:
            bit_a = a & 1
            bit_b = b & 1
            bit_c = c & 1

            if (bit_a or bit_b) != bit_c:
                if bit_c == 1: 
                    min_flip += 1
                else:
                    min_flip += (bit_a == 1) + (bit_b == 1)
               
            a >>= 1
            b >>= 1
            c >>= 1

        return min_flip
```

**JavaScript**
```
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let minFlip = 0

    while(a || b || c){
        const bitA = a & 1
        const bitB = b & 1
        const bitC = c & 1
        if ((bitA || bitB) !== bitC){
            bitC === 1 ? minFlip += 1 : minFlip += (bitA === 1) + (bitB === 1)
        }
        a >>= 1
        b >>= 1
        c >>= 1
    }
    return minFlip
};
```
### Time Complexity: `O(log(max(a,b,c)))`
### Space Complexity: `O(1)`

 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***
![image](./images/0.gif)