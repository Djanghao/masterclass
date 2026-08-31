# Time O(1) - Combinatorics solution with full proof

**Author:** phungthienphuoc
**Votes:** 17
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4277737/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4277737/)

---

# Intuition
>**For convenience, I will change the name of variable `limit` to `m`.**

Let $u_n$ be the number of ways to distribute $n$ candies among $3$ children such that no child gets more than $m$ candies.

Notice that if three children receive $a$,$b$, and $c$ candies respectively, $u_n$ is the number of triple $(a,b,c)$ such that $0\\le a,b,c\\le m$ and $a+b+c=n$.

Therefore, we can rewrite: $\\displaystyle u_n=\\sum_{\\substack{a+b+c=n\\\\0\\le a,b,c\\le m}}{1}$.

Now, I will use a technique called **"Generating function"**. Specifically, I will consider $u_n$ as a coefficient of a series, and determine $u_n$ by calculating the series.

Let $\\displaystyle F(x)=\\sum_{n=0}^{\\infty}{u_nx^n}$. From what we obtained above, we can imply that:

$\\displaystyle F(x)=\\sum_{n=0}^{\\infty}{\\left(\\sum_{\\substack{a+b+c=n\\\\0\\le a,b,c\\le m}}{x^n}\\right)}=\\sum_{n=0}^{\\infty}{\\left(\\sum_{\\substack{a+b+c=n\\\\0\\le a,b,c\\le m}}{x^{a+b+c}}\\right)}$

$\\displaystyle =\\left(\\sum_{a=0}^{m}{x^a}\\right)\\left(\\sum_{b=0}^{m}{x^b}\\right)\\left(\\sum_{c=0}^{m}{x^c}\\right)=\\left(\\sum_{k=0}^{m}{x^k}\\right)^3=\\left(\\frac{1-x^{m+1}}{1-x}\\right)^3$

Next, we will expand $(1-x^{m+1})^3$ and $\\displaystyle\\frac{1}{(1-x)^3}$, and then we can obtain $u_n$.

The first one is easy to expand: $(1-x^{m+1})^3=1-3x^{m+1}+3x^{2m+2}-x^{3m+3}$

The harder one is $\\displaystyle\\frac{1}{(1-x)^3}$. There are some ways to expand it:
- Use Maclaurin's series to expand it directly.
- Use Maclaurin's series $\\displaystyle \\frac{1}{1-x}=\\sum_{k=0}^{\\infty}{x^k}$, and then cube it.
- Use Newton's generalized binomial theorem.

Two approaches above can be done by algebraic transformation. However, I want to introduce another way, which I believe to be *more elegant*, to expand this expression.

Let $\\displaystyle g(x)=\\frac{1}{1-x}\\Rightarrow g'(x)=\\frac{1}{(1-x)^2}\\Rightarrow g''(x)=\\frac{2}{(1-x)^3}$

On the other hand, $\\displaystyle g(x)=\\sum_{k=0}^{\\infty}{x^k}=1+\\sum_{k=1}^{\\infty}{x^k}$ (Maclaurin's series)

$\\displaystyle\\Rightarrow g'(x)=\\sum_{k=1}^{\\infty}{kx^{k-1}}=\\sum_{k=0}^{\\infty}{(k+1)x^{k}}=1+\\sum_{k=1}^{\\infty}{(k+1)x^{k}}$

$\\displaystyle\\Rightarrow g''(x)=\\sum_{k=1}^{\\infty}{k(k+1)x^{k-1}}=\\sum_{k=0}^{\\infty}{(k+1)(k+2)x^{k}}=\\sum_{k=0}^{\\infty}{2\\binom{k+2}{2}x^{k}}$

Therefore, $\\displaystyle\\frac{2}{(1-x)^3}=\\sum_{k=0}^{\\infty}{2\\binom{k+2}{2}x^{k}}\\Rightarrow\\frac{1}{(1-x)^3}=\\sum_{k=0}^{\\infty}{\\binom{k+2}{2}x^{k}}$

$\\displaystyle\\Rightarrow F(x)=\\left(1-3x^{m+1}+3x^{2m+2}-x^{3m+3}\\right)\\sum_{k=0}^{\\infty}{\\binom{k+2}{2}x^{k}}$

We can imply the value of $u_n$ from the expression of $F(x)$ that:
$\\displaystyle\\begin{cases}
\\displaystyle\\binom{n+2}{2}, &\	ext{if }0\\le n< m+1 \\\\
\\displaystyle\\binom{n+2}{2}-3\\binom{n-m+1}{2}, &\	ext{if }m+1\\le n<2(m+1)\\\\
\\displaystyle\\binom{n+2}{2}-3\\binom{n-m+1}{2}+3\\binom{n-2m}{2}, &\	ext{if }2(m+1)\\le n<3(m+1)\\\\
\\displaystyle\\binom{n+2}{2}-3\\binom{n-m+1}{2}+3\\binom{n-2m}{2}-\\binom{n-3m-1}{2}, &\	ext{if }3(m+1)\\le n\\end{cases}$

***And that is the final result of this problem!***

---

# Approach
We just need to check the condition that `n` satisfies, and then apply the formula. There are several ways to implement this solution.

---

# Complexity
- ### Time complexity: $O(1)$

- ### Space complexity: $O(1)$
---
# Code
```Python3 []
class Solution:
    def distributeCandies(self, n: int, m: int) -> int:
        res=(n+2)*(n+1)//2
        for i in range(1,4):
            if n-i*(m+1)<0:
                break
            res+=(-1)**i*comb(3,i)*(n-i*(m+1)+2)*(n-i*(m+1)+1)//2
        return res
```
---
## Postscript
If there is anything wrong or not accurate in my solution, don't hesitate to comment. Thank you!