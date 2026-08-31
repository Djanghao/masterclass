# DP and Combinatorics | Fastest | O(log2(R)) | Complete math explanation

**Author:** wallandteen
**Votes:** 5
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3143037/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3143037/)

---

Dont forget to upvote if you like the content below. \uD83D\uDE43

# TL;DR
Take as an example the range `[6, 10]`.
1. Examine the most significant bit of the binary representation of $$10$$: `1010`.
2. For numbers less than `1000` (i.e., 8 in decimal), i.e., in the range of `[0, 111]`, we can fill the $$3$$ bits with $$3$$ or $$2$$ ones. So, the count in this range is $$\\binom{3}{3}+\\binom{3}{2} = 4$$, where $$\\binom{n}{k}$$ denotes the binomial coefficient, i.e., $$\\frac{n!}{k!(n - k)!}$$.
3. Move to the next $$1$$ and count the numbers in the range `[1000, 1010]`. We can fill the $$1$$ bit with $$1$$ one (because we already "set" $$1$$ at the beginning, making the total number of ones $$2$$, and $$2$$ is prime). Thus, the count is $$\\binom{1}{1} = 1$$.
4. Add the counts from steps 2 and 3 to find the total count of numbers with prime set bits between `0` and `10` exclusively: $$\\binom{3}{3}+\\binom{3}{2} + \\binom{1}{1} = 5$$.
5. Check is the original number has prime bits set *(yes, it does)*, and include it also. Now the **desired number** for the range `[0, 10]` is $$5 + 1 = 6$$.
5. Doing the same thing for `[0, 5]` we'll get $$2$$.
6. Finally, to find the count of numbers with prime set bits in the range `[6, 10]`, subtract the count for `[0, 5]` from the count for `[0, 10]`: $$6 - 2 = 4$$.



# Readme
In the next section, I will provide a more comprehensive explanation of the thoughts behind the solution, including the mathematical reasoning and logic. If you notice any mistakes or would like to suggest improvements, please let me know in the comments. 

# Intuition

The goal of this task is to count the number of integers in the range `[left, right]` with a prime number of set bits in their binary representation. Instead of iterating through all integers in the range and checking the set bits one by one, we can use combinatorics and dynamic programming to solve this problem more efficiently.

To do this, we'll calculate the amount of desired numbers from 0 to `right` inclusively and from 0 to `left` exclusively, and then subtract the latter from the former.

## Mathematical Explanation

Let's gather some facts.

If we had a function $$f(x)$$ for $$x \\in \\mathbb{N}$$ which calculates the amount of desired numbers from $$0$$ to $$x$$ inclusively, then a count of these numbers in range $$[a,b]$$ for $$a \\in \\mathbb{N}$$, and $$b \\in \\mathbb{N}$$, and $$b \\ge a$$ would be $$f(b) - f(a - 1)$$, that's pretty clear.

We may notice that for numbers like $$10..0$$ having $$n$$ zeroes after the first $$1$$ the answer is just a sum of amounts of opportunities to put prime amounts of $$1$$ in $$n$$ places. These numbers are just powers of $$2$$, and this amount of opportunities is $$nCk$$, or $$\\binom{n}{k}$$ *(binomial coefficient)*, and $$\\binom{n}{k} = \\frac{n!}{k! * (n - k)!}$$, where $$n \\in \\mathbb{N}$$, in our case, is the number of places to put $$1$$ and $$k \\in \\mathbb{N}$$ is the amount of $$1$$ we are trying to put in them, and $$n \\ge k \\ge 0$$. This is because the numer itself is definetely doesn't count because it has only 1 *(not prime)* bit set, and with these $$nCk$$ we will check all numbers less than this one.

We can not use $$nCk$$ as is because in our case $$k$$ could possible be greater than $$n$$, so let's define a simple function $$c(n, k)$$ that calculates the binomial coefficient when $$n \\ge k$$ and returns 0 otherwise:
 $$c(n, k) = \\begin{cases}0,&\	ext{if } n < k\\\\\\binom{n}{k}, &\	ext{otherwise} \\end{cases}$$

But we also want these $$k$$ to be only primes ($$k \\in \\mathbb{P}$$). So let's assume we had a prime-checking function:
 $$p(x) = \\begin{cases}1,&\	ext{if } x \\in \\mathbb{P}\\\\0, &\	ext{otherwise} \\end{cases}$$
So we say that $$f(2^n) = \\Sigma_{k=0}^n (p(k) * c(n, k))$$

Congratulations, now we're able to calculate the amount of numbers containing prime amount of set bits in their binary representation from $$0$$ to $$2^n$$. \uD83E\uDD73

But what about numbers which are not powers of 2? Well, the good news are, as we all know, all numbers are just sums of different powers of 2! Does that mean that we can just decompose any number into it's sum of powers of 2 and sum all values of $$f$$ on them? No, unfortunately, not that easy.
 
Consider a number, for example, $$10100$$. It's obvious that we can not just do $$f(2^4) + f(2^2)$$, because $$f(2^4)$$ already counted all values from $$f(2^2)$$... Wait, was all of that a way to nowhere then?.. No! But we must to make our function a little bit more complex. For the second iteration the amount of $$1$$ to put will be 1 less because we already put one in our number and we can not to avoid of counting it. Now we say that $$f(2^n, x)=\\sum_{k=0}^n (p(k) * c(n, k - x))$$ for $$x \\in \\mathbb{N}$$, which is a number of already set bits, and $$n \\in \\mathbb{N}$$.

Ooof... Maybe now it's all done and we can solve it with that sum of values of $$f$$ by our degrees?.. Well, almost. Don't forget to check the number itself if it has prime set bits. \uD83C\uDF1A

Finally, to find the number of desired numbers in the range $$[left, right]$$, apply the above steps for $$right$$ and $$left - 1$$, and then subtract the latter from the former:

$$f(right) - f(left - 1)$$

That's it! This is the complete mathematical explanation of the problem and its solution. Using this approach, we can efficiently count the number of integers with a prime number of set bits in their binary representation for the given range.

# Implementation

Let's break down the code into its main components and explain the logic behind each part.

## Helper Functions

### nChooseK

This function calculates the binomial coefficient $$C(n, k)$$, which is used to find the number of ways to choose $$k$$ items from a set of $$n$$ items. The function uses memoization to store previously computed values in a 2D array `nChooseKCache` to avoid redundant calculations.

The function also uses the property $$C(n, k) = C(n, n - k)$$ to reduce the number of calculations needed.

### isPrime

This function checks if a given number is a prime number by comparing it against the precomputed list of prime numbers `primes`.

### primeBitNumbersCount

This function calculates the number of integers with a prime number of set bits in their binary representation between $$0$$ and a given number `number` (inclusive).

1. The function calculates the length of the binary representation of the given number (ignoring the most significant bit, which is always $$1$$) using the formula: $$length = \\lfloor \\log_2(number) \\rfloor$$
2. It initializes a `pointer` variable as a power of $$2$$ equal to the length of the binary representation of the given number.
3. It iterates through the bits of the given number using a while loop. If the current bit is set ($$1$$), it calculates the number of desired numbers for the remaining bits using the `nChooseK` function and adds the result to the `primeBitsNumbersCount` variable. It then increments the `setBitsCount` variable.
4. After iterating through all bits, the function checks if the total number of set bits is prime. If it is, it increments the `primeBitsNumbersCount`.

## countPrimeSetBits

This is the main function of the solution. It calculates the number of integers with a prime number of set bits in their binary representation in the range $$[left, right]$$ by invoking the `primeBitNumbersCount` function for `right` and `left - 1`, and then subtracting the latter from the former.

# Complexity
- Time complexity of the given code is $$O(log\xB2(right) * P)$$, where $$P$$ is the number of prime numbers used in the algorithm. In this specific case, $$P = 11$$, as there are $$11$$ prime numbers in the primes array.
    - The `countPrimeSetBits` function calls `primeBitNumbersCount` twice.
    - The `primeBitNumbersCount` function has a while loop that iterates $$log\u2082(right)$$ times in the worst case, as the position variable starts at $$31$$ and decrements in each iteration until it reaches $$0$$. In each iteration, the function calls `primeBitNumbersCount(position - 1, bitsSet)` method, which has an inner loop that iterates over all the prime numbers in the primes array, i.e., $$P$$ times.
    - As a result, the time complexity is $$O(log\xB2(right) * P)$$.
- Space complexity of the code is $$O(1)$$, because the only significant data structures used are the primes array and cache, which have a constant size.


# Code
```java
class Solution {

    private final int[] primes = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31};
    private final int[][] nChooseKCache = new int[32][32];

    private int nChooseK(int n, int k) {
        if (n < 0 || k < 0) {
            return 0;
        }
        k = Math.min(k, n - k); // C(n, k) = C(n, n - k)
        if (k == 0 || k == n) {
            return 1;
        }
        if (nChooseKCache[n][k] != 0) {
            return nChooseKCache[n][k];
        }
        nChooseKCache[n][k] = nChooseK(n - 1, k - 1) + nChooseK(n - 1, k);
        return nChooseKCache[n][k];
    }

    private boolean isPrime(int number) {
        int i = 0;
        while (primes[i] < number) {
            i++;
        }
        return primes[i] == number;
    }

    private int primeBitNumbersCount(int number) {
        int length = (int) (Math.log(number) / Math.log(2));
        int pointer = 1 << length;
        int setBitsCount = 0;
        int primeBitsNumbersCount = 0;

        while (pointer != 0) {
            if ((number & pointer) > 0) {
                for (int i = 0; i < primes.length && primes[i] - setBitsCount <= length; i++) {
                    primeBitsNumbersCount += nChooseK(length, primes[i] - setBitsCount);
                }
                setBitsCount++;
            }
            pointer >>>= 1;
            length--;
        }

        if (isPrime(setBitsCount)) {
            primeBitsNumbersCount++;
        }

        return primeBitsNumbersCount;
    }

    public int countPrimeSetBits(int left, int right) {
        return primeBitNumbersCount(right) - primeBitNumbersCount(left - 1);
    }
}
```
