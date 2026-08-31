# Official Solution

**Link:** [https://leetcode.com/problems/fibonacci-number/solution/](https://leetcode.com/problems/fibonacci-number/solution/)

---

[TOC]

## Solution

---

### Approach 1: Recursion

**Intuition**

Use recursion to compute the Fibonacci number of a given integer.

![fib(5) Recursion diagram](../Figures/509/fibonacciRecursion5.png){:width="539px"}


*Figure 1. An example tree representing what `fib(5)` would look like*


**Algorithm**

- Check if the provided input value, $$N$$, is less than or equal to 1. If true, return $$N$$.
- Otherwise, the function `fib(int N)` calls itself, with the result of the 2 previous numbers being added to each other, passed in as the argument.
This is derived directly from the `recurrence relation`:
$$F_{n} = F_{n-1} + F_{n-2}$$

- Do this until all numbers have been computed, then return the resulting answer.

**Implementation**

<iframe src="https://leetcode.com/playground/WZveQzdi/shared" frameBorder="0" width="100%" height="191" name="WZveQzdi"></iframe>

**Complexity Analysis**

* Time complexity: $$O(2^N)$$. This is the slowest way to solve the `Fibonacci Sequence` because it takes exponential time. The amount of operations needed, for each level of recursion, grows exponentially as the depth approaches `N`.

* Space complexity: $$O(N)$$. We need space proportional to `N` to account for the max size of the stack, in memory. This stack keeps track of the function calls to `fib(N)`. This has the potential to be bad in cases that there isn't enough physical memory to handle the increasingly growing stack, leading to a `StackOverflowError`. The [Java docs](https://docs.oracle.com/javase/7/docs/api/java/lang/StackOverflowError.html) have a good explanation of this, describing it as an error that occurs because an application recurses too deeply.

<br />

---

### Approach 2: Bottom-Up Approach using Tabulation

**Intuition**

Improve upon the recursive approach by using iteration, still solving for all of the sub-problems and returning the answer for $$N$$, using already computed Fibonacci values. While using a bottom-up approach, we can iteratively compute and store the values, only returning once we reach the result.

**Algorithm**

- If `N` is less than or equal to 1, return `N`
- Otherwise, iterate through `N`, storing each computed answer in an array along the way.
- Use this array as a reference to the 2 previous numbers to calculate the current Fibonacci number.
- Once we've reached the last number, return it's Fibonacci number.

**Implementation**
    
<iframe src="https://leetcode.com/playground/752hRLRe/shared" frameBorder="0" width="100%" height="310" name="752hRLRe"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N)$$. Each number, starting at 2 up to and including `N`, is visited, computed and then stored for $$O(1)$$ access later on.

* Space complexity: $$O(N)$$. The size of the data structure is proportional to `N`.

<br />

---

### Approach 3: Top-Down Approach using Memoization

**Intuition**

Solve for all of the sub-problems, use memoization to store the pre-computed answers, then return the answer for $$N$$. We will leverage recursion, but in a smarter way by not repeating the work to calculate existing values.

**Algorithm**

- At first, create a map with `0` -> `0` and `1` -> `1` pairs.
- Call `fib(N)` function.
    - At every recursive call of `fib(N)`, if `N` exists in the map, return the cached value for `N`.
    - Otherwise, set the key `N`, in our mapping, to the value of `fib(N - 1) + fib(N - 2)` and return the computed value.

> For Python, instead of manually maintaining a dictionary (`cache`) we can use the built-in decorator @cache or @lru_cache(None). You can read more about these decorators [here](https://docs.python.org/3/library/functools). We decided not to use the decorators in this approach so that the solution gives a clear idea about what actually happens when memoization is added to a function.

**Implementation**
                   
<iframe src="https://leetcode.com/playground/fnNGtVWw/shared" frameBorder="0" width="100%" height="259" name="fnNGtVWw"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N)$$. Each number, starting at 2 up to and including `N`, is visited, computed and then stored for $$O(1)$$ access later on.

* Space complexity: $$O(N)$$. The size of the stack in memory is proportional to `N`. Also, the memoization hash table is used, which occupies $$O(N)$$ space.

<br />

---

### Approach 4: Iterative Bottom-Up Approach

**Intuition**

Let's get rid of the need to use all of that space and instead use the minimum amount of space required.  Notice that during each recursive call in the top-down approach and each iteration in the bottom-up approach, we only needed to look at the results of `fib(N-1)` and `fib(N-2)` to determine the result of `fib(N)`.  Therefore, we can achieve $$O(1)$$ space complexity by only storing the value of the two previous numbers and updating them as we iterate to `N`.

**Algorithm**

- Check if `N <= 1`, if it is, then we should return `N`.
- We need 3 variables to store each state `fib(N)`, `fib(N-1)`, and `fib(N-2)`.
- Preset the initial values:
    - Initialize `current` with 0.
    - Initialize `prev1` with 1, since this will represent `fib(N-1)` when computing the current value.
    - Initialize `prev2` with 0, since this will represent `fib(N-2)` when computing the current value.
- Iterate, incrementally by 1, all the way up to and including `N`. Starting at 2, since `0` and `1` are pre-computed.
- Set the `current` value to `prev1 + prev2` because that is the value we are currently computing.
- Set the `prev2` value to `prev1`.
- Set the `prev1` value to `current`.
- When we reach `N+1`, we will exit the loop and return the previously set `current` value.

**Implementation**
                   
<iframe src="https://leetcode.com/playground/7Cx6e4Ek/shared" frameBorder="0" width="100%" height="361" name="7Cx6e4Ek"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N)$$. Each value from `2` to `N` is computed once. Thus, the time it takes to find the answer is directly proportional to `N` where `N` is the Fibonacci Number we are looking to compute.

* Space complexity: $$O(1)$$. This requires 1 unit of space for the integer `N` and 3 units of space to store the computed values (`current`, `prev1`, and `prev2`) for every loop iteration. The amount of space used is independent of $$N$$, so this approach uses a constant amount of space.

<br />

---

### Approach 5: Matrix Exponentiation

**Intuition**

Use Matrix Exponentiation to get the Fibonacci number from the element at (0, 0) in the resultant matrix.

In order to do this we can rely on the matrix equation for the Fibonacci sequence, to find the `Nth` Fibonacci number:
$$
\begin{pmatrix}
 1\,\,1 \\
 1\,\,0
\end{pmatrix}^{n}=\begin{pmatrix}
 \: F_{(n+1)}\;\;\:F_{(n)}\\
 \: F_{(n)}\;\;\:F_{(n-1)}
\end{pmatrix}
$$

**Algorithm**

- Check if `N` is less than or equal to 1. If it is, return `N`.
- Use a recursive function, `matrixPower`, to calculate the power of a given matrix `A`. The power will be `N-1`, where `N` is the `Nth` Fibonacci number.
- The `matrixPower` function will be performed for `N/2` of the Fibonacci numbers.
- Within `matrixPower`, call the `multiply` function to multiply 2 matrices.
- Once we finish doing the calculations, return `A[0][0]` to get the `Nth` Fibonacci number.

**Implementation**

<iframe src="https://leetcode.com/playground/8BkHviGN/shared" frameBorder="0" width="100%" height="500" name="8BkHviGN"></iframe>

**Complexity Analysis**

* Time complexity: $$O(\log N)$$. By halving the `N` value in every `matrixPower`'s call to itself, we are halving the work needed to be done.

* Space complexity: $$O(\log N)$$. The size of the stack in memory is proportional to the function calls to `matrixPower` plus the memory used to account for the matrices which use constant space.

<br />

---

### Approach 6: Math

**Intuition**
    
Let's use the `golden ratio`, a.k.a `Binet's forumula`: $$ \varphi = \frac{1 + \sqrt{5}}{2} \approx 1.6180339887.... $$

Here's a [link](http://demonstrations.wolfram.com/GeneralizedFibonacciSequenceAndTheGoldenRatio/) to find out more about how the Fibonacci sequence and the golden ratio work.

We can derive the most efficient solution to this problem using only constant space!

**Algorithm**

- Use the `golden ratio` formula to calculate the `Nth` Fibonacci number.

**Implementation**

<iframe src="https://leetcode.com/playground/8mCRrVE6/shared" frameBorder="0" width="100%" height="157" name="8mCRrVE6"></iframe>

**Complexity Analysis**

* Time complexity: $$O(\log N)$$. We do not use loops or recursion, so the time required equals the time spent performing the calculation using `Binet's formula`. However, raising the `golden_ratio` to the power of $$N$$ requires $$O(\log N)$$ time.

* Space complexity: $$O(1)$$. The space used is the space needed to create the variable to store the `golden ratio`.