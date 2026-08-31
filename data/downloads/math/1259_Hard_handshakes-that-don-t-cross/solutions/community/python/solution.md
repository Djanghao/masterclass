# My first one-liner HARD 😎 Explained with picture

**Author:** trpaslik
**Votes:** 1
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3230234/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3230234/)

---

# Intuition
Imagine people in the circle.
Thing recursively. Use memoization.
There is `n` of you. You are person "1".
You can pair with 2 or 4 or 8 or 10 or ... n.
Whatever person you pick to pair with, you divide circle into two smaller groops that (recursively) need to follow the rules.

Consider 12 people in a circle:
```
     me ->   1   [2]   [3]      
               \\                    FIRST HALF (before peer)
        (12)     \\        [4]    
                   \\             
      (11)           \\     [5]    
                       \\
        (10)              6  <- my selected peer 
   
            (9)   (8)  (7)       SECOND HALF (after peer)
```
When 1 pairs with 2: the answer is `numberOfWays(10)`
When 1 pairs with 4, rest is divided into [2,3] and (5,6,7,8,9,10,11,12),
so the answer is `numberOfWays(2) * numberOfWays(8)`
When 1 pairs with 6, rest is divided into [2,3,4,5] and (7,8,9,10,11,12),
so the answer is `numberOfWays(4) * numberOfWays(6)`
When 1 pairs with 8, answer is `numberOfWays(6) * numberOfWays(4)`
When 1 pairs with 10, answer is `numberOfWays(8) * numberOfWays(2)`
When 1 pairs with 12, answer is `1 * numberOfWays(10)`


# Approach
If n < 1, return 1
otherwise consider each of your peer from range 2, 4, 6, 8, ... n.
For each possbile peer, sum soliution for left half times solution for the right half.
Return sum of products modulo magic prime.

This is not well optimized. We do a lot of similar calculations but it gets accepted and is very simple.

# Code
```
class Solution:
    @cache
    def numberOfWays(self, n: int) -> int:
        return sum(self.numberOfWays(pair-2) * self.numberOfWays(n-pair) for pair in range(2, n + 1, 2)) % 1000000007 if n > 2 else 1

```