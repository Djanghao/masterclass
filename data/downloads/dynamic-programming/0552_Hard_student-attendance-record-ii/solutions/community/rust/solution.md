# overkill using number theory, w/ explanation | O(log n) time, O(1) space, no matrices | C++/Rust 0ms

**Author:** e52fa787
**Votes:** 7
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/4656289/](https://leetcode.com/problems/student-attendance-record-ii/solutions/4656289/)

---

## 1. Problem
---
<!-- Describe your approach to solving the problem. -->
Let $a_n$ be the number of attendance records of length $n$ that qualify for an award. Each attendance record can be represented as a sequence of elements from `{A,L,P}`, and we're looking for sequences that satisfy the conditions
1. The sequence contains at most two consecutive `L`s.
2. The sequence contains at most one `A`.

The first few terms (starting from $n=1$) are `3, 8, 19, 43, 94, 200, 418, 861, 1753, 3536, 7077, ...`. For convenience, I'll define $a_0=1$, since there is exactly one record of length $0$ (the empty record), and it clearly contains neither `A` nor `LLL`.

The goal now is to compute $a_n$ mod $m$, where `m=1000000007`.

## 2. Solution
---
The solution I got is this: First, I defined a new multiplication function `prod` that takes in two pairs of positive integers `(a, b)` and `(c, d)`, which are all smaller than `m=1000000007`. This function then outputs a new pair of of positive integers `(e, f)`, defined by
```
(e, f) = (a*c + 757590373*b*d, a*d + b*c + 512913427*b*d) (mod m)
```
where everything is reduced modulo `m`. Then, $a_n$ is given by the formula
```
a_n = (587709142 + n*899318200, 0) * (487086581,0)**n
+(41138816 + n*514591996, 291147259 + n*373532568) * (512913427, m-1)**n 
+(371152050 + n*722453456, 708852748 + n*626467439) * (0, 1)**n    (mod m)
```
where multiplication and powers of pairs are calculated according to `prod`, and everything is reduced modulo `m` at every step. And that's it! Next to no memory is needed for this calculation, and since the powers can be done by [repeated squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring), the whole thing takes $O(\\log n)$ time.

How did I get this weird product and random-looking numbers? There's quite a lot of mathematics involved, including a bit of algebraic number theory, but the gist of my approach was that I derived a recursion relation for $a_n$, solved it by finding a formula similar to the [one for Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_sequence#Closed-form_expression), and found integers and a custom-built product function such that the formula gives the same remainders as $a_n$ mod $m$.

Obviously, this isn't possible to come up with in a 40-minute interview, but this uses some interesting math while remaining really fast. The only approach matching this time complexity is the matrix-based one, but that requires more multiplications per iteration than this.

Open the dropdown below if you want to see my full derivation. It involves some counting, recurrences, generating functions, partial fractions, and finally manipulations of the ring of integers modulo $m$ and their extensions. 

<details>
<summary>Full Mathematical Derivation (warning: quite long)</summary>

---
From the given conditions, I derived the following recursion for $a_n$:
$$
a_n = b_n + \\sum_{k=0}^{n-1}b_kb_{n-1-k}
$$
where $b_n$=`1, 2, 4, 7, 13, 24, 44, 81, 149, ...` is another sequence defined by $b_n=2b_{n-1}-b_{n-4}$ for $n\\ge4$. These numbers count the number of qualifying length-$n$ attendance records with zero `A`s, and are actually a version of the [Tribonacci Numbers](https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers).

<details>
<summary>Recursion derivation details</summary>



I will focus on the first condition, and find sequences containing only `{L,P}` that have at most two consecutive `L`s. I'll call these sequences NTL sequences (for no-three-`L`s), and suppose there are $b_n$ of them of length $n$. There are at most $2^n$ sequences of length $n$, so $b_n\\le2^n$.
When $n=0$, there is only one sequence, the empty sequence, which is also valid, so $b_0=1$.
When $n=1,2$, all sequences are valid, so $b_1=2^1=1,b_2=2^2=4$.
When $n=3$, the only invalid sequence is `LLL`, so the rest must be NTL: $b_3=2^3-1=7$.

Let's focus on the case $n\\ge3$. There are $b_n$ length-$n$ NTL sequences, and I can create length-$n$ sequences by adding either a `P` or `L` to these sequences, resulting in $2b_n$ different sequences in total.

Here's the difficult bit: Of these $2b_n$ sequences, some sequences are NTL, while others are not. How many NTL sequences are there? Well, removing an element from the end of an NTL sequence always leaves an NTL sequence, so when I take all possible NTL sequences of length $n$ and consider all possible (not necessarily NTL) sequences one longer than them, then all NTL sequences of length $n+1$ are guaranteed to be somewhere within that set.

Here's an example: From the $b_3=7$ length-3 NTL sequences, I created $2b_3=14$ length-4 sequences. **Not all length-4 sequences in this list are NTL, but all length-4 NTL sequences are somewhere in the list.**
```
length-3 NTL sequence | length-4 sequence | is it NTL?
PPP                   | PPPP              | yes
.                     | PPPL              | yes
PPL                   | PPLP              | yes
.                     | PPLL              | yes
PLP                   | PLPP              | yes
.                     | PLPL              | yes
PLL                   | PLLP              | yes
.                     | PLLL              | no
LPP                   | LPPP              | yes
.                     | LPPL              | yes
LPL                   | LPLP              | yes
.                     | LPLL              | yes
LLP                   | LLPP              | yes
.                     | LLPL              | yes
```
Which sequences formed this way aren't NTL? Well, non-NTL sequences must have an `LLL` somewhere, and they can't have it at the start or in the middle, so they must end in an `LLL`. In fact, since the element in front of the `LLL` can't also be `L`, they must end with a `PLLL`.

What about the elements before the trailing `PLLL`? These elements form a sequence of length $n+1-4=n-3$, and aside from the need to be NTL, there is no further restriction on this sequence. How many of these length-$n-3$ NTL sequences are there? Well, by definition, it must be $b_{n-3}$.

To summarize, the $2b_n$ sequences formed contains $b_{n+1}$ NTL sequences, while the remaining sequences are just the $b_{n-3}$ length-$n-3$ NTL sequences with a `PLLL` stuck to the end. Since the same number of sequences are being counted in two different ways, the two counts must be equal: $2b_n=b_{n+1}+b_{n-3},n\\ge3$. Substituting $n\	o n-1$ and rearranging gives
$$\\boxed{b_n=\\begin{cases}1,2,4,7 & n=0,1,2,3\\\\2b_{n-1}-b_{n-4}&n\\ge4\\end{cases}}$$
We still need an expression for $a_n$, but this is not too difficult. Any award-worthy length-$n$ attendance record contains either no `A`s (is an NTL sequence) or one `A`. There are $b_n$ sequences in the first category, while any in the second category consists of two NTL sequences broken up by an `A`:
```
PLLPPPLPLPPLPL...PPPLLPLPLPLP A PPLLPLLPPPPLPLP...PPPLPLLPPPPLPLP
<-- LENGTH k NTL SEQUENCE -->(A)<-- LENGTH n-k-1 NTL SEQUENCE -->
```

If the `A` is in the $k$-th position (with the start at $0$ and end at $n-1$), then there are $b_k$ ways to choose the first NTL sequence and $b_{n-k-1}$ ways to choose the second, for a total of $b_kb_{n-k-1}$ ways. Summing over all possible positions of $k$ and adding the no-`A` case gives
$$\\boxed{a_n = b_n + b_0b_{n-1} + b_1b_{n-2}+...+b_{n-2}b_1 + b_{n-1}b_0 = b_n + \\sum_{k=0}^{n-1}b_kb_{n-1-k}}$$
FYI: A bit more work can convert this equation into one entirely in terms of $a_n$, which would be perfect to a dynamic programming and recursion-based approach:
$$a_{n}=2a_{n-1}+a_{n-2}-3a_{n-4}-2a_{n-5}-a_{n-6},\\ n\\ge6$$
However, I'm using generating functions to obtain a formula for $a_n$ directly, and that's actually easier using the $b_n$ form.


</details>

---
From this recursion, I derived the [generating function](https://en.wikipedia.org/wiki/Generating_function) of $a_n$:
$$A(x)=\\sum_{n=0}^\\infty a_nx^n=a_0+a_1x+a_2x^2+...=\\frac{1+x+x^2}{(1-x-x^2-x^3)^2}$$
<details>
<summary>Generating function derivation details</summary>


A generating function for a sequence $f_n$ is defined as the power series
$F(x)=f_0+f_1x+f_2x^2+...=\\sum_{n=0}^\\infty f_nx^n$. Let the generating functions of $a_n$ and $b_n$ be $A(x)$ and $B(x)$ respectively. The recursion $b_n=2b_{n-1}-b_{n-4}$ for $n\\ge4$ tells us that `b_4 = 2 b_3 - b_0, b_5 = 2 b_4 - b_1`, and so on. Multiplying the $n$-th term of this by $x^n$ and add them together gives
$$\\begin{aligned}b_4x^4+b_5x^5+... &= 2\\left(b_3 x^4 + b_4 x^5 +...\\right) -\\left(b_0x^4+b_1x^5+...\\right)\\\\&=2x\\left(b_3x^3+b_4x^4+...\\right)-x^4\\left(b_0+b_1x+...\\right)\\end{aligned}$$
The last series in brackets if just $B(x)$, while the two series before are $B(x)$ missing a few terms: $b_0+b_1x+b_2x^2+b_3x^3=1+2x+4x^2+7x^3$ for the first, and $b_0+b_1x+b_2x^2=1+2x+4x^2$ for the second. All three series can be replaced with $B(x)$, subtracting away the terms that should be missing:
$$B(x)-1-2x-4x^2-7x^3=2x\\left(B(x)-1-2x-4x^2\\right)-x^4B(x)$$
This is now a fairly simple equation that some algebra can solve:
$$\\begin{aligned}B(x)(1-2x+x^4)&=1+2x+4x^2+7x^3-2x-4x^2-8x^3=1-x^3\\\\B(x)&=\\frac{1-x^3}{1-2x+x^4}\\end{aligned}$$
If you do a power series expansion of this function, you will find that the coefficient of $x^n$ is $b_n$, as you can see [here](https://www.wolframalpha.com/input/?i=series+(1-x%5E3)%2F(1-2x%2Bx%5E4)). From here, we want to find $A(x)$, starting with the equation $a_n = b_n + \\sum_{k=0}^{n-1}b_kb_{n-1-k}$. I'll replace $n\	o n+1$, obtaining
$$a_{n+1}-b_{n+1}=\\sum_{k=0}^{n}b_kb_{n-k}=b_0b_n+b_1b_{n-1}+...+b_{n-1}b_1+b_nb_0$$
The sum on the right looks difficult to work with at first. However, it becomes much easier if we consider the square of a power series:
$$B(x)^2=(1+2x+4x^2+7x^3+...)(1+2x+4x^2+7x^3+...)$$
Here's the multiplication table for this product:
```
        1      2x     4x^2   7x^3   13x^4   ...
 1    | 1      2x     4x^2   7x^3   13x^4   ...
 2x   | 2x     4x^2   8x^3   14x^4  26x^5   ...
 4x^2 | 4x^2   8x^3   16x^4  28x^5  52x^6   ...
 7x^3 | 7x^3   14x^4  28x^5  49x^6  91x^7   ...
13x^4 | 13x^4  26x^5  52x^6  91x^7  169x^8  ...
...    ...    ...    ...    ...    ...     ...
```
There is one constant term, `1`, two linear terms, `2x + 2x = 4x`, three quadratic terms, `4x^2+ 4x^2 + 4x^2 = 12x^2`, four cubic terms, `7 x^3 + 8x^3 + 7x^3 + 8x^3 = 30x^3`, and so on. Therefore, $B(x)^2$ series expansion looks like $B(x)^2=1+4x+12x^2+30x^3+...$, with the $x^n$ term consisting of an $n+1$-long sum:
$$\\begin{aligned}B(x)^2&=...+\\left(b_0b_n+b_1b_{n-1}+...+b_{n-1}b_1+b_nb_0\\right)x^{n}+...\\\\&=...+\\left(\\sum_{k=0}^{n}b_kb_{n-k}\\right)x^n+...\\end{aligned}$$
Does this look familiar? This is just the sum in the $a_{n+1}$ equation! Therefore, if I take that equation, multiply both sides by $x^n$, and sum it, the result is
$$\\begin{aligned}\\left(\\sum_{k=0}^{n}b_kb_{n-k}\\right)x^n&=(a_{n+1}-b_{n+1})x^n\\\\B(x)^2&=\\left(a_1+a_2x+a_3x^2+...\\right)-\\left(b_1+b_2x+b_3x^2+...\\right)\\\\a_0-b_0+xB(x)^2&=\\left(a_0+a_1x+a_2x^2+...\\right)-\\left(b_0+b_1x+b_2x^2+...\\right)\\\\xB(x)^2&=A(x)-B(x)\\end{aligned}$$
since $a_0=b_0=1$. Substituting $B(x)$ and some simplification gives
$$A(x)=B(x)-xB(x)^2=\\frac{1+x+x^2}{(1-x-x^2-x^3)^2}$$
Once again, if you expand this function as a series, you should find that the coefficients of $x^n$ are exactly the same as $a_n$: [link](https://www.wolframalpha.com/input?i=series+%281%2Bx%2Bx%5E2%29%2F%281-x-x%5E2-x%5E3%29%5E2). 
</details>

---
Finally, the generating function can be used to derive a formula for $a_n$:
$$\\begin{aligned}a_n&=\\left(\\frac{14+16p+21p^2}{121}+\\frac{(3+6p+5p^2)n}{44}\\right)p^n\\\\&+\\left(\\frac{14+16q+21q^2}{121}+\\frac{(3+6q+5q^2)n}{44}\\right)q^n\\\\&+\\left(\\frac{14+16r+21r^2}{121}+\\frac{(3+6r+5r^2)n}{44}\\right)r^n\\end{aligned}$$
where $p,q,r$ are the roots of $x^3-x^2-x-1=0$. Two of these roots `q,r = -0.419... \xB1 0.606...` are complex, while the real root `p=1.839` is actually known as the [Tribonacci constant](https://mathworld.wolfram.com/TribonacciConstant.html).

<details>
<summary>Formula derivation details</summary>




I'll apply [partial fraction decomposition](https://en.wikipedia.org/wiki/Partial_fraction_decomposition) to the generating function $A(x)$. First, the denominator of $A(x)$ can be written as a product of its roots $\\alpha,\\beta,\\gamma$:
$$(1-x-x^2-x^3)^2=(x-\\alpha)^2(x-\\beta)^2(x-\\gamma)^2$$
Of the three roots $\\alpha,\\beta,\\gamma$ of $1-x-x^2-x^3$, only one (`0.54369`) is real, while the other two are complex (`-0.77184 \xB1 1.11514 i`) are complex, and none of them have short closed forms, so I'll leave them in symbolic ($\\alpha,\\beta,\\gamma$) form. I want to write $A(x)=\\frac{1+x+x^2}{(x-\\alpha)^2(x-\\beta)^2(x-\\gamma)^2}$ in the form
$$A(x)=\\frac{c_1}{x-\\alpha}+\\frac{c_2}{x-\\beta}+\\frac{c_3}{x-\\gamma}+\\frac{c_4}{(x-\\alpha)^2}+\\frac{c_5}{(x-\\beta)^2}+\\frac{c_6}{(x-\\gamma)^2}$$
where $c_1,...,c_6$ are constants. 

The easiest way to start is to multiply both sides by $(x-\\alpha)^2$. Then the equation becomes
$$\\frac{1+x+x^2}{(x-\\beta)^2(x-\\gamma)^2}=c_4+c_1(x-\\alpha)+(x-\\alpha)^2(...)$$
When I substitute $x=\\alpha$, all terms on the right except $c_4$ become zero, so
$$c_4=\\frac{1+\\alpha+\\alpha^2}{(\\alpha-\\beta)^2(\\alpha-\\gamma)^2}$$
If I differentiate both sides with respect to $x$. The left-hand side becomes, after a bunch of simplification,
$$\\frac{\	ext{d}}{\	ext{d}x}\\frac{1+x+x^2}{(x-\\beta)^2(x-\\gamma)^2}=\\frac{4x-2\\beta-2\\gamma-(\\beta x+\\gamma x+\\beta\\gamma)-2\\beta\\gamma x+3x^2+2x^3}{(x-\\beta)^3(x-\\gamma)^3}$$
while for the right hand side becomes $c_1+2(x-\\alpha)(...)+(x-\\alpha)^2\\frac{\	ext{d}}{\	ext{d}x}(...)$. Once again, if I substitute $x=\\alpha$, all terms on the right drop out except $c_1$, so
$$c_1=\\frac{4\\alpha-2\\beta-2\\gamma-(\\alpha\\beta+\\alpha\\gamma+\\beta\\gamma)-2\\alpha\\beta\\gamma+3\\alpha^2+2\\alpha^3}{(\\alpha-\\beta)^3(\\alpha-\\gamma)^3}$$
There are a few rules that can simplify these expressions:
1. Since $x^3+x^2+x-1=(x-\\alpha)(x-\\beta)(x-\\gamma)$, expanding the right-hand side and comparing coefficients tells us that $\\alpha+\\beta+\\gamma=-1,\\alpha\\beta+\\alpha\\gamma+\\beta\\gamma=1,\\alpha\\beta\\gamma=1$ ([Vieta's formulas](https://en.wikipedia.org/wiki/Vieta%27s_formulas)). This means that $-\\beta-\\gamma=1+\\alpha$ and $\\beta\\gamma=\\alpha^{-1}$.
2. $\\alpha$ is a root of (and therefore satisfies) $x^3+x^2+x-1=0$, so $\\alpha^3=1-\\alpha^2-\\alpha$, and dividing by $\\alpha$ gives $\\alpha^{-1}=1+\\alpha+\\alpha^2$.

The first rule allows us to convert expressions involving all three roots to ones involving only $\\alpha$. For instance, $(\\alpha-\\beta)(\\alpha-\\gamma)=\\alpha^2+(-\\beta-\\gamma)\\alpha+\\beta\\gamma=2\\alpha^2+\\alpha+\\alpha^{-1}$. Using this, we rewrite $c_1$ and $c_4$ entirely in terms of $\\alpha$:
$$c_1=\\frac{4\\alpha+2(1+\\alpha)-1-2+3\\alpha^2+2\\alpha^3}{(2\\alpha^2+\\alpha+\\alpha^{-1})^3},c_4=\\frac{1+\\alpha+\\alpha^2}{(2\\alpha^2+\\alpha+\\alpha^{-1})^2}$$
Next, the second rule allows us to repeatedly increase or decrease powers of $\\alpha$ in expressions until they consist purely of constant, $\\alpha$, and $\\alpha^2$ terms. For instance, the $\\alpha^{-1}$ in the denominators can be replaced by $1+\\alpha+\\alpha^2$, and simplified to obtain $2\\alpha^2+\\alpha+\\alpha^{-1}=3\\alpha^2+2\\alpha+1$. By repeatedly doing this, we can reduce $c_1$ and $c_4$ to have the form $A\\alpha^2+B\\alpha+C$. I'll speed things up by *assuming* that $c_1=A\\alpha^2+B\\alpha+C$, then forming equations to solve for $A,B,C$:
$$c_1=A\\alpha^2+B\\alpha+C=\\frac{6\\alpha-1+3\\alpha^2+2\\alpha^3}{(3\\alpha^2+2\\alpha+1)^3}$$
If I multiply the denominator over, expand everything, and systematically substitute away all powers above $\\alpha^2$, I'll eventually get
$$-1+24A+4B+36C+(-4+28A+32B-20C)\\alpha+(-1+56A-24B+4C)\\alpha^2=0$$
Setting all the coefficients to zero and solving gives $A=\\frac{29}{484},B=\\frac{13}{121},C=\\frac{27}{484}$, so $c_1$ can be written in the simpler form $c_1=\\frac{29\\alpha^2+52\\alpha+27}{484}$. A similar process proves that $c_4=\\frac{3\\alpha^2+6\\alpha+5}{44}$.
What about $c_2,c_3,c_5,c_6$? These actually require no extra effort, since all the reasoning thus far can be repeated verbatim, as long as $\\alpha$ is swapped out with $\\beta$ and $\\gamma$. As such, $c_2=\\frac{29\\beta^2+52\\beta+27}{484},c_3=\\frac{29\\gamma^2+52\\gamma+27}{484},c_5=\\frac{3\\beta^2+6\\beta+5}{44},c_6=\\frac{3\\gamma^2+6\\gamma+5}{44}$. With this, we have finally found all the constants for the partial fraction decomposition:
$$A(x)=\\frac{c_1}{x-\\alpha}+\\frac{c_2}{x-\\beta}+\\frac{c_3}{x-\\gamma}+\\frac{c_4}{(x-\\alpha)^2}+\\frac{c_5}{(x-\\beta)^2}+\\frac{c_6}{(x-\\gamma)^2}$$
Next, we need to actually find a formula for $a_n$. This is actually comparatively easy. The geometric sum and its derivative are
$$\\begin{aligned}\\frac1{1-x}&=\\sum_{n=0}^\\infty x^n=1+x+x^2+...\\\\\\frac1{(1-x)^2}&=\\sum_{n=0}^\\infty (n+1)x^n=1+2x+3x^2+...\\end{aligned}$$
Every single term of the partial fraction takes one of these two forms with a little rearrangement:
$$\\begin{aligned}\\frac{c_1}{x-\\alpha}=-\\frac{c_1}{\\alpha}\\frac{1}{1-\\alpha^{-1}x}&=\\sum_{n=0}^\\infty \\left(-c_1\\alpha^{-1}\\right)\\alpha^{-n}x^n\\\\\\frac{c_4}{(x-\\alpha)^2}=\\frac{c_4}{\\alpha^2}\\frac{1}{(1-\\alpha^{-1}x)^2}&=\\sum_{n=0}^\\infty \\left(c_4\\alpha^{-2}(n+1)\\right)\\alpha^{-n}x^n\\end{aligned}$$
Since $A(x)=\\sum_{n=0}^\\infty a_nx^n$, $a_n$ must be the sum of the coefficients of these series:
$$a_n=\\left(\\frac{(n+1)c_4}{\\alpha^2}-\\frac{c_1}{\\alpha}\\right)\\alpha^{-n}+\\left(\\frac{(n+1)c_5}{\\beta^2}-\\frac{c_2}{\\beta}\\right)\\beta^{-n}+\\left(\\frac{(n+1)c_6}{\\gamma^2}-\\frac{c_3}{\\gamma}\\right)\\gamma^{-n}$$
I'll do one last round of substitutions to clear this up, namely by substituting $p=\\frac1\\alpha,q=\\frac1\\beta,r=\\frac1\\gamma$. Then $p,q,r$ are actually the roots of $1-\\frac1{x}-\\left(\\frac1{x}\\right)^2-\\left(\\frac1{x}\\right)^3=0$, or $x^3-x^2-x-1=0$. By replacing the expressions for $c_1,...,c_6$ accordingly, I'll finally arrive at the formula shown at the start.
</details>

---
The complex numbers in the formula may look scary at first, but the formula can actually be used without them. Since the two complex roots have fairly small absolute values, $\\lvert q\\rvert=\\lvert r\\rvert=0.737$, their contributions remain well below one in magnitude for all $n$, and so they can be removed to produce an expression that is never wrong by more than half. Then, applying ```round``` to this expression will always give the right answer:
$$a_n=\	ext{round}\\left(\\left(\\frac{14+16p+21p^2}{121}+\\frac{(3+6p+5p^2)n}{44}\\right)p^n\\right)$$
You check for yourself that this expression always matches $a_n$ as long as you stay below the overflow limit (about `n=64` for signed 64-bit integers, and `n=29` for signed 32-bit integers):
```
round((0.9460419769376658+0.7034227129730944*n)*(1.8392867552141611**n))
```
This means the formula works, which is great news, but it can't be directly applied for this problem because of the overflow limit. Even a big integer library won't be much help, since
- The precision of the floats and the max size of the result's data type will both need to be extremely high for large $n$, which will really slow down the performance.
- The answer is returned mod $m$, so calculations affecting higher bits are quite wasteful, and you can't mod $m$ before every multiplication for floats.

The solution is to find three integer roots of $x^3-x^2-x-1\\equiv0$ mod $m$, and apply the formula mod $m$ using those three integer solutions. That way, we can constantly reduce intermediate calculations mod $m$, saving a ton of memory and time. Furthermore, most of the algebraic operations in the formula (addition, multiplication, integer exponentiation) carry over perfectly into the integers mod $m$. The only caveat is division, which only works for divisors relatively prime to $m$. Fortunately, since $m=10^9+7$ is prime, everything else is relatively prime to it, so both $121$ and $44$ have unique reciprocals mod $m$:
$$44\	imes204545456\\equiv121\	imes438016532\\equiv1\\mod m$$
Division by $44,121$ can thus be replaced with multiplication by their reciprocals.

<details>
<summary>Example where this works out when m=10^9+87</summary>

With a similar prime, $m=10^9+87$, as the reduction modulo, the three roots of $t^3-t^2-t-1=0$ are `733383694, 216065235, 353929937`. Reducing all the constants mod $m$ leaves this relatively "simple" (for a computer, anyway) formula for $a_n$ mod $m$:
$$\\begin{aligned}a_n&\\equiv(952116371 + 149097417 n) (733383694)^n \\\\&+ (185559960 + 87881789 n) (216065235)^n \\\\&+ (862323844 + 353929937 n) (50551159)^n \\mod m=10^9+87\\end{aligned}$$
By evaluating the exponents using repeated squaring and taking modulos at each step, this formula easily produces a $O(\\log n)$ time, constant space solution.

</details>

---
However, with the modulo $m=10^9+7$, the cubic only has one integer root `x=487086581`, and factorizes as $$0\\equiv x^3-x^2-x-1\\equiv(x - 487086581) (x^2 - 512913427 x - 757590373) \\mod m
$$The quadratic factor is irreducible, i.e. it has no roots mod $m$. Without three integer roots, no formula exists in terms of just integers mod $m$.

However, there is a way to wiggle out of this conundrum: by looking for a formula in terms of *pairs* of integers mod $m$. I'll define $A=512913427,B=757590373$, so that I can rewrite the quadratic factor more concisely as $x^2-Ax-B$. While $x^2 - A x - B=0$ has no solution in $\\mathbb{Z}_m$, the integers modulo $m$, we can extend $\\mathbb{Z}_m$ by adding a symbol $\\omega$, creating a new system of "extended integers modulo $m$" where each element is of the form $a+b\\omega$, with $a,b$ being normal integers modulo $m$. Furthermore, we will define $\\omega^2=A \\omega + B$, so that whenever two "extended integers modulo $m$" are multiplied together, we replace any instance of $\\omega^2$ with $A\\omega+B$.

This is similar to how the complex numbers can be obtained from the real numbers, by introducing a symbol $i$ such that all complex numbers take the form $a+bi$ for real $a,b$, and any multiplication occurs normally with any $i^2$ leftovers being replaced according to the definition $i^2=-1$.

In fact, this is a very standard thing in algebraic number theory. In their jargon, the real numbers and integers modulo $m$ are both *rings*, which are sets of elements that can add, subtract, and multiply (but might not necessarily divide) in the usual way. What I have done is known as an *extension* of the ring, and the resulting "extended integers modulo $m$" is denoted $\\mathbb Z_m[\\omega]$, or the ring $\\mathbb Z_m$ extended by the symbol $\\omega$. In the same way, the real numbers extended by $i$ gives the complex numbers: $\\mathbb R[i]=\\mathbb C$.

In this extended ring $\\mathbb Z_m[\\omega]$, the quadratic is guaranteed to have at least one root $\\omega$, but does it still have another root? Since the sum of the roots of the quadratic $x^2 - A x - B$ is $A$, the other root must be $A-\\omega$, which is well-defined, so the quadratic factorizes:
$$x^2 - A x - B\\equiv(x-\\omega)(x-(A-\\omega))\\mod m$$
Therefore, I can apply my formula in this extended ring to find $a_n$ mod $m$. Addition works as per normal, with us adding the "real" and "$\\omega$" components individually:
$$(a+b\\omega)+(c+d\\omega)=a+c+(b+d)\\omega$$
Multiplication is slightly more complicated, just as with complex numbers:
$$\\begin{aligned}(a+b\\omega)(c+d\\omega)&=ac+bc\\omega+ad\\omega+bd\\omega^2\\\\&=ac+bc\\omega+ad\\omega+bd(A\\omega+B)\\\\&=ac+Bbd+(Abd+bc+ad)\\omega\\end{aligned}$$
When this is implemented as a product of integer pairs in code, this is the formula I will use. Powers are done by repeated multiplication, and can be optimized to use $O(\\log n)$ time through repeated squaring as usual. I'll also precompute the various coefficients of the formula to save some time. Note that many of these coefficients will also end up as "extended integers", and will also need to be implemented as integer pairs. When all is said and done, the final formula for $a_n$ mod $m$ is
$$\\boxed{\\begin{aligned}a_n&\\equiv\\left((371152050+708852748\\omega)+(722453456+626467439\\omega)n\\right)(\\omega)^n\\\\&+\\left((41138816+291147259\\omega)+(514591996+373532568\\omega)n\\right)(A-\\omega)^n\\\\&+\\left(587709142+899318200n\\right)(487086581)^n\\mod m\\end{aligned}}$$
</details>

## Complexity
---
- Time complexity: $O(\\log n)$
Involves computing the nth powers of numbers mod $10^9+7$, so repeated squaring is required, which has logarithmic time complexity. Unfortunately, I couldn't figure out a way to use bit shifting or something to get constant time exponentiation, although it might not be impossible.

- Space complexity: $O(1)$
No arrays that grow in size or anything like that are needed, only temporary local variables are used, so memory usage is constant
## Code
---
```cpp []
typedef pair<int, int> intPair;

class Solution {
public:
    const int m=1000000007,
        A=512913427, // solves (x^2-A*x-B)*(x-p)=x^3-x^2-x-1 (mod m)
        B=757590373;
    const intPair p=make_pair(487086581,0), // p=487086581 solves (x^2-A*x-B)*(x-p)=x^3-x^2-x-1 (mod m)
        q=make_pair(0,1), // q=\u03C9 and r=A-\u03C9 solve x^2-A*x-B=(x-q)*(x-r) (mod m), where \u03C9^2=A*\u03C9+B
        r=make_pair(A,m-1);
    const int c00=587709142, // solves 121*c00=14+16*p+21*p^2 (mod m)
        c10=371152050, // solves 121*(c10+c11*\u03C9)=14+16*q+21*q^2 (mod m), where \u03C9^2=A*\u03C9+B
        c11=708852748, 
        c20=41138816, // solves 121*(c20+c21*\u03C9)=14+16*r+21*r^2 (mod m), where \u03C9^2=A*\u03C9+B
        c21=291147259;
    const long long d00=899318200, // solves 44*d00=3+6*p+5*p^2 (mod m)
        d10=722453456, // solves 44*(d10+d11*\u03C9)=3+6*q+5*q^2 (mod m), where \u03C9^2=A*\u03C9+B
        d11=626467439,
        d20=514591996, // solves 44*(d20+d21*\u03C9)=3+6*r+5*r^2 (mod m), where \u03C9^2=A*\u03C9+B
        d21=373532568;
    intPair prod(intPair a, intPair b){
        long long z0 = (long long)(get<0>(a)) * get<0>(b),
            z2 = ((long long)(get<1>(a)) * get<1>(b)) %m,
            z1 = ((long long)(get<0>(a)) + get<1>(a)) * (get<0>(b) + get<1>(b)) - z0 - z2;
        return make_pair(((z2*B) + z0 + m) % m, ((z2*A) + z1 + m) % m);
    }
    intPair pow(intPair a, int n){
        if(n==0){
            return make_pair(1,0);
        }else{
            if(n&1){ // odd
                return prod(a,pow(prod(a,a),(n-1)/2));
            }else{ // even
                return pow(prod(a,a),n/2);
            }
        }
    }
    int checkRecord(int n) {
        return (
            get<0>(prod(make_pair((c00 + d00*n) % m, 0), pow(p, n)))
            +get<0>(prod(make_pair((c10 + d10*n) % m, (c11 + d11*n) % m), pow(q, n)))
            +get<0>(prod(make_pair((c20 + d20*n) % m, (c21 + d21*n) % m), pow(r, n)))
        ) % m;
    }
};
```
```rust []
const m: i64 = 1000000007;
const A: i64 = 512913427; // solves (t^2-A*t-B)*(t-x)=t^3-t^2-t-1 (mod m)
const B: i64 = 757590373;

const x: (i64, i64) = (487086581, 0); // x=487086581 solves (t^2-A*t-B)*(t-x)=t^3-t^2-t-1 (mod m)
const y: (i64, i64) = (0, 1); // y=\u03B1 and z=A-\u03B1 solve t^2-A*t-B=(t-y)*(t-z) (mod m), where \u03B1^2=A*\u03B1+B
const z: (i64, i64) = (A, m - 1);

const c00: i64 = 587709142; // solves 121*c00=14+16*x+21*x^2 (mod m)
const c10: i64 = 371152050; // solves 121*(c10+c11*\u03B1)=14+16*y+21*y^2 (mod m), where \u03B1^2=A*\u03B1+B
const c11: i64 = 708852748; 
const c20: i64 = 41138816; // solves 121*(c20+c21*\u03B1)=14+16*z+21*z^2 (mod m), where \u03B1^2=A*\u03B1+B
const c21: i64 = 291147259;

const d00: i64 = 899318200; // solves 44*d00=3+6*x+5*x^2 (mod m)
const d10: i64 = 722453456; // solves 44*(d10+d11*\u03B1)=3+6*y+5*y^2 (mod m), where \u03B1^2=A*\u03B1+B
const d11: i64 = 626467439;
const d20: i64 = 514591996; // solves 44*(d20+d21*\u03B1)=3+6*z+5*z^2 (mod m), where \u03B1^2=A*\u03B1+B
const d21: i64 = 373532568;

impl Solution {
    pub fn prod(a: (i64, i64), b: (i64, i64)) -> (i64, i64) {
        let z0: i64 = a.0 * b.0;
        let z2: i64 = (a.1 * b.1) % m;
        let z1: i64 = (a.0 + a.1) * (b.0 + b.1) - z0 - z2;
        ((z2*B + z0 + m) % m, (z2*A + z1 + m) % m)
    }
    pub fn pow(a: (i64, i64), n: i32) -> (i64, i64){
        if n==0{
            (1, 0)
        }else if n&1 == 1{ // odd
            Self::prod(a, Self::pow(Self::prod(a, a), (n-1)/2))
        }else{
            Self::pow(Self::prod(a, a), n/2)
        }
    }
    pub fn check_record(n32: i32) -> i32 {
        let n64 = n32 as i64;
        (
            (Self::prod(((c00 + d00*n64) % m, 0), Self::pow(x, n32)).0
            + Self::prod(((c10 + d10*n64) % m, (c11 + d11*n64) % m), Self::pow(y, n32)).0
            + Self::prod(((c20 + d20*n64) % m, (c21 + d21*n64) % m), Self::pow(z, n32)).0)
        % m) as i32
    }
}
```