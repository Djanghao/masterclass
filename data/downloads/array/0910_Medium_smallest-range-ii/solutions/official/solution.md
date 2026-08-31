# Official Solution

**Link:** [https://leetcode.com/problems/smallest-range-ii/solution/](https://leetcode.com/problems/smallest-range-ii/solution/)

---

[TOC]

## Solution
---
### Approach 1: Linear Scan

**Intuition**

As in *Smallest Range I*, smaller `A[i]` will choose to increase their value ("go up"), and bigger `A[i]` will decrease their value ("go down").

**Algorithm**

We can formalize the above concept: if `A[i] < A[j]`, we don't need to consider when `A[i]` goes down while `A[j]` goes up.  This is because the interval `(A[i] + K, A[j] - K)` is a subset of `(A[i] - K, A[j] + K)` (here, `(a, b)` for `a > b` denotes `(b, a)` instead.)

That means that it is never worse to choose `(up, down)` instead of `(down, up)`.  We can prove this claim that one interval is a subset of another, by showing both `A[i] + K` and `A[j] - K` are between `A[i] - K` and `A[j] + K`.

For sorted `A`, say `A[i]` is the largest `i` that goes up.  Then `A[0] + K, A[i] + K, A[i+1] - K, A[A.length - 1] - K` are the only relevant values for calculating the answer: every other value is between one of these extremal values.

<iframe src="https://leetcode.com/playground/UEJwgpbZ/shared" frameBorder="0" width="100%" height="310" name="UEJwgpbZ"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$, where $$N$$ is the length of the `A`.

* Space complexity : $$\mathcal{O}(N)$$ or $$\mathcal{O}(\log{N})$$

  - The space complexity of the sorting algorithm depends on the implementation of each program language.

  - For instance, the `list.sort()` function in Python is implemented with the [Timsort](https://en.wikipedia.org/wiki/Timsort) algorithm whose space complexity is $$\mathcal{O}(N)$$.

  - In Java, the [Arrays.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-byte:A-) is implemented as a variant of quicksort algorithm whose space complexity is $$\mathcal{O}(\log{N})$$.


---