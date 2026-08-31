# Official Solution

**Link:** [https://leetcode.com/problems/valid-perfect-square/solution/](https://leetcode.com/problems/valid-perfect-square/solution/)

---

[TOC]

## Solution

--- 

### Overview

Square root-related problems usually could be solved in logarithmic time. There are three standard logarithmic time approaches, listed here from the worst to the best:

- Recursion. The slowest one. 

- Binary Search. The simplest one.

- Newton's Method. The fastest one, and therefore widely used in dynamical simulations. 

The last two algorithms are interesting ones, let's discuss them in detail. 

These solutions have the same starting point. If one knows an [integer square](https://en.wikipedia.org/wiki/Integer_square_root) $$x$$ of num, the answer is straightforward: num is a perfect square if $$x * x == \textrm{num}$$. Hence the problem is to compute this integer
square.

<br /> 
<br />


---
### Approach 1: Binary Search 

For $$\textrm{num} > 2$$ the square root $$a$$ is always less than $$\textrm{num} / 2$$ and greater than 1: $$1 < x < \textrm{num} / 2$$. Since $$x$$ is an integer, the problem goes down to the search in the sorted set of integer numbers. Binary search is a standard way to proceed in such a situation. 

**Algorithm**

- If `num < 2`, return `True`.

- Set the left boundary to `2`, and the right boundary to `num / 2`.

- While `left <= right`:

    - Take `x = (left + right) / 2` as a guess. Compute `guess_squared = x * x` and compare it with `num`:
    
        - If `guess_squared == num`, then the perfect square is right here, return `True`.
        
        - If `guess_squared > num`, move the right boundary `right = x - 1`.
        
        - Otherwise, move the left boundary `left = x + 1`.
        
- If we're here, the number is not a perfect square. Return `False`.

**Implementation**

![fig](../Figures/367/binary.png) 

<iframe src="https://leetcode.com/playground/gZkb4uCF/shared" frameBorder="0" width="100%" height="429" name="gZkb4uCF"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log N)$$. 

    Let's compute time complexity with the help of [master theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)) $$T(N) = aT\left(\frac{N}{b}\right) + \Theta(N^d)$$. The equation represents dividing the problem up into $$a$$ subproblems of size $$\frac{N}{b}$$ in $$\Theta(N^d)$$ time. Here at step there is only one subproblem `a = 1`, its size is a half of the initial problem `b = 2`, and all this happens in a constant time `d = 0`. That means that $$\log_b{a} = d$$ and hence we're dealing with [case 2](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)#Case_2_example) that results in $$\mathcal{O}(n^{\log_b{a}} \log^{d + 1} N)$$ = $$\mathcal{O}(\log N)$$ time complexity.

* Space complexity : $$\mathcal{O}(1)$$.
<br /> 
<br />


---
### Approach 2: Newton's Method

**Newton's Algorithm: How to Figure out the Formula**

Let's do a very rough derivation of Newton's sequence which could be done in two minutes during the interview. Please note that it's more a way to memorize than a strict mathematical proof. 

The problem is to find the root of 

$$f(x) = x^2 - \textrm{num} = 0$$

The idea of Newton's algorithm is to start from a seed (= initial guess) and then compute a root as a sequence of improved guesses.  

![fig](../Figures/367/parabola4.png) 

For example, there is a guess $$x_k$$. To compute next guess $$x_{k + 1}$$, let's approximate $$f(x_k)$$ by its tangent line, that would result in

$$x_{k + 1} = x_k - \frac{f(x_k)}{f'(x_k)}$$

Now use $$f(x_k) = x_k^2 - \textrm{num}$$ and $$f'(x_k) = 2x_k$$, and voila the result 

$$x_{k + 1} = \frac{1}{2}\left(x_k + \frac{\textrm{num}}{x_k}\right)$$

**Choose a seed**

How to choose a seed? Since the function $$f(x) = x^2 - \textrm{num}$$ is monotonous, the smaller seed the better, so let's take $$\textrm{num}/2$$.

**Algorithm**

- Take num / 2 as a seed.

- While x * x > num, compute the next guess using Newton's method: $$x = \frac{1}{2}\left(x + \frac{\textrm{num}}{x}\right)$$.

- Return x * x == num

**Implementation**

![fig](../Figures/367/newton2.png) 

<iframe src="https://leetcode.com/playground/ULSavLZb/shared" frameBorder="0" width="100%" height="242" name="ULSavLZb"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log N)$$ because [guess sequence converges quadratically](https://en.wikipedia.org/wiki/Newton%27s_method#Proof_of_quadratic_convergence_for_Newton's_iterative_method). 

* Space complexity : $$\mathcal{O}(1)$$.