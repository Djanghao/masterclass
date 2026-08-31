# Official Solution

**Link:** [https://leetcode.com/problems/bulb-switcher/solution/](https://leetcode.com/problems/bulb-switcher/solution/)

---

[TOC]

## Solution
--- 

### Approach 1: Math

#### Intuition

The idea behind this problem is to find the number of bulbs that are on after `n` rounds. In each round, we toggle some of the bulbs.  

As all the bulbs are initially off, at the end **only bulbs that are toggled an odd number of times will remain on**.    
Now, whenever we are at a round `i` we know we toggle all bulbs having a factor `i`. Thus, we need to find the bulbs which have an odd number of factors, as those bulbs will be toggled an odd number of times (once by each factor).   

It might be unintuitive, but with a few examples, we can easily see that a perfect square number has an odd number of factors, since any number's factors come in pairs of two different numbers, but the square root of the number will be paired with itself.


Let's take an example to make it more clear. Suppose `n = 10`.   
So, the number of rounds is `10`. In each round, we will toggle some of the bulbs.

![slide1](../Figures/319/Slide.PNG)

Track of rounds in which each bulb is toggled:    
- **Bulb 1:**   Round 1 **(odd number of toggles)**   
- **Bulb 2:**   Round 1, Round 2   
- **Bulb 3:**   Round 1, Round 3   
- **Bulb 4:**   Round 1, Round 2, Round 4 **(odd number of toggles)**   
- **Bulb 5:**   Round 1, Round 5   
- **Bulb 6:**   Round 1, Round 2, Round 3, Round 6   
- **Bulb 7:**   Round 1, Round 7   
- **Bulb 8:**   Round 1, Round 2, Round 4, Round 8   
- **Bulb 9:**   Round 1, Round 3, Round 9 **(odd number of toggles)**   
- **Bulb 10:** Round 1, Round 2, Round 5, Round10   

So, the number of bulbs that are on after 10 rounds is 3: Bulb 1, Bulb 4, and Bulb 9.

<br />

Now let's discuss, **why do perfect squares have odd and non-perfect squares have an even number of factors?**  

A factor is a number that can be multiplied by another number to produce a given result. Say for `12`, `1, 2, 3, 4, 6, 12` all are its factors as any factor `x` can be paired with another factor `12 / x` and when multiplied together it will result in `12`.    
  
When we factorize a number `y`, say we have one factor `x`, then the other factor whose multiplication will result in the original number will be `y / x`.   
Now comparing `x` and `y / x`, if `y` is a perfect square it means `y = a * a`, thus, here it is a possibility that `x` and `y / x` are same numbers, i.e. `a`.    
But if `y` is not a perfect square then for each `x` we will have a unique `y / x`, thus, it's factor pairs will always exist as two different numbers (e.g: for `12` -> `1 x 12`, `2 x 6`, `3 x 4`, (it has three factor pairs, so total `6` factors)), thus the total count of number of factors for non-perfect squares will be even,    
and for perfect square, all other `x` and `y / x` factor pairs will be two different numbers except for one case, i.e. `a` and `a` (e.g: for `16` -> `1 x 16`, `2 x 8`, `4 x 4` (`4` is paired with itself, it has three factor pairs, but one pair has both numbers same, so total `5` factors)). Thus, it will have odd number of total factors.

<br />

Thus we just need to find how many numbers from `1` to `n` are perfect squares.   
We can iterate on each number and check if it's a perfect square or not, (i.e. `floor(sqrt(i)) * floor(sqrt(i)) == i`)

Or, we can directly find the square root of `n` and its floor value will be equal to the count of numbers whose squares exist in this range `1` to `n`. 

The floor of the square root of `n` gives us the largest number whose square is less than or equal to `n`. For example, if `n = 26`, then the floor of square root of `n` is `5`, which means the largest number whose square is less than or equal to `26` is `5` thus for each number from `1` to `5`, its respective square will be present in the original range. So, there are `5` perfect squares in the range `1` to `25` `(1, 4, 9, 16, and 25)`. 

So, taking the floor value of the square root of `n` will give us the number of perfect squares in the range `1` to `n`.     
Hence, `sqrt(n)` is our answer to this problem.

> **Note:** You can also implement a function to find the square root of a number on your own, but here will use the in-built STL methods provided by each language.

#### Algorithm

1. Return the square root of `n`.

#### Implementation


<iframe src="https://leetcode.com/playground/nBFXmq9V/shared" frameBorder="0" width="100%" height="157" name="nBFXmq9V"></iframe>


#### Complexity Analysis

Here, $n$ is the number of bulbs and rounds.

* Time complexity: $O(1)$          
  - In general, the [fast inverse square root algorithm](https://en.wikipedia.org/wiki/Fast_inverse_square_root) is used to compute the square root of a number (which is typically represented using 32 bits) in most programming languages. The algorithm performs a series of bitwise and floating-point operations on the input value to compute an approximation of the inverse square root. The number of operations performed by the algorithm is fixed and does not depend on the input size. Thus, it makes each call to this method an $O(1)$ time operation.
<br />

  > Note: If we want to compute the square root of large numbers (e.g: 10^10000), it would be impractical to use the fast inverse square root algorithm. The fast inverse square root algorithm is designed to compute an approximation of the inverse square root of a 32-bit floating-point number, and it may not be accurate enough for very large numbers.
  > 
  > Instead, the languages would need to use a different algorithm that is capable of handling very large numbers with high precision. The Newton-Raphson and Babylonina methods are such algorithms that can be used to compute the square root of large numbers with high precision in nearly log-linear time (also called linearithmic time) $O(d \log d)$, where $d$ is the number of digits of the input number. 

* Space complexity: $O(1)$    
  - The implementation of the `sqrt` method doesn't use any additional space.