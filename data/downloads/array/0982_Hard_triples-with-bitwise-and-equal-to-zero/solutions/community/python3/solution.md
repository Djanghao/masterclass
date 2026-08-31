# Python 3: Galaxy Brain: Walsh-Hadamard-Like Transform, O(max*log(max) + N) Time, O(max) Space

**Author:** BiggestChungus
**Votes:** 5
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4178241/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4178241/)

---

# Intro

I read [this solution](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/) by @basselbakr and was amazed, but also completely mystified by how it works.

A couple of sources have some insights, but were VERY dense and IMO could be explained much better. For example, they discuss FFTs (Fast Fourier Transforms) at length, and multiplying n-digit numbers. But then skip over most of the details of this problem. They are worth reviewing though after reviewing this solution:
* [Fast Fourier transforms and variations of it](https://csacademy.com/blog/fast-fourier-transform-and-variations-of-it)
* [Fast Walsh Hadamard Transforms and it's inner workings](https://codeforces.com/blog/entry/71899)

**NOTE:** Hadamard-Walsh transforms solve the `xor` version of this problem. Here we use something similar, but the matrix values are different because we want `and` instead of `xor`.

# Outline

Here's how the solution works at a high level:
1. we start by solving the problem for 1-bit numbers
2. knowing we have to solve the n-bit numbers case later, we look for a linear transform $T$ where $$ T(\\mathbf{c} \\$ \\mathbf{d}) = T\\mathbf{c} : T\\mathbf{d} $$ where $$ \\mathbf{c} \\$ \\mathbf{d} $$ is the solution with count vectors $\\mathbf{c}$ and $\\mathbf{d}$, and $:$ represents element-wise multiplication
3. We find a way to write the transform for $2^n$ entries recursively using $2^{n-1}$ entries
3. We use that recursive definition to compute the transform with divide-and-conquer in $O(M \\log(M))$ where $M$ is the max value
4. Then we use (2) to show that the solution to this problem where we want size $k$ tuples of indices is $$ T \\mathbf{c}$$ element-wise raised to the $k$ power
5. And finally we derive the inverse transform $T^{-1}$, which fortunately is a LOT easier once we've done 1-4.

# Intuition

Naively we can use a brute-force algorithm: iterate over all possible triples. $O(M^3)$.

If we're smarter, as other solutions are, we realize that `m & n & p == (m & n) & p`: we can replace _triples_ with _tuples_.
* get the frequency of each value
* get the frequency of all possible `m & n` values
* then for each value `p`, iterate over all `a == m & n` values where `m & n & p` is 0.

This is $O(M^2)$. Getting better.

But what if we could reduce the cost of getting all pairwise combinations down to $O(M \\log(M))$? Then
* we could do all pairs in $O(M \\log(M))$
* then combine all pairs with all singles to make triples, again in $O(M \\log(M))$
* and so on

# Approach

## One-Bit Solution: Pairs

Suppose we have a vector of counts $$\\mathbf{c}_2 = \\left[ \\begin{align} c_0 \\\\ c_1 \\end{align}\\right] $$. $$ \\mathbf{c}_2 $$ means we have counts for all 1 bit numbers, values $0$ and $1$. $$c_i$$ is the count of numbers with value $i$. Let $$\\mathbf{d}_2$$ be another vector of counts.

We represent the solution to "how many index pairs (i, j), where i is from $$\\mathbf{c}$$ and j is from $$\\mathbf{d}$$, have each possible bitwise `&` value?" as $$\\mathbf{c} \\$ \\mathbf{d}$$. Because answers are where the money is at.

For the 1-bit case the answer is pretty easy:
* to get a bitwise `&` of 0: any zero in $$\\mathbf{c}$$, and any number in $$\\mathbf{d}$$. Or a one in $$\\mathbf{c}$$ and a zero value from $$\\mathbf{d}$$.
  * $$c_0 d_0 + c_0 d_1 + c_1 d_0$$
* to get a bitwise `&` of 1: both numbers have to be 1
  * $$c_1 d_1$$

This gives us $$ \\mathbf{c}_2 = \\left[ \\begin{matrix} c_0 d_0 + c_0 d_1 + c_1 d_0 \\\\ c_1 d_1 \\end{matrix} \\right] $$

##  Linear Transform: Pairs

The above approach extends to n-bit numbers, but it involves $O(2^n)$ calculations to get the values in each row.

Instead, we look for a linear transform where we'll do the following:
* transform $$\\mathbf{c}$$ and $$\\mathbf{d}$$ with $T$
* do an element-wise product of $$T\\mathbf{c} : T\\mathbf{d}$$. This will give us the transformed answer, i.e. $$T(\\mathbf{c} \\$ \\mathbf{d})$$
* apply the inverse transform, $T^{-1}$, to get $$\\mathbf{c} \\$ \\mathbf{d}$$

So we let $$ T_2 = \\left[ \\begin{matrix} t_0 & t_1 \\\\ t_2 & t_3 \\end{matrix} \\right]$$ and solve for the entries so that $$ T_2(\\mathbf{c}_2 \\$ \\mathbf{d}_2) = T_2 \\mathbf{c}_2 : T_2 \\mathbf{d}_2 $$.

Writing this out gives us

$$ \\left[ \\begin{matrix} t_0 & t_1 \\\\ t_2 & t_3 \\end{matrix} \\right] \\, \\left[ \\begin{matrix} c_0 d_0 + c_0 d_1 + c_1 d_0 \\\\ c_1 d_1 \\end{matrix} \\right] = \\left[ \\begin{matrix} (t_0 c_0 + t_1 c_1) \\cdot (t_0 d_0 + t_1 c_1) \\\\ (t_2 c_0 + t_3 c_1) \\cdot (t_2 d_0 + t_3 c_1) \\end{matrix} \\right] $$

To review, the left is the transform of the solution, and the right is the element-wise product of transforms.

Now we compare the coefficients of the powers for $$ c_i d_j $$ combinations, which have to match so the solution works for all possible counts. The algebra is tedious, but you can trust me when I saw you can solve the equations to get the following:
* each $t_i$ is 0 or 1
* if $t_0$ is 1, then $t_1$ cannot be 0, same for $t_2$ and $t_3$, respectively

This means that both rows of $$T_2$$ have to be one of the following:
* $$\\left[ 0, 0 \\right]$$
* $$\\left[ 1, 1 \\right]$$
* $$\\left[ 0, 1 \\right]$$

Finally, we realize that our plan above is to apply $T^{-1}$ at the end. This means we need $T$ to be full rank. Therefore we can't have $$\\left[ 0, 0 \\right]$$ as a row, and the columns must be linearly independent.

So we discover that $$T$$ must either be $$\\left[ \\begin{matrix} 1 & 1 \\\\ 0 & 1 \\end{matrix} \\right]$$ or $$\\left[ \\begin{matrix} 0 & 1 \\\\ 1 & 1 \\end{matrix} \\right]$$. It turns out that both work; the right one is the row flipped version of the left. They both work because we need leftSide = rightSide in the equation, but the order of the rows doesn't matter. So from that two-fold degree of freedom arises a size-2 family of $T_2$ matrices that both work. I suspect a situation with three rows would give 3!=6 different $T_3$ matrices.

Anyway, we'll use the one on the left because it's more intuitive in the next section.

## Finding the Transform for 2-bit Numbers from  the 1-bit Transform

Now we enter the most complicated part of the problem, but I'll do my best.

We now want to solve the problem for 2-bit numbers, 0..3. The goal is to write the solution in terms of the 1-bit numbers. This will show a recursive pattern where the solution for n-bit numbers depends on the the solutions for n-1-bit numbers.

For 2-bit numbers we have counts $$\\mathbf{c}_4 = \\left[ \\begin{matrix} c_{00} \\\\ c_{01} \\\\ c_{10} \\\\ c_{11} \\end{matrix} \\right]$$. Same with $$\\mathbf{d}_4$$. I've written the subscripts in binary.

To simplify this, notice that we have two copies of the 1-bit subproblem:
1. the top two entries, 0 and 1, where the new second bit is 0
2. the bottom two entries, 0 and 1, where the new second bit is 1

So I'll rewrite it using the new vectors $$ \\mathbf{c}_2^0 = \\left[ \\begin{matrix} c_{00} \\\\ c_{01} \\end{matrix} \\right]$$ and $$ \\mathbf{c}_2^1 = \\left[ \\begin{matrix} c_{10} \\\\ c_{11} \\end{matrix} \\right]$$. Now we get $$\\mathbf{c}_4$$ in the new notation: $$\\left[ \\begin{matrix} \\mathbf{c}_2^0 \\\\ \\mathbf{c}_2^1 \\end{matrix} \\right]$$.

This temporarily makes it more complicated. But it also lets us see that the result is this: $$\\mathbf{c}_4 \\$ \\mathbf{d}_4 = \\left[ \\begin{matrix} \\mathbf{c}_2^0 \\$\\mathbf{d}_2^0 + \\mathbf{c}_2^1 \\$\\mathbf{d}_2^0 + \\mathbf{c}_2^0 \\$\\mathbf{d}_2^1 \\\\ \\mathbf{c}_2^1 \\$\\mathbf{d}_2^1 \\end{matrix} \\right]$$. The terms in the top row are all combinations that give us a 0 in the 2s digit of the `&` result, and the bottom row is the only combination that gives us a 1 in the 2s digit of the `&` result. **This is the same pattern as before for the 1-bit number**.

Here's the transformed version:

$$ T_4(\\mathbf{c}_4 \\$ \\mathbf{d}_4) = \\left[ \\begin{matrix} t_0 (T_2 \\mathbf{c}_2^0 : T_2 \\mathbf{d}_2^0 + T_2 \\mathbf{c}_2^1 : T_2 \\mathbf{d}_2^0 + T_2 \\mathbf{c}_2^0 : T_2 \\mathbf{d}_2^1) + t_1 (T_2 \\mathbf{c}_2^1 : T_2 \\mathbf{d}_2^1) \\\\ t_2 (T_2 \\mathbf{c}_2^0 : T_2 \\mathbf{d}_2^0 + T_2 \\mathbf{c}_2^1 : T_2 \\mathbf{d}_2^0 + T_2 \\mathbf{c}_2^0 : T_2 \\mathbf{d}_2^1) + t_3 (T_2 \\mathbf{c}_2^1 : T_2 \\mathbf{d}_2^1) \\end{matrix} \\right] = T_4 \\mathbf{c}_4 : T_4 \\mathbf{d}_4 = \\left[ \\begin{matrix} (t_0 T_2 \\mathbf{c}_2^0 + t_1 T_2 \\mathbf{c}_2^1) : (t_0 T_2 \\mathbf{d}_2^0 + t_1 T_2 \\mathbf{d}_2^1) \\\\ (t_2 T_2 \\mathbf{c}_2^0 + t_3 T_2 \\mathbf{c}_2^1) : (t_2 T_2 \\mathbf{d}_2^0 + t_3 T_2 \\mathbf{d}_2^1) \\end{matrix}\\right]$$ 

What we've done is rewrite the 2-bit solution in terms of the 1-bit solutions. I know this looks absolutely horrifying. But it's a detailed way to show you that this is the same pattern as the 1-bit solution:
* before we had $c_i$ and $d_i$, now we have $T_2 \\mathbf{c}_2^i$ and $T_2 \\mathbf{d}_2^i$
* after comparing by parts, the $t_0 \\, ... \\, t_3$ have the same relationships and therefore the the same $t_0 = t_1 = t_3 = 1$ and $t_2 = 0$ values.

Finally, plugging in the $t_i$ values shows us that
$$ T_4 \\mathbf{c}_4 = \\left[ \\begin{matrix} t_0 T_2 \\mathbf{c}_2^0 + t_1 T_2 \\mathbf{c}_2^1 \\\\ t_2 T_2 \\mathbf{c}_2^0 + t_3 T_2 \\mathbf{c}_2^1 \\end{matrix}\\right] = \\left[ \\begin{matrix} T_2 \\mathbf{c}_2^0 + T_2 \\mathbf{c}_2^1 \\\\ T_2 \\mathbf{c}_2^1 \\end{matrix}\\right]$$
and thus
$$T_4 = \\left[ \\begin{matrix} T_2 & T_2 \\\\ 0 & T_2 \\end{matrix} \\right] \\equiv T_2 \\otimes \\left[ \\begin{matrix} 1 & 1 \\\\ 0 & 1 \\end{matrix} \\right]$$

So the pattern for the 2-bit transform is
* get the transform of the 1-bit problems, the first half and the second half
* add the second half's trasnform to the first half

## Recursion: Finding the n-bit Transform

For the 1-bit transform, we added the second half of the 2-entry vector, $c_1$, to the first half.

For the 2-bit transform, we added the second half of the transformed 4-entry vector, $\\mathbf{c}_2^1$, to the first half

For each next bit we follow the pattern; you can derive it above for each level by by replacing the _4/_2 with _8/_4, _16/_8, etc. Take the transform of the two halves, and add the second half to the first half.

The pattern in the $T$ matrices is $$ T_{2N} = \\left[ \\begin{matrix} T_N & T_N \\\\ 0 & T_N \\end{matrix} \\right]$$

**NOTE:** this is similar to the Walsh-Hadamard transform. Same concept of a recursively defined matrix. Just different values. This solves `&` combinations, while Walsh-Hadamard solves `^` combinations.

## Algorithm for n-bit Transform in O(n*log(n))

The pseudocode is actually in the prior section already! The transform for $T_N$ needs the transform of the first $N/2$ and second $N/2$ with $T_{N/2}$. That in turn needs transforms of groups of $N/4$ elements with $T_{N/4}$, and so on. So we
* first apply T_2 to pairs of elements
* then in groups of 4, add the now-transformed second half to the first half. This applies $T_4$ to each group of 4
* repeat in groups of 8 for $T_8$, then 16 for $T_{16}$, and so on

Each group size is a scan over all N elements. We do a scan for group sizes 2, 4, 8, etc. which is log(N) scans. So $O(N \\log(N))$ total!

**Note:** this is basically the derivation of the fast Walsh-Hadamard transform, just for a matrix with slightly different entries.

## (Transformed) Solutions for Pairs and Triples

Let the number of pairs with each `&` result be $$\\mathbf{p}$$. Then $$T \\mathbf{p} = T (\\mathbf{c} \\$ \\mathbf{c}) = T\\mathbf{c} : T\\mathbf{c}$$.

For triples, we can find the number of combinations of pairs and singles with each `&` result. Let's call that $$\\mathbf{t}$$. Same situation as before:
$$ T \\mathbf{t} = T(\\mathbf{p} \\$ \\mathbf{c}) = T \\mathbf{p} : T \\mathbf{c} = T \\mathbf{c} : T \\mathbf{c} : T \\mathbf{c}$$

If you keep going for quadruplets, quintuplets, etc. you find that the number of groups of `k` indices for each bitwise `&` is $$T \\mathbf{c}$$ raised element-wise to the power of `k`!

## The Final Step: Inverse Transform

The last part is to be able to do the invese transform: we need $\\mathbf{t}$, not $T \\mathbf{t}$ from the prior section.

Fortunately it's much easier to derive the inverse transform than the forward one.

From the formula for 2x2 matrix inverses, $$T_2^{-1} = \\left[ \\begin{matrix} 1 & -1 \\\\ 0 &1 \\end{matrix} \\right]$$.

For $$T_4 = \\left[ \\begin{matrix} T_2 & T_2 \\\\ 0 & T_2 \\end{matrix} \\right]$$, the matrix inverse is $$T_4^{-1} = \\left[ \\begin{matrix} T_2^{-1} & -T_2^{-1} \\\\ 0 & T_2^{-1} \\end{matrix} \\right]$$.

For $T_{2N}$, the pattern continues: $$T_{2N}^{-1} = \\left[ \\begin{matrix} T_{N}^{-1} & -T_{N}^{-1} \\\\ 0 & T_{N}^{-1} \\end{matrix} \\right]$$

If you look closely at the prior line, this is _almost_ exactly the same thing as the forward transform. There's just a minus sign instead of a plus sign in the upper-right entry. So the fast inverse Walsh-Hadamard-like transform _subtracts_ the second half instead of _adding_ it. Exactly the same idea and approach.

## Putting it All Together

To recap:
1. for pairs: we found a transform $T$ such that the transform of the answer is the element-wise product of the transforms. This reduces the complexity from $O(n^2)$ to $O(n \\log(n))$ if we can transform in $O(n \\log(n))$
2. then we derived the transform for all problem sizes and how to actually compute it in $O(n \\log(n))$
3. next, we derived that we can compute the number of triples, quaruplets, etc. with just one transform and an element-wise power
4. finally, we derived the inverse transform so we can convert the transformed answers to actual answers

Overall we can now get the number of $k$-tuples of indices in $O(M \\log(M) + N)$ time and just $O(M)$ space. $M$ is the max value; our count vector has to be the next power of 2 in length for the recursive transform to work.

As a bonus, this is among the highest-complexity-to-code-length ratios of anything I've written. Neat.

## Final Thoughts

Walsh-Hadamard transforms, the transform used here, and others are all part of a conceptual family: recursively defined discrete transforms. Walsh-Hadamard is the most famous for transforms related to binary operations.

But there's an even more famous transform that can be defined recursively like this: the discrete Fourier transform. When you use the recursive definition to write a divide-and-conquer algorithm, you get the famous Fast Fourier Transform algorithm.

This is why other explanations of this approach start with explaining FFT. But IMO it's not needed here, and the recusrsive structure of DFT is different enough that I don't think it really helps you understand this one if you haven't seen it before. Deriving FFT is indeed really cool though.

Lastly, the links I included at the beginning show how this general approach can solve related combinatorics problems with bitwise operations.

# Complexity
- Time complexity: $O(M \\log(M) + N)$, where $M$ is the max value and $N$ is the number of values. The count vectors to transform have to be the next power of 2 after the max value because the transform only works with powers of two length.

- Space complexity: $O(M)$ for the count vector, transformed in place.

# Code
```
class Solution:
    def countTriplets(self, nums: List[int]) -> int:
        # brute force: nope
        
        # better: make a vector with the ways to make all 2**16 possible AND values,
        # in O(n**2). Then for each number, iterate through all 2**16 AND values and
        # sum up all entries where counts[a] | a&n == 0
        #   Speed up: use the brilliant "masked decrement."
        #      let y = ~n & ((1<<16)-1), i.e. 1s everywhere n has zeros. The most ones possible.
        #      then do y = (y-1) & ~n until y is 0. Each subtracts one from the LSB of ~n.
        #      It basically counts down from 11111...11_2 down to 0000...000_2, but where the 1s
        #      are where they are in ~n. It's brilliant. This cuts down on the number of combinations
        #      significantly.

        # The galaxy brain solution: a modified Walsh-Hadamard transformation.

        def transform(c: list[int], forward: bool) -> None:
            """
            Applies the linear transformation T to c in-place.

            T has the property T*(c $ d) == T*c : T*d where
               c and d are vectors of counts
               c $ d is the answer: (c$d)[a] is the number of index pairs
                   (i, j) where i is in c, j is in d, and i & j == a

            T is recursively defined:

            T_2 = [1 1]
                  [0 1]

            T_{2N} = T_N x T_2; where x is the direct product
                   = [T_N  T_N]
                     [ 0   T_N]

            @param forward: if True, applies T to c in place.
                            if False, applies inverse(T) to c in place.
            """

            # exploits the recursive definition of 
            # T_{2N} = [T_N*firstN + T_N*nextN; T_N*nextN]
            # to compute it with divide-and-conquer. Conceptually it's
            # recursive, but in this case it simplifies to an
            # iterative algorithm since T_4 depends on pairs,
            # T_8 depends on groups of 4, and so on.

            h = 1 # half current group size
            sign = +1 if forward else -1
            while h < len(c):
                for s in range(0, len(c), 2*h): # start of each group
                    for i in range(s, s+h):
                        c[i] += sign*c[i+h]

                h *= 2

        most = max(nums)
        if most == 0:
            return len(nums)**3

        bits = ceil(log2(most)) + 1

        N = (1 << bits) # number of possible & results (must be a power of 2)
        ALL = N-1 # bit mask

        c = [0] * N # counts of each value
        for n in nums:
            c[n] += 1

        transform(c, forward=True)
        for i in range(N):
            c[i] **= 3
        transform(c, forward=False)

        return c[0]
```