# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/solution/](https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/solution/)

---

[TOC]

## Solution

---

### Approach: Combinatorial Mathematics

#### Intuition

The problem requires us to construct an array of length $n$, where each number is in the range $[1, m]$, and exactly $k$ pairs of adjacent elements are the same. We need to find how many such arrays can be constructed.

In an array of length $n$, there are $n - 1$ pairs of adjacent elements. Among these, $k$ pairs must consist of equal adjacent elements, and the remaining $n - 1 - k$ pairs must consist of different adjacent elements. We can treat these $n - 1 - k$ differing adjacent positions as partitions, which divide the array into $n - k$ contiguous segments, where each segment contains identical values.

We can first choose the positions to insert these partitions and then assign values to each segment. Let's calculate the total number of such combinations step-by-step:

1. Among the $n - 1$ positions between array elements, we choose $n - 1 - k$ to place the partitions. This can be done in $\binom{n - 1}{k}$ ways (since $\binom{n - 1}{n - 1 - k} = \binom{n - 1}{k}$).
2. The first segment can take any of the $m$ values, since there are no restrictions on it.
3. Every subsequent segment (there are $n - k - 1$ such segments) must differ from the previous segment's value. So, each of them has $m - 1$ possible choices, giving a total of $(m - 1)^{n - k - 1}$ options.

By the multiplication principle, the total number of valid arrays is:

$$
m \times \binom{n - 1}{k} \times (m - 1)^{n - k - 1}
$$

To compute this efficiently, we use:
- the factorial-based formula for combinations: $\binom{a}{b} = \frac{a!}{b!(a - b)!}$,
- modular inverses for division under a modulus,
- and binary exponentiation for powers.

#### Implementation

<iframe src="https://leetcode.com/playground/fuW3GX5B/shared" frameBorder="0" width="100%" height="500" name="fuW3GX5B"></iframe>

#### Complexity analysis

Let $n$ be the maximum value up to which factorials are precomputed.

- Time complexity: $O(n)$.
  
  The overall time complexity is dominated by the preprocessing step, which computes factorials and inverse factorials up to size $n$ using iterative multiplication and modular inverses. This takes $O(n)$ time.

  In addition:
  - Computing the binomial coefficient $\binom{n - 1}{k}$ is done in constant time using the precomputed arrays: $O(1)$
  - Modular exponentiation $(m - 1)^{n - k - 1}$ is performed using binary exponentiation, which takes $O(\log(n - k))$ time.

  However, since the preprocessing step is $O(n)$, and $\log(n - k) \leq n$, the total time complexity remains $O(n)$.

- Space complexity: $O(n)$.
    
    Two arrays `fact` and `inv_fact` of size $n$ are maintained globally for factorials and their modular inverses.