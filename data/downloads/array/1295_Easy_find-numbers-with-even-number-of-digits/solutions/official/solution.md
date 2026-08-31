# Official Solution

**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solution/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solution/)

---

[TOC]

## Solution

--- 

### Overview

We want to find the count of integers in an array `nums` which have an even number of digits.    

> On looking constraint, we can say that $1 \leq nums[i] \leq 10^5$. Hence, we need not worry about non-positive integers. Readers can take the task of handling negative integers as a **follow-up** of this problem.  

The editorial presents different methods by which we can validate that a given integer has an even number of digits. We will discuss them one by one.

---

### Approach 1: Extract Digits

#### Intuition

In this approach, we will be using arithmetic operators to validate if a given integer has an even number of digits or not. 

What we can do is extract the digits from the integer and count them. If the number of digits is even, then we will increment the counter.

Let's see how to extract the digits from an integer using $37$ as an example. It can be written as

$37 = 3 \cdot 10^1 + 7 \cdot 10^0$, or    
$37 = 3 \cdot 10 + 7 $

We can say that to extract $7$ from $37$, we have to divide $37$ by $10$ and take the remainder.

**Which operator can we use to obtain the remainder?**  
We can use [modulo operator](https://en.wikipedia.org/wiki/Modulo_operation) to obtain the remainder.   

> In Java, Python3, C++, C, Javascript, and many other languages, the modulo operator is `%`.

In this way, we have extracted the last digit from an integer. How we can extract the second last digit? We can shift the integer by one place to the right to make the current second last digit the last digit, and then extract it again using the modulo operator.

Now,   
$37 = 3 \cdot 10^1 + 7 \cdot 10^0$

The required $3$ can be written as
$3 = 0 \cdot 10^1 + 3 \cdot 10^0$

Thus, the weight of each digit is reduced by $10$ times. Hence, we can divide the integer by $10$ to obtain the second last digit.

> We can take large integers as an example to convince ourselves. Let's take $7329$. Now, we can write it as
>
> $7329 = 7 \cdot 10^3 + 3 \cdot 10^2 + 2 \cdot 10^1 + 9 \cdot 10^0$
>
> To shift right and obtain $732$, we can divide it by $10$ and obtain the **quotient** as $732$.     
> $7329 = 732 \cdot 10 + 9$

**Which operator can we use to obtain the quotient?**   
We can use the [integer division](https://en.wikipedia.org/wiki/Remainder#Integer_division) operator to obtain the quotient.

> - In Java, C++, C, and many other languages, we can use the `/` operator to obtain the quotient.
> - In Python3, we can use `//` operator to obtain the quotient.

Now, we have extracted the last digit and the second last digit. We can repeat the process to extract all the digits. Since we are only interested in the number of digits, we can use a counter to record its value.

Before proceeding further, when should we stop extracting digits? Is there any programmatic way to know when to stop?

At every iteration, our integer reduces by $10$ times. Hence, we can stop when our integer becomes $0$.

> If after reducing we get a single-digit integer, then as per our algorithm, we will again divide it by $10$. Now, any single-digit integer divided by $10$ will give $0$ as the quotient. Hence, we can stop when our integer becomes $0$.

Here is the animation explaining the digit extraction process

!?!../Documents/1295/1295_digits.json:960,540!?!   
<br/>

We need to do this process for all integer `num` present in the array `nums`. Therefore, we can have a boolean function `hasEvenDigits` which takes integer `num` as input and returns `true` if the number of digits is even, otherwise returns `false`.

```pseudocode []
function hasEvenDigits(num)
{    
    digitCount = 0
    while num is not 0
    {
        digit = num % 10
        digitCount = digitCount + 1
        num = num / 10
    }

    if digitCount % 2 == 0
        return true
    else
        return false
}
```

Let's do some minor optimizations

1. The variable `digit` inside the `while` loop is not required. The digits themselves are not of interest to us. We are only interested in the number of digits. Hence, we can remove the variable `digit`.

2. For incrementing the counter, we can use `digitCount += 1` or `digitCount++` as well.

3. Similarly `num = num / 10` can be written as `num /= 10`.

4. The condition of the while loop is `while num is not 0`. Now, whenever `num` becomes `0`, the truth value of the variable will become `false`. Hence, we can write `while num` as well.

    > The truth value of a variable is `true` if it is non-zero, otherwise, it is `false`. The truth value depends on the language. 
    > - In C, C++, Java, and many other languages, the truth value of a variable is `true` if it is non-zero, otherwise it is `false`. 
    > - In Python3, the truth value of a variable is `true` only if it is non-zero, non-empty and not equal to `None`, otherwise it is `false`.

5. For checking the parity (odd/even) of a number, instead of the modulo operator, we can use bitwise operators as well. The "bitwise AND" operator `&` can be used to check parity. If the least significant bit of a number is `1`, then the number is odd, otherwise, it is even. 

    > The least significant bit can be extracted by bitwise AND-ing integer with 1 
    > In C, C++, Java, Python3 and many other languages, we can use the `&` operator for bitwise AND.

    Thus, `digitCount % 2 == 0` can be written as `digitCount & 1 == 0`.

    Moreover, instead of using `if`-`else` duo, we can smartly `return digitCount & 1 == 0` which means that return `true` if the number of digits is even, otherwise return `false`.

Hence, the modified helper function `hasEvenDigits` can be written as

```pseudocode []
function hasEvenDigits(num)
{    
    digitCount = 0
    while num
    {
        digitCount ++
        num /= 10
    }

    return digitCount & 1 == 0
}
```

In our `findNumbers`, we can call `hasEvenDigits` for each `num` in `nums` and increment the counter if `hasEvenDigits` returns `true`.

```pseudocode []
function findNumbers(nums)
{
    evenDigitCount = 0
    for num in nums
    {
        if hasEvenDigits(num)
            evenDigitCount ++
    }

    return evenDigitCount
}
```

Readers are encouraged to implement the solution on their own.


#### Algorithm

1. Define a helper function `hasEvenDigits` which takes `num` as input and returns `true` if the number of digits is even, otherwise returns `false`.

    - Initialize `digitCount` to `0`.

    - While `num` is non-zero     
      - Increment `digitCount` by `1`.
       
      - Divide `num` by `10`.
    
    - Return `digitCount & 1 == 0`.

2. In the function `findNumbers`, initialize `evenDigitCount` to `0`.

3. For each `num` in `nums`, check if `hasEvenDigits(num)` returns `true`. If it does, increment `evenDigitCount` by `1`.

4. Return `evenDigitCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/YWVR4wik/shared" frameBorder="0" width="100%" height="500" name="YWVR4wik"></iframe>

#### Complexity Analysis

Let $N$ be the length of `nums`, which represents the number of integers for which we have to check.   
Let $M$ be the maximum integer in `nums`.

* Time complexity: $O(N \cdot \log M)$

    - For `hasEvenDigits`, we have a `while` loops which will iterate the number of times equal to the number of digits in `num`.
        
        > **When dividing an integer $ x $ by $ y $, there can be at most $O( \log_y(x) )$ divisions.**    
        >        
        > Assume we perform the division by $10$ for $K$ times. Then, we can say that the integer $\text{num}$ is at least $10^K$, which means $10^K \leq \text{num}$. Therefore $K \leq \log_{10} \text{num}$.

        Thus, the time complexity of `hasEvenDigits` is $O(\log (\text{num}))$. The maximum number of digits will be in the maximum integer in `nums`. Hence, the time complexity of `hasEvenDigits` is $O(\log M)$.

    - Now, we have a `for` loop which checks if there are even digits in each `num` in `nums`. There are $N$ such integers, and each integer takes $O(\log M)$ time to process. 
    
    Hence, the time complexity of `findNumbers` is $O(N \cdot \log M)$.   

* Space complexity: $O(1)$
    
    We are using constant extra space. Hence, the space complexity is $O(1)$.
     
---


### Approach 2: Convert to String

#### Intuition

Given an integer, to find the number of digits in it, we need to extract them and count them since there is no concept of **length** in integers.

However, given a string, we can find its length by using the `length()` *(or equivalent counterpart)* function. 

Thus, what we can do is convert our integer to a string and then find its length. Its length will be the number of characters in it, which are nothing but the number of digits in it.

As discussed in [overview](#overview) as well, we need not worry about non-positive integers because of the constraint $1 \leq nums[i] \leq 10^5$. However, readers can appreciate that it would be just one more step to handle negative integers as well.

Different programming languages have different ways to convert integers to strings. Readers are encouraged to find a way to convert integers to strings in their language.

#### Algorithm

1. Initialize a counter `evenDigitCount` to `0`.

2. For every `num` in `nums`, convert it to string and find its length. If the length is even, increment `evenDigitCount` by `1`.

3. Return `evenDigitCount`.


#### Implementation

<iframe src="https://leetcode.com/playground/TnLqGhtt/shared" frameBorder="0" width="100%" height="344" name="TnLqGhtt"></iframe>


#### Complexity Analysis

Let $N$ be the length of `nums`, which represents the number of integers for which we have to check.   
Let $M$ be the maximum integer in `nums`.

* Time complexity: $O(N \cdot \log M)$

    We have a `for` loop which converts each `num` to a string and finds its length. Now, the time complexity of converting an integer to a string will depend on the language. However, it will be $O(\log (\text{num}))$ at most. Hence, the time complexity of converting an integer to a string will be $O(\log M)$. Checking its length will take $O(1)$ time. We do this for $N$ integers. 
    
    Hence, the time complexity of `findNumbers` is $O(N \cdot \log M)$.


* Space complexity: $O(\log M)$
    
    We are temporarily storing the string representation of `num`. The maximum length of the string will be of the maximum integer in `nums`. Hence, the space complexity is $O(\log M)$.
    
---


### Approach 3: Using Logarithm

#### Intuition

The etymological analysis of the word "digits" reveals that it is derived from the Latin word "digitus" which means "finger", and the reason is that earlier we used our fingers to count, and the number of fingers is fixed, i.e. $10$.

Thus, the word "digits" has strong ties with the number $10$.  

> **Trivia:** Bits (0 and 1) are the portmanteau of BInary digiTS. 

Let's see a few power of our protagonist $10$.
- $10^0$ is 1. It contains $0$ number of zeroes, and the total number of digits is one more than, i.e. 1.
- $10^1$ is 10. It contains $1$ number of zeroes, and the total number of digits is one more than, i.e. 2.
- $10^2$ is 100. It contains $2$ number of zeroes, and the total number of digits is one more than, i.e. 3.  
.  
.  
.  
- $10^5$ is 100000. It contains $5$ number of zeroes, and the total number of digits is one more than, i.e. 6.


Let's narrow down our focus between $10^1$ and $10^2$. 

- $10^1$ is the smallest integer with two digits.
- $10^2$ is the smallest integer with three digits.

In general, we can say that

> $10^k$ is the smallest positive integer with $k+1$ digits where $k \geq 0$.

Now, what about $10^{1.5}$, an exponent between $10^1$ and $10^2$? It is approximately $31.62$, rounded down to $31$, an integer between $10^1$ and $10^2$ having two digits. 

In general, we can say that

> All $x$ such that $10^k \leq x < 10^{k+1}$ have $k+1$ digits where $k \geq 0$.

Now, our interest is in the number of digits that are present as the exponent in this inequality. Let's bring it down by taking the logarithm of both sides, and the base of our logarithm will be $10$.

The inequality was  
$10^k \leq x < 10^{k+1}$   

Taking the logarithm of both sides, we get   
$k \leq \log_{10} x < k+1$  

The number of digits of all $x$ satisfying this inequality is $k+1$.

Now, we want a mathematical operator so that $\log_{10} x$ is rounded to the integer $k+1$. Two functions that round a real number to an integer are $\lfloor x \rfloor$ and $\lceil x \rceil$. The former is called the **floor** function and the latter is called the **ceiling** function.

- $\lfloor x \rfloor$ is the largest integer less than or equal to $x$. In simpler terms, it rounds down $x$ to the nearest integer. If $x$ is an integer, then $\lfloor x \rfloor = x$.    

- $\lceil x \rceil$ is the smallest integer greater than or equal to $x$. In simpler terms, it rounds up $x$ to the nearest integer. If $x$ is an integer, then $\lceil x \rceil = x$.

Now,

- if we take $\lfloor \log_{10} x \rfloor$, then it will round down $\log_{10} x$ to the nearest integer. Hence, it will be $k$. We then add $1$ to it to get $k+1$.

- if we take $\lceil \log_{10} x \rceil$, then it will round up all $\log_{10} x$ to $k+1$, with exception when $\log_{10} x$ is $k$. In that case, even after taking the `ceil`, it will remain $k$. 

    Note that the slack inequality and strict inequality in $k \leq \log_{10} x < k+1$. The former is inclusive and the latter is exclusive. Hence, if $\log_{10} x$ is $k$, then it ceil will be $k$ only.

    For all other values of $\log_{10} x$, it will be $k+1$. 

    Therefore, when using `ceil`, there are two potential outcomes: either $k$ or $k+1$.

Thus, we can conclude that taking the `floor` and adding 1 is a better idea than taking `ceil` and handling two cases.

Hence, here is **theorem**

> Given a positive integer $x$, the number of digits in $x$ is $\lfloor \log_{10} x \rfloor + 1$.

Many programming languages have a built-in function to compute logarithms and floors. 

Accordingly, by employing this formula, we can calculate the count of digits in an integer. If the count of digits is even, we can then increment the counter.

#### Algorithm

1. Initialize a counter `evenDigitCount` to `0`.

2. For every `num` in `nums`, compute $\lfloor \log_{10} \text{num} \rfloor + 1$. If the value is even, increment `evenDigitCount` by `1`.

3. Return `evenDigitCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/Si9qqjED/shared" frameBorder="0" width="100%" height="344" name="Si9qqjED"></iframe>

#### Complexity Analysis

Let $N$ be the length of `nums`, which represents the number of integers for which we have to check.   
Let $M$ be the maximum integer in `nums`.

* Time complexity: $O(N \cdot \log M)$

    We have a `for` loop which computes the number of digits in each `num` in `nums`. 
    
    Now, the time complexity of computing the number of digits in an integer depends on the time complexity of computing the logarithm and floor. 

    - The time complexity of computing logarithm depends on the language and algorithm used. In the worst case, it will be $O(\log (\text{num}))$. Hence, the time complexity of computing logarithm will be $O(\log M)$.

    - The time complexity of the computing floor depends on the language and algorithm used. However, it will be $O(1)$ at most. Hence, the time complexity of the computing floor will be $O(1)$.

    Thus, for each integer, we do $O(\log M)$ work. We do this for $N$ integers. 
    
    Hence, the time complexity of `findNumbers` is $O(N \cdot \log M)$.
    
* Space complexity: $O(1)$
    
    We are using constant extra space. Hence, the space complexity is $O(1)$.
     
---

### Approach 4: Constraint Analysis

#### Intuition

Analyzing constraints helped us to not worry about negative integers. Can we use constraint to our advantage in some other way?

Let's take a look at the constraint again.

> $1 \leq nums[i] \leq 10^5$

OR

> $1 \leq nums[i] \leq 100000$

Let's take a look at the integers in the range $[1, 100000]$.
- $1 \rightsquigarrow 9$ have 1, hence an odd number of digits.
- $10 \rightsquigarrow 99$ have 2, hence an even number of digits.
- $100 \rightsquigarrow 999$ have 3, hence an odd number of digits.
- $1000 \rightsquigarrow 9999$ have 4, hence an even number of digits.
- $10000 \rightsquigarrow 99999$ have 5, hence an odd number of digits.
- $100000$ has 6, hence an even number of digits.

Thus, if an integer $nums[i]$ has an even number of digits, then it will be in the range of $[10, 99]$ or $[1000, 9999]$, or will be $100000$. Hence, we can use this fact to check if an integer has an even number of digits. Due to the constraint promise, we won't be missing any integer.


#### Algorithm

1. Initialize a counter `evenDigitCount` to `0`.

2. For every `num` in `nums`, check if it is in the range of $[10, 99]$ or $[1000, 9999]$, or is $100000$. If it is, increment `evenDigitCount` by `1`.

3. Return `evenDigitCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/knC4WF9V/shared" frameBorder="0" width="100%" height="310" name="knC4WF9V"></iframe>

#### Complexity Analysis

Let $N$ be the length of `nums`, which represents the number of integers for which we have to check.

* Time complexity: $O(N)$

    We have a `for` loop which checks if each `num` is in the range of $[10, 99]$ or $[1000, 9999]$, or is $100000$. We do this for $N$ integers. Now, checking and incrementing (if required) will take $O(1)$ time.

    Hence, for $N$ integers, the time complexity of `findNumbers` is $O(N)$.

* Space complexity: $O(1)$
    
    We are using constant extra space. Hence, the space complexity is $O(1)$.
     
---