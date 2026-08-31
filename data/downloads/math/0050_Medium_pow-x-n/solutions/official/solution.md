# Official Solution

**Link:** [https://leetcode.com/problems/powx-n/solution/](https://leetcode.com/problems/powx-n/solution/)

---

[TOC]

## Solution

---

### Approach 1: Binary Exponentiation (Recursive)

#### Intuition  

We know $x^n$ means we multiply $x$ with itself $n$-times. The most naïve way to solve this problem is to simply multiply $x$ $n$-times. This method of multiplying will lead to a linear time complexity and is not efficient, but we will discuss a bit about it as it will be a stepping stone to our optimized approach.  

**Brute-force approach:**

The current problem can be broken into smaller similar subproblems, $x^n = x \cdot x^{n - 1}$. Thus, this will be our recurrence relation.  

We can write a recursive function here that calculates the result of the smaller similar sub-problem and using that calculates the result for the current problem, `pow(x, n) = x * pow(x, n - 1)`. And we know if $n = 0$ then $x^n$ will always be $1$, this will be our base case to stop the recursive calls.

Also, we need to handle the case if $n$ is negative. In that case, the answer will be the reciprocal of the result if $n$ were positive.
$x^n = \frac{1}{x^{-n}}$, where $n < 0$.

```
func pow(x, n):
    if n == 0: return 1
    if n < 0: return 1 / pow(x, -n)
    return x * pow(x, n - 1)
```

Now we have an idea of all cases.

<br />

**Optimized approach:**

> Binary exponentiation, also known as exponentiation by squaring, is a technique for efficiently computing the power of a number. By repeatedly squaring $x$ and halving $n$, we can quickly compute $x^n$ using a logarithmic number of multiplications.

The basic idea here is to use the fact that $x^{n}$ can be expressed as:  
- $(x^{2})^{n/2}$ if $n$ is even
- $x*(x^{2})^{(n-1)/2}$ if $n$ is odd  (we separate out one $x$, then $n - 1$ will become even)

<br />

This method might not seem intuitive, so let's try to understand it with the help of some examples.    
Say, we need to find $2^{100}$.

Using the previously discussed recursive approach we will have to multiply $2$ in $100$ steps.  

> $2^{100} = 2 * 2^{99}$    
> 
> $2 * 2^{99} = 2 * 2 * 2^{98}$    
>     
> $2 * 2 * 2^{98} = 2 * 2 * 2 * 2^{97}$    
> .    
> .  
> 
> $(100 \space \text{steps})$  
> .  
> .  
> $2^{100} = 2 * 2 * ... * (100 \space \text{multiplications}) * ... * 2^{0}$  
>    
> $ 2^{100} = 1267650600228229401496703205376$


But using binary exponentiation, it will be reduced to about only $10$ steps.  


> $2^{100} = (2 * 2)^{50}$    
>    
> $4 ^ {50} = (4 * 4)^{25}$    
>    
> $16 ^ {25} = 16 * (16)^{24}$    
>    
> $16 ^ {25} = 16 * (16 * 16)^{12}$    
>    
> $16 * 256^{12} = 16 * (256 * 256)^{6}$    
>    
> $16 * 65536^{6} = 16 * (65536 * 65536)^{3}$    
>    
> $16 * 4294967296^{3} = 16 * 4294967296 * (4294967296)^{2}$    
>    
> $16 * 4294967296^{3} = 16 * 4294967296 * (4294967296 * 4294967296)^{1}$    
>     
> $ 2^{100} = 1267650600228229401496703205376$  

Instead of reducing the exponent $n$ by $1$ at each recursive call like in the brute-force method, we will reduce it by half here.  
Thus, instead of linear steps, it will take us logarithmic steps to perform all the multiplications.

![img1](../Figures/50/Slide1.PNG)

Thus, now our recursive function will be:

```
func binaryExp(x, n):
    if n == 0: return 1.0
    if n < 0: return 1.0 / binaryExp(x, -n)
   
    // Binary exponentiation steps.
    if n is odd: return x * binaryExp(x * x, (n - 1) / 2)
    otherwise: return binaryExp(x * x, n / 2)
```


#### Algorithm

1. Create a method `binaryExp`, which takes `x` and `n` as parameters.
    - If `n` is `0`, we return `1`.
    - If `n` is negative, we calculate the result if `n` is positive and return the reciprocal of it, thus we return `1 / binaryExp(x, -n)` (also, `-n` can exceed the integer range thus to handle it `n` should be a 64-bit integer variable).
    - Otherwise, using binary exponentiation we reduce the exponent `n` to half and calculate and return the result after solving the new sub-problem recursively as discussed previously.
2. Call `binaryExp(x, n)` method and return the result.


#### Implementation

<iframe src="https://leetcode.com/playground/P7ErAUWJ/shared" frameBorder="0" width="100%" height="500" name="P7ErAUWJ"></iframe>


#### Complexity Analysis

* Time complexity: $$O(\log n)$$  
    - At each recursive call we reduce `n` by half, so we will make only $\log n$ number of calls for the `binaryExp` function, and the multiplication of two numbers is considered as a constant time operation.
    - Thus, it will take overall $O(\log n)$ time.

> **Note:** The standard multiplication algorithm for multiplying two numbers of $d$-digits each might take $O(d^2)$ time, but most modern programming languages achieve a much lower time complexity i.e. $O(d (\log d) (\log \log d))$ by utilizing a divide-and-conquer strategy and leveraging fast fourier transforms. You can read more about the computational complexities of standard mathematical operations [here](https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations#:~:text=Arithmetic%20functions%5B,operations%20on%20integers.).


* Space complexity: $$O(\log n)$$
    - The recursive stack can use at most $O(\log n)$ space at any time.

---

<br />



### Approach 2: Binary Exponentiation (Iterative)

#### Intuition  

We can also convert the same recursive approach to an iterative one using some loops.

We will use a while loop which will continue until $n$ reaches $0$.  
If $n$ is odd then we will multiply $x$ once with the `result`, so that we can reduce $n$ by $1$ to make it even.  
Now, $n$ will be even, thus, we now square the $x$ and reduce $n$ by half, i.e. $x^n \rarr (x^2)^{n/2}$.

Also, remember if $n < 0$, then we need to find $1 / x^{(-n)} $, thus we, multiply $1 / x$ with each other not $x$.



#### Algorithm

1. Create a method `binaryExp`, which takes `x` and `n` as parameters.
    - If `n` is `0`, we return `1`.
    - If `n` is negative, we change `n` as `-n`, and `x` as `1 / x`. (also, `-n` can exceed the integer range thus to handle it `n` should be a 64-bit integer variable).
    - Initialize a variable `result` as `1` to store the result of all the multiplications we will perform.
    - In a while loop until `n` becomes `0`:
        - If `n` is odd, we multiply one `x` with `result` and reduce `n` by `1`.
        - Then, we square `x` and reduce `n` by half.
    - At the end, we return `result`.
2. Call `binaryExp(x, n)` method and return the result.



#### Implementation

<iframe src="https://leetcode.com/playground/KqHxgwXE/shared" frameBorder="0" width="100%" height="500" name="KqHxgwXE"></iframe>

#### Complexity Analysis

* Time complexity: $$O(\log n)$$  
    - At each iteration, we reduce `n` by half, thus it means we will make only $\log n$ number of iterations using a while loop.
    - Thus, it will take overall $O(\log n)$ time.

* Space complexity: $$O(1)$$
    - We don't use any additional space.