# Java Simple Solution Beats 100% + explanation

**Author:** _velasoka
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5070671/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5070671/)

---

**Intuition:** Find Most Significant Bit and reduce 1 from MSB.

**Approach:** Question asks us to do bitwise AND operation. 
>If any of the bit position is zero at any point in time, it always results in zero for further AND operation with `1` or `0`
```
(eg) n = 5
binary of 5 = 0101, binary of 4 = 0100
if you do 5&4 then
5 = 0101
4 = 0100 (MSB of 5 is 4)
---------
4 = 0100
```
**How to make all bits to zero except MSB?**
>you have to know MSB of the number
```
1. (eg) n = 5, MSB is 4
2. (eg) n = 10, MSB is 8
3. (eg) n = 17, MSB is 16
```

>if you take the above example of `n` and do `&` with its `MSB` all the bits except MSB turns zero.

1. Now you know the number which turns all the bits to zero except MSB.
2. Final task, you want to turn `MSB` bit to zero. How?
```
(eg) n = 5, MSB of 5 is 4
your final answer = 4-1, which is 3.
```

***Hint:** **MSB** value is always **power of 2***
how do you check, if number is **power of 2**?
```
n & (n-1) == 0     -> then `n` is power of 2

```
**Time & Space complexity:** O(1)
```
class Solution {
    public long maxNumber(long n) {
        long num=1;

        //finding MSB
        while((num<<1)<=n) {
            num<<=1;
        }
        //substract 1 from MSB
        return num-1;
    }
}
```
Please **UPVOTE**, if you find the solution helpful