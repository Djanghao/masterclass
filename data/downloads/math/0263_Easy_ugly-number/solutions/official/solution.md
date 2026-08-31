# Official Solution

**Link:** [https://leetcode.com/problems/ugly-number/solution/](https://leetcode.com/problems/ugly-number/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem asks us to check if a given integer falls in the problem-made definition of **Ugly Number**. Following and analyzing the definition religiously is the best we can do.

---

### Approach: Definition

#### Intuition

Let's follow the definition. 

> *An **ugly number** is a positive integer whose prime factors are limited to 2, 3, and 5*.

An **ugly number** is a *positive integer*. As per constraints $ -2^{31} \leq n \leq 2^{31} - 1$, we can have non-positive integers. Since a non-positive integer cannot be ugly, we can immediately `return false` if $ n \leq 0 $.

For $ n > 0 $, we have to examine if the integer is an ugly number or not.   
As per the given definition, the only permitted prime factors for an ugly number are 2, 3, and 5.  Thus, if we remove all 2's, 3's, and 5's from the prime factorization of this integer, we can check if there is some other prime in the remaining factorization or not.     
   
- What we can do is check if the integer is divisible by 2 or not. If yes, then we have obtained one prime factor as 2. Then, we have to find the prime factors of the integer obtained by dividing this integer by 2. We will keep dividing our integer by 2 when it is divisible by 2. 
 
- At this point, this integer is no longer divisible by 2. Thus, try dividing it with the next permitted factor, i. e. 3. Keep dividing the integer by 3 when it is divisible by 3.

- At this point, this integer is no longer divisible by 2 or by 3. Thus, try dividing it with the next permitted factor, i. e. 5. Keep dividing the integer by 5 when it is divisible by 5.
 
- Now, the integer is no longer divisible by 2, 3, or 5. If this integer is not equal to 1, we can deduce that there are other prime factors of this integer, apart from 2, 3, and 5. Hence, the number is not ugly. If the integer was 1, the number is ugly.

#### Algorithm

1. If the given integer `n` is non-positive, we can `return false` since a non-positive integer cannot be ugly. 
   
2. Define a function `keepDividingWhenDivisible` which takes two arguments, `dividend` and `divisor`.   
   
    This function will keep dividing the `dividend` by `divisor` when it is divisible by `divisor`.  An integer `dividend` is divisible by `divisor` if it gives the remainder as 0 when divided by `divisor`. Many programming languages provide `mod` (`%`) binary operator for computing the remainder. This function then returns the modified `dividend`.
   
3. Keep dividing `n` by 2 when it is divisible by 2 by calling `keepDividingWhenDivisible(n, 2)`.    
   
    > **Note:** We can use bit manipulation to check if an integer is divisible by 2. We can check the Least Significant Bit (LSB) in the binary representation of the integer. If **LSB is 1**, it means the **number is odd**, and hence not divisible by 2. If **LSB is 0**, it means the **number is even**, and hence divisible by 2. We can check if LSB is 1 or not by $n \& 1$.
    >
    > And to divide the integer by 2, we can simply right-shift the integer by 1-bit. This can be done by $ n = n \gg 1 $. 
   
4. At this point, the integer is no longer divisible by 2. Now, keep dividing `n` by 3 when it is divisible by 3 by calling `keepDividingWhenDivisible(n, 3)`.
   
5. Now, the integer is neither divisible by 2, nor by 3. Now, keep dividing `n` by 5 when it is divisible by 5 by calling `keepDividingWhenDivisible(n, 5)`.
   
6. At this point, the integer is not divisible by any of 2, 3, or 5. Thus, as per the definition of Ugly Number, our integer, if it was ugly must have been reduced to 1. Thus, if `n` is 1, return `true`, otherwise `false`.

**Note:** Since steps 3, 4, and 5 are similar, we can use a loop to perform these steps.

#### Implementation

<iframe src="https://leetcode.com/playground/99LHBJiZ/shared" frameBorder="0" width="100%" height="497" name="99LHBJiZ"></iframe>

**Implementation Note**   

For unifying the approach for all three permitted factors, bit manipulation is not used in implementation because we cannot use $O(1)$ bit manipulation to divide by 3 or 5. 

#### Complexity Analysis

Let $N$ be the **magnitude** of the input integer.

* Time complexity: $O(\log (N))$. 
    
    We are dividing the integer by 2, 3, and 5 and terminating when it is not divisible by any of them.     
    > **When dividing an integer $ x $ by $ y $, there can be at most $O( \log_y(x) )$ divisions.**    
    >        
    > Assume we perform the division by $2$ for $K$ times. Then, we can say that the number $N$ is at least $2^K$, which means $2^K \leq N$. Therefore $K \leq \log_2 N$.         

    Thus, there can be at most $\log_2(N)$ divisions by 2, $\log_3(N)$ divisions by 3 and $\log_5(N)$ divisions by 5. Thus, total number of divisions will be at most $\log_2(N) + \log_3(N) + \log_5(N)$, which is $O(\log (N))$.  

* Space complexity: $O(1)$. 
    
    There are a handful of variables in the code, and all of them use constant space, hence, space complexity is constant
  
---