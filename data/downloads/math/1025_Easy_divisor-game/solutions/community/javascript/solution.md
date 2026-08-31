# JS simple explanation

**Author:** LCfzc
**Votes:** 45
**Link:** [https://leetcode.com/problems/divisor-game/solutions/514275/](https://leetcode.com/problems/divisor-game/solutions/514275/)

---

First of all, we could assume that there are two base cases: N=3 and N=2;
 If Alice gets 2, she wins; else she loses. The problem is how to get to N=2 to win.
 
  We know that if a number is odd, it only has common divisors that are also odd. e.g. 21=3x7, 27=3x9, and we know that for odd numbers, adding two odd numbers or substracting an odd number from another one, we'd always end up with an even number. 
  
 In this case (an odd number is given), no matter what we do, we'd always give the opponent an even number. So that we'd eventually lose, because our opponent could choose to subtract an odd number from that even number to give us the odd number again. Endless bad loop. 
 
  Therefore if we get an odd number to start with, no matter what we choose, we'd always end up with base case N=3.
  
 So to get our opponent (in this case Bob) to have an odd number, we have to have an even number to start with so that we could choose x=1 to force the opponent into dealing with an odd number.
 
 e.g.
 if N equals 16, Alice could choose x=1 and force Bob into dealing with 16-1=15. 

The logic behind is dynamic programming, this problem got lucky that we don't have other cases to consider.

```
/**
 * @param {number} N
 * @return {boolean}
*/

var divisorGame = function(N) {
    return N%2===0;
};
```