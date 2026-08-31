# Effective yet simple approach search using the number theory

**Author:** EricRovell
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-divisors/solutions/5634726/](https://leetcode.com/problems/three-divisors/solutions/5634726/)

---

# Intuition

The idea is straightforward, we need to count divisors and to check  how many of them we have. As simple as the approach may be, there is a lot of space for optimization.

# Approach

To count the number of divisors efficiently, we should use the fact that any composite number n may be divided into two factors like $n = a * b$, while the biggest factor possible is for perfect squares, where $n = a * a$.

It means that we should search for factors before the $\\sqrt{n}$. This way we will find not all factors, of course, but exactly half of them. Every divisor has a pair that is located after the $\\sqrt{n}$. We can easily calculate the pair divisor as $n /d$, where $d$ is the some factor.

For example, let $n = 14$:

$$\\sqrt{14} = 3.74$$

So, we search till 4:

- $14 / 1 = 14$ and $14 / 14 = 1$
- $14 / 2 = 7$ and $14 / 7 = 2$

Here we got two divisors (1 and 2) during the search before the $\\sqrt{14}$, and got another two (14 and 7) by division during the process.

But there is an edge case. Why do we search till **4**, not **3**, while $\\sqrt{14} = 3.74$? There are perfect squares. While all divisors have a pair, in this case the divisor is kinda like in the middle. The pair are twins. We have to account for that and not miss it:

For example, let $n = 16$:

$$\\sqrt{16} = 4$$

So, we search till 6 inclusively:

- $16 / 1 = 16$ and $16 / 16 = 1$
- $16 / 2 = 8$ and $16 / 8 = 2$
- $16 / 4 = 4$ and $16 / 4 = 4$

Here we can see, that the last divisor **4** has a twin pair. We should not count it twice.

Some primitive optimizations are to count the 1 and the number itself as the factors each number has, and do not do any extra work if there are more than 3 factors in the process.

# Complexity
- Time complexity: $O(\\sqrt(n))$, as we limit our search till the $\\sqrt(n)$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$, we do not use extra space, just a variable to count the number of divisors$

# Code
```
function isThree(n: number): boolean {
  const limit = Math.floor(n ** 0.5) + 1;
  // 1 and the number itself
  let count = 2;

  for (let i = 2; i < limit; i++) {
    if (n % i !== 0) {
      continue;
    }

    // perfect squares have a twin pair in the middle,
    // all others have two
    count += (n / i === i) ? 1 : 2;

    if (count > 3) {
      return false;
    }
  }

  return count === 3;
}

```